import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import homeIcon from '../assets/home.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Check localStorage and apply saved preference on initial load
    const savedDarkMode = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(savedDarkMode)

    if (savedDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode
    console.log('Toggle clicked. Current:', isDarkMode, '-> New:', newDarkMode)
    setIsDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
      console.log('Added dark class. Classes:', document.documentElement.className)
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
      console.log('Removed dark class. Classes:', document.documentElement.className)
    }

    // Force a re-render by dispatching a custom event
    window.dispatchEvent(new CustomEvent('darkModeChange', { detail: { isDark: newDarkMode } }))
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-16 lg:px-32 py-6 flex items-center justify-between">
        {/* Home/Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          <img src={homeIcon} alt="Home" className="w-8 h-8 dark:invert" />
        </button>

        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => scrollToSection('experience')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors uppercase"
          >
            MY BACKGROUND
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors uppercase"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors uppercase"
          >
            SKILLS
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
