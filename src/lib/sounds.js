// Subtle, dependency-free sound effects synthesized with the Web Audio API.
// No audio files needed — everything is generated in the browser.

let ctx = null
let enabled = true

try {
  enabled = localStorage.getItem('tm-sound') !== '0'
} catch {
  enabled = true
}

export function isSoundEnabled() {
  return enabled
}

export function setSoundEnabled(value) {
  enabled = value
  try {
    localStorage.setItem('tm-sound', value ? '1' : '0')
  } catch {
    /* ignore */
  }
}

function ensureCtx() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext
    if (AC) ctx = new AC()
  }
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {})
  return ctx
}

function tone(freq, duration, gainValue, type = 'sine') {
  if (!enabled) return
  const c = ensureCtx()
  if (!c) return
  const osc = c.createOscillator()
  const gain = c.createGain()
  const t = c.currentTime
  osc.type = type
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(gainValue, t + 0.008)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + duration)
  osc.connect(gain).connect(c.destination)
  osc.start(t)
  osc.stop(t + duration + 0.05)
}

// Short, soft "blip" for taps / clicks.
export function playClick() {
  tone(560, 0.07, 0.035)
}

// Very faint "tick" for scrolling — subtle, not distracting.
export function playScroll() {
  tone(340, 0.035, 0.012, 'triangle')
}

export function playWhoosh() {
  tone(220, 0.12, 0.02, 'sine')
}
