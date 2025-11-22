import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Skills from './components/Skills'
import NetBackground from './components/NetBackground'

import Contact from './components/Contact'

function App() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900 min-h-screen relative selection:bg-black selection:text-white">
      <NetBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Publication />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
