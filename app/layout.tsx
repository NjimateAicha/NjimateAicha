import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://aichanjimate.com'),
  title: {
    default: 'Aicha Njimate | Software Engineer & Product Builder',
    template: '%s | Aicha Njimate'
  },
  description:
    'Aicha Njimate builds digital products, SaaS platforms, mobile apps and growth experiences for businesses and founders. Available worldwide for custom software, product strategy and digital transformation.',
  applicationName: 'Aicha Njimate',
  keywords: [
    'Aicha Njimate',
    'software engineer',
    'product builder',
    'SaaS developer',
    'mobile app developer',
    'web developer Morocco',
    'digital products',
    'startup builder',
    'technical mentor',
    'AI automation',
    'freelance developer Morocco'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Aicha Njimate | Software Engineer & Product Builder',
    description:
      'Product-focused software engineer building SaaS, mobile apps and digital systems for ambitious brands and founders.',
    url: 'https://aichanjimate.com',
    siteName: 'Aicha Njimate',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/profile/aicha-njimate-speaking.jpeg',
        width: 1200,
        height: 630,
        alt: 'Aicha Njimate'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicha Njimate | Software Engineer & Product Builder',
    description:
      'Product-focused software engineer building SaaS, mobile apps and digital systems for ambitious brands and founders.',
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

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aicha Njimate',
  url: 'https://aichanjimate.com',
  sameAs: [
    'https://www.linkedin.com/in/aicha-njimate-846aa5245/',
    'https://www.instagram.com/njimate_aicha/',
    'https://github.com/NjimateAicha'
  ],
  jobTitle: 'Software Engineer & Product Builder',
  knowsAbout: [
    'Software engineering',
    'SaaS products',
    'Mobile applications',
    'Product strategy',
    'Digital transformation',
    'AI automation'
  ],
  description:
    'Product-focused software engineer building SaaS, mobile apps and digital systems for businesses and founders.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
