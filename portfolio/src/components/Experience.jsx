import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import educationData from '../data/education.json'

const ExperienceCard = ({ title, company, period, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8"
    >
      <p className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{title}</p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{company}</p>
      <p className="text-gray-500 dark:text-gray-400">{period}</p>
    </motion.div>
  )
}

const EducationCard = ({ degree, school, gpa, period, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8"
    >
      <p className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white">{degree}</p>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">{school} {gpa && `(${gpa})`}</p>
      <p className="text-gray-500 dark:text-gray-400">{period}</p>
    </motion.div>
  )
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const experiences = [
    {
      title: 'AI Product Development Intern',
      company: 'Vaspian LLC',
      period: '09/2025 – Present',
      points: [
        'Gained practical experience in integrating MCP servers, deploying containers with Docker, and managing version control using Git.',
        'Developed a RAG-powered FAQ chatbot using n8n workflows and Bluemesh AI Studio, leveraging prompt engineering, structured output generation, and a knowledge base built from call transcripts.',
        'Created a conversational AI agent in Eleven Labs and integrated it with Airtable using webhooks to automate the management of webinar invitations and customer response tracking.',
      ],
    },
    {
      title: 'SAP ABAP Technical Consultant',
      company: 'Capgemini Technology Services India Limited',
      period: '08/2022 – 07/2024',
      points: [
        'Integrated external systems with SAP BRIM/SOM, serving over 10,000 users and reducing order processing time by 40% through scalable REST APIs using SAP ABAP, ABAP CDS, and BRF+.',
        'Collaborated with the data migration team to map over 500 fields across 5 production systems and led system integration tests for more than 25 interfaces alongside the security and QA teams.',
        'Resolved an average of 8-10 ServiceNow tickets weekly, encompassing production bug analysis and feature implementation through technical investigation and code development in SAP ACM.',
      ],
    },
  ]

  const education = educationData.education

  return (
    <section id="experience" className="min-h-screen pt-28">
      {/* Headings section with black background */}
      <div className="bg-white dark:bg-gray-900">
        <div className="flex w-full">
          <button
            onClick={() => setActiveTab('experience')}
            className={`text-4xl md:text-5xl font-semibold py-[72px] transition-all duration-300 uppercase flex items-center justify-center cursor-pointer ${
              activeTab === 'experience'
                ? 'w-[70%] text-white bg-black dark:bg-white dark:text-black'
                : 'w-[30%] text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800'
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`text-4xl md:text-5xl font-semibold py-[72px] transition-all duration-300 uppercase flex items-center justify-center cursor-pointer ${
              activeTab === 'education'
                ? 'w-[70%] text-white bg-black dark:bg-white dark:text-black'
                : 'w-[30%] text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-gray-900 dark:hover:bg-gray-800'
            }`}
          >
            Education
          </button>
        </div>
      </div>

      {/* Content section with white background */}
      <div className="bg-white dark:bg-gray-900 py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-[75%] mx-auto">
          {activeTab === 'experience' ? (
            <>
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} delay={idx * 0.2} />
              ))}
            </>
          ) : (
            <>
              {education.map((edu, idx) => (
                <EducationCard key={idx} {...edu} delay={idx * 0.1} />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
