import { motion } from 'framer-motion'
import SlideShell from '../components/SlideShell.jsx'
import DemoControls from '../components/Demo.jsx'
import useDemo from '../lib/useDemo.js'
import { pop, rise } from '../lib/motion.js'
import { CheckIcon, ScissorsIcon, HashIcon, LayersIcon, BrainIcon, BoltIcon, SendIcon, ArrowRightIcon, RefreshIcon } from '../components/Icons.jsx'

const WORD = 'How is the weather in Bangalore?'
const TOKENS = ['How', ' is', ' the', ' weather', ' in', ' Bangalore', '?']

const STAGES = [
  { name: 'User input', note: 'plain sentence, in English' },
  { name: 'Tokenizer', note: 'chops it into small pieces' },
  { name: 'Token IDs', note: 'each piece gets a dictionary number' },
  { name: 'Embeddings', note: 'how similar do the pieces feel' },
  { name: 'Transformer', note: 'which pieces matter, and how' },
  { name: 'Probability', note: 'scores for every possible next piece' },
  { name: 'Pick next', note: 'the winner is the highest probability' },
  { name: 'Append + repeat', note: 'join it on, predict the next again' },
  { name: 'End of sentence?', note: 'keep going, or stop when a stop piece appears' },
  { name: 'Response', note: 'the answer is complete and sent back' },
]

const PROBS = [
  { t: '"today"', pct: 41, win: true },
  { t: '"the"', pct: 27 },
  { t: '"it"', pct: 18 },
  { t: '"sunny"', pct: 14 },
]

export default function SlideGeneration({ interval = 2000 }) {
  const { phase, next, prev, toggle, playing } = useDemo(STAGES.length, {
    interval,
    auto: false,
  })
  const cur = STAGES[phase]

  return (
    <SlideShell dense eyebrow="How an LLM writes a reply" title="From sentence to sentence">
      <DemoControls
        playing={playing}
        onToggle={toggle}
        onNext={next}
        onPrev={prev}
        phase={phase}
        total={STAGES.length}
        label="Generation pipeline"
      />

      <div className="gen" onClick={() => { if (!playing) next() }}>
        <motion.div variants={rise} className="gen-rail">
          {STAGES.map((s, i) => (
            <div
              key={s.name}
              className={`gen-step${i === phase ? ' cur' : ''}${i < phase || (i === 0 && phase === STAGES.length - 1) ? ' done' : ''}`}
            >
              <span className="step-no">{i + 1}</span>
              <span className="step-name">{s.name}</span>
              {i < phase && <CheckIcon size={13} />}
            </div>
          ))}
        </motion.div>

        <motion.div variants={pop} className="gen-view">
          <div className="gen-stage-label">
            <span className="pn">{String(phase + 1).padStart(2, '0')}</span>
            <strong>{cur.name}</strong>
            <span className="gen-note">{cur.note}</span>
          </div>
          <div className="gen-body">
            <GenView phase={phase} />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  )
}

function GenView({ phase }) {
  if (phase === 0)
    return (
      <div className="gen-bubble">
        {WORD}
        <span className="caret dark" />
      </div>
    )

  if (phase === 1)
    return (
      <div className="gen-row">
        {TOKENS.map((t) => (
          <span key={t} className="token-chip sm sliced">
            {t}
          </span>
        ))}
      </div>
    )

  if (phase === 2)
    return (
      <div className="gen-ids">
        {TOKENS.map((t, i) => (
          <span key={t} className="id-pair">
            <b>{t}</b>
            <span className="token-id">{2100 + i * 137}</span>
          </span>
        ))}
      </div>
    )

  if (phase === 3)
    return (
      <div className="verbose">
        <p>
          Each Embedding Layer helps the model answer: how similar are these tokens to each other? Words that feel alike sit close, words that do not, sit far apart.
        </p>
        <div className="vec-row">
          {TOKENS.map((t, i) => (
            <span key={i} className="vec-col">
              <span className="vec-bars">
                {[40, 80, 30, 95, 55, 65, 20, 88, 44, 72].slice(0, 6 + (i % 4)).map((v, j) => (
                  <i key={j} style={{ height: `${v}%` }} />
                ))}
              </span>
              <em>{t}</em>
            </span>
          ))}
        </div>
      </div>
    )

  if (phase === 4)
    return (
      <div className="verbose">
        <div className="attention">
          {TOKENS.map((t, i) => (
            <span key={i} className="attn-token">
              {t}
            </span>
          ))}
        </div>
        <p>
          Each Transformer Layer helps the model answer: which tokens should I pay attention to, and how do they relate to each other? That is how the model understands your whole question at once.
        </p>
      </div>
    )

  if (phase === 5)
    return (
      <div className="prob-list">
        {PROBS.map((p, i) => (
          <div key={p.t} className={`prob-row${p.win ? ' win' : ''}`}>
            <span className="prob-tok">{p.t}</span>
            <span className="prob-track">
              <motion.span
                className="prob-fill"
                initial={{ width: 0 }}
                animate={{ width: `${p.pct}%` }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}
              />
            </span>
            <span className="prob-pct">{p.pct}%</span>
          </div>
        ))}
      </div>
    )

  if (phase === 6)
    return (
      <div className="pick-row">
        <span className="pick-choice">"today"</span>
        <BoltIcon size={18} />
        <span className="pick-result">now on the end of the sentence</span>
      </div>
    )

  if (phase === 7)
    return (
      <div className="verbose">
        <div className="gen-bubble">
          The weather in Bangalore is<span className="caret dark" />
        </div>
        <div className="loop-dia">
          <span className="loop-node">score next words</span>
          <span className="loop-arrow">
            <ArrowRightIcon size={16} />
          </span>
          <span className="loop-node">pick one</span>
          <span className="loop-arrow">
            <ArrowRightIcon size={16} />
          </span>
          <span className="loop-node">add it</span>
          <RefreshIcon className="loop-back" size={16} />
        </div>
        <p className="loop-cap">process, predict, add. Then do it all over again for the next piece.</p>
      </div>
    )

  if (phase === 8)
    return (
      <div className="end-check">
        <div className="gen-bubble end-final">The weather in Bangalore is pleasant today.</div>
        <span className="end-q">End of sentence?</span>
        <div className="end-rows">
          <span className="end-no">
            <BoltIcon size={15} /> no, keep going
          </span>
          <span className="end-yes">
            <CheckIcon size={15} /> yes, the stop piece was picked
          </span>
        </div>
      </div>
    )

  return (
    <div className="gen-done">
      <span className="done-badge">
        <CheckIcon size={16} />
      </span>
      <p>The weather in Bangalore is pleasant today.</p>
      <span className="done-note">the complete reply is sent back</span>
    </div>
  )
}