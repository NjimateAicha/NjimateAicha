'use client';

import { HERO_STATS, Lang, SOLUTIONS_MARQUEE } from '../../app/content';
import CountUp from '../motion/CountUp';
import Reveal from '../motion/Reveal';

export default function StatsBar({ lang }: { lang: Lang }) {
  return (
    <div className="hero-stats-block">
      <Reveal as="div" className="stats-bar">
        {HERO_STATS.map((stat) => (
          <div key={stat.label.fr} className="stats-bar__item">
            <strong>
              {stat.prefix && <span className="stat-accent">{stat.prefix}</span>}
              <CountUp value={stat.value} suffix={stat.suffix} padZero={stat.padZero} />
            </strong>
            <span className="stats-bar__label">{stat.label[lang]}</span>
            {stat.caption && <span className="stats-bar__caption">{stat.caption[lang]}</span>}
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.1} className="solutions-band">
        <div className="solutions-band__track">
          {[...SOLUTIONS_MARQUEE, ...SOLUTIONS_MARQUEE].map((item, i) => (
            <span key={`${item.fr}-${i}`} className="solutions-band__pill">{item[lang]}</span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
