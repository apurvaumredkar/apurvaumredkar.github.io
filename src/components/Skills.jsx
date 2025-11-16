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
      className="flex flex-col items-center gap-3 p-4"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      </div>
      <span className="text-sm text-gray-700 font-medium text-center">{skill.name}</span>
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
      className="flex-1 min-w-0"
    >
      <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 uppercase">{category.title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {category.skills.map((skill, idx) => (
          <SkillIcon key={skill.name} skill={skill} delay={delay + idx * 0.05} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-32 px-6 md:px-16 lg:px-32 bg-white pt-28">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-semibold mb-20 text-center uppercase"
      >
        Skills
      </motion.h2>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">
        {skillsData.categories.map((category, idx) => (
          <SkillCategory key={category.title} category={category} delay={idx * 0.2} />
        ))}
      </div>
    </section>
  )
}

export default Skills
