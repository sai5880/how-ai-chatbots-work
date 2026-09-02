import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import { rise, pop } from '../lib/motion.js'
import { BookmarkIcon, PlugIcon, LayersIcon, BoltIcon } from '../components/Icons.jsx'

const PATH =
  'M84 140 C 200 70 250 70 340 140 C 420 210 480 210 560 140 C 640 70 700 70 780 140 C 860 210 920 210 984 140'

const NODES = [
  { x: 84, n: '1', l1: 'User', l2: 'asks' },
  { x: 340, n: '2', l1: 'Agent sizes', l2: 'up the task' },
  { x: 560, n: '3', l1: 'Picks', l2: 'a tool' },
  { x: 780, n: '4', l1: 'Tool runs', l2: 'and returns' },
  { x: 984, n: '5', l1: 'Agent composes', l2: 'the reply' },
]

const PIECES = [
  { icon: BookmarkIcon, title: 'System prompt', body: 'The job description the agent follows. It never shows up in the chat.' },
  { icon: PlugIcon, title: 'Tools', body: 'The utilities it can call, like weather, search, calendar, or your own apps.' },
  { icon: LayersIcon, title: 'Live context', body: 'The conversation plus tool results, so the agent keeps the thread straight.' },
]

export default function SlideAgentFlow() {
  return (
    <SlideShell dense eyebrow="How an agent works" title="Think, pick a tool, act, report back">
      <motion.div variants={pop} className="map-wrap">
        <svg viewBox="0 0 1070 250" role="img" aria-label="Agent flow from user, to tools, back to answer">
          <defs>
            <linearGradient id="agGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FF7503" />
              <stop offset="100%" stopColor="#FF5029" />
            </linearGradient>
            <linearGradient id="agNode" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF7503" />
              <stop offset="100%" stopColor="#FF5029" />
            </linearGradient>
          </defs>
          <path d={PATH} fill="none" stroke="#F3E2CF" strokeWidth="4" strokeLinecap="round" />
          <path d={PATH} fill="none" stroke="url(#agGrad)" strokeWidth="4" strokeLinecap="round" className="flowline" />
          <path
            d="M 560 184 C 432 214 300 216 300 190 C 300 170 480 168 560 184"
            fill="none"
            stroke="#FFB877"
            strokeWidth="2"
            strokeDasharray="4 8"
            className="flowline slow"
            transform="translate(0,6)"
          />
          <circle r="8" fill="#FF5029" stroke="#fff" strokeWidth="3">
            <animateMotion dur="6s" repeatCount="indefinite" path={PATH} />
          </circle>
          <circle r="5" fill="#FFB25C" opacity="0.85">
            <animateMotion dur="6s" begin="-3s" repeatCount="indefinite" path={PATH} />
          </circle>
          {NODES.map((s, i) => (
            <g key={s.n}>
              <circle cx={s.x} cy="140" r="34" className="stn-pulse" style={{ animationDelay: `${i * 1.4}s` }} />
              <circle cx={s.x} cy="140" r="34" fill="#fff" stroke="#F0DECA" strokeWidth="2" />
              <circle cx={s.x} cy="140" r="22" fill="url(#agNode)" />
              <text x={s.x} y="146" textAnchor="middle" className="stn-num sm">
                {s.n}
              </text>
              <text x={s.x} y="208" textAnchor="middle" className="stn-l1 sm">
                {s.l1}
              </text>
              <text x={s.x} y="228" textAnchor="middle" className="stn-l2 sm">
                {s.l2}
              </text>
            </g>
          ))}
        </svg>
        <div className="loop-tag">
          <BoltIcon size={14} /> may loop around the tools more than once
        </div>
      </motion.div>

      <div className="grid3 flows">
        {PIECES.map((p) => (
          <motion.div key={p.title} variants={rise} className="card flow-card">
            <span className="icon-badge sm">
              <p.icon size={18} />
            </span>
            <div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  )
}