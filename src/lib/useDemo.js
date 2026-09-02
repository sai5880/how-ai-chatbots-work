import { useEffect, useState } from 'react'

export default function useDemo(
  total,
  { interval = 2000, auto = false } = {},
) {
  const [phase, setPhase] = useState(0)
  const [playing, setPlaying] = useState(auto)

  useEffect(() => {
    if (!playing) return undefined
    const iv = setInterval(() => setPhase((p) => (p + 1) % total), interval)
    return () => clearInterval(iv)
  }, [playing, interval, total])

  const next = () => setPhase((p) => (p + 1) % total)
  const prev = () => setPhase((p) => (p <= 0 ? total - 1 : p - 1))
  const toggle = () => setPlaying((v) => !v)

  useEffect(() => {
    const onAdvance = () => setPhase((p) => (p + 1) % total)
    window.addEventListener('demo-advance', onAdvance)
    return () => window.removeEventListener('demo-advance', onAdvance)
  }, [total])

  return { phase, next, prev, toggle, playing }
}