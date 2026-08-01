'use client';

import {
  Activity,
  BriefcaseBusiness,
  CarFront,
  Clapperboard,
  Hotel,
  LayoutDashboard,
  LucideIcon,
  Rocket,
  ShoppingBag
} from 'lucide-react';
import Link from 'next/link';
import { Lang, NICHES } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

const ICONS: Record<string, LucideIcon> = {
  Hotel,
  CarFront,
  Activity,
  Rocket,
  ShoppingBag,
  LayoutDashboard,
  BriefcaseBusiness,
  Clapperboard
};

export default function Niches({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="sectors" className="section niches-section">
      <div className="section__heading section__heading--center">
        <Reveal><p className="eyebrow">{t.sectorsEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.sectorsTitle}</h2></Reveal>
      </div>

      <div className="niches-grid-v2">
        {NICHES.map((niche, i) => {
          const Icon = ICONS[niche.icon];
          const content = (
            <>
              <span className="niche-card__icon"><Icon size={22} strokeWidth={1.75} /></span>
              <h3 className="niche-card__title">{niche.title[lang]}</h3>
              <p className="niche-card__desc">{niche.description[lang]}</p>
              <span className="niche-card__link">
                {niche.externalLink ? niche.externalLink.label[lang] : t.viewProject}
              </span>
            </>
          );

          return (
            <Reveal key={niche.key} delay={i * 0.04} className="niche-card">
              {niche.externalLink ? (
                <a href={niche.externalLink.url} target="_blank" rel="noopener noreferrer" className="niche-card__link-wrap">
                  {content}
                </a>
              ) : (
                <Link href={`/projects?category=${encodeURIComponent(niche.category!.fr)}`} className="niche-card__link-wrap">
                  {content}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
