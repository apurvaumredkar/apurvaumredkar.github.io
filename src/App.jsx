import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NetBackground from './components/NetBackground'

function App() {
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900 min-h-screen relative selection:bg-black selection:text-white">
      <NetBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />

      {/* Copyright Footer */}
      <div className="fixed bottom-4 left-6 md:left-16 lg:left-32 text-xs text-gray-400 z-30 mix-blend-difference">
        © {new Date().getFullYear()} Apurva Umredkar
      </div>
    </div>
  )
}

export default App
