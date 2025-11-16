import { motion } from 'framer-motion'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: linkedinIcon,
      href: 'https://linkedin.com/in/apurvaumredkar',
      label: 'LinkedIn',
    },
    {
      icon: githubIcon,
      href: 'https://github.com/apurvaumredkar',
      label: 'GitHub',
    },
    {
      icon: mailIcon,
      href: 'mailto:apoorv.umredkar@outlook.com',
      label: 'Email',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6"
    >
      {socialLinks.map((link, idx) => (
        <motion.a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={link.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
          className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
        >
          <img src={link.icon} alt={link.label} className="w-10 h-10" />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialSidebar
