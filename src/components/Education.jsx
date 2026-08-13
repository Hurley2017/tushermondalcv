import { education } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">05.</span> Education
          </h2>
        </Reveal>
        <div className="timeline">
          {education.map((entry, i) => (
            <Reveal key={entry.school} className="timeline__item" delay={i * 60}>
              <div className="timeline__dot" />
              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{entry.school}</h3>
                    <p className="timeline__company">{entry.degree}</p>
                  </div>
                  <span className="timeline__period">{entry.period}</span>
                </header>
                {entry.note && <p className="timeline__summary">{entry.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
