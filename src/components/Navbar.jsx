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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-sm py-2' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Social Icons - Far Left */}
        <div className="flex gap-6 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="transition-all hover:scale-110 hover:opacity-80 opacity-60 hover:opacity-100"
            >
              <img src={link.icon} alt={link.label} className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Navigation Links with Home Button */}
        <div className="flex gap-2 items-center bg-white/50 backdrop-blur-md rounded-full p-1 border border-white/20 shadow-sm">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:bg-white rounded-full p-2 transition-all duration-300"
            aria-label="Home"
          >
            <img src={homeIcon} alt="Home" className="w-5 h-5 opacity-70" />
          </button>

          <div className="h-6 w-[1px] bg-gray-300 mx-1"></div>

          <button
            onClick={() => scrollToSection('experience')}
            className="text-xs font-semibold text-gray-600 hover:text-black px-4 py-2 rounded-full hover:bg-white transition-all duration-300 uppercase tracking-wider"
          >
            Background
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-xs font-semibold text-gray-600 hover:text-black px-4 py-2 rounded-full hover:bg-white transition-all duration-300 uppercase tracking-wider"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-xs font-semibold text-gray-600 hover:text-black px-4 py-2 rounded-full hover:bg-white transition-all duration-300 uppercase tracking-wider"
          >
            Skills
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
