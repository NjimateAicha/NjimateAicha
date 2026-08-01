'use client';

import { CLIENTS, Lang } from '../../app/content';
import { UI } from '../../app/ui-strings';
import Reveal from '../motion/Reveal';

export default function LogoBand({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const track = [...CLIENTS, ...CLIENTS];

  return (
    <section className="logo-band-v2" aria-label={t.logoBandLabel}>
      <Reveal>
        <p className="logo-band-v2__label">{t.logoBandLabel}</p>
      </Reveal>
      <div className="logo-band-v2__viewport">
        <div className="logo-band-v2__track">
          {track.map((client, i) => (
            <span key={`${client.name}-${i}`} className="logo-band-v2__item">
              <span className="wordmark-v2">{client.name}</span>
              <span className="logo-band-v2__sep" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
