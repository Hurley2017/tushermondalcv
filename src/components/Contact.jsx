import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <Reveal className="contact">
          <span className="contact__eyebrow">Let's build something together</span>
          <h2 className="contact__title">Get in touch</h2>
          <p className="contact__text">
            I'm always open to interesting conversations, collaborations and opportunities —
            reach out any time.
          </p>
          <div className="contact__actions">
            <a
              className="btn btn--primary btn--lg"
              href={`mailto:${profile.email}`}
              aria-label="Send an email"
              title="Send an email"
            >
              <Icon name="mail" size={20} /> Email
            </a>
            <a
              className="btn btn--ghost btn--lg"
              href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
              aria-label="Call me"
              title="Call me"
            >
              <Icon name="phone" size={20} /> Call
            </a>
          </div>
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
