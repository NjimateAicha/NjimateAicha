'use client';

import { Lang, PROJECT_MARQUEE, TRUST_FACTS } from '../../app/content';
import { UI } from '../../app/ui-strings';
import CountUp from '../motion/CountUp';
import Reveal from '../motion/Reveal';

export default function StatsBar({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const marquee = [...PROJECT_MARQUEE, ...PROJECT_MARQUEE];

  return (
    <section className="trust-band" aria-label={t.trustLabel}>
      <Reveal as="div" className="trust-band__inner">
        <ul className="trust-band__list">
          {TRUST_FACTS.map((fact) => (
            <li key={fact.label.fr} className="trust-band__item">
              {typeof fact.value === 'number' && (
                <strong>
                  {fact.prefix && <span className="stat-accent">{fact.prefix}</span>}
                  <CountUp value={fact.value} suffix={fact.suffix} />
                </strong>
              )}
              <span>{fact.label[lang]}</span>
            </li>
          ))}
        </ul>

        <div className="trust-marquee">
          <p className="trust-marquee__label">
            {lang === 'fr' ? 'Projets & collaborations' : 'Projects & collaborations'}
          </p>
          <div className="trust-marquee__viewport">
            <div className="trust-marquee__track">
              {marquee.map((name, i) => (
                <span key={`${name}-${i}`} className="trust-marquee__item">
                  <span className="trust-marquee__name">{name}</span>
                  <span className="trust-marquee__sep" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
