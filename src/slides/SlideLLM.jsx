import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise } from '../lib/motion.js'
import { BrainIcon, LayersIcon, EyeIcon, GaugeIcon, ClockIcon } from '../components/Icons.jsx'

const SPECTRUM = [
  {
    ref: 'SLM',
    name: 'Small language model',
    icon: BrainIcon,
    body: 'A slim brain that runs on a phone and replies fast. Great for lightweight, low cost chores.',
  },
  {
    ref: 'LLM',
    name: 'Large language model',
    icon: LayersIcon,
    body: 'The heavyweight in your agent. Handles almost any text task, from answers to code.',
    active: true,
  },
  {
    ref: 'VLM',
    name: 'Vision language model',
    icon: EyeIcon,
    body: 'An LLM with eyes. It understands images and video too, not just typed words.',
  },
]

const PARAMS = [
  {
    icon: ClockIcon,
    name: 'Context window',
    unit: 'tokens it can recall',
    body: 'How much the model can hold at once, like a desk that fills up. Beyond that, older words start to blur.',
  },
  {
    icon: GaugeIcon,
    name: 'Max tokens',
    unit: 'a reply limit',
    body: 'A ceiling on the answer. The model must finish inside this many pieces, no matter how long it wants to go.',
  },
  {
    icon: LayersIcon,
    name: 'Temperature',
    unit: 'creativity dial',
    body: 'Low is steady and precise. High is wander-y and creative. Agents usually run cool for dependable work.',
  },
]

export default function SlideLLM() {
  return (
    <SlideShell dense title="The brain on board, and its knobs">
      <motion.div variants={rise} className="llm-intro">
        An LLM is software trained on a mountain of text that got extremely good at predicting
        words. Every agent runs on one. They come in sizes, and they carry three dials you can turn.
      </motion.div>

      <div className="specs">
        {SPECTRUM.map((s) => (
          <motion.div key={s.ref} variants={rise} className={`card spec-card${s.active ? ' on' : ''}`}>
            <span className="spec-badge">
              <s.icon size={18} />
            </span>
            <span className="spec-ref">{s.ref}</span>
            <h3>{s.name}</h3>
            <p>{s.body}</p>
          </motion.div>
        ))}
      </div>

      <div className="params">
        {PARAMS.map((p) => (
          <motion.div key={p.name} variants={rise} className="card param-card">
            <span className="icon-badge sm">
              <p.icon size={18} />
            </span>
            <div className="param-txt">
              <h3>
                {p.name} <em>{p.unit}</em>
              </h3>
              <p>{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}