'use client';
import { useTranslations } from 'next-intl';
import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useMemo } from 'react';

const PARTICLES = [
  { x: 8, duration: 12, delay: 0 },
  { x: 19, duration: 15, delay: 1.5 },
  { x: 31, duration: 11, delay: 3 },
  { x: 44, duration: 17, delay: 0.8 },
  { x: 55, duration: 13, delay: 2.2 },
  { x: 63, duration: 16, delay: 4 },
  { x: 72, duration: 14, delay: 1 },
  { x: 81, duration: 18, delay: 2.8 },
  { x: 89, duration: 12, delay: 3.5 },
  { x: 96, duration: 15, delay: 0.5 },
];

const WaveBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      style={{ height: '180px' }}
    >
      <defs>
        <path
          id="wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        />
      </defs>
      <g>
        <use
          href="#wave"
          x="48"
          y="0"
          style={{
            fill: 'rgba(var(--primary-rgb, 99,102,241), 0.07)',
            animation: 'wave1 10s linear infinite',
          }}
        />
        <use
          href="#wave"
          x="48"
          y="3"
          style={{
            fill: 'rgba(var(--primary-rgb, 99,102,241), 0.05)',
            animation: 'wave2 13s linear infinite reverse',
          }}
        />
        <use
          href="#wave"
          x="48"
          y="6"
          style={{
            fill: 'rgba(var(--primary-rgb, 99,102,241), 0.03)',
            animation: 'wave1 16s linear infinite',
          }}
        />
      </g>
    </svg>

    {/* Üst dalga */}
    <svg
      className="absolute top-0 left-0 w-full rotate-180"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      style={{ height: '120px' }}
    >
      <g>
        <use
          href="#wave"
          x="48"
          y="0"
          style={{
            fill: 'rgba(var(--accent-rgb, 139,92,246), 0.05)',
            animation: 'wave2 14s linear infinite',
          }}
        />
        <use
          href="#wave"
          x="48"
          y="4"
          style={{
            fill: 'rgba(var(--accent-rgb, 139,92,246), 0.03)',
            animation: 'wave1 18s linear infinite reverse',
          }}
        />
      </g>
    </svg>

    <style>{`
      @keyframes wave1 {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes wave2 {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }
    `}</style>
  </div>
);

export const BottomSection = () => {
  const t = useTranslations('bottom-section');

  return (
    <section className="py-16 md:py-24 bg-background/10 dark:bg-background/5 relative overflow-hidden">
      {/* Glow'lar */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <WaveBackground />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-white! mb-6">{t('title')}</h2>
          <p className="section-subtitle text-gray-300! mb-10 mx-auto">{t('subtitle')}</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="#contact" className="btn-primary">
              {t('button')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none"
          style={{ left: `${p.x}%` }}
          initial={{ opacity: 0, y: '110%' }}
          animate={{ opacity: [0, 0.3, 0], y: '-10%' }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        />
      ))}
    </section>
  );
};