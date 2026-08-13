import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal className="contact">
          <span className="contact__eyebrow">What's next?</span>
          <h2 className="contact__title">Let's build something together</h2>
          <p className="contact__text">
            I'm always open to interesting conversations, internships, freelance work or just
            chatting about software. My inbox is always open — I'll get back to you as soon as I
            can.
          </p>
          <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
            <Icon name="mail" size={18} /> {profile.email}
          </a>
          <div className="contact__socials">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                className="social-btn"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
