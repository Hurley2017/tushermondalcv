// GET /api/visits?key=<ADMIN_TOKEN> — returns the stored visit logs.
// Guarded by the ADMIN_TOKEN env var so IPs are never exposed publicly.

// Find an env var by key fragment — tolerates the different names/suffixes
// used by Vercel KV vs Upstash (e.g. UPSTASH_REDIS_REST_URL@0, *_PROD, ...).
function findEnv(...fragments) {
  const keys = Object.keys(process.env)
  for (const fragment of fragments) {
    const hit = keys.find((k) => k.toLowerCase().includes(fragment.toLowerCase()))
    if (hit) return process.env[hit]
  }
  return undefined
}

// POST a command to the Upstash REST API and return { ok, data }.
async function kv(url, token, command, args) {
  const res = await fetch(`${url}/${command}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(args || []),
  })
  let data = {}
  try {
    data = await res.json()
  } catch {
    data = {}
  }
  return { ok: res.ok, status: res.status, data }
}

export default async function handler(req, res) {
  const url = findEnv('UPSTASH_REDIS_REST_URL', 'KV_REST_API_URL')
  const kvToken = findEnv('UPSTASH_REDIS_REST_TOKEN', 'KV_REST_API_TOKEN')
  const adminToken = findEnv('ADMIN_TOKEN')

  if (!url || !kvToken) {
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

  try {
    const [visits, count] = await Promise.all([
      kv(url, kvToken, `lrange/visits`, [0, 199]),
      kv(url, kvToken, `get/visits:count`, []),
    ])
    if (!visits.ok || !count.ok) {
      return res.status(502).json({
        error: 'KV read failed',
        visits: { status: visits.status, resp: visits.data },
        count: { status: count.status, resp: count.data },
      })
    }
    const list = Array.isArray(visits.data?.result) ? visits.data.result : []
    res.json({
      total: count.data?.result ?? null,
      visits: list
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