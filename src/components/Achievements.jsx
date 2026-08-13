import { achievements } from '../data/profile.js'
import Reveal from './Reveal.jsx'

export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt">
      <div className="container">
        <Reveal>
          <h2 className="section__title">
            <span className="section__index">07.</span> Achievements
          </h2>
        </Reveal>
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <Reveal key={item.title} className="achievement" delay={(i % 3) * 70}>
              <article className="card achievement__card">
                <span className="achievement__badge">✦</span>
                <h3 className="achievement__title">{item.title}</h3>
                <p className="achievement__detail">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
