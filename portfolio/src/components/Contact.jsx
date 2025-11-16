import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl"
      >
        <h2 className="text-5xl md:text-6xl font-semibold mb-8">Let's Connect</h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
          I'm always interested in discussing new opportunities, collaborations, or innovative AI projects.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <a
              href="mailto:apoorv.umredkar@outlook.com"
              className="text-2xl text-apple-blue hover:underline transition-all"
            >
              apoorv.umredkar@outlook.com
            </a>
          </div>
          <div className="text-xl text-gray-600">
            Buffalo, NY | +1-716-750-8918
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex gap-8 justify-center mt-12"
        >
          <a
            href="https://github.com/apurvaumredkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-apple-blue hover:underline transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/apurvaumredkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-apple-blue hover:underline transition-all"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-gray-400 text-sm"
      >
        © 2025 Apurva Umredkar
      </motion.footer>
    </section>
  )
}

export default Contact
