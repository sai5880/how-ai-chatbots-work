import { motion } from 'framer-motion'
import { rise } from '../lib/motion.js'

export default function Takeaway({ kicker, children }) {
  return (
    <motion.div variants={rise} className="takeaway">
      <span className="take-rule" aria-hidden="true" />
      {kicker && <span className="take-kicker">{kicker}</span>}
      <p className="take-line">{children}</p>
    </motion.div>
  )
}