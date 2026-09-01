'use client';

import About from './sections/About';
import Expertise from './sections/Expertise';
import FeaturedProjects from './sections/FeaturedProjects';
import FinalCta from './sections/FinalCta';
import Hero from './sections/Hero';
import Method from './sections/Method';
import StatsBar from './sections/StatsBar';
import Testimonials from './sections/Testimonials';
import { breadcrumbSchema } from '../app/seo';
import { useSiteContext } from '../app/site-context';

export default function HomeSections() {
  const { lang, openReview } = useSiteContext();

  const crumbs = breadcrumbSchema([{ name: lang === 'fr' ? 'Accueil' : 'Home', frPath: '/' }], lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <Hero lang={lang} />
      <StatsBar lang={lang} />
      <Expertise lang={lang} />
      <FeaturedProjects lang={lang} />
      <Method lang={lang} />
      <About lang={lang} />
      <Testimonials lang={lang} onOpenReview={openReview} />
      <FinalCta lang={lang} />
    </>
  );
}
