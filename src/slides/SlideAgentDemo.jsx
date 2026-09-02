import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import DemoControls from '../components/Demo.jsx'
import useDemo from '../lib/useDemo.js'
import { pop } from '../lib/motion.js'
import { CheckIcon, LayersIcon, ScissorsIcon, HashIcon, BrainIcon, PlugIcon, BoltIcon, SendIcon } from '../components/Icons.jsx'
import Logo from '../components/Logo.jsx'

const QUESTION = 'How is the weather in Bangalore?'
const ANSWER = ['The', ' weather', ' in', ' Bangalore', ' is', ' 26°C', ' and', ' partly', ' cloudy', ' right now', '.']

const NODES = [
  { icon: LayersIcon, title: 'Context loaded', sub: 'system prompt + user text' },
  { icon: ScissorsIcon, title: 'Tokenizer', sub: 'to token IDs' },
  { icon: HashIcon, title: 'Embeddings', sub: 'meaning as numbers' },
  { icon: BrainIcon, title: 'Transformer think', sub: 'decides next piece' },
  { icon: PlugIcon, title: 'Tool: weather.api', sub: 'call, then read result' },
  { icon: BoltIcon, title: 'Compose reply', sub: 'pick answer tokens' },
  { icon: SendIcon, title: 'Stream final answer', sub: 'until a stop piece answers "end of sentence?"' },
]

const PHASE_TXT = [
  'Loading the system prompt and the user question.',
  'Tokenizer chops the question into token IDs.',
  'Meaning loaded as computed numbers.',
  'The Transformer decides a weather tool would help.',
  'Calling the weather API...',
  '26°C, partly cloudy came back.',
  'Composing the answer, one token at a time.',
  'Tokens arriving on the chat.',
  'End of sentence? Yes, a stop piece ended it. Response done.',
]

export default function SlideAgentDemo({ interval = 2000 }) {
  const { phase, next, prev, toggle, playing } = useDemo(9, {
    interval,
    auto: false,
  })

  const nodeActive = Math.min(phase, 6)
  const reveal = phase <= 5 ? 0 : phase === 6 ? 2 : phase === 7 ? 7 : ANSWER.length
  const done = phase === 8

  return (
    <SlideShell dense eyebrow="End to end" title="Watch one agent run">
      <DemoControls
        playing={playing}
        onToggle={toggle}
        onNext={next}
        onPrev={prev}
        phase={phase}
        total={9}
        label="Agent run"
      />

      <div className="demo" onClick={() => { if (!playing) next() }}>
        <motion.div variants={pop} className="demo-chat">
          <div className="dc-head">
            <span className="avatar tiny">
              <Logo height={14} />
            </span>
            <div>
              <strong>Customer chat</strong>
              <span className="online">
                <i /> agent online
              </span>
            </div>
          </div>
          <div className="dc-body">
            <div className="bubble user">{QUESTION}</div>
            {phase >= 1 && (
              <div className="bubble assistant dc-answer">
                <span className="avatar micro">
                  <Logo height={10} />
                </span>
                <span>
                  {ANSWER.slice(0, reveal).join('')}
                  {!done && <span className="caret dark" />}
                  {done && <CheckIcon size={13} />}
                </span>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div variants={pop} className="n8n">
          <div className="n8n-head">
            <span className="n8n-title">Agent run, frame by frame</span>
            <span className="n8n-status">
              <i className={phase >= 1 ? 'on' : 'idle'} /> live
            </span>
          </div>
          <div className="sys-chip">
            <strong>System</strong> you are a helpful assistant. Use the weather tool for forecasts.
          </div>
          <div className="n8n-rail">
            {NODES.map((n, i) => (
              <div
                key={n.title}
                className={`n8n-node${i === nodeActive && phase >= 1 && i <= nodeActive ? ' cur' : ''}${
                  i < nodeActive || phase === 8 ? ' done' : ''
                }`}
              >
                <span className="n8n-ico">
                  <n.icon size={15} />
                </span>
                <span className="n8n-txt">
                  <strong>{n.title}</strong>
                  <em>{n.sub}</em>
                </span>
                <span className="n8n-conn" />
              </div>
            ))}
          </div>
          <div className="n8n-foot">{PHASE_TXT[phase]}</div>
        </motion.div>
      </div>
    </SlideShell>
  )
}