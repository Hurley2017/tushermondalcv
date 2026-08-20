// Lightweight visit analytics — fires once per page load.
// Data collected is deliberately minimal and non-sensitive: device type,
// screen/viewport size, language, timezone, referrer, and — server-side — IP +
// country. No cookies, no cross-site tracking, no geolocation.

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

// Build the payload and fire the beacon on every page load (once per load).
let sent = false
export function sendVisit() {
  if (sent) return
  sent = true

  const { browser, os, device } = parseUA(navigator.userAgent || '')
  const payload = {
    url: window.location.href,
    referrer: document.referrer || null,
    browser,
    os,
    device,
    screen: `${window.screen?.width || 0}x${window.screen?.height || 0}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    lang: navigator.language || null,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || null,
    deviceMemory: navigator.deviceMemory ?? null,
    cores: navigator.hardwareConcurrency ?? null,
    connection: navigator.connection?.effectiveType || null,
  }

  try {
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/visit', blob)
      return
    }
  } catch {
    /* fall through to fetch */
  }
  fetch('/api/visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch(() => {})
}
