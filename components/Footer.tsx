'use client';

import Link from 'next/link';
import { CALENDLY_URL, CONTACT, EXPERTISE, Lang, WHATSAPP_PRO_URL } from '../app/content';
import { localizePath } from '../app/i18n';
import { useSiteContext } from '../app/site-context';

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();
  const { openReview, otherLocaleHref } = useSiteContext();
  const p = (path: string) => localizePath(path, lang);

  const services = EXPERTISE.slice(0, 6).map((item) => item.title[lang]);

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <span className="brand">Aicha Njimate</span>
          <p className="site-footer__tagline">
            {lang === 'fr'
              ? 'Software Engineer & Fondatrice de FalconDeev'
              : 'Software Engineer & Founder of FalconDeev'}
          </p>
          <p className="site-footer__studio">
            {lang === 'fr'
              ? 'Studio de développement digital piloté par sa fondatrice.'
              : 'Founder-led digital product studio.'}
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Services">
          <p className="site-footer__col-title">Services</p>
          {services.map((service) => (
            <a key={service} href={p('/#expertise')}>{service}</a>
          ))}
        </nav>

        <nav className="site-footer__col" aria-label={lang === 'fr' ? 'Navigation' : 'Navigation'}>
          <p className="site-footer__col-title">{lang === 'fr' ? 'Explorer' : 'Explore'}</p>
          <Link href={p('/projects')}>{lang === 'fr' ? 'Projets' : 'Projects'}</Link>
          <a href={p('/#method')}>{lang === 'fr' ? 'Méthode' : 'Method'}</a>
          <a href={p('/#about')}>{lang === 'fr' ? 'À propos' : 'About'}</a>
          <a href={p('/#contact')}>Contact</a>
          <button type="button" className="site-footer__linklike" onClick={openReview}>
            {lang === 'fr' ? 'Laisser un avis' : 'Leave a review'}
          </button>
        </nav>

        <nav className="site-footer__col" aria-label={lang === 'fr' ? 'Contact & liens' : 'Contact & links'}>
          <p className="site-footer__col-title">Contact</p>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={WHATSAPP_PRO_URL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Calendly</a>
          <a href={CONTACT.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/NjimateAicha" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={p('/#about')}>FalconDeev</a>
        </nav>
      </div>

      <div className="site-footer__row site-footer__row--muted">
        <span>© {year} Aicha Njimate — FalconDeev</span>
        <span className="site-footer__legal">
          <Link href="/mentions-legales">{lang === 'fr' ? 'Mentions légales' : 'Legal notice'}</Link>
          <a href={otherLocaleHref} className="site-footer__lang" hrefLang={lang === 'fr' ? 'en' : 'fr'}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </a>
          <Link href="/admin" className="site-footer__admin">
            {lang === 'fr' ? 'Administration' : 'Administration'}
          </Link>
        </span>
      </div>
    </footer>
  );
}
