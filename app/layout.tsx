import './globals.css';
import type { Metadata } from 'next';

const SITE_URL = 'https://www.aichanjimate.com';
// FalconDeev has no confirmed public URL — use a stable in-site anchor.
const FALCONDEEV_URL = `${SITE_URL}/#falcondeev`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aicha Njimate | Software Engineer SaaS, MVP & systèmes métier — Fondatrice de FalconDeev',
    template: '%s | Aicha Njimate'
  },
  description:
    'Aicha Njimate, Software Engineer spécialisée en SaaS, MVP et systèmes métier, fondatrice du studio de développement FalconDeev. Elle pilote chaque produit de la stratégie à la mise en production, pour des entreprises au Maroc et à l’international.',
  applicationName: 'Aicha Njimate',
  authors: [{ name: 'Aicha Njimate', url: SITE_URL }],
  creator: 'Aicha Njimate',
  keywords: [
    'Aicha Njimate',
    'Software Engineer Maroc',
    'développement SaaS Maroc',
    'création MVP Maroc',
    'CRM sur mesure Maroc',
    'développement application web sur mesure',
    'studio développement digital Maroc',
    'développeuse full-stack Next.js Laravel Supabase',
    'intégration IA entreprise',
    'FalconDeev',
    'founder-led product studio'
  ],
  alternates: {
    canonical: '/'
  },
  icons: {
    icon: [
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png'
  },
  manifest: '/favicons/site.webmanifest',
  openGraph: {
    title: 'Aicha Njimate | Software Engineer SaaS, MVP & systèmes métier',
    description:
      'Studio de développement digital piloté par sa fondatrice. SaaS, MVP, CRM, plateformes métier et applications, de la stratégie à la mise en production.',
    url: SITE_URL,
    siteName: 'Aicha Njimate',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/profile/aicha-njimate-speaking.jpeg',
        width: 1280,
        height: 853,
        alt: 'Aicha Njimate, Software Engineer et fondatrice de FalconDeev, en conférence'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicha Njimate | Software Engineer SaaS, MVP & systèmes métier',
    description:
      'Founder-led digital product studio. SaaS, MVPs, CRMs, business platforms and applications, from strategy to production.',
    creator: '@njimate_aicha',
    images: ['/images/profile/aicha-njimate-speaking.jpeg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

// The root <html lang> is statically "fr"; correct it to "en" synchronously
// (before first paint) on the English URL tree.
const LANG_INIT_SCRIPT = `
(function () {
  try {
    var p = location.pathname;
    if (p === '/en' || p.indexOf('/en/') === 0) document.documentElement.lang = 'en';
  } catch (e) {}
})();
`;

const PERSON_ID = `${SITE_URL}/#aicha-njimate`;
const ORG_ID = `${SITE_URL}/#falcondeev`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Aicha Njimate',
  url: SITE_URL,
  image: `${SITE_URL}/images/profile/aicha-njimate-speaking.jpeg`,
  sameAs: [
    'https://www.linkedin.com/in/aicha-njimate-846aa5245/',
    'https://www.instagram.com/njimate_aicha/',
    'https://github.com/NjimateAicha'
  ],
  jobTitle: 'Software Engineer',
  description:
    'Software Engineer spécialisée en SaaS, MVP et systèmes métier, fondatrice du studio de développement FalconDeev. Elle travaille directement avec les clients, conçoit et pilote des SaaS, MVP, CRM, plateformes métier et applications, et coordonne une équipe adaptée lorsque le périmètre le nécessite. Basée au Maroc, elle travaille aussi à l’international.',
  knowsAbout: [
    'SaaS development',
    'MVP development',
    'CRM and business platform development',
    'Web application development',
    'Mobile application development',
    'AI integration and automation',
    'Technical SEO and multilingual SEO',
    'Next.js',
    'React',
    'Laravel',
    'Supabase',
    'Flutter'
  ],
  founderOf: { '@id': ORG_ID },
  worksFor: { '@id': ORG_ID }
};

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'FalconDeev',
  description:
    'Studio de développement digital piloté par sa fondatrice, spécialisé dans la création de SaaS, MVP, plateformes métier et applications digitales.',
  url: FALCONDEEV_URL,
  founder: { '@id': PERSON_ID },
  knowsAbout: [
    'SaaS and MVP development',
    'CRM and business platforms',
    'Web and mobile applications',
    'AI and automation',
    'SEO and launch support'
  ]
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'Aicha Njimate',
  inLanguage: ['fr', 'en'],
  publisher: { '@id': PERSON_ID }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: LANG_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
