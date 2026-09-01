'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSiteContext } from '../app/site-context';
import { localizePath } from '../app/i18n';
import { UI } from '../app/ui-strings';
import { useScrollY } from './ScrollProvider';

export default function SiteHeader() {
  const { lang, theme, setTheme, otherLocaleHref } = useSiteContext();
  const t = UI[lang];
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollY();
  const scrolled = scrollY > 12;
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '/en';
  // On the home page, section links are plain in-page hashes; elsewhere they
  // jump back to the home of the current language.
  const anchor = (hash: string) => (isHome ? hash : localizePath(`/${hash}`, lang));

  const home = localizePath('/', lang);
  const links = [
    { href: anchor('#expertise'), label: t.navExpertise },
    { href: localizePath('/projects', lang), label: t.navProjects },
    { href: anchor('#about'), label: t.navAbout },
    { href: anchor('#contact'), label: t.navContact }
  ];

  const closeMenu = () => setMenuOpen(false);
  const langLabel = lang === 'fr' ? 'FR / EN' : 'EN / FR';
  const langAria = lang === 'fr' ? 'Passer en anglais' : 'Switch to French';

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <Link href={home} className="brand">Aicha Njimate</Link>

      <nav className="topbar__nav topbar__nav--desktop">
        {links.map((link) => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>

      <div className="topbar__actions">
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={t.themeToggleLabel}
        >
          {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
        </button>
        <a href={anchor('#contact')} className="pill pill--accent">{t.talkProjectCta}</a>
        <a href={otherLocaleHref} className="lang-switch" hrefLang={lang === 'fr' ? 'en' : 'fr'} aria-label={langAria}>
          {langLabel}
        </a>
        <button
          className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, height: 'auto' }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mobile-menu__actions">
              <a
                href={otherLocaleHref}
                className="lang-switch lang-switch--mobile"
                hrefLang={lang === 'fr' ? 'en' : 'fr'}
                aria-label={langAria}
                onClick={closeMenu}
              >
                {langLabel}
              </a>
              <button
                className="theme-toggle theme-toggle--mobile"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={t.themeToggleLabel}
              >
                {theme === 'dark' ? <Sun size={16} strokeWidth={1.75} /> : <Moon size={16} strokeWidth={1.75} />}
                <span>{t.themeToggleLabel}</span>
              </button>
              <a href={anchor('#contact')} className="pill pill--accent" onClick={closeMenu}>{t.talkProjectCta}</a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
