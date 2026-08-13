import { profile } from '../data/profile.js'
import { Icon } from './icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__note">Designed &amp; built with care by {profile.name}.</p>
        <a
          className="footer__source"
          href="https://github.com/Hurley2017"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" size={14} /> Source on GitHub
        </a>
      </div>
    </footer>
  )
}
