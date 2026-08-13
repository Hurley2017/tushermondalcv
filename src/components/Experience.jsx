import { experience } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">02.</span> Experience
          </h2>
        </Reveal>
        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal key={job.company} className="timeline__item" delay={i * 80}>
              <div className="timeline__dot" />
              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <a className="timeline__company" href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </header>
                <p className="timeline__summary">{job.summary}</p>
                <ul className="timeline__highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
