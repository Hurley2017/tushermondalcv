import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'

// Compact stat strip (repos, LeetCode, years coding) between hero and about.
export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {profile.stats.map((stat, i) => (
            <Reveal key={stat.label} className="stats__item" delay={i * 70}>
              <span className="stats__value gradient-text">{stat.value}</span>
              <span className="stats__label">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
