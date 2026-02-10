"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Professional page load overlay with blur effect using Framer Motion
 * @param {string} variant - Animation style: 'blur', 'fade', 'scale-blur', 'minimal'
 * @param {number} delay - Delay before starting fade out (ms)
 * @param {number} duration - Animation duration (ms)
 */
export default function ReloadBlur({ 
  variant = 'blur', 
  delay = 200, 
  duration = 600 
}) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, delay)
    
    return () => clearTimeout(timer)
  }, [delay])

  const variants = {
    // Blur fade out - smooth and professional
    blur: {
      initial: { 
        opacity: 1, 
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      },
      exit: { 
        opacity: 0, 
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        transition: { duration: duration / 1000, ease: [0.43, 0.13, 0.23, 0.96] }
      }
    },
    // Simple fade - minimal and fast
    fade: {
      initial: { opacity: 1 },
      exit: { 
        opacity: 0,
        transition: { duration: duration / 1000, ease: 'easeOut' }
      }
    },
    // Scale + blur - more dynamic
    'scale-blur': {
      initial: { 
        opacity: 1, 
        scale: 1,
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      },
      exit: { 
        opacity: 0, 
        scale: 1.05,
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        transition: { duration: duration / 1000, ease: [0.43, 0.13, 0.23, 0.96] }
      }
    },
    // Minimal - very subtle
    minimal: {
      initial: { 
        opacity: 0.5,
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)'
      },
      exit: { 
        opacity: 0,
        backdropFilter: 'blur(0px)',
        WebkitBackdropFilter: 'blur(0px)',
        transition: { duration: duration / 1000, ease: 'easeInOut' }
      }
    }
  }

  const selectedVariant = variants[variant] || variants.blur

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial="initial"
          exit="exit"
          variants={selectedVariant}
          className="fixed inset-0 z-[9999] pointer-events-none bg-white/30 dark:bg-black/30"
        />
      )}
    </AnimatePresence>
  )
}
