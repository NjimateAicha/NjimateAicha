'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { HOME_SHOWCASE, HomeShowcaseItem, Lang, PROJECTS } from '../../app/content';
import { CASE_STUDIES } from '../../app/case-studies';
import { localizePath } from '../../app/i18n';
import { UI } from '../../app/ui-strings';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

function ShowcaseCard({
  item,
  lang,
  variant
}: {
  item: HomeShowcaseItem;
  lang: Lang;
  variant: 'primary' | 'secondary';
}) {
  const t = UI[lang];
  const project = PROJECTS.find((p) => p.slug === item.slug);
  if (!project) return null;

  const category = (project.categoryOverride ?? project.category)[lang];
  const hasCaseStudy = Boolean(CASE_STUDIES[project.slug]);
  const href = localizePath(`/projects/${project.slug}`, lang);
  const linkLabel = `${hasCaseStudy ? t.viewCaseStudy : t.viewProject} — ${project.title}`;

  return (
    <Reveal className={`showcase-card showcase-card--${variant}`}>
      <Link
        href={href}
        className="showcase-card__media project-card__media--contain"
        aria-label={linkLabel}
      >
        <MediaOrPlaceholder
          src={project.image}
          alt={`${project.title} — ${category}`}
          label={t.missingImageLabel}
          className="project-card__image--contain"
          slug={project.slug}
        />
      </Link>
      <div className="showcase-card__body">
        <p className="project-card__category">{category}</p>
        <h3>{project.title}</h3>
        <p className="showcase-card__blurb">{item.blurb[lang]}</p>
        <div className="project-card__tags">
          {item.tags.slice(0, 3).map((tag) => (
            <span key={tag.fr}>{tag[lang]}</span>
          ))}
        </div>
        <div className="showcase-card__links">
          <Link href={href} className="text-link" aria-label={linkLabel}>
            {hasCaseStudy ? t.viewCaseStudy : t.viewProject}
          </Link>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="showcase-card__external">
              {t.projectCardVisitProduct}
              <ArrowUpRight size={14} strokeWidth={2} />
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function FeaturedProjects({ lang }: { lang: Lang }) {
  const t = UI[lang];
  const [primary, ...secondary] = HOME_SHOWCASE;

  return (
    <section id="work" className="section work-section">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.projectsEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h2>{t.projectsTitle}</h2></Reveal>
      </div>

      <div className="showcase">
        <ShowcaseCard item={primary} lang={lang} variant="primary" />
        <div className="showcase__secondary">
          {secondary.map((item) => (
            <ShowcaseCard key={item.slug} item={item} lang={lang} variant="secondary" />
          ))}
        </div>
      </div>

      <Reveal delay={0.1} className="work-section__cta">
        <Link href={localizePath('/projects', lang)} className="btn btn--primary">{t.exploreAllProjects}</Link>
      </Reveal>
    </section>
  );
}
