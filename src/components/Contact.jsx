import { motion } from 'framer-motion'
import { useState } from 'react'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import mailIcon from '../assets/mail.svg'

const Contact = () => {
    const [copied, setCopied] = useState(false)
    const email = 'apoorv.umredkar@outlook.com'

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const socialLinks = [
        {
            icon: linkedinIcon,
            href: 'https://www.linkedin.com/in/apurva-umredkar/',
            label: 'LinkedIn',
        },
        {
            icon: githubIcon,
            href: 'https://github.com/apurvaumredkar',
            label: 'GitHub',
        },
        {
            icon: mailIcon,
            href: `mailto:${email}`,
            label: 'Email',
        },
    ]

    return (
        <section id="contact" className="pt-20 pb-48 px-6 md:px-16 lg:px-32 bg-transparent relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-gray-100 to-transparent rounded-full blur-3xl pointer-events-none -z-10 opacity-50"></div>

            <div className="max-w-4xl mx-auto text-center -translate-y-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold mb-8 uppercase tracking-tight"
                >
                    Let's Connect
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    I'm always open to discussing new research, AI innovations, or potential collaborations. Feel free to reach out!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-8"
                >
                    {/* Email Copy Button */}
                    <button
                        onClick={handleCopyEmail}
                        className="group relative bg-white border border-gray-200 px-8 py-4 rounded-full flex items-center gap-4 hover:shadow-xl transition-all duration-300 hover:border-gray-300"
                    >
                        <span className="text-xl md:text-2xl font-mono text-gray-800 group-hover:text-black transition-colors">
                            {email}
                        </span>
                        <div className="bg-gray-100 p-2 rounded-full group-hover:bg-gray-200 transition-colors">
                            {copied ? (
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            )}
                        </div>
                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            {copied ? 'Copied!' : 'Copy to clipboard'}
                        </span>
                    </button>

                    {/* Social Icons */}
                    <div className="flex gap-8 mt-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : undefined}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="p-3 bg-white rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100"
                                aria-label={link.label}
                            >
                                <img src={link.icon} alt={link.label} className="w-14 h-14 opacity-80 hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-gray-400">
                © {new Date().getFullYear()} Apurva Umredkar
            </div>
        </section>
    )
}

export default Contact
