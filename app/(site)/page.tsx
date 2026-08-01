'use client';

import About from '../../components/sections/About';
import Contact from '../../components/sections/Contact';
import Expertise from '../../components/sections/Expertise';
import FeaturedProjects from '../../components/sections/FeaturedProjects';
import Hero from '../../components/sections/Hero';
import LogoBand from '../../components/sections/LogoBand';
import Mentoring from '../../components/sections/Mentoring';
import Niches from '../../components/sections/Niches';
import StatsBar from '../../components/sections/StatsBar';
import Testimonials from '../../components/sections/Testimonials';
import { useSiteContext } from '../site-context';

export default function HomePage() {
  const { lang, openReview } = useSiteContext();

  return (
    <>
      <Hero lang={lang} />
      <StatsBar lang={lang} />
      <LogoBand lang={lang} />
      <Expertise lang={lang} />
      <FeaturedProjects lang={lang} />
      <Niches lang={lang} />
      <About lang={lang} />
      <Mentoring lang={lang} />
      <Testimonials lang={lang} onOpenReview={openReview} />
      <Contact lang={lang} />
    </>
  );
}
