'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CATEGORIES, PROJECTS } from '../../app/content';
import { CASE_STUDIES } from '../../app/case-studies';
import { localizePath } from '../../app/i18n';
import { UI } from '../../app/ui-strings';
import { useSiteContext } from '../../app/site-context';
import MediaOrPlaceholder from '../MediaOrPlaceholder';
import Reveal from '../motion/Reveal';

export default function ProjectsCatalog({ initialCategory }: { initialCategory?: string }) {
  const { lang } = useSiteContext();
  const t = UI[lang];

  const startCategory = useMemo(() => {
    if (initialCategory && CATEGORIES.some((c) => c.fr === initialCategory)) return initialCategory;
    return CATEGORIES[0].fr;
  }, [initialCategory]);

  const [activeCategory, setActiveCategory] = useState(startCategory);

  const groups = useMemo(() => {
    const cats = activeCategory === CATEGORIES[0].fr ? CATEGORIES.slice(1) : CATEGORIES.filter((c) => c.fr === activeCategory);
    return cats
      .map((cat) => ({ category: cat, projects: PROJECTS.filter((p) => p.category.fr === cat.fr) }))
      .filter((g) => g.projects.length > 0);
  }, [activeCategory]);

  return (
    <section className="section projects-page">
      <div className="section__heading">
        <Reveal><p className="eyebrow">{t.projectsPageEyebrow}</p></Reveal>
        <Reveal delay={0.08}><h1>{t.projectsPageTitle}</h1></Reveal>
      </div>
      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.fr}
            className={`filter-chip ${activeCategory === cat.fr ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.fr)}
          >
            {cat[lang]}
          </button>
        ))}
      </div>

      {groups.map((group) => (
        <div key={group.category.fr} className="category-group">
          <div className="category-group__heading">
            <h2>{group.category[lang]}</h2>
            <span className="category-group__line" />
          </div>
          <div className="project-grid-v2">
            {group.projects.map((project, i) => {
              const hasCaseStudy = Boolean(CASE_STUDIES[project.slug]);
              const linkLabel = `${hasCaseStudy ? t.viewCaseStudy : t.viewProject} — ${project.title}`;
              return (
              <Reveal key={project.slug} delay={(i % 8) * 0.03} className="project-card project-card--compact">
                <Link href={localizePath(`/projects/${project.slug}`, lang)} className="project-card__link" aria-label={linkLabel}>
                  <div className="project-card__media project-card__media--contain">
                    <MediaOrPlaceholder
                      src={project.image}
                      alt={project.title}
                      label={t.missingImageLabel}
                      className="project-card__image project-card__image--contain"
                      slug={project.slug}
                    />
                  </div>
                  <div className="project-card__body">
                    <p className="project-card__category">{(project.categoryOverride ?? project.category)[lang]}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description[lang]}</p>
                    <div className="project-card__tags">
                      {(project.tagsOverride?.map((tag) => tag[lang]) ?? project.tags).slice(0, 3).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <span className="text-link">
                      {hasCaseStudy ? t.viewCaseStudy : t.viewProject}
                    </span>
                  </div>
                </Link>
              </Reveal>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
