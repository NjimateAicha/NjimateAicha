import type { Lang, Project } from './content';
import { SITE_URL } from './content';
import { localizePath } from './i18n';

export const PERSON_ID = `${SITE_URL}/#aicha-njimate`;
export const ORG_ID = `${SITE_URL}/#falcondeev`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function absUrl(frPath: string, locale: Lang): string {
  const p = localizePath(frPath, locale);
  return `${SITE_URL}${p === '/' ? '' : p}` || SITE_URL;
}

interface Crumb {
  name: string;
  frPath: string;
}

export function breadcrumbSchema(crumbs: Crumb[], locale: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: absUrl(c.frPath, locale)
    }))
  };
}

/**
 * Pick a JSON-LD type that matches what the project actually is:
 * - SaaS / CRM / AI work  -> SoftwareApplication
 * - websites, e-commerce, corporate -> WebSite
 * - anything else -> CreativeWork
 * The category slug lives in `category.en`.
 */
function projectSchemaType(project: Project): 'SoftwareApplication' | 'WebSite' | 'CreativeWork' {
  const cat = project.category.en.toLowerCase();
  if (cat.includes('saas') || cat.includes('crm') || cat.includes('ai') || cat.includes('internal')) {
    return 'SoftwareApplication';
  }
  if (cat.includes('website') || cat.includes('corporate') || cat.includes('commerce') || cat.includes('brand')) {
    return 'WebSite';
  }
  return 'CreativeWork';
}

export function projectSchema(project: Project, locale: Lang) {
  const type = projectSchemaType(project);
  const category = (project.categoryOverride ?? project.category)[locale];
  const pageUrl = absUrl(`/projects/${project.slug}`, locale);

  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
    name: project.title,
    description: project.description[locale],
    inLanguage: locale,
    url: type === 'WebSite' && project.link ? project.link : pageUrl,
    about: category,
    creator: { '@id': PERSON_ID },
    isBasedOn: pageUrl
  };

  if (project.link) base.sameAs = project.link;
  if (type === 'SoftwareApplication') {
    base.applicationCategory = 'BusinessApplication';
    base.url = pageUrl;
    if (project.link) base.installUrl = project.link;
  }

  return base;
}
