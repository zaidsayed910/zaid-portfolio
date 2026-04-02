import { useState, useEffect, useRef } from 'react'

const defaultOptions = { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }

export function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef(null)
  const opts = { ...defaultOptions, ...options }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true)
    }, opts)
    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.rootMargin, opts.threshold])

  return [ref, isInView]
}
