import { ArrowLeftIcon, ArrowRightIcon, PlayIcon, PauseIcon } from './Icons.jsx'

export default function DemoControls({ playing, onToggle, onNext, onPrev, phase, total, label }) {
  const stop = (fn) => (e) => {
    e.stopPropagation()
    fn()
  }

  return (
    <div className="demo-controls">
      <span className="dc-label">{label}</span>
      <span className="dc-counter">
        {String(phase + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <div className="dc-btns">
        <button className="dc-btn" onClick={stop(onPrev)} aria-label="Previous step">
          <ArrowLeftIcon size={16} />
        </button>
        <button className="dc-btn toggle" onClick={stop(onToggle)} aria-label="Toggle automatic play">
          {playing ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
        </button>
        <button className="dc-btn main" onClick={stop(onNext)} aria-label="Next step">
          Step <ArrowRightIcon size={15} />
        </button>
      </div>
      <span className="dc-hint">{playing ? 'auto playing' : 'click the stage, Space, or Step'}</span>
    </div>
  )
}