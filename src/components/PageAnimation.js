import React from 'react'
import { motion } from 'framer-motion'

export default function PageAnimation({ children }) {
    const transition = {
        initial: {opacity: 0, y: 300},
        animate: {opacity: 1, y: 0},
        exit: {opacity: 0, y: -200},
    }

  return (
        <motion.div variants={transition}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration: 1}}
        >
            {children}
        </motion.div>
  )
}
