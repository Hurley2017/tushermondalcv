import { profile } from '../data/profile.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. Built with React + Vite.
        </p>
        <a
          className="footer__source"
          href="https://github.com/Hurley2017"
          target="_blank"
          rel="noreferrer"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  )
}
