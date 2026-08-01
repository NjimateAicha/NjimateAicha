'use client';

import Link from 'next/link';
import MediaOrPlaceholder from '../../../../components/MediaOrPlaceholder';
import { useSiteContext } from '../../../site-context';
import { CALENDLY_URL, PROJECTS } from '../../../content';
import { UI } from '../../../ui-strings';

interface DetailExtra {
  context: string;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  technologies: string[];
  value: string;
  gallery?: string[];
}

const DETAILS: Record<string, DetailExtra> = {
  divindeep: {
    context: 'DivinDeep est une plateforme de psychométrie appliquée, pensée pour transformer des tests comportementaux en résultats exploitables.',
    problem: 'Besoin d’un produit robuste capable de gérer des analyses, des rapports et un parcours utilisateur clair sans complexifier l’expérience.',
    solution: 'Architecture backend robuste, workflow de génération de rapports et interface pensée pour les équipes et les utilisateurs finaux.',
    features: ['Rapports multilingues', 'Dashboard d’analyse', 'Structuration backend robuste'],
    role: 'Architecture, développement backend, intégration produit et optimisation du parcours utilisateur.',
    technologies: ['Laravel', 'Next.js', 'Supabase'],
    value: 'Un produit plus fiable, plus rapide à piloter et plus adapté à une croissance industrielle.'
  },
  'oatzy-foods': {
    context: 'Oatzy Foods est une marque food qui avait besoin d’une vitrine e-commerce à la hauteur de son positionnement premium.',
    problem: 'Une présence digitale à la fois premium et lisible, capable de renforcer la marque et d’améliorer la vente en ligne.',
    solution: 'Refonte de l’expérience e-commerce avec un design premium, une navigation fluide et un parcours de conversion optimisé.',
    features: ['Design premium', 'Parcours de conversion', 'Expérience mobile optimisée'],
    role: 'Direction de la présence digitale, UX, structure de contenu et développement front-end.',
    technologies: ['Next.js', 'Tailwind'],
    value: 'Une image de marque plus forte et une expérience d’achat plus convaincante.'
  },
  'studio-8-pilates': {
    context: 'Forma Pilates cherchait un site capable de refléter son univers premium tout en simplifiant la prise de rendez-vous.',
    problem: 'Un besoin de visibilité, de confiance et de simplicité pour réserver des cours.',
    solution: 'Mise en place d’un site élégamment structuré, avec contenus, tarifs et parcours de prise de rendez-vous.',
    features: ['Multi-langues', 'Présentation des cours', 'Réservation'],
    role: 'Direction artistique, UX et développement web.',
    technologies: ['Next.js', 'TypeScript'],
    value: 'Un site plus premium, plus crédible et plus facile à convertir pour les visiteurs.'
  },
  'move-up-automotive': {
    context: 'Mehdi Taxi propose la location de véhicules à Kénitra et avait besoin d’un parcours de réservation plus professionnel.',
    problem: 'Fluidifier la réservation de véhicules et donner de la visibilité sur la disponibilité de la flotte.',
    solution: 'Écosystème de réservation avec gestion de flotte, disponibilité en temps réel et parcours client simplifié.',
    features: ['Gestion de flotte', 'Réservation en ligne', 'Contact WhatsApp direct'],
    role: 'Conception produit, développement front-end et intégration des parcours de réservation.',
    technologies: ['Next.js', 'TypeScript'],
    value: 'Un parcours de location plus simple, plus rapide et plus professionnel.'
  },
  'riad-alia': {
    context: 'Riad Alia Suites & Spa est un établissement de charme à Chefchaouen qui voulait une vitrine fidèle à son identité haut de gamme.',
    problem: 'Offrir une expérience de réservation multilingue fidèle à l’identité d’un riad de charme à Chefchaouen.',
    solution: 'Site de réservation présentant chambres, spa et excursions, avec un parcours de réservation clair.',
    features: ['Réservation multilingue', 'Présentation chambres & spa', 'Excursions'],
    role: 'Développement front-end, structuration des contenus et parcours de réservation.',
    technologies: ['Next.js', 'TypeScript'],
    value: 'Une vitrine plus qualitative pour un établissement haut de gamme.'
  },
  'marocsol-crm': {
    context: 'Marocsol, filiale du groupe NajiProm, avait besoin d’un outil interne pour ne plus perdre de demandes entrantes.',
    problem: 'Centraliser les demandes web, les prospects et les doublons pour un suivi commercial plus fiable.',
    solution: 'CRM interne connecté au site public, avec gestion des demandes, des prospects et du suivi commercial.',
    features: ['Centralisation des demandes web', 'Gestion des prospects', 'Suivi commercial'],
    role: 'Analyse des besoins, développement du CRM interne et intégration avec le site existant.',
    technologies: ['Laravel', 'MySQL'],
    value: 'Une équipe commerciale mieux outillée et un suivi plus fiable des demandes entrantes.'
  },
  'ima-transport': {
    context: 'Un projet d’application de mobilité conçu spécifiquement pour répondre aux enjeux de sécurité des passagères.',
    problem: 'Répondre au besoin de mobilité sécurisée pour les femmes, avec une logique de réservation adaptée.',
    solution: 'Application mobile pensée pour la sécurité, la simplicité de réservation et la confiance des utilisatrices.',
    features: ['Réservation sécurisée', 'Suivi de trajet', 'Expérience mobile dédiée'],
    role: 'Conception produit et développement de l’application mobile.',
    technologies: ['Flutter'],
    value: 'Une solution de mobilité pensée pour la sécurité et la confiance.'
  },
  'smart-hardsoft': {
    context: 'Smart HardSoft avait besoin d’une présence corporate multilingue facile à administrer en interne.',
    problem: 'Présenter une offre hardware & software multilingue avec une administration de contenu simple.',
    solution: 'Site corporate multilingue avec back-office d’administration de contenus.',
    features: ['Multilingue', 'Administration de contenus', 'Présentation des offres'],
    role: 'Développement front-end et intégration de l’administration de contenu.',
    technologies: ['Next.js'],
    value: 'Une présence corporate plus claire et plus facile à maintenir.'
  },
  'falconprospect-ai': {
    context: 'Un prototype développé en interne, sous FalconDeev, pour explorer l’automatisation de la prospection.',
    problem: 'Automatiser une partie du travail de prospection pour gagner du temps sur les tâches répétitives.',
    solution: 'Prototype d’automatisation orienté prospection et workflows intelligents, développé sous FalconDeev.',
    features: ['Automatisation de la prospection', 'Workflows intelligents'],
    role: 'Conception, prototypage et développement.',
    technologies: ['Python', 'Automatisation IA'],
    value: 'Un gain de temps sur les tâches de prospection répétitives.'
  },
  jafiz: {
    context: 'Jafiz avait besoin d’une plateforme unique pour gérer accès et parc automobile, plutôt que des outils dispersés.',
    problem: 'Centraliser la gestion des accès et du parc automobile pour une organisation.',
    solution: 'Plateforme SaaS de gestion des accès et du parc automobile, avec suivi structuré.',
    features: ['Gestion des accès', 'Gestion du parc automobile', 'Suivi structuré'],
    role: 'Développement produit et accompagnement technique.',
    technologies: ['Laravel'],
    value: 'Une gestion plus claire et plus fiable des accès et véhicules.'
  }
};

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { lang } = useSiteContext();
  const t = UI[lang];
  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  const project = index >= 0 ? PROJECTS[index] : undefined;

  if (!project) {
    return (
      <div className="project-detail">
        <Link href="/projects" className="text-link">{t.backToProjects}</Link>
        <h1>404</h1>
      </div>
    );
  }

  const extra = DETAILS[project.slug];
  const prevProject = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="project-detail">
      <Link href="/projects" className="text-link">{t.backToProjects}</Link>
      <section className="hero hero--detail">
        <div>
          <p className="eyebrow">{(project.categoryOverride ?? project.category)[lang]}</p>
          <h1>{project.title}</h1>
          <p>{project.description[lang]}</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                {t.caseVisitSite}
              </a>
            )}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
              {t.caseBookCall}
            </a>
          </div>
        </div>
        <div className="project-card__media--contain hero--detail__media">
          <MediaOrPlaceholder
            src={project.image}
            alt={project.title}
            label={t.missingImageLabel}
            className="project-card__image--contain"
            slug={project.slug}
          />
        </div>
      </section>

      {extra && (
        <>
          <section className="section">
            <article className="project-card"><h3>{t.caseContext}</h3><p>{extra.context}</p></article>
          </section>
          <section className="section">
            <div className="about-grid">
              <article className="project-card"><h3>{t.caseProblem}</h3><p>{extra.problem}</p></article>
              <article className="project-card"><h3>{t.caseSolution}</h3><p>{extra.solution}</p></article>
            </div>
          </section>
          <section className="section">
            <div className="about-grid">
              <article className="project-card">
                <h3>{t.caseFeatures}</h3>
                <ul>{extra.features.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
              <article className="project-card"><h3>{t.caseRole}</h3><p>{extra.role}</p></article>
            </div>
          </section>
          <section className="section">
            <article className="project-card"><h3>{t.caseTech}</h3><p>{extra.technologies.join(' • ')}</p></article>
          </section>
          {extra.gallery && extra.gallery.length > 0 && (
            <section className="section">
              <h3>{t.caseGallery}</h3>
              <div className="project-gallery">
                {extra.gallery.map((src) => (
                  <MediaOrPlaceholder key={src} src={src} alt={project.title} label={t.missingImageLabel} className="project-gallery__image" />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <nav className="project-pager">
        <Link href={`/projects/${prevProject.slug}`} className="project-pager__link">
          <span>{t.previousProject}</span>
          <strong>{prevProject.title}</strong>
        </Link>
        <Link href={`/projects/${nextProject.slug}`} className="project-pager__link project-pager__link--next">
          <span>{t.nextProject}</span>
          <strong>{nextProject.title}</strong>
        </Link>
      </nav>
    </div>
  );
}
