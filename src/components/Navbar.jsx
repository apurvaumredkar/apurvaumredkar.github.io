import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Background',  section: 'experience' },
  { label: 'Projects',    section: 'projects' },
  { label: 'Publication', section: 'publication' },
  { label: 'Skills',      section: 'skills' },
]


const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const close = () => setOpen(false)

  const handleNavLink = (section) => {
    close()
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: section } })
    }
  }

  return (
    <>
      {/* Hamburger / Close button — always visible */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="fixed top-5 left-5 z-[60] flex flex-col justify-center items-center
                   w-10 h-10 rounded-full bg-black
                   shadow-sm hover:shadow-md hover:bg-gray-800
                   transition-all duration-300 hover:scale-105 gap-[5px]"
      >
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-[2px] bg-white rounded-full origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.15 }}
          className="block w-5 h-[2px] bg-white rounded-full"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className="block w-5 h-[2px] bg-white rounded-full origin-center"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Blurred backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-sm"
            />

            {/* Floating pills — no background panel */}
            <motion.nav
              key="sidebar"
              initial={{ x: -160, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -160, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed left-16 top-20 z-50 flex flex-col gap-2 w-44"
            >
              {/* My Portfolio subheading */}
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0, duration: 0.22 }}
                className="w-full text-center text-[10px] font-bold uppercase tracking-widest
                           text-gray-400 pb-1"
              >
                — My Portfolio —
              </motion.p>

              {navLinks.map(({ label, section }, i) => (
                <motion.button
                  key={section}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i, duration: 0.22 }}
                  onClick={() => handleNavLink(section)}
                  className="w-full text-center text-xs font-bold uppercase tracking-widest
                             py-2.5 px-5 rounded-full
                             bg-white/80 backdrop-blur-md shadow-sm
                             border border-gray-200 text-gray-700
                             hover:bg-black hover:text-white hover:border-black
                             transition-all duration-200"
                >
                  {label}
                </motion.button>
              ))}

            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
