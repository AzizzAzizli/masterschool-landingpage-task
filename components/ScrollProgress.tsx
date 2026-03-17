'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none">
      {/* Background track indicator (very subtle) */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px]" />
      
      {/* Animated Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full origin-left bg-linear-to-r from-blue-600 via-primary-500 to-purple-600"
        style={{ 
          scaleX,
          boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)'
        }}
      >
        {/* Trailing light effect at the tip of the bar */}
        <div className="absolute right-0 top-0 h-full w-[100px] bg-linear-to-r from-transparent to-white/40 blur-[2px]" />
      </motion.div>
      
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20" />
    </div>
  );
}