'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

export default function Faq({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section faq-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.faqEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.faqTitle}</h2></Reveal>
      </div>

      <div className="faq-list">
        {FAQ.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.question.fr} delay={(i % 3) * 0.04} className="faq-item">
              <h3 className="faq-item__question">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.question[lang]}</span>
                  <Plus
                    size={18}
                    strokeWidth={2}
                    className={`faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`}
                  />
                </button>
              </h3>
              {isOpen && <p className="faq-item__answer">{item.answer[lang]}</p>}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
