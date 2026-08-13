import { projects, profile } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

function CommitList({ commits }) {
  return (
    <div className="commits">
      <h4 className="commits__title">
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

export default function ProjectsPage({ navigate }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <a
            className="page-hero__back"
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              if (navigate) navigate('#/')
              else window.location.hash = '#/'
            }}
          >
            ← Back to home
          </a>
          <span className="hero__eyebrow">Portfolio</span>
          <h1 className="page-hero__title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="page-hero__sub">
            A curated selection from {profile.stats[0].value} public repositories — the ones I
            think have real merit. Each includes its latest commit history straight from GitHub.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-detail-grid">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={(i % 2) * 80}>
                <article className="card project-detail">
                  <header className="project-detail__head">
                    <div>
                      <div className="project-detail__meta">
                        <span className="project__index">{project.year}</span>
                        {project.featured && <span className="project-detail__flag">Featured</span>}
                      </div>
                      <h2 className="project-detail__name">{project.name}</h2>
                      <p className="project-detail__tagline">{project.tagline}</p>
                    </div>
                    <div className="project-detail__links">
                      {project.demo && (
                        <a
                          className="btn btn--ghost btn--sm"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Icon name="external" size={14} /> Demo
                        </a>
                      )}
                      <a
                        className="btn btn--ghost btn--sm"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name="github" size={14} /> Source
                      </a>
                    </div>
                  </header>

                  <p className="project-detail__desc">{project.description}</p>

                  <ul className="project-detail__highlights">
                    {project.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>

                  <div className="tags">
                    {project.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.commits && <CommitList commits={project.commits} />}
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
    </>
  )
}
