'use client';

import { motion, useReducedMotion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.1 }
  }
};

const word = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: '0%', transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const } }
};

export default function SplitReveal({ text, className }: { text: string; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span className={className} variants={container} initial="hidden" animate="show" style={{ display: 'inline' }}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.28em' }}>
          <motion.span variants={word} style={{ display: 'inline-block' }}>{w}</motion.span>
        </span>
      ))}
    </motion.span>
  );
}
