// POST /api/visit — called (via sendBeacon) once per consenting page view.
// Stores a visit record in Vercel KV. The page is a static SPA, so this
// serverless function is where the write actually happens. Degrades silently
// (503) if Vercel KV isn't provisioned yet.
//
// KV env vars (set automatically when you link a KV store in Vercel):
//   KV_REST_API_URL    e.g. https://your-store.upstash.io
//   KV_REST_API_TOKEN  e.g. AXXXXxxx...

const DAY = 24 * 60 * 60 * 1000
const MAX_VISITS = 2000

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' })
  }

  const url = process.env.KV_REST_API_URL
  const token = process.env.KV_REST_API_TOKEN
  if (!url || !token) {
    return res.status(503).json({ error: 'KV not configured' })
  }

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
    city: req.headers['x-vercel-ip-city'] || null,
    url: body.url || null,
    referrer: body.referrer || null,
    browser: body.browser || null,
    os: body.os || null,
    device: body.device || null,
    screen: body.screen || null,
    viewport: body.viewport || null,
    lang: body.lang || null,
    timezone: body.timezone || null,
    deviceMemory: body.deviceMemory ?? null,
    cores: body.cores ?? null,
    connection: body.connection || null,
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  }

  try {
    // Append to a Redis list; keep only the most recent MAX_VISITS; bump counter.
    const raw = JSON.stringify(visit)
    await fetch(`${url}/lpush/visits`, {
      method: 'POST',
      headers,
      body: JSON.stringify([raw]),
    })
    await fetch(`${url}/ltrim/visits`, {
      method: 'POST',
      headers,
      body: JSON.stringify([0, MAX_VISITS - 1]),
    })
    await fetch(`${url}/expire/visits`, {
      method: 'POST',
      headers,
      body: JSON.stringify([60, Math.floor((DAY * 180) / 1000)]), // keep 6 months
    })
    await fetch(`${url}/incr/visits:count`, {
      method: 'POST',
      headers,
      body: JSON.stringify([]),
    })
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'KV write failed' })
  }
}
