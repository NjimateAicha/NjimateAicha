'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CALENDLY_URL, CONTACT } from '../app/content';

/**
 * Visibility is driven entirely by IntersectionObserver, never by a scroll
 * listener: a 1px sentinel placed 300px from the top of the document flips
 * `pastThreshold` once, and a second observer watches the footer + contact
 * section to hide the dock before it can ever cover them.
 */
export default function FloatingDock() {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [pastThreshold, setPastThreshold] = useState(false);
  const [nearFooterOrContact, setNearFooterOrContact] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) => setPastThreshold(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targets = [document.querySelector('.site-footer'), document.getElementById('contact')].filter(
      (el): el is Element => Boolean(el)
    );
    if (targets.length === 0) return;
    const observer = new IntersectionObserver((entries) => {
      setNearFooterOrContact(entries.some((entry) => entry.isIntersecting));
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const visible = pastThreshold && !nearFooterOrContact;
  const transition = { duration: shouldReduceMotion ? 0 : 0.18 };

  return (
    <>
      <div ref={sentinelRef} className="floating-dock-sentinel" aria-hidden="true" />
      <AnimatePresence>
        {visible && (
          <motion.div
            className="floating-dock"
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
            transition={transition}
          >
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-dock__item floating-dock__item--whatsapp"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} strokeWidth={1.75} />
              <span>Discuter</span>
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="floating-dock__item floating-dock__item--calendly"
              aria-label="Calendly"
            >
              <Calendar size={18} strokeWidth={1.75} />
              <span>Réserver un appel</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
