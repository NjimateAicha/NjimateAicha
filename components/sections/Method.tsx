'use client';

import { Lang, METHOD_NOTE, METHOD_STEPS } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

export default function Method({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="method" className="section section--panel method-section">
      <div className="section__heading section__heading--center">
        <Reveal><p className="eyebrow">{t.methodEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.methodTitle}</h2></Reveal>
      </div>

      <div className="method-steps">
        {METHOD_STEPS.map((step, i) => (
          <Reveal key={step.title.fr} delay={i * 0.06} className="method-step">
            <span className="method-step__index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title[lang]}</h3>
            <p>{step.description[lang]}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12}>
        <p className="method-note">{METHOD_NOTE[lang]}</p>
      </Reveal>
    </section>
  );
}
