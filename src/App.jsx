import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publication from './components/Publication'
import Skills from './components/Skills'
import NetBackground from './components/NetBackground'
import Contact from './components/Contact'

function FloatingActions() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()
  const isPortfolio = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* Back to Top — only after scrolling */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="relative group"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="text-black text-5xl leading-none
                         hover:scale-125 hover:opacity-70 transition-all duration-200"
            >
              ↑
            </button>
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm font-medium text-black whitespace-nowrap
                             opacity-0 group-hover:opacity-100 transition-opacity duration-200
                             pointer-events-none">
              Back to the top!
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Me — only on portfolio */}
      {isPortfolio && (
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label="Contact Me"
          className="px-6 py-3 rounded-full bg-black text-white
                     text-xs font-bold uppercase tracking-widest shadow-lg whitespace-nowrap
                     hover:bg-gray-800 hover:scale-105 transition-all duration-200"
        >
          Contact Me
        </button>
      )}
    </div>
  )
}

function Portfolio() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const section = location.state?.scrollTo
    if (!section) return
    // Clear the state so back-navigation doesn't re-trigger the scroll
    navigate('/', { replace: true, state: {} })
    const attempt = (tries = 0) => {
      const el = document.getElementById(section)
      if (el) { el.scrollIntoView({ behavior: 'smooth' }) }
      else if (tries < 5) { setTimeout(() => attempt(tries + 1), 80) }
    }
    attempt()
  }, [location.state, navigate])

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 text-gray-900 min-h-screen relative selection:bg-black selection:text-white">
      <NetBackground />
      <Hero />
      <Experience />
      <Projects />
      <Publication />
      <Skills />
      <Contact />
    </div>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.25, ease: 'easeIn' } },
}

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()
  return (
    <>
      <Navbar />
      <FloatingActions />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><Portfolio /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
