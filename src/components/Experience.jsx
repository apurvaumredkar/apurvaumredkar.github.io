import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import educationData from '../data/education.json'
import vaspianLogo from '../assets/vaspian.svg'
import capgeminiLogo from '../assets/capgemini.svg'
import ubLogo from '../assets/ub.svg'
import vnitLogo from '../assets/vnit.svg'

const ExperienceCard = ({ title, roles, company, period, delay, yearRange, logo, active }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Split yearRange into start and end year
  const [startYear, endYear] = yearRange.split(' - ')

  return (
    <div className="flex gap-4 md:gap-12 mb-16 relative group">
      {/* Timeline marker - hidden on mobile */}
      <div className="hidden md:flex flex-col items-center w-24 relative flex-shrink-0">
        <div className="h-full w-[2px] bg-gray-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 group-last:bottom-auto group-last:h-1/2"></div>
        <div className="w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm z-10 mt-8 relative">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 whitespace-nowrap pr-2">{endYear}</div>
        </div>
        <div className="flex-1"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white z-10 mb-8 relative">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 whitespace-nowrap pr-2">{startYear}</div>
        </div>
      </div>

      {/* Card content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="flex-1 bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200"
      >
        <div className="flex-1 space-y-4">
          {roles ? (
            <>
              {roles.map((role, i) => (
                <div key={i}>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{role.title}</h3>
                  <span className="flex items-center gap-2 text-sm text-gray-400 font-mono uppercase tracking-wider">
                    <span className={`w-2 h-2 rounded-full ${active && i === 0 ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                    {role.period}
                  </span>
                  {i < roles.length - 1 && <div className="mt-4 border-t border-gray-100"></div>}
                </div>
              ))}
              <p className="text-lg text-gray-600 font-medium">{company}</p>
            </>
          ) : (
            <>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-lg text-gray-600 font-medium">{company}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                {period}
              </div>
            </>
          )}
        </div>
        {logo && (
          <div className="flex-shrink-0 md:w-48 w-32 self-start md:self-center opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500">
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
    <div className="flex gap-4 md:gap-12 mb-16 relative group">
      {/* Timeline marker - hidden on mobile */}
      <div className="hidden md:flex flex-col items-center w-24 relative flex-shrink-0">
        <div className="h-full w-[2px] bg-gray-200 absolute top-0 bottom-0 left-1/2 -translate-x-1/2 group-last:bottom-auto group-last:h-1/2"></div>
        <div className="w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm z-10 mt-8 relative">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 whitespace-nowrap pr-2">{endYear}</div>
        </div>
        <div className="flex-1"></div>
        <div className="w-3 h-3 rounded-full bg-gray-300 border-2 border-white z-10 mb-8 relative">
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bold text-gray-400 whitespace-nowrap pr-2">{startYear}</div>
        </div>
      </div>

      {/* Card content */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay }}
        className="flex-1 bg-white rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200"
      >
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{degree}</h3>
            <p className="text-lg text-gray-600 font-medium">{school}</p>
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500">
            <span className="font-mono uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">{period}</span>
            {gpa && <span className="font-semibold text-black bg-yellow-100 px-3 py-1 rounded-full">{gpa}</span>}
          </div>
        </div>
        {logo && (
          <div className="flex-shrink-0 md:w-32 w-24 self-start md:self-center opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500">
            <img src={logo} alt={school} className="w-full h-auto object-contain" />
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
      roles: [
        { title: 'AI Software Developer', period: '02/2026 – Present' },
        { title: 'AI Product Development Intern', period: '09/2025 – 11/2025' },
      ],
      active: true,
      company: 'Vaspian LLC',
      yearRange: '2025 - Present',
      logo: vaspianLogo,
      points: [
        'Gained practical experience in integrating MCP servers, deploying containers with Docker, and managing version control using Git.',
        'Developed a RAG-powered FAQ chatbot using n8n workflows and Bluemesh AI Studio, leveraging prompt engineering, structured output generation, and a knowledge base built from call transcripts.',
        'Created a conversational AI agent in Eleven Labs and integrated it with Airtable using webhooks to automate the management of webinar invitations and customer response tracking.',
      ],
    },
    {
      roles: [
        { title: 'Associate Consultant', period: '04/2024 – 07/2024' },
        { title: 'Senior Analyst', period: '08/2022 – 03/2024' },
      ],
      company: 'Capgemini Technology Services India Limited',
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
    <section id="experience" className="min-h-screen pt-28 bg-transparent">
      {/* Headings section with black background */}
      <div className="bg-white/80 backdrop-blur-md sticky top-[80px] z-30 shadow-sm border-b border-white/20">
        <div className="flex w-full max-w-7xl mx-auto">
          <button
            onClick={() => setActiveTab('experience')}
            className={`text-2xl md:text-4xl font-bold py-8 md:py-12 transition-all duration-500 uppercase flex items-center justify-center cursor-pointer relative overflow-hidden group ${activeTab === 'experience'
              ? 'w-[60%] text-white bg-black'
              : 'w-[40%] text-gray-400 bg-gray-50 hover:bg-gray-100'
              }`}
          >
            <span className="relative z-10">Experience</span>
            {activeTab === 'experience' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`text-2xl md:text-4xl font-bold py-8 md:py-12 transition-all duration-500 uppercase flex items-center justify-center cursor-pointer relative overflow-hidden group ${activeTab === 'education'
              ? 'w-[60%] text-white bg-black'
              : 'w-[40%] text-gray-400 bg-gray-50 hover:bg-gray-100'
              }`}
          >
            <span className="relative z-10">Education</span>
            {activeTab === 'education' && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Content section */}
      <div className="py-20 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'experience' ? (
                <>
                  {experiences.map((exp, idx) => (
                    <ExperienceCard
                      key={idx}
                      {...exp}
                      delay={idx * 0.1}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience
