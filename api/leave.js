// POST /api/leave — called via sendBeacon when a visitor leaves the page.
// Stores a session record (time-on-page + max scroll depth) using @vercel/kv.
import { createClient } from '@vercel/kv'

const MAX_SESSIONS = 2000

function envValue(...names) {
  for (const n of names) if (process.env[n]) return process.env[n]
  return undefined
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' })
  }

  const url = envValue('KV_REST_API_URL', 'UPSTASH_REDIS_REST_URL')
  const token = envValue('KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN')
  if (!url || !token) {
    return res.status(503).json({ error: 'KV not configured' })
  }
  const kv = createClient({ url, token })

  let body = {}
  try {
    body = req.body || {}
  } catch {
    body = {}
  }

  const rec = {
    ts: new Date().toISOString(),
    ip:
      (req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || '')
        .split(',')[0]
        .trim() || null,
    url: body.url || null,
    visitorId: body.visitorId || null,
    durationMs: body.durationMs ?? null,
    maxScrollPct: body.maxScrollPct ?? null,
  }

  try {
    await kv.lpush('sessions', JSON.stringify(rec))
    await kv.ltrim('sessions', 0, MAX_SESSIONS - 1)
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'KV write failed', detail: err.message })
  }
}
