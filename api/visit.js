// POST /api/visit — called (via sendBeacon) once per page view.
// Stores a visit record using the official @vercel/kv client, which reads the
// Vercel KV env vars (KV_REST_API_URL / KV_REST_API_TOKEN) or any Upstash-compatible
// REST URL/token. Degrades gracefully (503) if no store is configured.
import { createClient } from '@vercel/kv'

const MAX_VISITS = 2000
const SIX_MONTHS_SECONDS = 15552000

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

  // Server-side facts (best-effort, from Vercel's proxy headers)
  const ip =
    (req.headers['x-vercel-forwarded-for'] || req.headers['x-forwarded-for'] || '')
      .split(',')[0]
      .trim() || null

  const visit = {
    ts: new Date().toISOString(),
    ip,
    country: req.headers['x-vercel-ip-country'] || null,
    region: req.headers['x-vercel-ip-country-region'] || null,
    city: req.headers['x-vercel-ip-city'] || null,
    tzServer: req.headers['x-vercel-ip-timezone'] || null,
    lat: req.headers['x-vercel-ip-latitude'] || null,
    lon: req.headers['x-vercel-ip-longitude'] || null,
    url: body.url || null,
    referrer: body.referrer || null,
    browser: body.browser || null,
    os: body.os || null,
    device: body.device || null,
    screen: body.screen || null,
    viewport: body.viewport || null,
    lang: body.lang || null,
    languages: body.languages || null,
    timezone: body.timezone || null,
    colorScheme: body.colorScheme || null,
    dpr: body.dpr ?? null,
    platform: body.platform || null,
    deviceMemory: body.deviceMemory ?? null,
    cores: body.cores ?? null,
    connection: body.connection || null,
    visitorId: body.visitorId || null,
    utm: body.utm || null,
  }

  try {
    const raw = JSON.stringify(visit)
    await kv.lpush('visits', raw)
    await kv.ltrim('visits', 0, MAX_VISITS - 1)
    await kv.expire('visits', SIX_MONTHS_SECONDS)
    await kv.incr('visits:count')
    // Track unique visitors (first-party id only, no personal data)
    if (visit.visitorId) await kv.sadd('visitors', visit.visitorId)
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'KV write failed', detail: err.message })
  }
}