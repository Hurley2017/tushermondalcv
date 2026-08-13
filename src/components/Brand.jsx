import { useState } from 'react'
import { LOGO_PATHS } from '../lib/logo-paths.js'

// Fallback colored initial badges (used when no real logo is available).
const FALLBACK = {
  HSBC: { label: 'HSBC', bg: '#db0011', fg: '#ffffff' },
  Celebal: { label: 'CE', bg: '#f07c0a', fg: '#ffffff' },
  CodeClause: { label: 'CC', bg: '#1f6feb', fg: '#ffffff' },
  Phoenix: { label: 'PX', bg: '#c2410c', fg: '#ffffff' },
  JU: { label: 'JU', bg: '#166534', fg: '#ffffff' },
  APCC: { label: 'APCC', bg: '#1e3a8a', fg: '#ffffff' },
  WBCHSE: { label: 'WB', bg: '#9a3412', fg: '#ffffff' },
  WBBSE: { label: 'WB', bg: '#581c87', fg: '#ffffff' },
  LLM: { label: 'AI', bg: '#7c3aed', fg: '#ffffff' },
  SDXL: { label: 'SD', bg: '#0ea5e9', fg: '#ffffff' },
  TTS: { label: 'TTS', bg: '#db2777', fg: '#ffffff' },
  'Web Audio API': { label: '♪', bg: '#e11d48', fg: '#ffffff' },
  Sockets: { label: 'SO', bg: '#0f766e', fg: '#ffffff' },
  'TCP/IP': { label: 'IP', bg: '#334155', fg: '#ffffff' },
  Graph: { label: 'GR', bg: '#6d28d9', fg: '#ffffff' },
  Excel: { label: 'X', bg: '#217346', fg: '#ffffff' },
  VBA: { label: 'VB', bg: '#134078', fg: '#ffffff' },
  'Power BI': { label: 'BI', bg: '#f2c811', fg: '#1a1a1a' },
  TM1: { label: 'TM1', bg: '#052fad', fg: '#ffffff' },
  Alteryx: { label: 'A', bg: '#0078c8', fg: '#ffffff' },
}

// Real logos: brand name → simple-icons path key + official brand color.
const LOGOS = {
  Python: { key: 'python', fill: '#3776ab' },
  JavaScript: { key: 'javascript', fill: '#f7df1e' },
  Rust: { key: 'rust', fill: '#b7410e' },
  React: { key: 'react', fill: '#61dafb' },
  MongoDB: { key: 'mongodb', fill: '#47a248' },
  HTML: { key: 'html5', fill: '#e34f26' },
  Flask: { key: 'flask', fill: '#64748b' },
  OpenCV: { key: 'opencv', fill: '#5c3ee8' },
  'scikit-learn': { key: 'scikitlearn', fill: '#f7931e' },
  'Node.js': { key: 'nodejs', fill: '#339933' },
  Redis: { key: 'redis', fill: '#dc382d' },
  Java: { key: 'java', fill: '#f89820' },
  C: { key: 'c', fill: '#00599c' },
  'C++': { key: 'cplusplus', fill: '#00599c' },
}

function hashColor(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360
  return `hsl(${h}, 55%, 42%)`
}

// For names without an embedded logo, try an image in /logos/ first (the user
// drops real logos there) — we try lowercase-slug and original-name variants in
// svg and png. Falls back to the colored initial badge if none loads.
function LogoWithFallback({ name, size }) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '')
  // Accept several naming styles: <slug>.svg/png/jpg, <slug>_logo.*, <Name>.*
  const candidates = []
  for (const ext of ['svg', 'png', 'jpg', 'jpeg']) {
    candidates.push(`/logos/${slug}.${ext}`)
    candidates.push(`/logos/${slug}_logo.${ext}`)
    candidates.push(`/logos/${encodeURIComponent(name)}.${ext}`)
  }
  const [idx, setIdx] = useState(0)
  const [failed, setFailed] = useState(false)
  const fallback =
    FALLBACK[name] || { label: name.slice(0, 2).toUpperCase(), bg: hashColor(name), fg: '#ffffff' }

  if (failed || idx >= candidates.length) {
    return (
      <span
        className={`brand-badge brand-badge--${size}`}
        style={{ background: fallback.bg, color: fallback.fg }}
        title={name}
        aria-label={name}
      >
        <span className="brand-badge__label">{fallback.label}</span>
      </span>
    )
  }

  return (
    <span
      className={`brand-badge brand-badge--${size}`}
      style={{ background: fallback.bg, color: fallback.fg }}
      title={name}
      aria-label={name}
    >
      <img
        className="brand-badge__img"
        src={candidates[idx]}
        alt=""
        loading="lazy"
        onError={() => {
          if (idx + 1 >= candidates.length) setFailed(true)
          else setIdx(idx + 1)
        }}
      />
      <span className="brand-badge__label">{fallback.label}</span>
    </span>
  )
}

export default function BrandBadge({ name, size = 'md' }) {
  const logo = LOGOS[name]
  if (logo && LOGO_PATHS[logo.key]) {
    return (
      <span
        className={`brand-badge brand-badge--logo brand-badge--${size}`}
        title={name}
        aria-label={name}
      >
        <svg viewBox="0 0 24 24" width={size === 'sm' ? 15 : 22} height={size === 'sm' ? 15 : 22} aria-hidden="true">
          <path fill={logo.fill} d={LOGO_PATHS[logo.key]} />
        </svg>
      </span>
    )
  }

  return <LogoWithFallback name={name} size={size} />
}
