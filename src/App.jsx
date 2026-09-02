import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './components/Logo.jsx'
import { ArrowLeftIcon, ArrowRightIcon, RefreshIcon, SlidersIcon } from './components/Icons.jsx'
import SlideTitle from './slides/SlideTitle.jsx'
import SlideAgentsIntro from './slides/SlideAgentsIntro.jsx'
import SlideLLM from './slides/SlideLLM.jsx'
import SlideTokens from './slides/SlideTokens.jsx'
import SlideEmbeddings from './slides/SlideEmbeddings.jsx'
import SlideGeneration from './slides/SlideGeneration.jsx'
import SlideVLM from './slides/SlideVLM.jsx'
import SlideAgentFlow from './slides/SlideAgentFlow.jsx'
import SlideAgentDemo from './slides/SlideAgentDemo.jsx'
import SlideClose from './slides/SlideClose.jsx'

const SLIDES = [
  SlideTitle,
  SlideAgentsIntro,
  SlideLLM,
  SlideTokens,
  SlideEmbeddings,
  SlideGeneration,
  SlideVLM,
  SlideAgentFlow,
  SlideAgentDemo,
  SlideClose,
]

const DEMO_IDX = new Set([5, 8])

const sectionVariants = {
  enter: (dir) => ({ x: dir > 0 ? 90 : -90, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir) => ({
    x: dir > 0 ? -70 : 70,
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' },
  }),
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const [anim, setAnim] = useState(45)
  const touch = useRef(null)
  const total = SLIDES.length
  const stepMs = 600 + Math.round(5400 * (1 - anim / 100))

  const go = useCallback(
    (next) => {
      setIndex((current) => {
        if (next < 0 || next >= total || next === current) return current
        setDir(next > current ? 1 : -1)
        return next
      })
    },
    [total],
  )

  const restart = useCallback(() => go(0), [go])

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === ' ') {
        e.preventDefault()
        if (DEMO_IDX.has(index)) window.dispatchEvent(new Event('demo-advance'))
        else go(index + 1)
        return
      }
      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
          e.preventDefault()
          go(index + 1)
          break
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault()
          go(index - 1)
          break
        case 'Home':
          go(0)
          break
        case 'End':
          go(total - 1)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) document.exitFullscreen()
          else document.documentElement.requestFullscreen().catch(() => {})
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, go, total])

  const onTouchStart = (e) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 64 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      go(index + (dx < 0 ? 1 : -1))
    }
  }

  const Slide = SLIDES[index]
  const num = String(index + 1).padStart(2, '0')
  const isLast = index === total - 1

  return (
    <div className="deck" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <button className="brandmark" onClick={restart} aria-label="Back to start">
        <Logo height={26} />
      </button>

      <div className="watermark" aria-hidden="true">
        {num}
      </div>

      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.main
          className="stage"
          key={index}
          custom={dir}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <Slide interval={stepMs} />
        </motion.main>
      </AnimatePresence>

      <div className="amb-controls">
        <SlidersIcon size={16} />
        <span className="amb-label">anim speed</span>
        <input
          className="amb-slider"
          type="range"
          min="0"
          max="100"
          value={anim}
          onChange={(e) => setAnim(Number(e.target.value))}
          aria-label="Animation speed"
        />
        <span className="amb-value">{(stepMs / 1000).toFixed(1)}s / step</span>
      </div>

      <nav className="dots" aria-label="Slides">
        {SLIDES.map((S, i) => (
          <button
            key={i}
            className={`dot${i === index ? ' active' : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </nav>

      <div className="controls">
        <span className="counter">
          {num} <em>/</em> {String(total).padStart(2, '0')}
        </span>
        <button
          className="btn-icon"
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label="Previous slide"
        >
          <ArrowLeftIcon size={18} />
        </button>
        <button className="btn-next" onClick={isLast ? restart : () => go(index + 1)}>
          {isLast ? (
            <>
              Restart <RefreshIcon size={17} />
            </>
          ) : (
            <>
              Next <ArrowRightIcon size={17} />
            </>
          )}
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Slide {index + 1} of {total}
      </p>
    </div>
  )
}