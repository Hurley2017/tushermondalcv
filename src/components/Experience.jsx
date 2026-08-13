import { experience } from '../data/profile.js'
import BrandBadge from './Brand.jsx'
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
            <Reveal key={`${job.company}-${job.role}`} className="timeline__item" delay={Math.min(i * 60, 240)}>
              <div className="timeline__dot" />
              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    {job.brand && <BrandBadge name={job.brand} />}
                    <h3 className="timeline__role">
                      {job.role}
                      {job.current && <span className="timeline__current">Current</span>}
                    </h3>
                    <a className="timeline__company" href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                    {job.location && <span className="timeline__location"> · {job.location}</span>}
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </header>
                <p className="timeline__summary">{job.summary}</p>
                <ul className="timeline__highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {job.learnings && job.learnings.length > 0 && (
                  <div className="timeline__learn">
                    <h4 className="timeline__learn-title">Key learnings</h4>
                    <ul className="timeline__learn-list">
                      {job.learnings.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
