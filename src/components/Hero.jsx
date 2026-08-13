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
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a
              className="btn btn--ghost"
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View my work
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
            <img className="hero__avatar" src={profile.avatar} alt={`${profile.name} portrait`} />
            <span className="hero__status" title="Open to opportunities">
              <span className="hero__status-dot" />
              Open to work
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
