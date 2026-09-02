import { useEffect, useState } from 'react'

export default function useTypewriter(text, { speed = 42, delay = 700 } = {}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(0)
    let interval
    const timeout = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, delay)
    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, speed, delay])

  return {
    shown: text.slice(0, count),
    done: count >= text.length,
  }
}
