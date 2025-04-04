"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface AnimatedStatProps {
  value: string
  label: string
  color?: string
}

export default function AnimatedStat({ value, label, color = "text-blue-700" }: AnimatedStatProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <motion.p
        className={`text-4xl font-bold ${color}`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, type: "spring" }}
      >
        {value}
      </motion.p>
      <p className="text-gray-700">{label}</p>
    </div>
  )
}

