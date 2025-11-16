import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import educationData from '../data/education.json'
import vaspianLogo from '../assets/vaspian.svg'
import capgeminiLogo from '../assets/capgemini.svg'
import ubLogo from '../assets/ub.svg'
import vnitLogo from '../assets/vnit.svg'

const ExperienceCard = ({ title, company, period, delay, yearRange, logo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Split yearRange into start and end year
  const [startYear, endYear] = yearRange.split(' - ')

  return (
    <div className="flex gap-4 md:gap-8 mb-20">
      {/* Timeline marker - hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0 w-20 relative self-stretch">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-8">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {endYear}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {startYear}
        </div>
      </div>

      {/* Card content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 flex items-center justify-between gap-6 shadow-lg hover:shadow-xl transition-shadow"
        style={{ minHeight: '200px' }}
      >
        <div className="flex-1">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">{title}</p>
        </div>
        {logo && (
          <div className="flex-shrink-0 flex items-center" style={{ width: '60%', maxWidth: '300px' }}>
            <img src={logo} alt={company} className="w-full h-auto object-contain" />
          </div>
        )}
      </motion.div>
    </div>
  )
}

// Helper function to extract year range from period string for education
const extractYearRange = (period) => {
  if (!period) return ''
  // Handle "Present" case
  if (period.includes('Present')) {
    const match = period.match(/(\d{4})/)
    if (match) return `${match[1]} - Present`
  }
  // Extract both years from range
  const matches = period.match(/(\d{4})/g)
  if (matches && matches.length >= 2) {
    return `${matches[0]} - ${matches[1]}`
  }
  return period
}

const EducationCard = ({ degree, school, gpa, period, delay, logo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const yearRange = extractYearRange(period)
  const [startYear, endYear] = yearRange.split(' - ')

  return (
    <div className="flex gap-4 md:gap-8 mb-20">
      {/* Timeline marker - hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0 w-20 relative self-stretch">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-8">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
          <div className="w-3 h-3 rounded-full bg-gray-400 dark:bg-gray-600 border-2 border-white dark:border-gray-900"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {endYear}
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 text-2xl font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          {startYear}
        </div>
      </div>

      {/* Card content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-12 flex items-center justify-between gap-6 shadow-lg hover:shadow-xl transition-shadow"
        style={{ minHeight: '200px' }}
      >
        <div className="flex-1">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">{degree}</p>
          {gpa && <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{gpa}</p>}
        </div>
        {logo && (
          <div className="flex-shrink-0 flex items-center justify-center" style={{ width: '30%', maxWidth: '180px' }}>
            <img src={logo} alt={school} className="w-full h-auto object-contain dark:invert" style={{ aspectRatio: '1' }} />
          </div>
        )}
      </motion.div>
    </div>
  )
}

const Experience = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const experiences = [
    {
      title: 'AI Product Development Intern',
      company: 'Vaspian LLC',
      period: '09/2025 – Present',
      yearRange: '2025 - Present',
      logo: vaspianLogo,
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
      yearRange: '2022 - 2024',
      logo: capgeminiLogo,
      points: [
        'Integrated external systems with SAP BRIM/SOM, serving over 10,000 users and reducing order processing time by 40% through scalable REST APIs using SAP ABAP, ABAP CDS, and BRF+.',
        'Collaborated with the data migration team to map over 500 fields across 5 production systems and led system integration tests for more than 25 interfaces alongside the security and QA teams.',
        'Resolved an average of 8-10 ServiceNow tickets weekly, encompassing production bug analysis and feature implementation through technical investigation and code development in SAP ACM.',
      ],
    },
  ]

  // Map logo strings to imported logos
  const logoMap = {
    ub: ubLogo,
    vnit: vnitLogo,
  }

  const education = educationData.education.map(edu => ({
    ...edu,
    logo: logoMap[edu.logo] || null
  }))

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
        <div className="max-w-5xl mx-auto">
          {activeTab === 'experience' ? (
            <>
              {experiences.map((exp, idx) => (
                <ExperienceCard
                  key={idx}
                  {...exp}
                  delay={idx * 0.2}
                />
              ))}
            </>
          ) : (
            <>
              {education.map((edu, idx) => (
                <EducationCard
                  key={idx}
                  {...edu}
                  delay={idx * 0.1}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience
