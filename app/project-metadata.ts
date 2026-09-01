import 'server-only';
import type { Metadata } from 'next';
import { existsSync } from 'fs';
import { join } from 'path';
import type { Lang } from './content';
import { PROJECTS } from './content';
import { alternatesFor, ogLocale, SITE_URL } from './i18n';

const PROFILE_FALLBACK = '/images/profile/aicha-njimate-speaking.jpeg';

// Only images whose real pixel size is known — avoids declaring wrong OG dims.
const KNOWN_DIMS: Record<string, { width: number; height: number }> = {
  '/images/profile/aicha-njimate-speaking.jpeg': { width: 1280, height: 853 },
  '/images/projects/prime-event-rental/prime.jpeg': { width: 804, height: 656 }
};

/** Use the project image only if the file actually exists, else the profile OG. */
function resolveOgImage(image: string | null): string {
  if (!image) return PROFILE_FALLBACK;
  if (image.startsWith('/') && existsSync(join(process.cwd(), 'public', image))) return image;
  if (!image.startsWith('/')) return image; // remote URL
  return PROFILE_FALLBACK;
}

export function buildProjectMetadata(slug: string, locale: Lang): Metadata {
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: locale === 'fr' ? 'Projet introuvable' : 'Project not found',
      robots: { index: false, follow: true }
    };
  }

  const category = (project.categoryOverride ?? project.category)[locale];
  const description = project.description[locale];
  const title = `${project.title} — ${category}`;
  const canonicalPath = `/projects/${project.slug}`;
  const url = `${SITE_URL}${locale === 'en' ? '/en' : ''}${canonicalPath}`;
  const image = resolveOgImage(project.image);
  const dims = KNOWN_DIMS[image];

  return {
    title,
    description,
    alternates: alternatesFor(canonicalPath, locale),
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      locale: ogLocale(locale),
      images: [{ url: image, alt: title, ...(dims ?? {}) }]
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] }
  };
}
