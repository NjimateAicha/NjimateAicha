'use client';

import { ABOUT_HOME, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

export default function About({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="about" className="section about-section">
      <div className="about-grid about-grid--condensed">
        <Reveal className="about-photos">
          <MediaOrPlaceholder
            src="/images/profile/aicha-njimate-speaking.jpeg"
            alt="Aicha Njimate en conférence"
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
          <p className="eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="about-positioning">{t.aboutPositioning}</p>
          <p className="about-text">{ABOUT_HOME[lang]}</p>

          <div className="about-ctas">
            <a href="#about" className="btn btn--secondary">{t.aboutMoreCta}</a>
            <a href="#contact" className="btn btn--primary">{t.aboutTalkCta}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
