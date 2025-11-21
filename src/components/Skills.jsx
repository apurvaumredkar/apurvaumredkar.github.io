import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillsData from '../data/skills.json'

const SkillIcon = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3 p-4 group"
    >
      <div className="w-20 h-20 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain relative z-10 filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>
      <span className="text-sm text-gray-500 font-medium text-center group-hover:text-black transition-colors duration-300">{skill.name}</span>
    </motion.div>
  )
}

const SkillCategory = ({ category, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex-1 min-w-0 bg-gray-50/50 rounded-3xl p-8 border border-gray-100"
    >
      <h3 className="text-xl font-bold mb-8 text-center text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-4">{category.title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
        {category.skills.map((skill, idx) => (
          <SkillIcon key={skill.name} skill={skill} delay={delay + idx * 0.05} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-32 px-6 md:px-16 lg:px-32 bg-transparent pt-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-24 text-center uppercase tracking-tight"
      >
        Technical Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {skillsData.categories.map((category, idx) => (
          <SkillCategory key={category.title} category={category} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  )
}

export default Skills
