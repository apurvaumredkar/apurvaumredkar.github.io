import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import homeIcon from '../assets/home.svg'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    {
      icon: linkedinIcon,
      href: 'https://www.linkedin.com/in/apurva-umredkar/',
      label: 'LinkedIn',
      hoverText: 'Connect with me',
    },
    {
      icon: githubIcon,
      href: 'https://github.com/apurvaumredkar',
      label: 'GitHub',
      hoverText: 'Check out my projects',
    },
    {
      icon: mailIcon,
      href: 'mailto:apoorv.umredkar@outlook.com',
      label: 'Email',
      hoverText: 'Reach out to me',
    },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled
        ? 'bg-white/70 backdrop-blur-xl shadow-sm py-2'
        : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-center">
        {/* Navigation Links with Home Button */}
        <div className="relative flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-sm w-[95%] max-w-[1100px]">

          {/* Grid Layout for Perfect Centering */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center w-full">

            {/* Left Side - Distributed Evenly */}
            <div className="hidden md:flex justify-around items-center w-full pr-8">
              <button
                onClick={() => scrollToSection('experience')}
                className="text-xs font-bold text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-widest hover:scale-110"
              >
                Background
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-xs font-bold text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-widest hover:scale-110"
              >
                Projects
              </button>
            </div>

            {/* Home Button (Center) */}
            <div className="flex justify-center">
              <button
                onClick={() => scrollToSection('hero')}
                className="bg-black hover:bg-gray-800 rounded-full p-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 flex-shrink-0 z-10"
                aria-label="Home"
              >
                <img src={homeIcon} alt="Home" className="w-6 h-6 brightness-0 invert" />
              </button>
            </div>

            {/* Right Side - Distributed Evenly */}
            <div className="hidden md:flex justify-around items-center w-full pl-8">
              <button
                onClick={() => scrollToSection('publication')}
                className="text-xs font-bold text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-widest hover:scale-110"
              >
                Publication
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-xs font-bold text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-widest hover:scale-110"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-xs font-bold text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-widest hover:scale-110"
              >
                Contact
              </button>
            </div>

          </div>

          {/* Mobile Fallback */}
          <div className="md:hidden flex gap-4 justify-between w-full px-2">
            <button onClick={() => scrollToSection('experience')} className="text-xs font-bold text-gray-600">Exp</button>
            <button onClick={() => scrollToSection('projects')} className="text-xs font-bold text-gray-600">Proj</button>
            <button onClick={() => scrollToSection('hero')} className="bg-black text-white rounded-full p-2"><img src={homeIcon} className="w-4 h-4 invert" /></button>
            <button onClick={() => scrollToSection('publication')} className="text-xs font-bold text-gray-600">Pub</button>
            <button onClick={() => scrollToSection('contact')} className="text-xs font-bold text-gray-600">Contact</button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
