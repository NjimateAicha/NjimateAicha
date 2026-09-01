import { Bi } from './content';

export interface CaseStudyGalleryItem {
  src: string | null;
  caption: Bi;
}

export interface CaseStudy {
  /** Legacy fields (kept for existing entries). */
  project?: Bi;
  achievements?: Bi[];
  intervention?: Bi;

  /** Rich editorial fields. */
  promise?: Bi;
  context?: Bi;
  challenge?: Bi;
  solution?: Bi;
  solutionPoints?: Bi[];
  journey?: Bi[];
  role?: Bi;
  seo?: Bi;
  gallery?: CaseStudyGalleryItem[];
  catalogUrl?: string;
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  'prime-event-rental': {
    promise: {
      fr: 'Une plateforme digitale premium pour transformer un site vitrine en outil de catalogue, de devis et d’acquisition.',
      en: 'A premium digital platform turning a showcase site into a catalog, quotation and acquisition tool.'
    },
    context: {
      fr: 'Prime Event Rental avait besoin de dépasser le simple site vitrine. L’entreprise devait présenter un catalogue important de mobilier et d’accessoires, permettre aux clients de préparer une sélection selon leur événement, centraliser les demandes de devis et construire une présence digitale adaptée à un positionnement premium.',
      en: 'Prime Event Rental needed to move beyond a simple showcase site. The company had to present a large catalog of furniture and accessories, let clients prepare a selection based on their event, centralise quotation requests and build a digital presence in line with a premium positioning.'
    },
    challenge: {
      fr: 'Concevoir une expérience premium qui reste simple : un catalogue administrable côté équipe, un parcours de sélection clair côté client, une demande de devis structurée exploitable, et des fondations SEO capables de soutenir la visibilité sur un marché concurrentiel — le tout en français, en anglais et en arabe.',
      en: 'Design a premium experience that stays simple: an administrable catalog on the team side, a clear selection flow on the client side, a structured and usable quotation request, and an SEO foundation able to support visibility in a competitive market — all in French, English and Arabic.'
    },
    solution: {
      fr: 'La plateforme a été conçue en français, anglais et arabe, avec une architecture SEO localisée, un catalogue administrable de plus de 46 produits, une présence Google Business Profile et un accompagnement au lancement des campagnes Google Ads.',
      en: 'The platform was delivered in French, English and Arabic, with localized SEO foundations, an administrable catalog of more than 46 products, Google Business Profile support and assistance with the launch and monitoring of Google Ads campaigns.'
    },
    solutionPoints: [
      { fr: 'Développement sous Next.js', en: 'Development on Next.js' },
      { fr: 'Expérience trilingue FR / EN / AR', en: 'Trilingual FR / EN / AR experience' },
      { fr: 'Catalogue administrable de plus de 46 produits, catégories et fiches produit', en: 'Administrable catalog of 46+ products, categories and product pages' },
      { fr: 'Sélection d’articles et quantités', en: 'Item and quantity selection' },
      { fr: 'Formulaire de demande de devis structuré', en: 'Structured quotation request form' },
      { fr: 'Intégration WhatsApp', en: 'WhatsApp integration' },
      { fr: 'Espace d’administration du catalogue', en: 'Catalog admin space' },
      { fr: 'Architecture responsive et métadonnées localisées', en: 'Responsive architecture and localised metadata' },
      { fr: 'Pages indexables, données structurées et architecture SEO localisée', en: 'Indexable pages, structured data and localised SEO architecture' },
      { fr: 'Présence Google Business Profile et lancement des campagnes Google Ads', en: 'Google Business Profile presence and launch of Google Ads campaigns' }
    ],
    journey: [
      { fr: 'Le visiteur découvre l’univers de la marque et accède au catalogue.', en: 'The visitor discovers the brand’s world and reaches the catalog.' },
      { fr: 'Il parcourt les catégories et les fiches produit.', en: 'They browse categories and product pages.' },
      { fr: 'Il ajoute des articles et ajuste les quantités selon son événement.', en: 'They add items and adjust quantities for their event.' },
      { fr: 'Il envoie une demande de devis structurée, ou bascule sur WhatsApp.', en: 'They send a structured quotation request, or switch to WhatsApp.' },
      { fr: 'L’équipe reçoit la demande et gère le catalogue depuis l’espace d’administration.', en: 'The team receives the request and manages the catalog from the admin space.' }
    ],
    role: {
      fr: 'Développement, architecture SEO, contenus multilingues (français, anglais et arabe), Google Business Profile, ainsi que la mise en place et le suivi des campagnes Google Ads.',
      en: 'Development, SEO architecture, multilingual content (French, English and Arabic), Google Business Profile, plus the setup and monitoring of Google Ads campaigns.'
    },
    seo: {
      fr: 'L’architecture SEO a été pensée dès la conception : pages indexables pour les catégories et les produits, métadonnées localisées en français, anglais et arabe, données structurées et contenus optimisés. Le projet inclut la présence Google Business Profile et l’accompagnement au lancement et au suivi des campagnes Google Ads. Aucun chiffre de leads, de conversions, de revenus ou de performance publicitaire n’est communiqué.',
      en: 'SEO architecture was built in from the start: indexable pages for categories and products, localized metadata in French, English and Arabic, structured data and optimized content. The project includes Google Business Profile presence and support with the launch and monitoring of Google Ads campaigns. No lead, conversion, revenue or ad-performance figures are shared.'
    },
    catalogUrl: 'https://www.primeventrental.com/',
    gallery: [
      { src: null, caption: { fr: 'Page d’accueil — univers de marque premium', en: 'Home page — premium brand world' } },
      { src: null, caption: { fr: 'Catalogue — catégories et filtres', en: 'Catalog — categories and filters' } },
      { src: null, caption: { fr: 'Fiche produit', en: 'Product page' } },
      { src: null, caption: { fr: 'Sélection d’articles et quantités', en: 'Item and quantity selection' } },
      { src: null, caption: { fr: 'Formulaire de demande de devis', en: 'Quotation request form' } },
      { src: null, caption: { fr: 'Espace d’administration du catalogue', en: 'Catalog admin space' } },
      { src: null, caption: { fr: 'Expérience mobile', en: 'Mobile experience' } }
    ]
  },

