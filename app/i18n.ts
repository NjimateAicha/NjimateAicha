import type { Metadata } from 'next';
import type { Lang } from './content';
import { SITE_URL } from './content';

export { SITE_URL };

/** Locale implied by a pathname (English lives under /en). */
export function localeFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

/**
 * Rewrite a canonical FR path for `locale`, for client-side <Link>/<a> hrefs.
 * Same-page hashes ("#contact") are left untouched.
 */
export function localizePath(frPath: string, locale: Lang): string {
  if (locale === 'fr') return frPath;
  if (frPath === '/') return '/en';
  if (frPath.startsWith('/#')) return '/en' + frPath.slice(1); // "/#x" -> "/en#x"
  if (frPath.startsWith('#')) return frPath;
  return '/en' + frPath; // "/projects" -> "/en/projects"
}

/** The equivalent URL in the other language, from the current pathname. */
export function otherLocaleHref(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3) || '/';
  if (pathname === '/') return '/en';
  if (pathname === '/mentions-legales') return '/en'; // FR-only page
  return '/en' + pathname;
}

/**
 * Absolute canonical + reciprocal hreflang alternates for a canonical FR path.
 * The canonical always points at the SAME-language page, never systematically FR.
 */
export function alternatesFor(frPath: string, locale: Lang): Metadata['alternates'] {
  const suffix = frPath === '/' ? '' : frPath;
  const fr = `${SITE_URL}${suffix || '/'}`;
  const en = `${SITE_URL}/en${suffix}`;
  return {
    canonical: locale === 'en' ? en : fr,
    languages: {
      fr,
      en,
      'x-default': fr
    }
  };
}

export function ogLocale(locale: Lang): string {
  return locale === 'en' ? 'en_US' : 'fr_FR';
}
