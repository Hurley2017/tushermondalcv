import { useEffect, useState } from 'react'
import { navLinks } from '../data/profile.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // Track which section is currently in view for the active link.
      let current = ''
      for (const link of navLinks) {
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= 140) current = link.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          <span className="nav__brand-mark">TM</span>
          <span className="nav__brand-text">Tusher Mondal</span>
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              onClick={(e) => goTo(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
