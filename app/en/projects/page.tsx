import type { Metadata } from 'next';
import ProjectsCatalog from '../../../components/sections/ProjectsCatalog';
import { PROJECTS } from '../../content';
import { alternatesFor, ogLocale, SITE_URL } from '../../i18n';
import { breadcrumbSchema } from '../../seo';

const TITLE = 'SaaS, CRM & Application Projects | Aicha Njimate';
const DESCRIPTION =
  'Explore SaaS products, business platforms, web and mobile applications, booking systems and AI-powered projects led by Aicha Njimate.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: alternatesFor('/projects', 'en'),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/en/projects`,
    type: 'website',
    locale: ogLocale('en')
  },
  twitter: { title: TITLE, description: DESCRIPTION }
};

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: TITLE,
  description: DESCRIPTION,
  inLanguage: 'en',
  url: `${SITE_URL}/en/projects`,
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#aicha-njimate` },
  hasPart: PROJECTS.map((p) => ({
    '@type': 'CreativeWork',
    name: p.title,
    url: `${SITE_URL}/en/projects/${p.slug}`
  }))
};

export default function ProjectsPage({
  searchParams
}: {
  searchParams: { category?: string };
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema(
              [
                { name: 'Home', frPath: '/' },
                { name: 'Projects', frPath: '/projects' }
              ],
              'en'
            ),
            collectionSchema
          ])
        }}
      />
      <ProjectsCatalog initialCategory={searchParams.category} />
    </>
  );
}
