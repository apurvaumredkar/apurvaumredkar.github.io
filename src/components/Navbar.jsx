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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 md:px-16 lg:px-32 py-6 flex items-center justify-between">
        {/* Social Icons - Far Left */}
        <div className="flex gap-8 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={link.label}
              className="transition-all hover:scale-110 py-3"
            >
              <img src={link.icon} alt={link.label} className="w-8 h-8" />
            </a>
          ))}
        </div>

        {/* Navigation Links with Home Button */}
        <div className="flex gap-4 items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-70 transition-opacity py-3"
            aria-label="Home"
          >
            <img src={homeIcon} alt="Home" className="w-8 h-8" />
          </button>

          <button
            onClick={() => scrollToSection('experience')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors uppercase"
          >
            MY BACKGROUND
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors uppercase"
          >
            PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors uppercase"
          >
            SKILLS
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
