import { education } from '../data/profile.js'
import BrandBadge from './Brand.jsx'
import Reveal from './Reveal.jsx'
import Decor from './Decor.jsx'

export default function Education() {
  return (
    <section id="education" className="section">
      <Decor type="rings" className="section__decor section__decor--rings" />
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">04.</span> Education
          </h2>
        </Reveal>
        <div className="timeline">
          {education.map((entry, i) => (
            <Reveal key={entry.school} className="timeline__item" delay={i * 60}>
              <div className="timeline__dot" />
              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    {entry.brand && <BrandBadge name={entry.brand} />}
                    <h3 className="timeline__role">{entry.school}</h3>
                    <p className="timeline__company">{entry.degree}</p>
                  </div>
                  <span className="timeline__period">{entry.period}</span>
                </header>
                {entry.score && <p className="timeline__score">{entry.score}</p>}
                {entry.learnings && entry.learnings.length > 0 && (
                  <div className="timeline__learn">
                    <h4 className="timeline__learn-title">What I learned</h4>
                    <ul className="timeline__learn-list">
                      {entry.learnings.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {entry.projects && entry.projects.length > 0 && (
                  <div className="education__projects">
                    <h4 className="timeline__learn-title">Projects</h4>
                    <div className="tags">
                      {entry.projects.map((p) => (
                        <span key={p} className="tag">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
