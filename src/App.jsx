import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import NetBackground from './components/NetBackground'

function App() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <NetBackground />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />

      {/* Copyright Footer */}
      <div className="fixed bottom-4 left-6 md:left-16 lg:left-32 text-xs text-gray-500 dark:text-gray-400 z-30">
        © {new Date().getFullYear()} Apurva Umredkar
      </div>
    </div>
  )
}

export default App
