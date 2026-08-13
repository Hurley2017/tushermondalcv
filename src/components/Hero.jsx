import { useEffect, useState } from 'react'
import { profile, nameVariants } from '../data/profile.js'
import { Icon } from './icons.jsx'

// The big hero name cycles through "Tusher Mondal" in many languages & scripts.
function AnimatedName() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % nameVariants.length)
        setVisible(true)
      }, 400)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const v = nameVariants[index]

  return (
    <div className="hero__name-wrap">
      <h1 className="hero__name" aria-label="Tusher Mondal">
        <span
          className={`name-cycle ${visible ? 'is-in' : 'is-out'}`}
          style={{ fontFamily: v.font, fontStyle: v.italic ? 'italic' : 'normal' }}
        >
          {v.text}
        </span>
      </h1>
      <span className="hero__lang">{v.lang}</span>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Hi, my name is</span>
          <AnimatedName />
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
            <span className="hero__status" title="Manager — Management Reporting — CIB at HSBC">
              <span className="hero__status-dot" />
              Manager · HSBC
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
