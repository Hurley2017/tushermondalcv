import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

// Fixed bottom bar — "Connect · Let's build something together".
// On mobile the Get CV button appears here.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__bar">
        <div className="footer__text">
          <span className="footer__connect">Connect</span>
          <span className="footer__cta">Let's build something together</span>
        </div>
        <div className="footer__icons">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              className="social-btn social-btn--sm"
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              <Icon name={s.icon} size={16} />
            </a>
          ))}
          <a className="btn btn--primary btn--sm footer__cv" href={profile.cvPdf} download>
            <Icon name="download" size={14} /> Get CV
          </a>
        </div>
      </div>
    </footer>
  )
}
