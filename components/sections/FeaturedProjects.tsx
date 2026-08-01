'use client';

import Link from 'next/link';
import { FEATURED_PROJECTS, Lang, Project } from '../../app/content';
import { UI } from '../../app/ui-strings';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

function FeaturedCard({ project, lang, index }: { project: Project; lang: Lang; index: number }) {
  const t = UI[lang];

  return (
    <Reveal delay={index * 0.05} className="featured-card">
      <Link href={`/projects/${project.slug}`} className="featured-card__inner">
        <div className="featured-card__media project-card__media--contain">
          <MediaOrPlaceholder
            src={project.image}
            alt={project.title}
            label={t.missingImageLabel}
            className="featured-card__image project-card__image--contain"
            slug={project.slug}
          />
        </div>
        <div className="featured-card__body">
          <p className="project-card__category">{(project.categoryOverride ?? project.category)[lang]}</p>
          <h3>{project.title}</h3>
          <p>{project.description[lang]}</p>
          <div className="project-card__tags">
            {(project.tagsOverride?.map((tag) => tag[lang]) ?? project.tags).slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <span className="text-link">{t.viewCaseStudy}</span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function FeaturedProjects({ lang }: { lang: Lang }) {
  const t = UI[lang];

  return (
    <section id="projects" className="section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.projectsEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.projectsTitle}</h2></Reveal>
      </div>
      <div className="featured-grid-v2">
        {FEATURED_PROJECTS.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} lang={lang} index={i} />
        ))}
      </div>
      <Reveal delay={0.15} className="featured-projects-cta">
        <Link href="/projects" className="btn btn--primary">{t.exploreAllProjects}</Link>
      </Reveal>
    </section>
  );
}
