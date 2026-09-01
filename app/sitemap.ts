import type { MetadataRoute } from 'next';
import { PROJECTS } from './content';

const BASE = 'https://www.aichanjimate.com';

/** Both language versions of a canonical FR path, each carrying the full
 *  reciprocal hreflang set. */
function bothLocales(
  frPath: string,
  priority: number,
  changeFrequency: 'weekly' | 'monthly',
  now: Date
): MetadataRoute.Sitemap {
  const suffix = frPath === '/' ? '' : frPath;
  const fr = `${BASE}${suffix || '/'}`;
  const en = `${BASE}/en${suffix}`;
  const languages = { fr, en, 'x-default': fr };
  return [
    { url: fr, lastModified: now, changeFrequency, priority, alternates: { languages } },
    { url: en, lastModified: now, changeFrequency, priority: Math.max(0, priority - 0.1), alternates: { languages } }
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...bothLocales('/', 1, 'weekly', now),
    ...bothLocales('/projects', 0.9, 'weekly', now),
    ...PROJECTS.flatMap((project) =>
      bothLocales(`/projects/${project.slug}`, project.featured ? 0.8 : 0.6, 'monthly', now)
    )
  ];
}
