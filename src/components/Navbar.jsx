import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

export default function Navbar({ route = 'home' }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (route !== 'home') {
      setActive('')
      return
    }
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = ''
      for (const link of navLinks) {
        if (link.page) continue
        const el = document.getElementById(link.id)
        if (el && el.getBoundingClientRect().top <= 140) current = link.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [route])

  const goTo = (e, link) => {
    e.preventDefault()
    setOpen(false)
    if (link.page) {
      window.location.hash = '#/projects'
      return
    }
    if (route !== 'home') {
      window.location.hash = '#/'
      setTimeout(() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' }), 60)
      return
    }
    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    if (route !== 'home') {
      window.location.hash = '#/'
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className={`nav ${scrolled || route !== 'home' ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#/" className="nav__brand" onClick={goHome}>
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
              href={link.page ? '#/projects' : `#${link.id}`}
              className={`nav__link ${active === link.id ? 'is-active' : ''}`}
              onClick={(e) => goTo(e, link)}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary btn--sm nav__cv" href={profile.cvPdf} download>
            <Icon name="download" size={14} /> Get CV
          </a>
        </nav>
      </div>
    </header>
  )
}
