'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50 hidden lg:block"
      >
        <svg className="w-16 h-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="rgba(212, 175, 55, 0.1)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
            }}
            strokeDasharray="0 1"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="100%" stopColor="#F4E4C1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gold text-xs font-bold"
          >
            ↑
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}
