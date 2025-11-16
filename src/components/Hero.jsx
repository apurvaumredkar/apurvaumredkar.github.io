import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import profilePic from '../assets/profile.jpg'
import resumePdf from '../assets/Resume_Apurva_Umredkar.pdf'

const ResumeModal = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 backdrop-blur-md bg-white/30 z-50 flex items-center justify-center p-6"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-4 w-full max-w-5xl h-[90vh] flex flex-col relative"
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
              className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-colors"
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
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-white to-gray-50 pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-5xl"
      >
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center relative z-50"
        >
          <img
            src={profilePic}
            alt="Apurva Umredkar"
            className="w-[230px] h-[230px] md:w-[270px] md:h-[270px] rounded-full object-cover border-4 border-gray-200"
          />
        </motion.div>

        <motion.pre
          className="text-[0.4rem] md:text-[0.6rem] lg:text-xs font-mono mb-3 leading-tight text-gray-900 overflow-x-auto"
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
          className="text-base md:text-2xl text-gray-600 mb-10 font-semibold uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          AI Engineer ● Research Enthusiast
        </motion.p>

        <motion.button
          onClick={() => setShowResume(true)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block bg-transparent text-black border-[3.2px] border-black px-8 py-2.5 rounded-full text-2xl font-medium hover:bg-black hover:text-white transition-colors"
        >
          MY RESUME
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
      </AnimatePresence>
    </section>
  )
}

export default Hero
