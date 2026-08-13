import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Hi, my name is</span>
          <h1 className="hero__name">
            {profile.firstName} <span className="gradient-text">{profile.lastName}</span>
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={profile.cvPdf} download>
              <Icon name="download" size={17} /> Get CV
            </a>
            <a
              className="btn btn--ghost"
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore
            </a>
          </div>

          <div className="hero__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={`${s.label} — ${s.handle}`}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__avatar-wrap">
            <div className="hero__avatar-ring">
              <img className="hero__avatar" src={profile.avatar} alt={`${profile.name} portrait`} />
            </div>
            <span className="hero__status" title="Data Analyst at HSBC">
              <span className="hero__status-dot" />
              Data Analyst · HSBC
            </span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll to about section"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <Icon name="arrowDown" size={22} />
      </a>
    </section>
  )
}
