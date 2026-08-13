// Lightweight decorative vector ornaments — used to fill empty space around
// sections. Fully theme-aware (inherit `currentColor`) and pointer-transparent.
// No external dependencies.
export default function Decor({ type = 'rings', className = '' }) {
  const common = { className: `decor decor--${type} ${className}`.trim(), 'aria-hidden': 'true' }

  switch (type) {
    case 'spark':
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 0c1.4 5.4 2.5 7.6 8.6 9.3-6.1 1.7-7.2 3.9-8.6 9.3-1.4-5.4-2.5-7.6-8.6-9.3C9.5 7.6 10.6 5.4 12 0Z"
          />
        </svg>
      )
    case 'rings':
      return (
        <svg {...common} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="4 7" />
          <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    case 'dots':
      return (
        <svg {...common} viewBox="0 0 100 100" fill="currentColor">
          {[20, 50, 80].map((x) =>
            [20, 50, 80].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="2.2" />)
          )}
        </svg>
      )
    case 'brackets':
      return (
        <svg {...common} viewBox="0 0 100 100" fill="none">
          <path
            d="M38 20 L16 50 L38 80"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62 20 L84 50 L62 80"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M52 32 v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      )
    case 'plus':
      return (
        <svg {...common} viewBox="0 0 100 100" fill="none">
          <path d="M50 16v68M16 50h68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'crosshair':
      return (
        <svg {...common} viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="13" stroke="currentColor" strokeWidth="2" />
          <path d="M50 22v56M22 50h56" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
