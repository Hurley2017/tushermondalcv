import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Hobbies from './components/Hobbies.jsx'
import Achievements from './components/Achievements.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectsPage from './components/ProjectsPage.jsx'
import { playClick, playScroll } from './lib/sounds.js'

// Tiny hash-based router: "#/" (home) and "#/projects" (projects page).
function useHashRoute() {
  const getRoute = () => (window.location.hash.startsWith('#/projects') ? 'projects' : 'home')
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onChange = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
  }

  return [route, navigate]
}

export default function App() {
  const [route, navigate] = useHashRoute()

  // Subtle sound effects — soft blip on clicks/taps, faint tick while scrolling.
  useEffect(() => {
    const onClick = (e) => {
      const t = e.target
      if (t && t.closest && t.closest('a, button')) playClick()
    }
    let lastScroll = 0
    const onScroll = () => {
      const now = Date.now()
      if (now - lastScroll > 260) {
        lastScroll = now
        playScroll()
      }
    }
    document.addEventListener('click', onClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (route === 'projects') {
    return (
      <>
        <Navbar route="projects" />
        <ProjectsPage navigate={navigate} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar route="home" />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Projects navigate={navigate} />
        <Skills />
        <Hobbies />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
