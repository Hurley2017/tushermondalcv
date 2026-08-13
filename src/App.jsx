import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import Cursor from './components/Cursor.jsx'
import Footer from './components/Footer.jsx'

// Below-the-fold sections are code-split so the initial bundle stays small.
const Experience = lazy(() => import('./components/Experience.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Education = lazy(() => import('./components/Education.jsx'))
const Achievements = lazy(() => import('./components/Achievements.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Hobbies = lazy(() => import('./components/Hobbies.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

export default function App() {
  return (
    <>
      <div className="bg-aura" aria-hidden="true" />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Suspense fallback={<div className="section-lazy" aria-hidden="true" />}>
          <Experience />
          <Projects />
          <Education />
          <Skills />
          <Achievements />
          <Hobbies />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
