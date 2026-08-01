'use client';

import { Lang, MENTORING_STATS, TALKS } from '../../app/content';
import { UI } from '../../app/ui-strings';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

export default function Mentoring({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="mentoring" className="section section--panel mentoring-section">
      <div className="mentoring-section__grid">
        <div className="mentoring-section__intro">
          <Reveal><p className="eyebrow">{t.mentoringLabel}</p></Reveal>
          <Reveal delay={0.08}><h2>{t.mentoringTitle}</h2></Reveal>
          <Reveal delay={0.14}><p className="mentoring-section__text">{t.mentoringIntro}</p></Reveal>

          <Reveal delay={0.2} className="mentoring-stats">
            {MENTORING_STATS.map((stat) => (
              <div key={stat.label.fr} className="mentoring-stats__item">
                <strong>{stat.value}</strong>
                <span>{stat.label[lang]}</span>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mentoring-photos">
          <span className="mentoring-photos__main">
            <MediaOrPlaceholder
              src="/images/profile/aicha-njimate-speaking.jpeg"
              alt="Aicha Njimate — mentorat"
              label={t.missingImageLabel}
              className="mentoring-photos__img"
            />
          </span>
          <span className="mentoring-photos__secondary">
            <MediaOrPlaceholder
              src="/images/talks/ensa-khouribga.webp"
              alt="Aicha Njimate — intervention"
              label={t.missingImageLabel}
              className="mentoring-photos__img"
            />
          </span>
          <span className="mentoring-photos__secondary">
            <MediaOrPlaceholder
              src="/images/profile/aicha-njimate-graduation.jpg"
              alt="Aicha Njimate"
              label={t.missingImageLabel}
              className="mentoring-photos__img"
            />
          </span>
        </Reveal>
      </div>

      <div className="talks-list">
        <Reveal><p className="talks-list__label">{t.talksEyebrow} — {t.talksTitle}</p></Reveal>
        <div className="talks-list__grid">
          {TALKS.map((talk, i) => (
            <Reveal key={talk.name} delay={i * 0.05} className="talk-item">
              <h4>{talk.name}</h4>
              <span className="talk-item__place">{talk.place[lang]}</span>
              <p>{talk.topic[lang]}</p>
              {talk.year && <span className="talk-item__year">{talk.year}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
