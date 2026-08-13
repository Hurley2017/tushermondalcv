// Colorful "logo" badges — deliberately NOT monochrome (brands keep their
// real colors). Renders a rounded badge with the brand mark + colors.
const BRANDS = {
  // Companies / roles
  HSBC: { label: 'HSBC', bg: '#db0011', fg: '#ffffff' },
  Celebal: { label: 'CE', bg: '#f07c0a', fg: '#ffffff' },
  CodeClause: { label: 'CC', bg: '#1f6feb', fg: '#ffffff' },
  Phoenix: { label: 'PX', bg: '#c2410c', fg: '#ffffff' },
  // Education
  JU: { label: 'JU', bg: '#166534', fg: '#ffffff' },
  APCC: { label: 'APCC', bg: '#1e3a8a', fg: '#ffffff' },
  WBCHSE: { label: 'WB', bg: '#9a3412', fg: '#ffffff' },
  WBBSE: { label: 'WB', bg: '#581c87', fg: '#ffffff' },
  // Languages / tools
  Python: { label: 'Py', bg: '#3776ab', fg: '#ffd43b' },
  JavaScript: { label: 'JS', bg: '#f7df1e', fg: '#111111' },
  Rust: { label: 'R', bg: '#dea584', fg: '#181818' },
  React: { label: '⚛', bg: '#61dafb', fg: '#0b1526' },
  MongoDB: { label: 'M', bg: '#10aa50', fg: '#ffffff' },
  Flask: { label: 'Fl', bg: '#58d1e9', fg: '#10222b' },
  OpenCV: { label: 'CV', bg: '#5c3ee8', fg: '#ffffff' },
  'scikit-learn': { label: 'sk', bg: '#f89939', fg: '#ffffff' },
  ML: { label: 'ML', bg: '#ff6f00', fg: '#ffffff' },
  LLM: { label: 'AI', bg: '#7c3aed', fg: '#ffffff' },
  SDXL: { label: 'SD', bg: '#0ea5e9', fg: '#ffffff' },
  TTS: { label: 'TTS', bg: '#db2777', fg: '#ffffff' },
  'Web Audio API': { label: '♪', bg: '#e11d48', fg: '#ffffff' },
  Sockets: { label: 'SO', bg: '#0f766e', fg: '#ffffff' },
  'TCP/IP': { label: 'IP', bg: '#334155', fg: '#ffffff' },
  HTML: { label: 'H5', bg: '#e34f26', fg: '#ffffff' },
  Excel: { label: 'X', bg: '#217346', fg: '#ffffff' },
  VBA: { label: 'VB', bg: '#134078', fg: '#ffffff' },
  'Power BI': { label: 'BI', bg: '#f2c811', fg: '#1a1a1a' },
  TM1: { label: 'TM1', bg: '#052fad', fg: '#ffffff' },
  Alteryx: { label: 'A', bg: '#0078c8', fg: '#ffffff' },
  Graph: { label: 'GR', bg: '#6d28d9', fg: '#ffffff' },
}

function hashColor(str) {
  let h = 0
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 360
  return `hsl(${h}, 55%, 42%)`
}

export default function BrandBadge({ name, size = 'md' }) {
  const brand =
    BRANDS[name] || {
      label: name.slice(0, 2).toUpperCase(),
      bg: hashColor(name),
      fg: '#ffffff',
    }
  return (
    <span
      className={`brand-badge brand-badge--${size}`}
      style={{ background: brand.bg, color: brand.fg }}
      title={name}
      aria-label={name}
    >
      {brand.label}
    </span>
  )
}
