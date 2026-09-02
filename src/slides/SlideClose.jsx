import { motion } from 'framer-motion'
import Logo from '../components/Logo.jsx'
import { rise, pop } from '../lib/motion.js'

export default function SlideClose() {
  return (
    <motion.div
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
      initial="hidden"
      animate="show"
      className="close-slide"
    >
      <motion.div variants={pop} className="close-logo">
        <Logo height={64} />
      </motion.div>

      <motion.h2 variants={rise} className="close-title">
        That is the whole <span className="grad">agent</span>.
      </motion.h2>

      <motion.p variants={rise} className="close-sub">
        An LLM turns words into meaning and back. An agent wraps that brain in rules, tools and an
        aim, then loops until the job is truly done. Same brain, now with hands.
      </motion.p>

      <motion.p variants={rise} className="thanks">
        Thank you. Now, questions.
      </motion.p>
    </motion.div>
  )
}