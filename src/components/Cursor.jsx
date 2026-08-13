import { useEffect, useRef } from 'react'

// Custom cursor: a small dot + a lagging ring that grows over interactive
// elements. Uses `mix-blend-mode: difference` so it inverts over any theme.
// Only activates on fine pointers (mouse/trackpad), never on touch, and never
// when the user prefers reduced motion. The elements are always rendered but
// stay invisible until the first mouse move, so refs are always attached.
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let raf = 0
    let visible = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
      dot.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }

    const loop = () => {
      // ease the ring toward the cursor for the trailing effect
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      raf = requestAnimationFrame(loop)
    }

    const interactive = (t) =>
      t.closest?.('a, button, input, textarea, select, [role="button"], .brand-badge, label')

    const onOver = (e) => {
      if (interactive(e.target)) {
        dot.style.width = '16px'
        dot.style.height = '16px'
        ring.style.width = '46px'
        ring.style.height = '46px'
        ring.style.borderColor = 'rgba(255,255,255,0.95)'
      } else {
        dot.style.width = '8px'
        dot.style.height = '8px'
        ring.style.width = '36px'
        ring.style.height = '36px'
        ring.style.borderColor = 'rgba(255,255,255,0.5)'
      }
    }

    const onLeave = () => {
      visible = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
