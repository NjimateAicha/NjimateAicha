'use client';

import Link from 'next/link';
import { CONTACT, Lang } from '../app/content';

export default function Footer({ lang }: { lang: Lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__row">
        <span className="brand">Aicha Njimate</span>
        <nav className="site-footer__links">
          <a href="/#expertise">{lang === 'fr' ? 'Expertise' : 'Expertise'}</a>
          <Link href="/projects">{lang === 'fr' ? 'Projets' : 'Projects'}</Link>
          <a href="/#about">{lang === 'fr' ? 'À propos' : 'About'}</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
      <div className="site-footer__row site-footer__row--muted">
        <span>© {year} Aicha Njimate — FalconDeev</span>
        <span>{CONTACT.email}</span>
        <Link href="/admin" className="site-footer__admin">
          {lang === 'fr' ? 'Administration' : 'Administration'}
        </Link>
      </div>
    </footer>
  );
}
