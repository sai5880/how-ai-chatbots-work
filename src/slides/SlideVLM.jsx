import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise } from '../lib/motion.js'
import { TextCursorIcon, EyeIcon, CheckIcon, CloseIcon, ArrowRightIcon } from '../components/Icons.jsx'

const LLM_GOOD = ['fast, light and cheap chatbots', 'writing and summarizing', 'logic-heavy tasks like code']
const LLM_AVOID = ['anything that needs eyes', 'reading images, charts, screenshots']

const VLM_GOOD = ['describe what a photo shows', 'read diagrams, charts and signs', 'decode a screenshot of an error']

export default function SlideVLM() {
  return (
    <SlideShell dense title="LLM or VLM, which one do you need?">
      <div className="vlm">
        <motion.div variants={rise} className="card side-card">
          <span className="side-head">
            <span className="icon-badge">
              <TextCursorIcon size={20} />
            </span>
            <div>
              <h3>LLM</h3>
              <span className="tag">text only</span>
            </div>
          </span>
          <ul className="do-list">
            {LLM_GOOD.map((x) => (
              <li key={x}>
                <CheckIcon size={15} /> {x}
              </li>
            ))}
            <li className="no">
              <CloseIcon size={15} /> {LLM_AVOID[0]}
            </li>
            <li className="no">
              <CloseIcon size={15} /> {LLM_AVOID[1]}
            </li>
          </ul>
        </motion.div>

        <motion.span variants={rise} className="vlm-cmp">
          <ArrowRightIcon size={22} />
        </motion.span>

        <motion.div variants={rise} className="card side-card vlm-accent">
          <span className="side-head">
            <span className="icon-badge">
              <EyeIcon size={20} />
            </span>
            <div>
              <h3>VLM</h3>
              <span className="tag">adds eyes</span>
            </div>
          </span>
          <ul className="do-list">
            {VLM_GOOD.map((x) => (
              <li key={x}>
                <CheckIcon size={15} /> {x}
              </li>
            ))}
            <li>
              <CheckIcon size={15} /> still does all the text depth of an LLM
            </li>
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  )
}