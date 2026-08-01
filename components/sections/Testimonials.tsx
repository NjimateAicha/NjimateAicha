'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Lang, Testimonial, TESTIMONIALS } from '../../app/content';
import { UI } from '../../app/ui-strings';
import { getSupabaseClient } from '../../lib/supabaseClient';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

export default function Testimonials({ lang, onOpenReview }: { lang: Lang; onOpenReview: () => void }) {
  const t = UI[lang];
  const [approvedReviews, setApprovedReviews] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    supabase
      .from('testimonials')
      .select('client_name, company, rating, message')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        if (!data) return;
        setApprovedReviews(
          data.map((row) => ({
            name: row.client_name,
            role: { fr: '', en: '' },
            quote: { fr: row.message, en: row.message },
            rating: row.rating,
            project: row.company
          }))
        );
      });
  }, []);

  const allTestimonials = [...TESTIMONIALS, ...approvedReviews];
  const current = allTestimonials[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + allTestimonials.length) % allTestimonials.length);
  };

  return (
    <section id="testimonial" className="section">
      <div className="section__heading section__heading--row">
        <div>
          <Reveal><p className="eyebrow">{t.testimonialsEyebrow}</p></Reveal>
          <Reveal delay={0.08}><h2>{t.testimonialsTitle}</h2></Reveal>
        </div>
        <button className="btn btn--secondary" onClick={onOpenReview}>{t.reviewCta}</button>
      </div>

      <div className="testimonial-slider">
        <span className="testimonial-slider__quote-mark" aria-hidden="true">“</span>
        <div className="testimonial-slider__viewport">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={`${current.name}-${index}`}
              custom={direction}
              initial={{ opacity: 0, x: 40 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 * direction }}
              transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="testimonial-slider__card"
            >
              {current.image && (
                <MediaOrPlaceholder
                  src={current.image}
                  alt={current.name}
                  label={t.missingImageLabel}
                  className="testimonial-slider__image"
                />
              )}
              <p className="testimonial-slider__rating">{'★'.repeat(current.rating)}</p>
              <p className="testimonial-slider__text">{current.quote[lang]}</p>
              <h3>{current.name}</h3>
              {current.role[lang] && <p className="testimonial-card__role">{current.role[lang]}</p>}
              <p className="text-link text-link--static">{current.project}</p>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="testimonial-slider__controls">
          <button aria-label="Previous" onClick={() => go(-1)}>←</button>
          <div className="testimonial-slider__dots">
            {allTestimonials.map((testimonial, i) => (
              <span key={testimonial.name} className={i === index ? 'active' : ''} />
            ))}
          </div>
          <button aria-label="Next" onClick={() => go(1)}>→</button>
        </div>
      </div>
    </section>
  );
}
