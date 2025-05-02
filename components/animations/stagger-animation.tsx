"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface StaggerAnimationProps {
  children: ReactNode
  className?: string
  delayIncrement?: number
  initialDelay?: number
}

export default function StaggerAnimation({
  children,
  className,
  delayIncrement = 0.1,
  initialDelay = 0.2,
}: StaggerAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delayIncrement,
        delayChildren: initialDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
