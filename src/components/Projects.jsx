import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import projectsData from '../data/projects.json'
import githubIcon from '../assets/github.svg'
import huggingfaceIcon from '../assets/huggingface.svg'
import paperPdf from '../assets/CAP_RP_Draft_v5.pdf'

const PaperModal = ({ paperUrl, onClose }) => {
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
          <h3 className="text-2xl font-semibold uppercase">Research Paper Draft</h3>
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation()
                const link = document.createElement('a')
                link.href = paperPdf
                link.download = 'CAP_RP_Draft_v5.pdf'
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
            src={paperPdf}
            className="w-full h-full"
            title="Research Paper PDF"
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose }) => {
  const [showPaper, setShowPaper] = useState(false)

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
        className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">{project.title}</h3>
            <p className="text-sm text-gray-500 font-mono">{project.tech}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none transition-colors"
          >
            ×
          </button>
        </div>
        <div className="space-y-4 mb-6">
          {project.points.map((point, idx) => (
            <div key={idx} className="text-gray-700 leading-relaxed text-lg">
              {typeof point === 'string' ? (
                <p>{point}</p>
              ) : (
                <>
                  <p className="font-semibold mb-2">{point.title}</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    {point.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-3 flex-wrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6e5494] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#5a4678] transition-colors"
            >
              <svg className="w-4 h-4" fill="white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.003,0C7.17,0,0.008,7.162,0.008,15.997c0,7.067,4.582,13.063,10.94,15.179c0.8,0.146,1.052-0.328,1.052-0.752c0-0.38,0.008-1.442,0-2.777c-4.449,0.967-5.371-2.107-5.371-2.107c-0.727-1.848-1.775-2.34-1.775-2.34c-1.452-0.992,0.109-0.973,0.109-0.973c1.605,0.113,2.451,1.649,2.451,1.649c1.427,2.443,3.743,1.737,4.654,1.329c0.146-1.034,0.56-1.739,1.017-2.139c-3.552-0.404-7.286-1.776-7.286-7.906c0-1.747,0.623-3.174,1.646-4.292C7.28,10.464,6.73,8.837,7.602,6.634c0,0,1.343-0.43,4.398,1.641c1.276-0.355,2.645-0.532,4.005-0.538c1.359,0.006,2.727,0.183,4.005,0.538c3.055-2.07,4.396-1.641,4.396-1.641c0.872,2.203,0.323,3.83,0.159,4.234c1.023,1.118,1.644,2.545,1.644,4.292c0,6.146-3.74,7.498-7.304,7.893C19.479,23.548,20,24.508,20,26c0,2,0,3.902,0,4.428c0,0.428,0.258,0.901,1.07,0.746C27.422,29.055,32,23.062,32,15.997C32,7.162,24.838,0,16.003,0z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.huggingFaceUrl && (
            <a
              href={project.huggingFaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFD21E] text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-[#FFC107] transition-colors"
            >
              <img
                src={huggingfaceIcon}
                alt="Hugging Face"
                className="w-4 h-4"
              />
              Try it out
            </a>
          )}
          {project.paperUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowPaper(true)
              }}
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              Read Paper Draft
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {showPaper && <PaperModal paperUrl={project.paperUrl} onClose={() => setShowPaper(false)} />}
      </AnimatePresence>
    </motion.div>
  )
}

const ProjectCard = ({ title, tech, onClick, delay, colorIndex }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)

  const colors = ['#A2D2DF', '#F6EFBD', '#E4C087', '#BC7C7C', '#ADEBB3']
  const hoverColor = colors[colorIndex % colors.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onClick={onClick}
      className="bg-white rounded-3xl p-8 aspect-square flex flex-col justify-center items-center shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group relative overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ backgroundColor: hoverColor }}
      ></div>

      <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center text-gray-900 group-hover:scale-105 transition-transform duration-300">{title}</h3>
        <div className="h-1 w-12 bg-gray-200 mx-auto rounded-full mb-4 group-hover:w-24 group-hover:bg-black transition-all duration-500"></div>
        <p className="text-sm font-mono text-center text-gray-500 max-w-[80%] mx-auto leading-relaxed">{tech}</p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-black pb-1">View Project</span>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = projectsData.projects

  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-16 lg:px-32 bg-transparent pt-28 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-24 text-center uppercase tracking-tight relative z-10"
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tech={project.tech}
            onClick={() => setSelectedProject(project)}
            delay={idx * 0.15}
            colorIndex={idx}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
