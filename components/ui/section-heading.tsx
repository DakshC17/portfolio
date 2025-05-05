"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  subtitleClassName?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  className,
  subtitleClassName,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-2", centered && "flex flex-col items-center justify-center text-center", className)}>
      <motion.h2
        className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={cn(
            "max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
            subtitleClassName,
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}