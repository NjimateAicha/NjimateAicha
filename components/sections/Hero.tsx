'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import CountUp from '../motion/CountUp';
import SplitReveal from '../motion/SplitReveal';

export default function Hero({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero-v2">
      <div className="hero-v2__bg" aria-hidden="true">
        <div className="hero-v2__grid" />
        <div className="hero-v2__glow" />
      </div>

      <div className="hero-v2__content">
        <p className="eyebrow">{t.heroEyebrow}</p>
        <h1 className="hero-v2__title">
          <SplitReveal text={t.heroTitle} />
        </h1>
        <motion.p
          className="hero-v2__lead"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {t.heroLead}
        </motion.p>
        <motion.div
          className="hero__actions"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <a href="#projects" className="btn btn--primary">{t.heroExplore}</a>
          <a href="#contact" className="btn btn--secondary">{t.heroTalk}</a>
        </motion.div>
      </div>

      <motion.div
        className="hero-v2__photo-wrap"
        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 32, scale: 0.96 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <div className="hero-v2__ring" aria-hidden="true" />
        <div className="hero-v2__photo-frame">
          <Image
            src="/images/profile/aicha-njimate-speaking.jpeg"
            alt="Aicha Njimate"
            width={640}
            height={800}
            className="hero-v2__photo"
            priority
          />
        </div>

        <motion.div
          className="hero-v2__float hero-v2__float--top"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <strong><CountUp value={25} suffix="+" /></strong>
          <span>companies &amp; projects</span>
        </motion.div>

        <motion.div
          className="hero-v2__float hero-v2__float--bottom"
          initial={shouldReduceMotion ? undefined : { opacity: 0, x: -18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
        >
          <span className="hero-v2__float-dot" />
          <span>Founder of FalconDeev</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
