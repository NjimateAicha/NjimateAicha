'use client';

import { ABOUT_BADGES, CALENDLY_URL, CONTACT, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

export default function About({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="about" className="section about-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.aboutEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.aboutTitle}</h2></Reveal>
      </div>
      <div className="about-grid">
        <Reveal className="about-photos">
          <MediaOrPlaceholder
            src="/images/profile/aicha-njimate-speaking.jpeg"
            alt="Aicha Njimate"
            label={t.missingImageLabel}
            className="about-photos__main"
          />
          <MediaOrPlaceholder
            src="/images/profile/aicha-njimate-graduation.jpg"
            alt="Aicha Njimate"
            label={t.missingImageLabel}
            className="about-photos__secondary"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="about-name">{t.aboutName}</h3>
          <p className="about-positioning">{t.aboutPositioning}</p>
          <p className="about-text">{t.aboutText1}</p>
          <p className="about-text">{t.aboutText2}</p>

          <div className="about-badges">
            {ABOUT_BADGES.map((badge) => (
              <span key={badge.fr} className="about-badges__item">{badge[lang]}</span>
            ))}
          </div>

          <div className="about-ctas">
            <a href={CONTACT.falcondeevUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              {t.falconCta}
            </a>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              {t.bookConsultationCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
