import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

// Fixed bottom bar — "Connect". Back-to-top button appears once the visitor
// has scrolled past 30% of the page.
export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - window.innerHeight
      setShowTop(window.scrollY / Math.max(scrollable, 1) > 0.3)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container footer__bar">
        <div className="footer__left">
          <span className="footer__connect">Connect</span>
          <div className="footer__contact">
            <a
              className="social-btn social-btn--sm"
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              title="Email"
            >
              <Icon name="mail" size={16} />
            </a>
            <a
              className="social-btn social-btn--sm"
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              aria-label="Call me"
              title="Call"
            >
              <Icon name="phone" size={16} />
            </a>
          </div>
          <button
            type="button"
            className={`footer__top ${showTop ? 'is-visible' : ''}`}
            onClick={toTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <Icon name="arrowUp" size={16} />
          </button>
        </div>
        <div className="footer__icons">
          <a className="btn btn--primary btn--sm footer__cv" href={profile.cvPdf} download>
            <Icon name="download" size={14} /> Get CV
          </a>
        </div>
      </div>
    </footer>
  )
}
