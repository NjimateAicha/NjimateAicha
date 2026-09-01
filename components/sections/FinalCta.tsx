'use client';

import { Calendar, MessageCircle } from 'lucide-react';
import { CALENDLY_URL, FINAL_CTA, Lang, WHATSAPP_PRO_URL } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

export default function FinalCta({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="contact" className="section final-cta-section">
      <Reveal className="final-cta">
        <span className="final-cta__accent" aria-hidden="true" />
        <p className="eyebrow">{t.finalCtaEyebrow}</p>
        <h2>{FINAL_CTA.title[lang]}</h2>
        <p className="final-cta__text">{FINAL_CTA.text[lang]}</p>
        <div className="final-cta__actions">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--lg">
            <Calendar size={18} strokeWidth={1.9} />
            {FINAL_CTA.cta[lang]}
          </a>
          <a href={WHATSAPP_PRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--lg">
            <MessageCircle size={18} strokeWidth={1.9} />
            {t.finalCtaWhatsapp}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
