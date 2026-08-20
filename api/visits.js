// GET /api/visits?key=<ADMIN_TOKEN> — returns the stored visit logs.
// Guarded by the ADMIN_TOKEN env var so IPs are never exposed publicly.
import { createClient } from '@vercel/kv'

function envValue(...names) {
  for (const n of names) if (process.env[n]) return process.env[n]
  return undefined
}

export default async function handler(req, res) {
  const url = envValue('KV_REST_API_URL', 'UPSTASH_REDIS_REST_URL')
  const token = envValue('KV_REST_API_READ_ONLY_TOKEN', 'KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN')
  const adminToken = envValue('ADMIN_TOKEN')

  if (!url || !token) {
    return res.status(503).json({ error: 'KV not configured' })
  }
  if (!adminToken) {
    return res
      .status(503)
      .json({ error: 'ADMIN_TOKEN env var not set — add it in Vercel project settings' })
  }
  if (req.query.key !== adminToken) {
    return res.status(401).json({ error: 'unauthorized' })
  }

  const kv = createClient({ url, token })
  try {
    const [list, total, unique, sessions] = await Promise.all([
      kv.lrange('visits', 0, -1),
      kv.get('visits:count'),
      kv.scard('visitors'),
      kv.lrange('sessions', 0, -1),
    ])

    // Tolerant parse: some older entries may be wrapped in extra quotes.
    let parseFailures = 0
    const visits = (Array.isArray(list) ? list : [])
      .map((v) => {
        try {
          return JSON.parse(v)
        } catch {
          try {
            return JSON.parse(v.replace(/^"|"$/g, '').replace(/\\"/g, '"'))
          } catch {
            parseFailures++
            return null
          }
        }
      })
      .filter(Boolean)

    // Average time on page from the sessions list.
    let avgDurationMs = null
    if (Array.isArray(sessions) && sessions.length) {
      let sum = 0
      let n = 0
      for (const s of sessions) {
        try {
          const rec = JSON.parse(s)
          if (rec && typeof rec.durationMs === 'number') {
            sum += rec.durationMs
            n++
          }
        } catch {
          /* skip */
        }
      }
      if (n > 0) avgDurationMs = Math.round(sum / n)
    }

    res.json({
      total: total ?? null,
      unique: unique ?? null,
      avgDurationMs,
      listLength: Array.isArray(list) ? list.length : 0,
      parseFailures,
      visits,
    })
  } catch (err) {
    res.status(500).json({ error: 'KV read failed', detail: err.message })
  }
}