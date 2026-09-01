'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import MediaOrPlaceholder from './MediaOrPlaceholder';
import { useSiteContext } from '../app/site-context';
import { CALENDLY_URL, PROJECTS, WHATSAPP_PRO_URL } from '../app/content';
import { CASE_STUDIES } from '../app/case-studies';
import { localizePath } from '../app/i18n';
import { breadcrumbSchema, projectSchema } from '../app/seo';
import { UI } from '../app/ui-strings';

export default function ProjectDetail({ slug }: { slug: string }) {
  const { lang } = useSiteContext();
  const t = UI[lang];
  const p = (path: string) => localizePath(path, lang);

  const index = PROJECTS.findIndex((proj) => proj.slug === slug);
  const project = index >= 0 ? PROJECTS[index] : undefined;

  // Prev/next navigation moves between two instances of the same dynamic
  // route, a case where Next.js can fail to reset scroll on push navigation.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail">
        <Link href={p('/projects')} className="text-link">{t.backToProjects}</Link>
        <h1>404</h1>
      </div>
    );
  }

  const cs = CASE_STUDIES[project.slug];
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
  const category = (project.categoryOverride ?? project.category)[lang];

  const contextText = cs?.context?.[lang] ?? cs?.project?.[lang];
  const solutionPoints = cs?.solutionPoints ?? cs?.achievements;
  const roleText = cs?.role?.[lang] ?? project.role?.[lang] ?? cs?.intervention?.[lang];
  // Only show the gallery once at least two real captures exist — never a wall
  // of "visual coming soon" placeholders.
  const realGallery = (cs?.gallery ?? []).filter((item) => Boolean(item.src));

  const crumbs = breadcrumbSchema(
    [
      { name: lang === 'fr' ? 'Accueil' : 'Home', frPath: '/' },
      { name: lang === 'fr' ? 'Projets' : 'Projects', frPath: '/projects' },
      { name: project.title, frPath: `/projects/${project.slug}` }
    ],
    lang
  );
  const workSchema = projectSchema(project, lang);

  return (
    <div className="project-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([crumbs, workSchema]) }}
      />

      <Link href={p('/projects')} className="text-link">{t.backToProjects}</Link>

      <section className="hero hero--detail">
        <div>
          <p className="eyebrow">{category}</p>
          <h1>{project.title}</h1>
          <p>{cs?.promise?.[lang] ?? project.description[lang]}</p>
          <div className="case-hero__actions">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                {t.caseVisitSite}
              </a>
            )}
            {cs?.catalogUrl && (
              <a href={cs.catalogUrl} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
                {t.caseViewCatalog}
              </a>
            )}
            <a href={p('/#contact')} className="btn btn--secondary">{t.caseSimilarProject}</a>
          </div>
        </div>
        <div className="project-card__media--contain hero--detail__media">
          <MediaOrPlaceholder
            src={project.image}
            alt={`${project.title} — ${category}`}
            label={t.missingImageLabel}
            className="project-card__image--contain"
            slug={project.slug}
          />
        </div>
      </section>

      <div className="case-body">
        {contextText && (
          <div className="case-body__block">
            <h2>{cs?.context ? t.caseContextTitle : t.caseProjectTitle}</h2>
            <p>{contextText}</p>
          </div>
        )}

        {cs?.challenge && (
          <div className="case-body__block">
            <h2>{t.caseChallengeTitle}</h2>
            <p>{cs.challenge[lang]}</p>
          </div>
        )}

        {(cs?.solution || solutionPoints) && (
          <div className="case-body__block">
            <h2>{cs?.solution ? t.caseSolutionTitle : t.caseAchievementsTitle}</h2>
            {cs?.solution && <p>{cs.solution[lang]}</p>}
            {solutionPoints && (
              <ul className="case-achievements-list">
                {solutionPoints.map((item) => <li key={item.fr}>{item[lang]}</li>)}
              </ul>
            )}
          </div>
        )}

        {cs?.journey && (
          <div className="case-body__block">
            <h2>{t.caseJourneyTitle}</h2>
            <ol className="case-journey-list">
              {cs.journey.map((step) => <li key={step.fr}>{step[lang]}</li>)}
            </ol>
          </div>
        )}

        {roleText && (
          <div className="case-body__block">
            <h2>{t.caseRoleTitle}</h2>
            <p>{roleText}</p>
          </div>
        )}

        {cs?.seo && (
          <div className="case-body__block">
            <h2>{t.caseSeoTitle}</h2>
            <p>{cs.seo[lang]}</p>
          </div>
        )}

        {realGallery.length >= 2 && (
          <div className="case-body__block">
            <h2>{t.caseGalleryTitle}</h2>
            <div className="case-gallery">
              {realGallery.map((item) => (
                <figure key={item.caption.fr} className="case-gallery__item">
                  <div className="project-card__media--contain">
                    <MediaOrPlaceholder
                      src={item.src}
                      alt={`${project.title} — ${item.caption[lang]}`}
                      label={t.missingImageLabel}
                      className="project-card__image--contain"
                    />
                  </div>
                  <figcaption>{item.caption[lang]}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="case-body__cta">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            {t.caseBookCall}
          </a>
          <a href={WHATSAPP_PRO_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
            WhatsApp
          </a>
        </div>
      </div>

      <nav className="project-pager">
        <Link
          href={p(`/projects/${prevProject.slug}`)}
          className="project-pager__link"
          aria-label={`${t.previousProject} — ${prevProject.title}`}
        >
          <span>{t.previousProject}</span>
          <strong>{prevProject.title}</strong>
        </Link>
        <Link
          href={p(`/projects/${nextProject.slug}`)}
          className="project-pager__link project-pager__link--next"
          aria-label={`${t.nextProject} — ${nextProject.title}`}
        >
          <span>{t.nextProject}</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </nav>
    </div>
  );
}
