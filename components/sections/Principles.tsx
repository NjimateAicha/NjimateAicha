'use client';

import { Lang, PRINCIPLES } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

export default function Principles({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="principles" className="section section--panel principles-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.principlesEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.principlesTitle}</h2></Reveal>
      </div>

      <div className="principles-list">
        {PRINCIPLES.map((principle, i) => (
          <Reveal key={principle.title.fr} delay={(i % 2) * 0.06} className="principle-item">
            <h3>{principle.title[lang]}</h3>
            <p>{principle.body[lang]}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
