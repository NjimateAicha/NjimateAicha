'use client';

import { motion, useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function CountUp({
  value,
  prefix = '',
  suffix = '',
  padZero = false,
  className
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (shouldReduceMotion) {
        setDisplay(value);
      } else {
        motionValue.set(value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, value]);

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.round(v)));
    return () => unsub();
  }, [spring]);

  const displayValue = padZero ? String(display).padStart(2, '0') : display;

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </motion.span>
  );
}
