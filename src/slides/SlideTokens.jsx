import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise, pop } from '../lib/motion.js'
import { LayersIcon, ScissorsIcon, FlaskIcon, CheckIcon } from '../components/Icons.jsx'

const COMMON = ['the', ' you', ' I', ' is', '!']

export default function SlideTokens() {
  return (
    <SlideShell dense eyebrow="A closer look" title="How the word pieces are made">
      <div className="split even">
        <motion.div variants={rise} className="card">
          <span className="icon-badge">
            <LayersIcon size={22} />
          </span>
          <h3>The dictionary</h3>
          <p>
            The model ships with one fixed dictionary of pieces: common words, word parts and
            punctuation. Everyday words map straight to a single entry.
          </p>
          <div className="guts-chips">
            {COMMON.map((w) => (
              <span key={w} className="token-chip sm">
                {w === ' I' ? '\u00A0I' : w}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={rise} className="card">
          <span className="icon-badge">
            <ScissorsIcon size={22} />
          </span>
          <h3>Unseen words get sliced</h3>
          <p>
            A brand new or very long word is simply rebuilt from smaller pieces the dictionary does
            know, so nothing is ever unknown to the model.
          </p>
          <div className="guts-chips">
            <span className="token-chip sm">the</span>
            <span className="split-hint sep">stays whole</span>
          </div>
          <div className="guts-chips">
            <span className="token-chip sm sliced">xeno</span>
            <span className="token-chip sm sliced">glyph</span>
          </div>
        </motion.div>
      </div>

      <motion.div variants={pop} className="card merge-card">
        <span className="icon-badge warn">
          <CheckIcon size={20} />
        </span>
        <div className="merge-txt">
          <h3>How the dictionary was built</h3>
          <p>
            A simple rule, run once before you ever chat: find the two letter chunks that appear
            together most often across a huge pile of real text, then merge them into one bigger
            piece. Repeat until the dictionary feels balanced.
          </p>
        </div>
        <div className="merge-seq">
          <span className="token-chip sm">a</span>
          <span className="token-chip sm">n</span>
          <em>merge</em>
          <span className="token-chip sm on">an</span>
        </div>
      </motion.div>
    </SlideShell>
  )
}