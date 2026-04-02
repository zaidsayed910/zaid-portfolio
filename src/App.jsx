import './App.css'
import Nav from './section/Nav/Nav'
import Contact from './section/Contact/Contact'
import Experience from './section/Experience/Experience'
import Footer from './section/Footer/Footer'
import Hero from './section/Hero/Hero'
import Projects from './section/Projects/Projects'
import Skills from './section/Skills/Skills'
import SectionReveal from './common/SectionReveal'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionReveal as="section">
        <Projects />
      </SectionReveal>
      <SectionReveal as="section">
        <Skills />
      </SectionReveal>
      <SectionReveal as="section">
        <Experience />
      </SectionReveal>
      <SectionReveal as="section">
        <Contact />
      </SectionReveal>
      <Footer />
    </>
  )
}

export default App
