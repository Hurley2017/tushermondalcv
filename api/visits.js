// GET /api/visits?key=<ADMIN_TOKEN> — returns the stored visit logs.
// Guarded by the ADMIN_TOKEN env var so IPs are never exposed publicly.

// Find an env var by key fragment — tolerates the different names/suffixes
// used by Vercel KV vs Upstash (e.g. UPSTASH_REDIS_REST_URL@0, *_PROD, …).
function findEnv(...fragments) {
  const keys = Object.keys(process.env)
  for (const fragment of fragments) {
    const hit = keys.find((k) => k.toLowerCase().includes(fragment.toLowerCase()))
    if (hit) return process.env[hit]
  }
  return undefined
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

  const headers = { Authorization: `Bearer ${kvToken}` }
  try {
    const [visitsRes, countRes] = await Promise.all([
      fetch(`${url}/lrange/visits?start=0&stop=199`, { headers }),
      fetch(`${url}/get/visits:count`, { headers }),
    ])
    const visits = await visitsRes.json()
    const count = await countRes.json()
    const list = Array.isArray(visits?.result) ? visits.result : []
    res.json({
      total: count?.result ?? null,
      visits: list.map((v) => {
        try {
          return JSON.parse(v)
        } catch {
          return null
        }
      }).filter(Boolean),
    })
  } catch (err) {
    res.status(500).json({ error: 'KV read failed' })
  }
}
