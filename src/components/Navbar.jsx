import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile.js'
import { Icon } from './icons.jsx'
import { getTheme, toggleTheme } from '../lib/theme.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getTheme)
  const sectionIds = navLinks.map((l) => l.id)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // Robust scroll-spy: the last section whose top is above the navbar.
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      // Bottom of the page → keep the last section highlighted.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sectionIds[sectionIds.length - 1]
      }
      // Near the top → highlight the first section.
      if (window.scrollY < 80) current = sectionIds[0]
      setActive(current || sectionIds[0])
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sectionIds])

  // Show the profile picture alongside the name once we scroll past the hero.
  const showAvatar = active !== sectionIds[0]

  const onToggleTheme = () => {
    const next = toggleTheme()
    setTheme(next)
  }

  const goTo = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const goHome = (e) => {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" onClick={goHome} aria-label="Tusher Mondal — top">
          {showAvatar && (
            <span className="nav__brand-avatar">
              <img src={profile.avatar} alt={profile.name} />
            </span>
          )}
          <span className="nav__brand-text">{profile.name}</span>
        </a>

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
          <a className="btn btn--primary btn--sm nav__cv" href={profile.cvPdf} download>
            <Icon name="download" size={14} /> Get CV
          </a>
        </nav>

        <button
          className="nav__theme"
          onClick={onToggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
        </button>

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
      </div>
    </header>
  )
}
