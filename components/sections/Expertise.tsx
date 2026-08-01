'use client';

import { Code2, Compass, Database, LucideIcon, TrendingUp } from 'lucide-react';
import { EXPERTISE, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

const ICONS: Record<string, LucideIcon> = { Compass, Code2, Database, TrendingUp };

export default function Expertise({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="expertise" className="section expertise-section">
      <div className="section__heading section__heading--center">
        <Reveal><p className="eyebrow">{t.expertiseEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.expertiseTitle}</h2></Reveal>
      </div>

      <div className="expertise-grid-v2">
        {EXPERTISE.map((block, i) => {
          const Icon = ICONS[block.icon];
          return (
            <Reveal key={block.title.fr} delay={i * 0.06} className="expertise-block">
              <span className="expertise-block__icon"><Icon size={22} strokeWidth={1.75} /></span>
              <h3>{block.title[lang]}</h3>
              <p>{block.description[lang]}</p>
              <div className="expertise-block__keywords">
                {block.keywords.map((k) => (
                  <span key={k.fr}>{k[lang]}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
