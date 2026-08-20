// POST /api/visit — called (via sendBeacon) once per page view.
// Stores a visit record in a key-value store (Upstash Redis or Vercel KV).
// The page is a static SPA, so this serverless function is where the write
// actually happens. Degrades gracefully (503) if no store is configured.
const MAX_VISITS = 2000
const SIX_MONTHS_SECONDS = 15552000

// Find an env var — exact names first, then fuzzy fallback for suffixed
// variants (e.g. KV_REST_API_URL@0, *_PROD, ...).
function findEnv(...names) {
  for (const name of names) {
    if (process.env[name]) return process.env[name]
  }
  const keys = Object.keys(process.env)
  for (const name of names) {
    const hit = keys.find((k) => k.toLowerCase().includes(name.toLowerCase()))
    if (hit && process.env[hit]) return process.env[hit]
  }
  return undefined
}

// POST a command to the Upstash REST API and throw if it didn't succeed.
// Every command uses the documented POST /{command}/{key} + args-in-body form.
async function kv(url, token, command, args) {
  const res = await fetch(`${url}/${command}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args || []),
  })
  if (!res.ok) {
    let detail = ''
    try {
      detail = (await res.text()).slice(0, 300)
    } catch {
      detail = ''
    }
    throw new Error(`${command} -> ${res.status} ${detail}`)
  }
  return res
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'method not allowed' })
  }

  const url = findEnv('KV_REST_API_URL', 'UPSTASH_REDIS_REST_URL')
  const token = findEnv('KV_REST_API_TOKEN', 'UPSTASH_REDIS_REST_TOKEN')
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

  try {
    const raw = JSON.stringify(visit)
    await kv(url, token, `lpush/visits`, [raw])
    await kv(url, token, `ltrim/visits`, [0, MAX_VISITS - 1])
    await kv(url, token, `expire/visits`, ['visits', SIX_MONTHS_SECONDS])
    await kv(url, token, `incr/visits:count`, [])
    res.status(204).end()
  } catch (err) {
    res.status(500).json({ error: 'KV write failed', detail: err.message })
  }
}