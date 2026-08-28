import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import AcademicProfiles from './sections/AcademicProfiles'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <About />
        <AcademicProfiles />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
