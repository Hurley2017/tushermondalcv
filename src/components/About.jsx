import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function About({ onOpenCv }) {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">01.</span> About Me
          </h2>
        </Reveal>
        <div className="about">
          <Reveal className="about__text" delay={80}>
            <p>{profile.resumeNote}</p>
            <p>
              At HSBC I work with enterprise data — Excel, Power BI, TM1 and Alteryx — turning raw
              numbers into decisions. Away from the desk I keep the developer spark alive: running
              local AI models entirely on-device (LLMs via LM Studio, Stable Diffusion for images,
              Orpheus TTS for voices), grinding through 200+ problems on LeetCode and HackerRank,
              and building things like an AI story-writer, a physics-based engine sound synth, or a
              tiny Rust music player.
            </p>
          </Reveal>
          <Reveal className="about__meta" delay={160}>
            <div className="about__row">
              <Icon name="pin" size={16} />
              <span>{profile.location}</span>
            </div>
            <div className="about__row">
              <Icon name="mail" size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="about__row">
              <Icon name="phone" size={16} />
              <span>{profile.phone}</span>
            </div>
            <h3 className="about__subtitle">Languages</h3>
            <ul className="about__languages">
              {profile.languages.map((lang) => (
                <li key={lang.name}>
                  <strong>{lang.name}</strong> — {lang.level}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn btn--ghost btn--block"
              onClick={onOpenCv}
              aria-label="Download CV — choose PDF or Excel format"
            >
              <Icon name="download" size={15} /> Download CV
              <span className="btn__formats">PDF · XLSX</span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
