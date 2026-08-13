import { projects } from '../data/profile.js'
import BrandBadge from './Brand.jsx'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

function Commits({ commits }) {
  return (
    <div className="commits">
      <h4 className="timeline__learn-title">
        <Icon name="code" size={13} /> Latest commits
      </h4>
      <ul className="commits__list">
        {commits.map((c, i) => (
          <li key={i} className="commits__item">
            <span className="commits__dot" />
            <div className="commits__body">
              <p className="commits__message">{c.message}</p>
              <span className="commits__date">{c.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">03.</span> Projects
          </h2>
        </Reveal>

        <div className="timeline">
          {projects.map((project, i) => (
            <Reveal key={project.name} className="timeline__item" delay={Math.min(i * 40, 200)}>
              <div className="timeline__dot" />
              <article className="card timeline__card">
                <header className="timeline__head">
                  <div>
                    <div className="project__brands">
                      {project.brands.map((b) => (
                        <BrandBadge key={b} name={b} />
                      ))}
                    </div>
                    <h3 className="timeline__role">{project.name}</h3>
                    <p className="timeline__company">{project.tagline}</p>
                  </div>
                  <div className="timeline__head-side">
                    <span className="timeline__period">{project.year}</span>
                    <div className="project__links">
                      {project.demo && (
                        <a
                          className="project__link"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Live demo of ${project.name}`}
                          title="Live demo"
                        >
                          <Icon name="external" size={16} />
                        </a>
                      )}
                      <a
                        className="project__link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub repo of ${project.name}`}
                        title="View source"
                      >
                        <Icon name="github" size={16} />
                      </a>
                    </div>
                  </div>
                </header>

                <p className="timeline__summary">{project.description}</p>

                <h4 className="timeline__learn-title">What it does</h4>
                <ul className="timeline__highlights">
                  {project.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                {project.learnings && project.learnings.length > 0 && (
                  <div className="timeline__learn">
                    <h4 className="timeline__learn-title">Key learnings</h4>
                    <ul className="timeline__learn-list">
                      {project.learnings.map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="project__stack">
                  <h4 className="timeline__learn-title">Stack used</h4>
                  <div className="tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.commits && <Commits commits={project.commits} />}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects__more">
          <a
            className="btn btn--ghost"
            href="https://github.com/Hurley2017?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            All repositories on GitHub <Icon name="external" size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
