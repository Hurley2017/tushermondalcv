import { projects } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">03.</span> Projects
          </h2>
        </Reveal>
        <div className="projects-grid">
          {featured.map((project, i) => (
            <Reveal key={project.name} className="project" delay={(i % 3) * 80}>
              <article className="card project__card">
                <div className="project__top">
                  <span className="project__index">0{i + 1}</span>
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
                        <Icon name="external" size={17} />
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
                      <Icon name="github" size={17} />
                    </a>
                  </div>
                </div>
                <h3 className="project__name">{project.name}</h3>
                <p className="project__desc">{project.description}</p>
                <div className="tags">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
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
            More on GitHub <Icon name="external" size={15} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
