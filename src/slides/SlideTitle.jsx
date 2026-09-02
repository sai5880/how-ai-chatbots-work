import { motion } from 'framer-motion'
import OrbField from '../components/OrbField.jsx'
import { rise } from '../lib/motion.js'
import { SparkIcon, BotIcon, PlugIcon } from '../components/Icons.jsx'

export default function SlideTitle() {
  return (
    <div className="title-slide">
      <div className="hero-stage" aria-hidden="true">
        <OrbField />
      </div>
      <div className="hero-copy">
        <motion.p variants={rise} className="eyebrow-chip">
          <SparkIcon size={15} /> A plain english talk
        </motion.p>

        <motion.h1 variants={rise} className="hero-title">
          How <span className="grad">AI agents</span> actually work
        </motion.h1>

        <motion.p variants={rise} className="hero-sub">
          From a friendly chat to the tools they quietly use behind the scenes,
          here is what is really going on under the hood, and why agents are not
          just smarter chatbots.
        </motion.p>

        <motion.div variants={rise} className="hero-chips">
          <span className="chip">
            <BotIcon size={14} /> What an agent is
          </span>
          <span className="chip">
            <PlugIcon size={14} /> Tools they use
          </span>
          <span className="chip">
            <SparkIcon size={14} /> Live end to end demo
          </span>
        </motion.div>

        <motion.p variants={rise} className="hero-hint">
          Move with the arrow keys or the buttons below. Press <kbd>F</kbd> for fullscreen.
        </motion.p>
      </div>
    </div>
  )
}