import { useEffect, useState } from 'react'
import { profile, nameVariants } from '../data/profile.js'
import { Icon } from './icons.jsx'

// Typewriter that types the current language's name, holds, then backspaces
// it away before typing the next — like someone typing and correcting.
function useTypewriter(variants, typeMs = 85, deleteMs = 38, holdMs = 2800) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const full = variants[index].text
    let timer
    if (phase === 'typing') {
      if (text.length < full.length) {
        timer = setTimeout(() => setText(full.slice(0, text.length + 1)), typeMs)
      } else {
        timer = setTimeout(() => setPhase('deleting'), holdMs)
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), deleteMs)
      } else {
        setPhase('typing')
        setIndex((i) => (i + 1) % variants.length)
      }
    }
    return () => clearTimeout(timer)
  }, [text, phase, index, variants, typeMs, deleteMs, holdMs])

  const v = variants[index]
  return { text, lang: v.lang, font: v.font, italic: v.italic }
}

function AnimatedName() {
  const { text, lang, font, italic } = useTypewriter(nameVariants)

  return (
    <div className="hero__name-wrap">
      <h1 className="hero__name" aria-label="Tusher Mondal">
        <span
          className="name-cycle"
          style={{ fontFamily: font, fontStyle: italic ? 'italic' : 'normal' }}
        >
          {text}
          <span className="name-caret" aria-hidden="true" />
        </span>
      </h1>
      <span className="hero__lang">{lang}</span>
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
