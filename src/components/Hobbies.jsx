import { hobbies } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Hobbies() {
  return (
    <section id="hobbies" className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">06.</span> Hobbies &amp; Interests
          </h2>
        </Reveal>
        <div className="hobbies-grid">
          {hobbies.map((hobby, i) => (
            <Reveal key={hobby.title} className="hobby" delay={(i % 4) * 60}>
              <article className="card hobby__card">
                <span className="hobby__icon">
                  <Icon name={hobby.icon} size={22} />
                </span>
                <h3 className="hobby__title">{hobby.title}</h3>
                <p className="hobby__desc">{hobby.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
