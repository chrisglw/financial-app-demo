import { useEffect, useRef, useState } from 'react'

export function useInViewOnce(options) {
  const ref = useRef(null)
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || hasEntered) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [hasEntered, options])

  return [ref, hasEntered]
}
