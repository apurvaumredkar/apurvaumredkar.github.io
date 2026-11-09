import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import profilePic from '../assets/profile.jpg'
// Hosted on Cloudflare R2 behind the cdn.apurvau.dev custom domain (not in this repo)
const resumePdf = 'https://cdn.apurvau.dev/Resume_Apurva_Umredkar.pdf'

const ResumeModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
      className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center p-3 md:p-6"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-4 w-full max-w-5xl h-[90dvh] flex flex-col relative"
      >
        {/* Header with Download and Close buttons */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold uppercase">Resume</h3>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                const link = document.createElement('a')
                link.href = resumePdf
                link.download = 'Resume_Apurva_Umredkar.pdf'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Download
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume"
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none w-10 h-10 transition-colors"
            >
              ×
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 overflow-hidden rounded-2xl">
          <iframe
            src={resumePdf}
            className="w-full h-full"
            title="Resume PDF"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

const Hero = () => {
  const [showResume, setShowResume] = useState(false)

  return (
    <section id="hero" className="min-h-svh flex flex-col justify-center items-center px-6 bg-transparent pt-24 pb-12 md:pt-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-purple-100/20 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-5xl relative z-10"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 md:mb-10 flex justify-center relative z-50"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-lg opacity-20 scale-110"></div>
            <img
              src={profilePic}
              alt="Portrait of Apurva Umredkar"
              width="270"
              height="270"
              fetchPriority="high"
              decoding="async"
              className="w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] md:w-[270px] md:h-[270px] rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* The name is a real <h1>: shown as text on phones, as ASCII art on desktop */}
        <h1 className="md:sr-only text-4xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900 mb-4">
          Apurva Umredkar
        </h1>

        <motion.pre
          aria-hidden="true"
          className="hidden md:block text-[0.4rem] md:text-[0.6rem] lg:text-xs font-mono mb-6 leading-tight text-gray-900 overflow-x-auto select-none opacity-80 hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {`
 
 █████╗ ██████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗     ██╗   ██╗███╗   ███╗██████╗ ███████╗██████╗ ██╗  ██╗ █████╗ ██████╗ 
██╔══██╗██╔══██╗██║   ██║██╔══██╗██║   ██║██╔══██╗    ██║   ██║████╗ ████║██╔══██╗██╔════╝██╔══██╗██║ ██╔╝██╔══██╗██╔══██╗
███████║██████╔╝██║   ██║██████╔╝██║   ██║███████║    ██║   ██║██╔████╔██║██████╔╝█████╗  ██║  ██║█████╔╝ ███████║██████╔╝
██╔══██║██╔═══╝ ██║   ██║██╔══██╗╚██╗ ██╔╝██╔══██║    ██║   ██║██║╚██╔╝██║██╔══██╗██╔══╝  ██║  ██║██╔═██╗ ██╔══██║██╔══██╗
██║  ██║██║     ╚██████╔╝██║  ██║ ╚████╔╝ ██║  ██║    ╚██████╔╝██║ ╚═╝ ██║██║  ██║███████╗██████╔╝██║  ██╗██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝  ╚═══╝  ╚═╝  ╚═╝     ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝
                                                                                                                          
`}
        </motion.pre>

        <motion.p
          className="text-sm sm:text-lg md:text-2xl text-gray-600 mb-6 font-light tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI Engineer <span className="mx-2 text-gray-300">|</span> Research Enthusiast
        </motion.p>

        <p className="max-w-2xl mx-auto mb-10 text-base md:text-lg leading-relaxed text-gray-600">
          AI Software Developer at Vaspian, building RAG chatbots, conversational AI agents and MCP integrations.
          MS in Computer Science &amp; Engineering (AI/ML) from the University at Buffalo, with prior experience
          in SAP integrations at Capgemini and published research in edge computing.
        </p>

        <motion.button
          onClick={() => {
            // Mobile browsers (notably iOS Safari) can't render PDFs inside an iframe: open natively instead
            if (window.matchMedia('(max-width: 767px)').matches) {
              window.open(resumePdf, '_blank', 'noopener')
            } else {
              setShowResume(true)
            }
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-black rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gray-800 rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
          <span className="relative flex items-center gap-2">
            MY RESUME
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </AnimatePresence>
    </section>
  )
}

export default Hero
