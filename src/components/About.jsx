import { profile, interests } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
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
              numbers into decisions. Away from the desk I keep the developer spark alive: grinding
              through 178+ LeetCode problems, and building things like a tiny Rust music player or
              a full-stack web app.
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
            <div className="about__row">
              <Icon name="globe" size={16} />
              <a href={profile.website} target="_blank" rel="noreferrer">
                tushermondal.ml
              </a>
            </div>
            <div className="about__row">
              <Icon name="mail" size={16} />
              <a href={`mailto:${profile.emailAlt}`}>{profile.emailAlt}</a>
            </div>
            <h3 className="about__subtitle">When I'm not coding</h3>
            <ul className="about__interests">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
