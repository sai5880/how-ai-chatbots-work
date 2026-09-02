import { motion } from 'framer-motion'
import { stagger, rise } from '../lib/motion.js'

export default function SlideShell({ eyebrow, title, lead, children, dense }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className={`slide${dense ? ' dense' : ''}`}
    >
      {(eyebrow || title) && (
        <header className="slide-head">
          {eyebrow && (
            <motion.p variants={rise} className="eyebrow">
              {eyebrow}
            </motion.p>
          )}
          {title && (
            <motion.h2 variants={rise} className="slide-title">
              {title}
            </motion.h2>
          )}
          {lead && (
            <motion.p variants={rise} className="lead">
              {lead}
            </motion.p>
          )}
        </header>
      )}
      <div className="slide-body">{children}</div>
    </motion.div>
  )
}
