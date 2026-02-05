'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * Animated hero content wrapper.
 * Handles the fade-in-up animation with reduced motion support,
 * keeping the parent page as a server component.
 */
export default function HeroSection({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }
      }
      className={className}
    >
      {children}
    </motion.div>
  )
}
