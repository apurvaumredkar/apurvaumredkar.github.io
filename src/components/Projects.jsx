import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import projectsData from '../data/projects.json'
import githubIcon from '../assets/github.svg'

const ProjectModal = ({ project, onClose }) => {
  const huggingFaceLogoUrl = "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg"

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 backdrop-blur-md bg-white/30 dark:bg-black/30 z-50 flex items-center justify-center p-6"
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-3 dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{project.tech}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 text-3xl leading-none transition-colors"
          >
            ×
          </button>
        </div>
        <ul className="space-y-4 mb-6">
          {project.points.map((point, idx) => (
            <li key={idx} className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {point}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 flex-wrap">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-4 h-4 dark:invert"
              />
              View on GitHub
            </a>
          )}
          {project.huggingFaceUrl && (
            <a
              href={project.huggingFaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              <img
                src={huggingFaceLogoUrl}
                alt="Hugging Face"
                className="w-4 h-4"
              />
              Try it out
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

const ProjectCard = ({ title, tech, onClick, delay, colorIndex }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isHovered, setIsHovered] = useState(false)

  const colors = ['#A2D2DF', '#F6EFBD', '#E4C087', '#BC7C7C']
  const hoverColor = colors[colorIndex % colors.length]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      onClick={onClick}
      className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 aspect-square flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 group relative overflow-hidden"
      style={{
        backgroundColor: isHovered ? hoverColor : undefined,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className={`text-2xl md:text-3xl font-semibold mb-4 text-center transition-colors duration-300 ${isHovered ? 'text-gray-900' : 'text-gray-800 dark:text-white'}`}>{title}</h3>
      <p className={`text-xs font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isHovered ? 'text-gray-700' : 'text-gray-500 dark:text-gray-400'}`}>{tech}</p>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const projects = projectsData.projects

  return (
    <section id="projects" className="min-h-screen py-32 px-6 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-28">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-semibold mb-20 text-center uppercase dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px]">
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
