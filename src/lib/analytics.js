// Lightweight visit analytics — fires a beacon on page load and a final beacon
// on leave (time-on-page + scroll depth). Data is minimal and non-sensitive:
// device/browser, screen/viewport, languages, timezone, color scheme, DPR,
// platform, referrer, UTM params, plus a random first-party visitor id
// (localStorage only) to count unique vs repeat visitors. No cookies, no
// cross-site tracking, no precise geolocation.

function parseUA(ua) {
  const browser = /Edg\//.test(ua)
    ? 'Edge'
    : /OPR\/|Opera/.test(ua)
      ? 'Opera'
      : /Chrome\//.test(ua)
        ? 'Chrome'
        : /Firefox\//.test(ua)
          ? 'Firefox'
          : /Safari\//.test(ua)
            ? 'Safari'
            : 'Other'
  const os = /Windows/.test(ua)
    ? 'Windows'
    : /Mac OS X/.test(ua)
      ? 'macOS'
      : /Android/.test(ua)
        ? 'Android'
        : /iPhone|iPad|iPod/.test(ua)
          ? 'iOS'
          : /Linux/.test(ua)
            ? 'Linux'
            : 'Other'
  const device = /Mobi|Android|iPhone|iPad/.test(ua) ? 'Mobile' : 'Desktop'
  return { browser, os, device }
}

function uuid() {
  try {
    if (crypto.randomUUID) return crypto.randomUUID()
  } catch {
    /* fall through */
  }
  return 'id-' + Math.random().toString(36).slice(2) + Date.now().toString(36)
}

function stored(key, make) {
  try {
    let v = localStorage.getItem(key)
    if (!v) {
      v = make()
      localStorage.setItem(key, v)
    }
    return v
  } catch {
    return make()
  }
}

// First-party visitor id (persists across visits on this browser only).
const visitorId = stored('tm-visitor', uuid)

function utmFromUrl() {
  const p = new URLSearchParams(window.location.search)
  const u = {}
  for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']) {
    const v = p.get(k)
    if (v) u[k.replace('utm_', '')] = v
  }
  return Object.keys(u).length ? u : null
}

function buildPayload() {
  const { browser, os, device } = parseUA(navigator.userAgent || '')
  return {
    url: window.location.href,
    referrer: document.referrer || null,
    browser,
    os,
    device,
    screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    lang: navigator.language || null,
    languages:
      navigator.languages && navigator.languages.length
        ? navigator.languages.join(', ')
        : null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    colorScheme: window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark',
    dpr: window.devicePixelRatio || 1,
    platform: navigator.platform || null,
    deviceMemory: navigator.deviceMemory ?? null,
    cores: navigator.hardwareConcurrency ?? null,
    connection: navigator.connection?.effectiveType || null,
    visitorId,
    utm: utmFromUrl(),
  }
}

function send(url, payload) {
  try {
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    if (navigator.sendBeacon) {
      navigator.sendBeacon(url, blob)
      return
    }
  } catch {
    /* fall through to fetch */
  }
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {})
}

let sent = false
export function sendVisit() {
  if (sent) return
  sent = true

  const start = performance.now()
  send('/api/visit', buildPayload())

  // Track scroll depth, then report duration + scroll on leave.
  let maxScroll = 0
  const onScroll = () => {
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0
    if (pct > maxScroll) maxScroll = pct
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener(
    'pagehide',
    () => {
      send('/api/leave', {
        url: window.location.href,
        visitorId,
        durationMs: Math.round(performance.now() - start),
        maxScrollPct: maxScroll,
      })
    },
    { once: true }
  )
}
