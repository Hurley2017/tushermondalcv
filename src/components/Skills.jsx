import { skillGroups } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">07.</span> Skills
          </h2>
        </Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="skills-group" delay={(i % 2) * 80}>
              <article className="card skills-group__card">
                <h3 className="skills-group__title">{group.title}</h3>
                <div className="skills-group__list">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
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
