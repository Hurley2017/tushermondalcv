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
    const list = await kv.lrange('visits', 0, 199)
    const total = await kv.get('visits:count')
    res.json({
      total: total ?? null,
      visits: (Array.isArray(list) ? list : [])
        .map((v) => {
          try {
            return JSON.parse(v)
          } catch {
            return null
          }
        })
        .filter(Boolean),
    })
  } catch (err) {
    res.status(500).json({ error: 'KV read failed', detail: err.message })
  }
}