"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  className?: string
  formatter?: (value: number) => string
}

export function AnimatedCounter({
  from,
  to,
  duration = 2000,
  className,
  formatter = (value) => value.toString(),
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const startTime = useRef<number | null>(null)
  const animationFrameId = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = timestamp - startTime.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      const currentCount = Math.floor(from + (to - from) * easeOutQuart)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrameId.current = requestAnimationFrame(animate)
      }
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [from, to, duration, isInView])

  return (
    <span ref={ref} className={className}>
      {formatter(count)}
    </span>
  )
}