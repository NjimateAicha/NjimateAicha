'use client';

import { ArrowRight, Code2, LayoutDashboard, LucideIcon, Rocket } from 'lucide-react';
import { EXPERTISE_HOME_INTRO, EXPERTISE_PILLARS, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

const ICONS: Record<string, LucideIcon> = { Rocket, LayoutDashboard, Code2 };

export default function Expertise({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="expertise" className="section expertise-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.expertiseEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.expertiseTitle}</h2></Reveal>
        <Reveal delay={0.14}><p className="section__intro">{EXPERTISE_HOME_INTRO[lang]}</p></Reveal>
      </div>

      <div className="pillars-grid">
        {EXPERTISE_PILLARS.map((block, i) => {
          const Icon = ICONS[block.icon] ?? Rocket;
          return (
            <Reveal key={block.title.fr} delay={i * 0.06} className="pillar-card">
              <span className="pillar-card__index">{String(i + 1).padStart(2, '0')}</span>
              <span className="pillar-card__icon"><Icon size={26} strokeWidth={1.6} /></span>
              <h3>{block.title[lang]}</h3>
              <p>{block.description[lang]}</p>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} className="section__more">
        <a href="#expertise" className="text-link text-link--arrow">
          {t.expertiseAllLink}
          <ArrowRight size={15} strokeWidth={2} />
        </a>
      </Reveal>
    </section>
  );
}
