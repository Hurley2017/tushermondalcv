// Light / dark theme with persistence and a smooth animated transition.
const KEY = 'tm-theme'

export function getTheme() {
  try {
    return localStorage.getItem(KEY) || 'dark'
  } catch {
    return 'dark'
  }
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#fafafa')
}

export function initTheme() {
  applyTheme(getTheme())
}

export function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark'
  try {
    localStorage.setItem(KEY, next)
  } catch {
    /* ignore */
  }
  // Enable the smooth cross-fade transition just for the switch.
  const root = document.documentElement
  root.classList.add('theme-anim')
  applyTheme(next)
  window.setTimeout(() => root.classList.remove('theme-anim'), 500)
  return next
}