  divindeep: {
    project: {
      fr: 'DivinDeep est une plateforme de psychométrie appliquée qui transforme des tests comportementaux en résultats exploitables pour ses utilisateurs. L’enjeu était de disposer d’un produit robuste, capable de gérer des analyses et des rapports complexes sans complexifier le parcours des utilisateurs finaux. Nous avons construit une architecture backend solide et un workflow de génération de rapports pensé pour rester lisible aussi bien côté équipes que côté utilisateurs. L’interface accompagne naturellement chaque étape, de la passation du test à la restitution des résultats. Le résultat est un produit plus fiable, plus simple à piloter au quotidien et mieux préparé pour accompagner une croissance industrielle.',
      en: 'DivinDeep is an applied psychometrics platform that turns behavioural tests into actionable results for its users. The challenge was to build a robust product able to handle complex analyses and reports without making the end-user journey more complicated. We built a solid backend architecture and a report-generation workflow designed to stay clear for both teams and end users. The interface supports each step naturally, from taking the test to reviewing the results. The outcome is a more reliable product that’s easier to run day-to-day and better prepared to support industrial-scale growth.'
    },
    achievements: [
      { fr: 'Rapports multilingues générés automatiquement', en: 'Multilingual reports generated automatically' },
      { fr: 'Dashboard d’analyse pour piloter les résultats', en: 'Analytics dashboard to track results' },
      { fr: 'Architecture backend robuste et évolutive', en: 'Robust, scalable backend architecture' }
    ],
    intervention: {
      fr: 'Architecture, développement backend et optimisation du parcours utilisateur.',
      en: 'Architecture, backend development and end-to-end journey optimisation.'
    }
  },
  'oatzy-foods': {
    project: {
      fr: 'Oatzy Foods est une marque marocaine de granola artisanal qui avait besoin d’une vitrine e-commerce à la hauteur de son positionnement premium. L’objectif était de renforcer l’image de la marque tout en rendant le parcours d’achat plus fluide pour ses clients. Nous avons repensé l’expérience e-commerce autour d’un design premium et d’animations 3D pour donner à voir le produit de façon immersive, presque comme en boutique. La navigation a été simplifiée pour guider naturellement vers l’achat, sur mobile comme sur desktop. Le résultat est une marque plus forte visuellement et une expérience d’achat plus convaincante pour ses clients.',
      en: 'Oatzy Foods is a Moroccan artisan granola brand that needed an e-commerce showcase matching its premium positioning. The goal was to strengthen the brand image while making the buying journey smoother for customers. We redesigned the e-commerce experience around a premium look and 3D animations that present the product in an immersive, almost in-store way. Navigation was simplified to guide visitors naturally toward purchase, on both mobile and desktop. The result is a visually stronger brand and a more convincing shopping experience for its customers.'
    },
    achievements: [
      { fr: 'Design e-commerce premium aligné sur l’identité de marque', en: 'Premium e-commerce design aligned with the brand identity' },
      { fr: 'Animations 3D pour une présentation produit immersive', en: '3D animations for an immersive product presentation' },
      { fr: 'Parcours d’achat optimisé, y compris sur mobile', en: 'Optimised buying journey, including on mobile' }
    ],
    intervention: {
      fr: 'Direction de la présence digitale, UX et développement front-end.',
      en: 'Digital presence direction, UX and front-end development.'
    }
  },
  'studio-8-pilates': {
    project: {
      fr: 'Forma Pilates cherchait un site capable de refléter son univers premium tout en simplifiant la prise de rendez-vous pour ses clientes et clients. Le besoin principal était de gagner en visibilité et en confiance, avec un parcours de réservation simple à comprendre pour un nouveau visiteur. Nous avons structuré un site élégant présentant les cours, les tarifs et l’univers de la marque, avec un parcours de prise de rendez-vous pensé pour ne jamais faire hésiter. Le contenu multilingue permet de toucher une clientèle plus large sans complexifier la navigation. Le résultat est un site plus premium, plus crédible et plus facile à convertir pour les visiteurs.',
      en: 'Forma Pilates needed a site that reflected its premium world while making booking simple for clients. The main need was to gain visibility and trust, with a booking journey that a first-time visitor could understand instantly. We structured an elegant site presenting classes, pricing and the brand’s world, with a booking journey designed to remove any hesitation. Multilingual content lets the brand reach a wider audience without complicating navigation. The result is a more premium, more credible site that converts visitors more easily.'
    },
    achievements: [
      { fr: 'Site multilingue reflétant l’univers premium de la marque', en: 'Multilingual site reflecting the brand’s premium world' },
      { fr: 'Présentation claire des cours et des tarifs', en: 'Clear presentation of classes and pricing' },
      { fr: 'Parcours de réservation simplifié', en: 'Simplified booking journey' }
    ],
    intervention: {
      fr: 'Direction artistique, UX et développement web.',
      en: 'Art direction, UX and web development.'
    }
  },
  // 'move-up-automotive' — case-study content removed: the previous text described
  // "Mehdi Taxi" (a distinct project) and no verified Move Up Automotive details are
  // available. The project page falls back to its title + capture + description.
  'riad-alia': {
    project: {
      fr: 'Riad Alia Suites & Spa est un établissement de charme à Chefchaouen qui voulait une vitrine fidèle à son identité haut de gamme. Le besoin était d’offrir aux voyageurs internationaux une expérience de réservation multilingue, aussi soignée que le séjour lui-même. Nous avons conçu un site présentant les chambres, le spa et les excursions, avec un parcours de réservation clair du premier regard à la confirmation. La structure multilingue permet à chaque visiteur de découvrir l’établissement dans sa propre langue sans perte d’information. Le résultat est une vitrine plus qualitative, à la hauteur d’un établissement haut de gamme.',
      en: 'Riad Alia Suites & Spa is a boutique property in Chefchaouen that wanted a showcase faithful to its high-end identity. The need was to offer international travellers a multilingual booking experience as polished as the stay itself. We designed a site presenting rooms, spa and excursions, with a booking journey that stays clear from first glance to confirmation. The multilingual structure lets every visitor discover the property in their own language without losing information. The result is a more qualitative showcase, worthy of a high-end property.'
    },
    achievements: [
      { fr: 'Expérience de réservation multilingue', en: 'Multilingual booking experience' },
      { fr: 'Présentation soignée des chambres et du spa', en: 'Polished presentation of rooms and spa' },
      { fr: 'Mise en avant des excursions proposées', en: 'Showcase of the excursions on offer' }
    ],
    intervention: {
      fr: 'Développement front-end, structuration des contenus et parcours de réservation.',
      en: 'Front-end development, content structuring and booking journey.'
    }
  },
  'marocsol-crm': {
    project: {
      fr: 'Marocsol, filiale du groupe NajiProm, avait besoin d’un outil interne pour ne plus perdre de demandes entrantes. L’équipe commerciale jonglait entre plusieurs canaux, avec un risque réel de doublons et de suivi incomplet des prospects. Nous avons développé un CRM interne connecté au site public, capable de centraliser les demandes web, les prospects et leur historique. Le suivi commercial devient ainsi plus lisible pour toute l’équipe, sans ressaisie manuelle des informations. Le résultat est une équipe commerciale mieux outillée et un suivi plus fiable des demandes entrantes.',
      en: 'Marocsol, a subsidiary of NajiProm group, needed an internal tool to stop losing incoming requests. The sales team was juggling several channels, with a real risk of duplicates and incomplete prospect follow-up. We built an internal CRM connected to the public site, able to centralise web requests, prospects and their history. Sales follow-up becomes clearer for the whole team, without manually re-entering information. The result is a better-equipped sales team and more reliable tracking of incoming requests.'
    },
    achievements: [
      { fr: 'Centralisation des demandes venues du site web', en: 'Centralised requests coming from the website' },
      { fr: 'Gestion des prospects et de leur historique', en: 'Prospect management with full history' },
      { fr: 'Suivi commercial plus lisible pour l’équipe', en: 'Clearer sales follow-up for the team' }
    ],
    intervention: {
      fr: 'Analyse des besoins, développement du CRM interne et intégration avec le site existant.',
      en: 'Needs analysis, internal CRM development and integration with the existing site.'
    }
  },
  'ima-transport': {
    project: {
      fr: 'Ce projet d’application de mobilité a été conçu spécifiquement pour répondre aux enjeux de sécurité des passagères. Le besoin était clair : proposer une mobilité sécurisée aux femmes, avec une logique de réservation adaptée à leurs préoccupations spécifiques. Nous avons développé une application mobile pensée pour la sécurité, la simplicité de réservation et la confiance des utilisatrices à chaque étape du trajet. Le suivi de trajet renforce ce sentiment de sécurité tout au long du déplacement. Le résultat est une solution de mobilité pensée avant tout pour la sécurité et la confiance.',
      en: 'This mobility app was designed specifically to address the safety concerns of women passengers. The need was clear: offer safe mobility to women, with a booking logic adapted to their specific concerns. We developed a mobile app focused on safety, simple booking and user trust at every step of the ride. Trip tracking reinforces that sense of safety throughout the journey. The result is a mobility solution built first and foremost around safety and trust.'
    },
    achievements: [
      { fr: 'Réservation sécurisée pensée pour les passagères', en: 'Secure booking designed for women passengers' },
      { fr: 'Suivi de trajet en temps réel', en: 'Real-time trip tracking' },
      { fr: 'Expérience mobile dédiée et rassurante', en: 'Dedicated, reassuring mobile experience' }
    ],
    intervention: {
      fr: 'Conception produit et développement de l’application mobile.',
      en: 'Product design and mobile app development.'
    }
  },
  'smart-hardsoft': {
    project: {
      fr: 'Smart HardSoft avait besoin d’une présence corporate multilingue, facile à administrer en interne sans dépendre systématiquement d’un développeur. L’enjeu était de présenter clairement une offre hardware & software tout en gardant les contenus faciles à mettre à jour. Nous avons construit un site corporate multilingue accompagné d’une administration de contenus simple à prendre en main. Les équipes internes peuvent ainsi actualiser les offres et les informations sans intervention technique. Le résultat est une présence corporate plus claire et plus facile à maintenir dans le temps.',
      en: 'Smart HardSoft needed a multilingual corporate presence that was easy to manage internally, without relying on a developer for every update. The challenge was to present a hardware & software offering clearly while keeping content easy to update. We built a multilingual corporate site paired with a simple content administration back-office. Internal teams can now update offers and information without technical help. The result is a clearer corporate presence that’s easier to maintain over time.'
    },
    achievements: [
      { fr: 'Site corporate multilingue', en: 'Multilingual corporate site' },
      { fr: 'Back-office d’administration de contenus', en: 'Content administration back-office' },
      { fr: 'Présentation claire de l’offre hardware & software', en: 'Clear presentation of the hardware & software offering' }
    ],
    intervention: {
      fr: 'Développement front-end et intégration de l’administration de contenu.',
      en: 'Front-end development and content administration integration.'
    }
  },
  'falconprospect-ai': {
    project: {
      fr: 'Ce prototype a été développé en interne, sous FalconDeev, pour explorer l’automatisation de la prospection. L’objectif était de gagner du temps sur des tâches de prospection répétitives qui mobilisaient inutilement l’équipe. Nous avons conçu un prototype orienté prospection avec des workflows intelligents capables de reproduire une partie de ce travail manuel. L’approche est restée pragmatique, centrée sur des cas d’usage concrets plutôt que sur une automatisation généralisée. Le résultat est un gain de temps réel sur les tâches de prospection les plus répétitives.',
      en: 'This prototype was developed internally, under FalconDeev, to explore prospecting automation. The goal was to save time on repetitive prospecting tasks that were taking up unnecessary team bandwidth. We designed a prospecting-focused prototype with smart workflows able to reproduce part of that manual work. The approach stayed pragmatic, centred on concrete use cases rather than blanket automation. The result is a real time saving on the most repetitive prospecting tasks.'
    },
    achievements: [
      { fr: 'Automatisation d’une partie du travail de prospection', en: 'Automation of part of the prospecting work' },
      { fr: 'Workflows intelligents pour les tâches répétitives', en: 'Smart workflows for repetitive tasks' }
    ],
    intervention: {
      fr: 'Conception, prototypage et développement.',
      en: 'Design, prototyping and development.'
    }
  },
  jafiz: {
    project: {
      fr: 'Jafiz avait besoin d’une plateforme unique pour gérer les accès et le parc automobile de l’organisation, plutôt que de multiplier des outils dispersés. L’enjeu était de centraliser cette gestion pour y voir plus clair au quotidien, sans complexifier le travail des équipes sur le terrain. Nous avons construit une plateforme SaaS de gestion des accès et du parc automobile, accompagnée d’une application mobile dédiée pour un usage simple en mobilité. Le suivi est désormais structuré et centralisé au même endroit. Le résultat est une gestion plus claire et plus fiable des accès et des véhicules.',
      en: 'Jafiz needed a single platform to manage access and fleet for the organisation, instead of relying on scattered tools. The challenge was to centralise that management for day-to-day clarity, without complicating things for teams in the field. We built a SaaS platform for access and fleet management, paired with a dedicated mobile app for easy use on the go. Tracking is now structured and centralised in one place. The result is clearer, more reliable management of access and vehicles.'
    },
    achievements: [
      { fr: 'Plateforme SaaS de gestion des accès', en: 'SaaS platform for access management' },
      { fr: 'Gestion centralisée du parc automobile', en: 'Centralised fleet management' },
      { fr: 'Application mobile dédiée pour un usage en mobilité', en: 'Dedicated mobile app for on-the-go use' }
    ],
    intervention: {
      fr: 'Développement produit et accompagnement technique.',
      en: 'Product development and technical support.'
    }
  }
};
