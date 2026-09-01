export type Lang = 'fr' | 'en';

export interface Bi {
  fr: string;
  en: string;
}

export interface Project {
  slug: string;
  title: string;
  category: Bi;
  categoryOverride?: Bi;
  description: Bi;
  tags: string[];
  tagsOverride?: Bi[];
  image: string | null;
  imageNote?: string;
  featured: boolean;
  link?: string;
  /** One-sentence business need — used on the homepage selected-projects cards. */
  problem?: Bi;
  /** What was delivered, in one sentence. */
  solution?: Bi;
  /** 2–3 key capabilities shipped. */
  capabilities?: Bi[];
  /** Aicha's concrete role on the project. */
  role?: Bi;
  /** Sector label shown above the card title. */
  sector?: Bi;
}

export const CALENDLY_URL = 'https://calendly.com/njimateaicha/30min';
export const WHATSAPP_PRO_URL = 'https://wa.me/212601927552';
export const SITE_URL = 'https://www.aichanjimate.com';
// FalconDeev has no confirmed public URL yet — use a stable in-site anchor
// until its status is verified. Do not point to an unconfirmed domain.
export const FALCONDEEV_URL = `${SITE_URL}/#falcondeev`;

export const CATEGORIES: Bi[] = [
  { fr: 'Tous', en: 'All' },
  { fr: 'SaaS & Applications mobiles', en: 'SaaS & mobile apps' },
  { fr: 'Sites web & corporate', en: 'Websites & corporate' },
  { fr: 'E-commerce & marques', en: 'E-commerce & brands' },
  { fr: 'CRM & systèmes internes', en: 'CRM & internal systems' },
  { fr: 'Intelligence artificielle & prototypes', en: 'AI & prototypes' }
];

const CAT = {
  saas: { fr: 'SaaS & Applications mobiles', en: 'SaaS & mobile apps' },
  web: { fr: 'Sites web & corporate', en: 'Websites & corporate' },
  ecommerce: { fr: 'E-commerce & marques', en: 'E-commerce & brands' },
  crm: { fr: 'CRM & systèmes internes', en: 'CRM & internal systems' },
  ai: { fr: 'Intelligence artificielle & prototypes', en: 'AI & prototypes' }
};

export const PROJECTS: Project[] = [
  {
    slug: 'prime-event-rental',
    title: 'Prime Event Rental',
    category: CAT.web,
    categoryOverride: {
      fr: 'Plateforme catalogue, devis & acquisition digitale',
      en: 'Catalog, quotation & digital acquisition platform'
    },
    sector: { fr: 'Événementiel & location de mobilier', en: 'Events & furniture rental' },
    description: {
      fr: 'Plateforme digitale premium pour une entreprise de location de mobilier événementiel au Maroc, conçue en français, anglais et arabe : catalogue administrable de plus de 46 produits, parcours de sélection, demande de devis structurée, architecture SEO localisée et présence Google Business Profile.',
      en: 'Premium digital platform for an event furniture rental company in Morocco, delivered in French, English and Arabic: administrable catalog of more than 46 products, selection flow, structured quotation request, localized SEO foundations and Google Business Profile presence.'
    },
    tags: ['Next.js', 'Multilingue', 'Catalogue', 'Devis', 'SEO'],
    tagsOverride: [
      { fr: 'Next.js', en: 'Next.js' },
      { fr: 'FR / EN / AR', en: 'FR / EN / AR' },
      { fr: 'Catalogue 46+ produits', en: '46+ product catalog' },
      { fr: 'Demande de devis', en: 'Quotation flow' },
      { fr: 'SEO & Google Ads', en: 'SEO & Google Ads' }
    ],
    // Real capture provided by Aicha — used on the homepage primary card, the
    // case-study hero and as the Open Graph image.
    image: '/images/projects/prime-event-rental/prime.jpeg',
    featured: true,
    link: 'https://www.primeventrental.com/',
    problem: {
      fr: 'Dépasser le simple site vitrine : présenter un large catalogue de mobilier, laisser les clients préparer une sélection par événement et centraliser les demandes de devis.',
      en: 'Move beyond a showcase site: present a large furniture catalog, let clients prepare a selection per event and centralise quotation requests.'
    },
    solution: {
      fr: 'La plateforme a été conçue en français, anglais et arabe, avec une architecture SEO localisée, un catalogue administrable de plus de 46 produits, une présence Google Business Profile et un accompagnement au lancement des campagnes Google Ads.',
      en: 'The platform was delivered in French, English and Arabic, with localized SEO foundations, an administrable catalog of more than 46 products, Google Business Profile support and assistance with the launch and monitoring of Google Ads campaigns.'
    },
    capabilities: [
      { fr: 'Catalogue administrable de plus de 46 produits', en: 'Administrable catalog of 46+ products' },
      { fr: 'Sélection d’articles + demande de devis', en: 'Item selection + quotation request' },
      { fr: 'Architecture SEO trilingue FR / EN / AR', en: 'Trilingual SEO architecture FR / EN / AR' }
    ],
    role: {
      fr: 'Développement, architecture SEO, contenus multilingues (FR / EN / AR), Google Business Profile, ainsi que la mise en place et le suivi des campagnes Google Ads.',
      en: 'Development, SEO architecture, multilingual content (FR / EN / AR), Google Business Profile, plus the setup and monitoring of Google Ads campaigns.'
    }
  },
  {
    slug: 'divindeep',
    title: 'DivinDeep',
    category: CAT.saas,
    sector: { fr: 'SaaS & psychométrie', en: 'SaaS & psychometrics' },
    description: {
      fr: 'Plateforme SaaS de psychométrie appliquée avec backend structuré, rapports et parcours multilingue.',
      en: 'Applied psychometrics SaaS platform with a structured backend, reporting engine and multilingual journey.'
    },
    tags: ['Laravel', 'Next.js', 'Supabase'],
    image: '/images/projects/divindeep.jpeg',
    featured: true,
    link: 'https://divindeep.com/',
    problem: {
      fr: 'Transformer des tests comportementaux en rapports exploitables sans complexifier le parcours des utilisateurs finaux.',
      en: 'Turn behavioural tests into actionable reports without complicating the end-user journey.'
    },
    solution: {
      fr: 'Architecture backend robuste, moteur de génération de rapports multilingues et dashboard d’analyse.',
      en: 'Robust backend architecture, a multilingual report-generation engine and an analytics dashboard.'
    },
    capabilities: [
      { fr: 'Rapports multilingues automatisés', en: 'Automated multilingual reports' },
      { fr: 'Dashboard d’analyse', en: 'Analytics dashboard' },
      { fr: 'Backend évolutif', en: 'Scalable backend' }
    ],
    role: {
      fr: 'Architecture, développement backend et optimisation du parcours de bout en bout.',
      en: 'Architecture, backend development and end-to-end journey optimisation.'
    }
  },
  {
    slug: 'oatzy-foods',
    title: 'Oatzy Foods',
    category: CAT.ecommerce,
    categoryOverride: { fr: 'E-commerce & expérience de marque', en: 'E-commerce & Brand Experience' },
    description: {
      fr: 'Expérience e-commerce premium pour une marque marocaine de granola artisanal, enrichie d’animations 3D et d’une présentation produit immersive.',
      en: 'Premium e-commerce experience for a Moroccan artisan granola brand, featuring 3D animations and immersive product presentation.'
    },
    tags: ['E-commerce', 'Animation 3D', 'Expérience produit'],
    tagsOverride: [
      { fr: 'E-commerce', en: 'E-commerce' },
      { fr: 'Animation 3D', en: '3D Animation' },
      { fr: 'Expérience produit', en: 'Product Experience' }
    ],
    image: '/images/projects/oatzy.png',
    featured: true
  },
  {
    slug: 'studio-8-pilates',
    title: 'Forma Pilates',
    category: CAT.web,
    description: {
      fr: 'Site premium de réservation, présentation des cours et de l’univers du studio.',
      en: 'Premium booking and showcase site presenting the studio’s classes and identity.'
    },
    tags: ['Next.js', 'TypeScript', 'Réservation'],
    image: '/images/projects/forma-pilates.jpeg',
    featured: true
  },
  {
    slug: 'move-up-automotive',
    title: 'Move Up Automotive',
    category: CAT.web,
    description: {
      fr: 'Écosystème de réservation de véhicules avec gestion de flotte et expérience client fluide.',
      en: 'Vehicle booking ecosystem with fleet management and a smooth customer experience.'
    },
    tags: ['Next.js', 'TypeScript', 'Réservation'],
    image: '/images/projects/move-up-automotive.jpeg',
    featured: false
  },
  {
    slug: 'riad-alia',
    title: 'Riad Alia Suites & Spa',
    category: CAT.web,
    sector: { fr: 'Hôtellerie, réservation & tourisme', en: 'Hospitality, booking & tourism' },
    description: {
      fr: 'Expérience de réservation multilingue avec chambres, spa et excursions à Chefchaouen.',
      en: 'Multilingual booking experience covering rooms, spa and excursions in Chefchaouen.'
    },
    tags: ['Next.js', 'Multilingue', 'Réservation'],
    image: '/images/projects/riad-alia-suites-spa.jpeg',
    featured: true,
    link: 'https://riadalia.com/',
    problem: {
      fr: 'Offrir aux voyageurs internationaux une expérience de réservation multilingue à la hauteur d’un établissement haut de gamme.',
      en: 'Give international travellers a multilingual booking experience worthy of a high-end property.'
    },
    solution: {
      fr: 'Un site présentant chambres, spa et excursions, avec un parcours de réservation clair du premier regard à la confirmation.',
      en: 'A site presenting rooms, spa and excursions, with a booking journey that stays clear from first glance to confirmation.'
    },
    capabilities: [
      { fr: 'Parcours de réservation multilingue', en: 'Multilingual booking journey' },
      { fr: 'Présentation chambres & spa', en: 'Rooms & spa presentation' },
      { fr: 'Mise en avant des excursions', en: 'Excursions showcase' }
    ],
    role: {
      fr: 'Développement front-end, structuration des contenus et parcours de réservation.',
      en: 'Front-end development, content structuring and booking journey.'
    }
  },
  {
    slug: 'marocsol-crm',
    title: 'Marocsol CRM',
    category: CAT.crm,
    sector: { fr: 'Plateformes internes & opérations', en: 'Internal platforms & operations' },
    description: {
      fr: 'CRM interne centralisant les demandes web, les prospects et le suivi commercial de Marocsol.',
      en: 'Internal CRM centralizing web leads, prospects and sales follow-up for Marocsol.'
    },
    tags: ['Laravel', 'MySQL', 'CRM'],
    image: '/images/projects/marocsol-crm.jpeg',
    featured: true,
    link: 'https://marocsol.com/',
    problem: {
      fr: 'Une équipe commerciale qui jonglait entre plusieurs canaux, avec un risque réel de doublons et de demandes perdues.',
      en: 'A sales team juggling several channels, with a real risk of duplicates and lost requests.'
    },
    solution: {
      fr: 'Un CRM interne connecté au site public qui centralise les demandes web, les prospects et leur historique.',
      en: 'An internal CRM connected to the public site that centralises web requests, prospects and their history.'
    },
    capabilities: [
      { fr: 'Centralisation des demandes web', en: 'Centralised web requests' },
      { fr: 'Gestion des prospects & historique', en: 'Prospect management & history' },
      { fr: 'Suivi commercial lisible', en: 'Clear sales follow-up' }
    ],
    role: {
      fr: 'Analyse des besoins, développement du CRM interne et intégration avec le site existant.',
      en: 'Needs analysis, internal CRM development and integration with the existing site.'
    }
  },
  {
    slug: 'ima-transport',
    title: 'Application mobile de transport destinée aux femmes',
    category: CAT.saas,
    sector: { fr: 'Mobilité & transport', en: 'Mobility & transport' },
    description: {
      fr: 'Application pensée pour la mobilité sécurisée et la logique de réservation dédiée aux femmes.',
      en: 'App designed for safe mobility and a booking flow dedicated to women passengers.'
    },
    tags: ['Flutter', 'Mobile', 'Mobilité'],
    image: '/images/projects/ima-transport.png',
    featured: true,
    problem: {
      fr: 'Proposer une mobilité sécurisée aux passagères, avec une logique de réservation adaptée à leurs préoccupations.',
      en: 'Offer safe mobility to women passengers, with a booking logic adapted to their concerns.'
    },
    solution: {
      fr: 'Une application mobile centrée sur la sécurité, la simplicité de réservation et le suivi de trajet en temps réel.',
      en: 'A mobile app focused on safety, simple booking and real-time trip tracking.'
    },
    capabilities: [
      { fr: 'Réservation sécurisée', en: 'Secure booking' },
      { fr: 'Suivi de trajet en temps réel', en: 'Real-time trip tracking' },
      { fr: 'Expérience mobile dédiée', en: 'Dedicated mobile experience' }
    ],
    role: {
      fr: 'Conception produit et développement de l’application mobile.',
      en: 'Product design and mobile app development.'
    }
  },
  {
    slug: 'smart-hardsoft',
    title: 'Smart HardSoft',
    category: CAT.web,
    description: {
      fr: 'Site corporate multilingue et administration de contenus pour une structure hardware & software.',
      en: 'Multilingual corporate site and content administration for a hardware & software company.'
    },
    tags: ['Next.js', 'Multilingue', 'CMS'],
    image: '/images/projects/smarthardsoft.png',
    featured: false
  },
  {
    slug: 'falconprospect-ai',
    title: 'FalconProspect AI',
    category: CAT.ai,
    sector: { fr: 'IA & automatisation', en: 'AI & automation' },
    description: {
      fr: 'Prototype et automatisation orientés prospection et workflows intelligents, sous FalconDeev.',
      en: 'AI-driven prospecting prototype and smart workflow automation, built under FalconDeev.'
    },
    tags: ['Python', 'Automatisation', 'IA'],
    image: '/images/projects/falconprospect-ai.jpeg',
    featured: true,
    problem: {
      fr: 'Gagner du temps sur des tâches de prospection répétitives qui mobilisaient inutilement l’équipe.',
      en: 'Save time on repetitive prospecting tasks that were taking up unnecessary team bandwidth.'
    },
    solution: {
      fr: 'Un prototype interne de workflows intelligents reproduisant une partie de ce travail manuel, sur des cas d’usage concrets.',
      en: 'An internal prototype of smart workflows reproducing part of that manual work, on concrete use cases.'
    },
    capabilities: [
      { fr: 'Automatisation d’une partie de la prospection', en: 'Automation of part of the prospecting work' },
      { fr: 'Workflows intelligents', en: 'Smart workflows' }
    ],
    role: {
      fr: 'Conception, prototypage et développement, sous FalconDeev.',
      en: 'Design, prototyping and development, under FalconDeev.'
    }
  },
  {
    slug: 'jafiz',
    title: 'Jafiz',
    category: CAT.saas,
    categoryOverride: { fr: 'SaaS & Application mobile', en: 'SaaS & Mobile Application' },
    sector: { fr: 'SaaS & gestion de parc', en: 'SaaS & fleet management' },
    description: {
      fr: 'Plateforme SaaS de gestion des accès et du parc automobile, accompagnée d’une application mobile dédiée.',
      en: 'SaaS platform for access and fleet management, supported by a dedicated mobile application.'
    },
    tags: ['Laravel', 'SaaS'],
    image: '/images/projects/jafiz.jpeg',
    featured: true,
    link: 'https://jafiz.ma/',
    problem: {
      fr: 'Centraliser la gestion des accès et du parc automobile plutôt que de multiplier des outils dispersés.',
      en: 'Centralise access and fleet management instead of relying on scattered tools.'
    },
    solution: {
      fr: 'Une plateforme SaaS de gestion des accès et du parc, avec une application mobile dédiée pour un usage en mobilité.',
      en: 'A SaaS platform for access and fleet management, with a dedicated mobile app for use on the go.'
    },
    capabilities: [
      { fr: 'Gestion des accès', en: 'Access management' },
      { fr: 'Gestion centralisée du parc', en: 'Centralised fleet management' },
      { fr: 'Application mobile dédiée', en: 'Dedicated mobile app' }
    ],
    role: {
      fr: 'Développement produit et accompagnement technique.',
      en: 'Product development and technical support.'
    }
  },
  {
    slug: 'visa-reservation-app',
    title: 'Visa Reservation App',
    category: CAT.saas,
    description: { fr: 'Application mobile de prise de rendez-vous visa.', en: 'Mobile app for visa appointment booking.' },
    tags: ['Mobile', 'Réservation'],
    image: '/images/projects/visa-reservation-app.jpeg',
    featured: false
  },
  {
    slug: 'tourism-mobile-app',
    title: 'Tourism Mobile App',
    category: CAT.saas,
    description: { fr: 'Application mobile dédiée au tourisme et à la découverte locale.', en: 'Mobile app dedicated to tourism and local discovery.' },
    tags: ['Mobile', 'Tourisme'],
    image: '/images/projects/tourism-mobile-app.jpeg',
    featured: false
  },
  {
    slug: 'syndic-management',
    title: 'Syndic Management',
    category: CAT.saas,
    sector: { fr: 'Plateformes internes & opérations', en: 'Internal platforms & operations' },
    description: { fr: 'Application de gestion de syndic et de copropriété.', en: 'Property syndicate and co-ownership management app.' },
    tags: ['Mobile', 'Gestion'],
    image: '/images/projects/syndic-management.png',
    featured: true,
    problem: {
      fr: 'Structurer la gestion d’une copropriété : appels de fonds, dépenses, communication et suivi des résidents.',
      en: 'Structure co-ownership management: fund calls, expenses, communication and resident follow-up.'
    },
    solution: {
      fr: 'Une application de gestion centralisant la copropriété au même endroit, pour le syndic comme pour les résidents.',
      en: 'A management app centralising co-ownership in one place, for both the syndicate and residents.'
    },
    capabilities: [
      { fr: 'Suivi des appels de fonds & dépenses', en: 'Fund-call & expense tracking' },
      { fr: 'Communication résidents', en: 'Resident communication' }
    ],
    role: {
      fr: 'Conception produit et développement de l’application.',
      en: 'Product design and application development.'
    }
  },
  {
    slug: 'santebliss',
    title: 'SanteBliss',
    category: CAT.ecommerce,
    description: { fr: 'Boutique e-commerce santé et bien-être.', en: 'Health & wellness e-commerce store.' },
    tags: ['E-commerce', 'Santé'],
    image: '/images/projects/santebliss.jpeg',
    featured: false,
    link: 'https://santebliss.com/'
  },
  {
    slug: 'brunette-france',
    title: 'Brunette France',
    category: CAT.ecommerce,
    description: { fr: 'Boutique e-commerce de produits capillaires.', en: 'Hair care products e-commerce store.' },
    tags: ['E-commerce', 'Beauté'],
    image: '/images/projects/brunette-france.jpeg',
    featured: false
  },
  {
    slug: 'az-lab-skinpara',
    title: 'AZ LabSKINPARA',
    category: CAT.ecommerce,
    description: { fr: 'Boutique e-commerce de parapharmacie.', en: 'Parapharmacy e-commerce store.' },
    tags: ['E-commerce', 'Parapharmacie'],
    image: '/images/projects/az-lab-skinpara.jpeg',
    featured: false
  },
  {
    slug: 'bricks-for-all',
    title: 'Bricks For All',
    category: CAT.ecommerce,
    description: { fr: 'Plateforme e-commerce de matériaux de construction.', en: 'E-commerce platform for building materials.' },
    tags: ['E-commerce', 'BTP'],
    image: '/images/projects/bricks-for-all.jpeg',
    featured: false
  },
  {
    slug: 'moto-location',
    title: 'Moto Location',
    category: CAT.web,
    description: { fr: 'Site de location de motos avec réservation en ligne.', en: 'Motorcycle rental site with online booking.' },
    tags: ['Réservation', 'Mobilité'],
    image: '/images/projects/moto-location.jpeg',
    featured: false
  },
  {
    slug: 'jewelry-ecommerce',
    title: 'Jewelry E-commerce',
    category: CAT.ecommerce,
    description: { fr: 'Boutique e-commerce de bijoux.', en: 'Jewelry e-commerce store.' },
    tags: ['E-commerce', 'Bijoux'],
    image: '/images/projects/jewelry-ecommerce.jpeg',
    featured: false
  },
  {
    slug: 'ecommerce-platform-electro',
    title: 'E-commerce Platform',
    category: CAT.ecommerce,
    description: { fr: 'Plateforme e-commerce d’électronique grand public.', en: 'Consumer electronics e-commerce platform.' },
    tags: ['E-commerce', 'Électronique'],
    image: '/images/projects/ecommerce-platform-electro.jpeg',
    featured: false
  },
  {
    slug: 'arena-immobilier',
    title: 'Arena Immobilier',
    category: CAT.web,
    description: { fr: 'Site vitrine immobilier avec catalogue de biens.', en: 'Real-estate showcase site with property catalog.' },
    tags: ['Site vitrine', 'Immobilier'],
    image: '/images/projects/arena-immobilier.jpeg',
    featured: false
  },
  {
    slug: 'najiprom',
    title: 'NajiProm',
    category: CAT.web,
    description: { fr: 'Site corporate pour un groupe de construction et rénovation à Casablanca.', en: 'Corporate site for a construction & renovation group in Casablanca.' },
    tags: ['Corporate', 'BTP'],
    image: '/images/projects/najiprom.jpeg',
    featured: false,
    link: 'https://najiprom.ma/'
  },
  {
    slug: 'rocksol',
    title: 'Rocksol',
    category: CAT.web,
    description: { fr: 'Site corporate pour une entreprise de revêtements de sol au Maroc.', en: 'Corporate site for a flooring company in Morocco.' },
    tags: ['Corporate', 'BTP'],
    image: '/images/projects/rocksol.jpeg',
    featured: false,
    link: 'https://www.rocksol.ma/'
  },
  {
    slug: 'moon-interior',
    title: 'Moon Interior',
    category: CAT.web,
    description: { fr: 'Site vitrine pour une marque de design d’intérieur.', en: 'Showcase site for an interior design brand.' },
    tags: ['Site vitrine', 'Design'],
    image: '/images/projects/moon-interior.png',
    featured: false
  },
  {
    slug: 'opticien',
    title: 'Opticien',
    category: CAT.web,
    description: { fr: 'Site vitrine pour un cabinet d’optique.', en: 'Showcase site for an optician practice.' },
    tags: ['Site vitrine', 'Santé'],
    image: '/images/projects/opticien.jpeg',
    featured: false
  },
  {
    slug: 'cabinet-dentaire',
    title: 'Cabinet Dentaire',
    category: CAT.web,
    description: { fr: 'Site vitrine pour un cabinet dentaire.', en: 'Showcase site for a dental practice.' },
    tags: ['Site vitrine', 'Santé'],
    image: '/images/projects/cabinet-dentaire.jpeg',
    featured: false
  },
  {
    slug: 'cabinet-hb-avocats',
    title: 'Cabinet HB Avocats',
    category: CAT.web,
    description: { fr: 'Site vitrine moderne pour un cabinet d’avocats.', en: 'Modern showcase site for a law firm.' },
    tags: ['Corporate', 'Juridique'],
    image: '/images/projects/cabinet-hb-avocats.jpeg',
    featured: false,
    link: 'https://cabinethbavocats.com/'
  },
  {
    slug: 'afrilavage',
    title: 'Afrilavage',
    category: CAT.web,
    description: { fr: 'Site vitrine pour un service de lavage automobile.', en: 'Showcase site for a car wash service.' },
    tags: ['Site vitrine', 'Services'],
    image: '/images/projects/afrilavage.jpeg',
    featured: false,
    link: 'https://www.afrilavage.com/'
  },
  {
    slug: 'ab-services',
    title: 'Ab-Services',
    category: CAT.web,
    description: { fr: 'Site vitrine et application desktop pour Ab-Services.', en: 'Showcase site and desktop application for Ab-Services.' },
    tags: ['Corporate', 'Desktop'],
    image: '/images/projects/ab-services.png',
    featured: false,
    link: 'https://ab-services.ma'
  },
  {
    slug: 'falcondev-portfolio',
    title: 'FalconDeev — site du studio',
    category: CAT.web,
    description: {
      fr: 'Site de présentation du studio de développement FalconDeev, fondé et piloté par Aicha Njimate.',
      en: 'Presentation site for FalconDeev, the development studio founded and led by Aicha Njimate.'
    },
    tags: ['Corporate', 'Studio'],
    image: '/images/projects/falcondev-portfolio.jpeg',
    featured: false
  },
  {
    slug: 'face-recognition-app',
    title: 'Face Recognition App',
    category: CAT.ai,
    description: { fr: 'Application open source de reconnaissance faciale.', en: 'Open-source face recognition application.' },
    tags: ['IA', 'Open source'],
    image: '/images/projects/face-recognition-app.jpeg',
    featured: false
  },
  {
    slug: 'internal-order-system',
    title: 'Internal Order System',
    category: CAT.crm,
    description: { fr: 'Système interne de gestion des commandes.', en: 'Internal order management system.' },
    tags: ['CRM', 'Interne'],
    image: '/images/projects/internal-order-system.jpeg',
    featured: false
  },
  {
    slug: 'college-management',
    title: 'College Management',
    category: CAT.crm,
    description: { fr: 'Système de gestion académique pour établissement scolaire.', en: 'Academic management system for an educational institution.' },
    tags: ['CRM', 'Éducation'],
    image: '/images/projects/college-management.jpeg',
    featured: false
  },
  {
    slug: 'quiz-web-app',
    title: 'Quiz Web App',
    category: CAT.ai,
    description: { fr: 'Application web de quiz interactifs.', en: 'Interactive web quiz application.' },
    tags: ['Prototype', 'Web'],
    image: '/images/projects/quiz-web-app.jpeg',
    featured: false
  }
];

// The projects showcased on the homepage (see FEATURED_PROJECTS below).
// 6–8 strong projects, diverse across SaaS, business systems, web, mobile and booking.
export const HOME_FEATURED_SLUGS = [
  'prime-event-rental',
  'divindeep',
  'riad-alia',
  'falconprospect-ai',
  'marocsol-crm',
  'jafiz',
  'ima-transport',
  'syndic-management'
];
export const FEATURED_PROJECTS = HOME_FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

// ---------------------------------------------------------------------------
// Homepage showcase — EXACTLY three projects, with short bespoke copy.
// All other projects stay available on /projects. The detailed project data
// lives untouched in PROJECTS + case-studies.ts.
// ---------------------------------------------------------------------------
export interface HomeShowcaseItem {
  slug: string;
  blurb: Bi;
  tags: Bi[];
}

export const HOME_SHOWCASE: HomeShowcaseItem[] = [
  {
    slug: 'prime-event-rental',
    blurb: {
      fr: 'Une plateforme multilingue premium réunissant catalogue administrable, sélection de produits, demande de devis, SEO et acquisition digitale.',
      en: 'A premium multilingual platform bringing together an administrable catalog, product selection, quotation requests, SEO and digital acquisition.'
    },
    tags: [
      { fr: 'Next.js', en: 'Next.js' },
      { fr: 'Catalogue & devis', en: 'Catalog & quotes' },
      { fr: 'SEO multilingue', en: 'Multilingual SEO' }
    ]
  },
  {
    slug: 'divindeep',
    blurb: {
      fr: 'Un SaaS psychométrique multilingue qui transforme les réponses Big Five en rapports personnalisés générés avec l’IA.',
      en: 'A multilingual psychometrics SaaS that turns Big Five answers into personalised, AI-generated reports.'
    },
    tags: [
      { fr: 'SaaS', en: 'SaaS' },
      { fr: 'IA', en: 'AI' },
      { fr: 'Laravel & React', en: 'Laravel & React' }
    ]
  },
  {
    slug: 'riad-alia',
    blurb: {
      fr: 'Une plateforme hôtelière multilingue avec réservation, services additionnels, disponibilité et espace d’administration.',
      en: 'A multilingual hospitality platform with booking, add-on services, availability and an admin space.'
    },
    tags: [
      { fr: 'Booking', en: 'Booking' },
      { fr: 'Next.js', en: 'Next.js' },
      { fr: 'Supabase', en: 'Supabase' }
    ]
  }
];

export interface Niche {
  key: string;
  icon: string;
  title: Bi;
  description: Bi;
  category?: Bi;
  externalLink?: { url: string; label: Bi };
}

// Domains of experience — not artificial niches. Framed as sectors Aicha has
// actually worked with, each linking to the matching projects.
export const NICHES: Niche[] = [
  {
    key: 'saas-startups',
    icon: 'Rocket',
    title: { fr: 'SaaS & startups', en: 'SaaS & startups' },
    description: {
      fr: 'MVP, plateformes métier, IA et produits pensés pour évoluer.',
      en: 'MVPs, business platforms, AI and products built to grow.'
    },
    category: CAT.saas
  },
  {
    key: 'hospitality',
    icon: 'Hotel',
    title: { fr: 'Hôtellerie, réservation & tourisme', en: 'Hospitality, booking & tourism' },
    description: {
      fr: 'Chambres, spa, excursions, parcours de réservation multilingues.',
      en: 'Rooms, spa, excursions and multilingual booking journeys.'
    },
    category: CAT.web
  },
  {
    key: 'professional-services',
    icon: 'BriefcaseBusiness',
    title: { fr: 'Services professionnels', en: 'Professional services' },
    description: {
      fr: 'Sites corporate et présence digitale pour cabinets, consultants et PME.',
      en: 'Corporate sites and digital presence for firms, consultants and SMEs.'
    },
    category: CAT.web
  },
  {
    key: 'mobility',
    icon: 'CarFront',
    title: { fr: 'Mobilité & transport', en: 'Mobility & transport' },
    description: {
      fr: 'Réservation de véhicules, gestion de flotte et applications dédiées.',
      en: 'Vehicle booking, fleet management and dedicated apps.'
    },
    category: CAT.web
  },
  {
    key: 'events',
    icon: 'PartyPopper',
    title: { fr: 'Événementiel', en: 'Events' },
    description: {
      fr: 'Catalogues, sélection d’articles, demandes de devis et espaces admin.',
      en: 'Catalogs, item selection, quotation requests and admin spaces.'
    },
    category: CAT.web
  },
  {
    key: 'health-wellness',
    icon: 'HeartPulse',
    title: { fr: 'Santé & bien-être', en: 'Health & wellness' },
    description: {
      fr: 'Cabinets, cliniques, studios : présentation, prise de contact et réservation.',
      en: 'Practices, clinics and studios: presentation, contact and booking.'
    },
    category: CAT.web
  },
  {
    key: 'ecommerce',
    icon: 'ShoppingBag',
    title: { fr: 'E-commerce & marques', en: 'E-commerce & brands' },
    description: {
      fr: 'Boutiques performantes, paiement et présentation produit soignée.',
      en: 'High-performing stores, payments and polished product presentation.'
    },
    category: CAT.ecommerce
  },
  {
    key: 'internal-platforms',
    icon: 'LayoutDashboard',
    title: { fr: 'Plateformes internes & opérations', en: 'Internal platforms & operations' },
    description: {
      fr: 'Prospects, équipes, données et automatisations centralisées.',
      en: 'Leads, teams, data and automations, centralised.'
    },
    category: CAT.crm
  }
];

// ---------------------------------------------------------------------------
// Method — from idea to launch (homepage section F)
// ---------------------------------------------------------------------------
export interface MethodStep {
  title: Bi;
  description: Bi;
}

export const METHOD_STEPS: MethodStep[] = [
  {
    title: { fr: 'Clarifier', en: 'Clarify' },
    description: {
      fr: 'Comprendre le problème, les utilisateurs, les priorités et la première version réellement utile.',
      en: 'Understand the problem, the users, the priorities and the first genuinely useful version.'
    }
  },
  {
    title: { fr: 'Concevoir', en: 'Design' },
    description: {
      fr: 'Définir les parcours, l’architecture, les données et l’expérience avant d’accumuler les fonctionnalités.',
      en: 'Define the journeys, architecture, data and experience before piling on features.'
    }
  },
  {
    title: { fr: 'Construire', en: 'Build' },
    description: {
      fr: 'Développer par étapes visibles, avec des démonstrations régulières et des décisions documentées.',
      en: 'Develop in visible steps, with regular demos and documented decisions.'
    }
  },
  {
    title: { fr: 'Lancer', en: 'Launch' },
    description: {
      fr: 'Tester, déployer, mesurer et préparer la suite du produit.',
      en: 'Test, deploy, measure and prepare the next stage of the product.'
    }
  }
];

export const METHOD_NOTE: Bi = {
  fr: 'Vous travaillez directement avec moi. Selon le périmètre, je coordonne l’équipe adaptée au projet.',
  en: 'You work directly with me. When the scope requires it, I coordinate the right specialists around the project.'
};

// ---------------------------------------------------------------------------
// Working principles (homepage section G)
// ---------------------------------------------------------------------------
export interface Principle {
  title: Bi;
  body: Bi;
}

export const PRINCIPLES: Principle[] = [
  {
    title: { fr: 'Le problème avant les fonctionnalités', en: 'The problem before the features' },
    body: {
      fr: 'Avant d’écrire une ligne de code, je veux comprendre ce qui coince réellement et pour qui. Une fonctionnalité qui ne règle pas un vrai problème n’a pas sa place dans la première version.',
      en: 'Before writing a line of code, I want to understand what is actually blocking, and for whom. A feature that doesn’t solve a real problem has no place in the first version.'
    }
  },
  {
    title: { fr: 'Une première version utile avant une plateforme trop grande', en: 'A useful first version before an oversized platform' },
    body: {
      fr: 'Il vaut mieux lancer quelque chose de restreint mais réellement utilisé, puis l’étendre à partir d’usages concrets, plutôt que de passer des mois sur une plateforme que personne n’a encore testée.',
      en: 'It’s better to ship something small but genuinely used, then extend it from real usage, than to spend months on a platform no one has tested yet.'
    }
  },
  {
    title: { fr: 'Des démonstrations régulières plutôt qu’une surprise finale', en: 'Regular demos rather than a final surprise' },
    body: {
      fr: 'Vous voyez le produit avancer à intervalles réguliers. Cela permet d’ajuster tôt, d’éviter les mauvaises surprises et de garder le contrôle sur les priorités.',
      en: 'You see the product move forward at regular intervals. That lets us adjust early, avoid bad surprises and keep control over priorities.'
    }
  },
  {
    title: { fr: 'Le client reste propriétaire du code et de ses accès', en: 'The client owns the code and their accounts' },
    body: {
      fr: 'Le dépôt, les hébergements, les noms de domaine et les services tiers sont à votre nom. Vous n’êtes jamais captif d’un prestataire pour continuer à faire vivre votre produit.',
      en: 'The repository, hosting, domain names and third-party services are in your name. You are never locked to one provider to keep your product alive.'
    }
  },
  {
    title: { fr: 'Une base compréhensible et maintenable', en: 'A codebase that stays understandable and maintainable' },
    body: {
      fr: 'Le code est écrit pour être repris — par moi plus tard, ou par une autre équipe. Des choix techniques lisibles valent mieux qu’une prouesse impossible à maintenir.',
      en: 'The code is written to be picked up again — by me later, or by another team. Readable technical choices beat a clever trick nobody can maintain.'
    }
  },
  {
    title: { fr: 'Des décisions honnêtes sur le périmètre, le budget et les priorités', en: 'Honest calls on scope, budget and priorities' },
    body: {
      fr: 'Si une demande coûte cher pour peu de valeur, je le dis. Si un délai n’est pas tenable, je le dis aussi. Un projet avance mieux quand les arbitrages sont posés clairement.',
      en: 'If a request costs a lot for little value, I say so. If a deadline isn’t realistic, I say that too. A project moves better when the trade-offs are stated plainly.'
    }
  }
];

// ---------------------------------------------------------------------------
// FAQ (homepage section K) — visible content, mirrored in FAQPage JSON-LD
// ---------------------------------------------------------------------------
export interface FaqItem {
  question: Bi;
  answer: Bi;
}

export const FAQ: FaqItem[] = [
  {
    question: { fr: 'Quels types de projets réalisez-vous ?', en: 'What kind of projects do you work on?' },
    answer: {
      fr: 'Des SaaS et MVP, des CRM et plateformes métier, des applications web et mobiles, des parcours de réservation, de catalogue et de demande de devis, ainsi que des intégrations IA et de l’automatisation. Le point commun : un vrai enjeu business derrière le produit.',
      en: 'SaaS products and MVPs, CRMs and business platforms, web and mobile applications, booking, catalog and quotation flows, plus AI integrations and automation. The common thread: a real business need behind the product.'
    }
  },
  {
    question: { fr: 'Travaillez-vous seule ou avec une équipe ?', en: 'Do you work alone or with a team?' },
    answer: {
      fr: 'Vous échangez directement avec moi, et je pilote chaque projet de bout en bout. Selon le périmètre, je constitue ou coordonne une équipe pour le développement, le design, le contenu, le SEO ou l’acquisition.',
      en: 'You deal directly with me, and I lead every project end to end. Depending on the scope, I build or coordinate a team for development, design, content, SEO or acquisition.'
    }
  },
  {
    question: { fr: 'Combien de temps faut-il pour lancer un MVP ?', en: 'How long does it take to launch an MVP?' },
    answer: {
      fr: 'Cela dépend du périmètre de la première version. Un cadrage permet de délimiter ce qui doit absolument être là au lancement et ce qui peut attendre. En général, un MVP se lance en quelques semaines à quelques mois.',
      en: 'It depends on the scope of the first version. A scoping phase defines what absolutely has to be there at launch and what can wait. An MVP typically launches in a few weeks to a few months.'
    }
  },
  {
    question: { fr: 'Quel budget faut-il prévoir ?', en: 'What budget should I plan for?' },
    answer: {
      fr: 'Il n’y a pas de tarif unique : le budget dépend du périmètre, de la complexité et du niveau d’accompagnement. Un cadrage initial permet d’établir une proposition claire, avec des options selon vos priorités.',
      en: 'There is no single price: the budget depends on scope, complexity and the level of support. An initial scoping phase produces a clear proposal, with options based on your priorities.'
    }
  },
  {
    question: { fr: 'Est-ce que le client reste propriétaire du code ?', en: 'Does the client own the code?' },
    answer: {
      fr: 'Oui. Le dépôt, les hébergements, les noms de domaine et les services tiers sont à votre nom. Vous gardez le contrôle total de votre produit.',
      en: 'Yes. The repository, hosting, domain names and third-party services are in your name. You keep full control of your product.'
    }
  },
  {
    question: { fr: 'Pouvez-vous reprendre un produit ou un code existant ?', en: 'Can you take over an existing product or codebase?' },
    answer: {
      fr: 'Oui. Je commence par un audit du code, des données et de l’infrastructure pour évaluer l’état réel du produit, puis nous décidons ensemble s’il faut corriger, faire évoluer ou refondre.',
      en: 'Yes. I start with an audit of the code, data and infrastructure to assess the real state of the product, then we decide together whether to fix, extend or rebuild.'
    }
  },
  {
    question: { fr: 'Proposez-vous la maintenance après le lancement ?', en: 'Do you offer maintenance after launch?' },
    answer: {
      fr: 'Oui. Après le lancement, je peux assurer le suivi correctif, les évolutions et la surveillance du produit, de façon ponctuelle ou dans un cadre récurrent.',
      en: 'Yes. After launch, I can handle bug fixes, new features and monitoring, either on an ad-hoc basis or under a recurring arrangement.'
    }
  },
  {
    question: { fr: 'Travaillez-vous avec des clients hors du Maroc ?', en: 'Do you work with clients outside Morocco?' },
    answer: {
      fr: 'Oui. Je travaille avec des entreprises, startups et porteurs de projets au Maroc et à l’international, en français et en anglais, en visio et par écrit.',
      en: 'Yes. I work with companies, startups and project owners in Morocco and internationally, in French and English, over video calls and in writing.'
    }
  },
  {
    question: { fr: 'Pouvez-vous accompagner le SEO et le lancement ?', en: 'Can you support SEO and launch?' },
    answer: {
      fr: 'Oui. Architecture SEO, contenu multilingue, données structurées, Search Console et Google Business Profile font partie de mon périmètre, avec un accompagnement à l’acquisition au moment du lancement.',
      en: 'Yes. SEO architecture, multilingual content, structured data, Search Console and Google Business Profile are part of my scope, along with acquisition support at launch time.'
    }
  }
];

// ---------------------------------------------------------------------------
// Trust band (homepage section C) — sober, factual, only real information
// ---------------------------------------------------------------------------
export interface TrustFact {
  value?: number;
  prefix?: string;
  suffix?: string;
  label: Bi;
}

export const TRUST_FACTS: TrustFact[] = [
  { value: 25, prefix: '+', label: { fr: 'projets réalisés', en: 'projects delivered' } },
  { label: { fr: 'Produits web & mobile', en: 'Web & mobile products' } },
  { label: { fr: 'SaaS, CRM & plateformes', en: 'SaaS, CRMs & platforms' } },
  { label: { fr: 'Pilotage direct par Aicha', en: 'Directly led by Aicha' } }
];

// A few real project / client names shown as sober wordmarks under the trust
// facts. Kept short on purpose — never a full logo wall.
export const TRUST_WORDMARKS = [
  'Prime Event Rental',
  'DivinDeep',
  'Riad Alia',
  'Jafiz',
  'Marocsol',
  'NajiProm'
];

// Full-width "Projets & collaborations" auto-scrolling band — every public,
// presentable project name (not just the six featured). Short display labels
// so the marquee stays elegant.
const MARQUEE_LABELS: Record<string, string> = {
  'ima-transport': 'Mobilité femmes',
  'ecommerce-platform-electro': 'E-commerce Electro',
  'falcondev-portfolio': 'FalconDeev'
};

export const PROJECT_MARQUEE: string[] = PROJECTS.map(
  (p) => MARQUEE_LABELS[p.slug] ?? p.title
);

// ---------------------------------------------------------------------------
// Final CTA (homepage section L)
// ---------------------------------------------------------------------------
export const FINAL_CTA = {
  title: {
    fr: 'Vous avez une idée de SaaS, de plateforme ou d’application ?',
    en: 'Have an idea for a SaaS product, platform or application?'
  } as Bi,
  text: {
    fr: 'Clarifions le besoin, la première version utile et le meilleur chemin vers le lancement.',
    en: 'Let’s clarify the need, the first useful version and the best path to launch.'
  } as Bi,
  cta: { fr: 'Réserver un appel découverte', en: 'Book a discovery call' } as Bi
};

export interface ClientLogo {
  name: string;
  image: string | null;
  imageNote?: string;
}

export const CLIENTS: ClientLogo[] = [
  { name: 'DivinDeep', image: null, imageNote: 'public/images/clients/divindeep-logo.svg' },
  { name: 'Marocsol', image: null, imageNote: 'public/images/clients/marocsol-logo.svg' },
  { name: 'NajiProm', image: null, imageNote: 'public/images/clients/najiprom-logo.svg' },
  { name: 'Forma Pilates', image: null, imageNote: 'public/images/clients/forma-pilates-logo.svg' },
  { name: 'Oatzy Foods', image: null, imageNote: 'public/images/clients/oatzy-foods.svg' },
  { name: 'Mehdi Taxi', image: null, imageNote: 'public/images/clients/mehdi-taxi-logo.svg' },
  { name: 'Smart HardSoft', image: null, imageNote: 'public/images/clients/smart-hardsoft-logo.svg' },
  { name: 'Rocksol', image: null, imageNote: 'public/images/clients/rocksol-logo.svg' },
  { name: 'FalconDeev', image: null, imageNote: 'public/images/clients/falcondeev-logo.svg' }
];

export interface Talk {
  image: string;
  place: Bi;
  name: string;
  topic: Bi;
  year?: string;
}

export const TALKS: Talk[] = [
  {
    image: '/images/talks/ensa-khouribga.webp',
    place: { fr: 'École d’ingénieurs, Khouribga', en: 'Engineering school, Khouribga' },
    name: 'ENSA Khouribga',
    topic: { fr: 'Freelance vs Emploi', en: 'Freelance vs Employment' }
  },
  {
    image: '/images/talks/universite-mundiapolis.jpg',
    place: { fr: 'Université Mundiapolis, Casablanca', en: 'Université Mundiapolis, Casablanca' },
    name: 'Université Mundiapolis',
    topic: { fr: 'Carrière Tech & Entrepreneuriat', en: 'Tech Career & Entrepreneurship' }
  },
  {
    image: '/images/talks/blablaconf-geeks.jpg',
    place: { fr: 'Conférence en ligne', en: 'Online conference' },
    name: 'BlaBla Conf Geeks',
    topic: { fr: 'Freelance vs Emploi : vérité terrain', en: 'Freelance vs Employment: ground truth' }
  }
];

export interface Testimonial {
  name: string;
  role: Bi;
  quote: Bi;
  rating: number;
  project: string;
  projectUrl?: string;
  image?: string;
  /** Explicit avatar initials (overrides the computed ones). */
  initials?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mr. Hamza Elouazzani',
    role: { fr: 'SaaS — Gestion des accès & parc automobile', en: 'SaaS — Access & fleet management' },
    quote: {
      fr: 'J’ai travaillé avec Aicha sur mon projet tech et ça s’est vraiment super bien passé. Elle est très adaptable, comprend vite les besoins et sait s’ajuster facilement. Toujours disponible et la communication est simple et fluide. Je recommande sans hésiter.',
      en: 'I worked with Aicha on my tech project and it went really well. She is very adaptable, quickly understands the needs and adjusts easily. Always available, with simple and fluid communication. I recommend her without hesitation.'
    },
    rating: 5,
    project: 'Jafiz.ma',
    projectUrl: 'https://jafiz.ma/'
  },
  {
    name: 'Nadia Mghari',
    role: { fr: 'Fondatrice — DivinDeep', en: 'Founder — DivinDeep' },
    quote: {
      fr: 'Aicha s’est distinguée par son sérieux, sa réactivité et sa capacité à transformer des besoins complexes en solutions techniques concrètes. Je recommande Aicha pour tout projet nécessitant une développeuse sérieuse, autonome et rigoureuse.',
      en: 'Aicha stood out for her seriousness, responsiveness and ability to turn complex needs into concrete technical solutions. I recommend Aicha for any project requiring a serious, autonomous and rigorous developer.'
    },
    rating: 5,
    project: 'DivinDeep.com',
    projectUrl: 'https://divindeep.com/'
  },
  {
    name: 'Hanan Bounit',
    role: { fr: 'Avocate', en: 'Lawyer' },
    quote: {
      fr: 'Excellente collaboration ! Site livré rapidement, design moderne et conforme à nos attentes. Je recommande à 100 %.',
      en: 'Excellent collaboration! Site delivered quickly, modern design and exactly what we wanted. I fully recommend her.'
    },
    rating: 5,
    project: 'Cabinet HB Avocats',
    projectUrl: 'https://cabinethbavocats.com/'
  },
  {
    name: 'Mohamed Arab',
    role: { fr: 'E-commerce', en: 'E-commerce' },
    quote: {
      fr: 'Merci beaucoup Aïcha. Le site est exactement comme je voulais, je suis très content du résultat. Bravo pour ton travail et ton professionnalisme.',
      en: 'Thank you so much Aicha. The site is exactly as I wanted it, I am very happy with the result. Great work and professionalism.'
    },
    rating: 5,
    project: 'SanteBliss',
    projectUrl: 'https://santebliss.com/'
  },
  {
    name: 'Yassine Serrafi',
    role: { fr: 'CEO — Afrilavage', en: 'CEO — Afrilavage' },
    quote: {
      fr: 'Disponible, réactif et très investi. Le résultat technique est solide et le suivi de projet excellent.',
      en: 'Available, responsive and very invested. The technical result is solid and the project follow-up excellent.'
    },
    rating: 5,
    project: 'Afrilavage',
    projectUrl: 'https://www.afrilavage.com/',
    image: '/images/clients/afrilavage-temoignage.jpg'
  },
  {
    name: 'Ayoub Ait Ali',
    role: { fr: '', en: '' },
    quote: {
      fr: 'Satisfait du travail d’Aicha, qui a créé un site web conforme à toutes nos attentes. Grande patience, bonne compréhension de nos besoins et ouverte à toutes les révisions.',
      en: 'Happy with Aicha’s work — she built a website that met all our expectations. Great patience, good understanding of our needs and open to every revision.'
    },
    rating: 5,
    project: 'bayticare.fr',
    projectUrl: 'https://bayticare.fr'
  },
  {
    name: 'IchraQ Opticienne',
    role: { fr: '', en: '' },
    quote: {
      fr: 'Un grand merci à FalconDev pour le développement de notre application desktop. Leur expertise et réactivité ont été essentielles.',
      en: 'A big thank you to FalconDev for developing our desktop application. Their expertise and responsiveness were essential.'
    },
    rating: 5,
    project: 'Application desktop'
  },
  {
    name: 'Mohammed Rezki',
    role: { fr: '', en: '' },
    quote: {
      fr: 'Travailler avec FalconDev a été une expérience exceptionnelle. Aicha a parfaitement compris nos besoins et livré un site web de grande qualité.',
      en: 'Working with FalconDev was an exceptional experience. Aicha perfectly understood our needs and delivered a high-quality website.'
    },
    rating: 5,
    project: 'arfakvoyage',
    projectUrl: 'https://arfakvoyage.com/'
  },
  {
    name: 'Noureddine Abad',
    role: { fr: '', en: '' },
    quote: {
      fr: 'Une collaboration fluide et un résultat à la hauteur de nos attentes pour notre présence digitale.',
      en: 'A smooth collaboration and a result that lived up to our expectations for our digital presence.'
    },
    rating: 5,
    project: 'ab-services.ma',
    projectUrl: 'https://ab-services.ma',
    image: '/images/clients/ab-services-temoignage.jpg'
  }
];

// ---------------------------------------------------------------------------
// Instagram reviews — real client recommendations. Displayed with INITIALS
// ONLY (never a profile photo). The quotes are the authors' original French
// words: kept verbatim in FR AND EN, never machine-translated or altered.
// The third handle is truncated in the screenshot, so it is NOT reconstructed —
// the public name is a neutral label.
export const INSTAGRAM_REVIEWS: Testimonial[] = [
  {
    name: '@alannbankaii',
    initials: 'AL',
    role: { fr: 'Recommandation Instagram', en: 'Recommandation Instagram' },
    quote: {
      fr: 'Un immense merci pour ton professionnalisme et ton implication tout au long de notre projet. Travailler avec toi a été un vrai plaisir : à l’écoute, réactive et toujours soucieuse de la qualité. Nous sommes très satisfaits du travail réalisé et nous te recommandons sans hésiter. Hâte de collaborer à nouveau sur de futurs projets ! 🚀👏',
      en: 'Un immense merci pour ton professionnalisme et ton implication tout au long de notre projet. Travailler avec toi a été un vrai plaisir : à l’écoute, réactive et toujours soucieuse de la qualité. Nous sommes très satisfaits du travail réalisé et nous te recommandons sans hésiter. Hâte de collaborer à nouveau sur de futurs projets ! 🚀👏'
    },
    rating: 5,
    project: ''
  },
  {
    name: '@abdel_lepharmacien',
    initials: 'AB',
    role: { fr: 'Recommandation Instagram', en: 'Recommandation Instagram' },
    quote: {
      fr: 'Rendu professionnel, je recommande.',
      en: 'Rendu professionnel, je recommande.'
    },
    rating: 5,
    project: ''
  },
  {
    name: 'Cliente — projet e-commerce',
    initials: 'CE',
    role: { fr: 'Recommandation Instagram', en: 'Recommandation Instagram' },
    quote: {
      fr: 'J’ai adoré travailler avec Aicha ! Dès le début, elle a parfaitement compris ma vision et l’a transformée en un site web magnifique, moderne, épuré et totalement en accord avec l’image de notre produit. Au-delà de son talent, c’est une personne très à l’écoute, disponible, réactive et vraiment agréable avec qui collaborer. Elle a même livré le projet avant la date prévue, ce qui est très appréciable. Je suis ravie de cette collaboration et je la recommande les yeux fermés. Merci encore Aicha pour ton professionnalisme et ton implication 💗😘',
      en: 'J’ai adoré travailler avec Aicha ! Dès le début, elle a parfaitement compris ma vision et l’a transformée en un site web magnifique, moderne, épuré et totalement en accord avec l’image de notre produit. Au-delà de son talent, c’est une personne très à l’écoute, disponible, réactive et vraiment agréable avec qui collaborer. Elle a même livré le projet avant la date prévue, ce qui est très appréciable. Je suis ravie de cette collaboration et je la recommande les yeux fermés. Merci encore Aicha pour ton professionnalisme et ton implication 💗😘'
    },
    rating: 5,
    project: ''
  }
];

export interface ExpertiseItem {
  icon: string;
  title: Bi;
  description: Bi;
  keywords: Bi[];
}

export const EXPERTISE_INTRO: Bi = {
  fr: 'Je ne construis pas seulement des interfaces. Je transforme des processus, des idées et des besoins métier en produits utiles, évolutifs et prêts à être utilisés.',
  en: 'I don’t just build interfaces. I turn processes, ideas and business needs into useful, scalable products that are ready to be used.'
};

export const EXPERTISE: ExpertiseItem[] = [
  {
    icon: 'Rocket',
    title: { fr: 'SaaS & MVP', en: 'SaaS & MVP' },
    description: {
      fr: 'Cadrage, architecture et développement de la première version utile d’un produit, avec une base suffisamment solide pour évoluer.',
      en: 'Scoping, architecture and development of the first useful version of a product, on a base solid enough to grow.'
    },
    keywords: [
      { fr: 'Cadrage', en: 'Scoping' },
      { fr: 'MVP', en: 'MVP' },
      { fr: 'Architecture', en: 'Architecture' }
    ]
  },
  {
    icon: 'LayoutDashboard',
    title: { fr: 'CRM & plateformes métier', en: 'CRM & business platforms' },
    description: {
      fr: 'Outils internes, dashboards, automatisations, gestion des équipes, clients, opérations et données.',
      en: 'Internal tools, dashboards, automations, management of teams, clients, operations and data.'
    },
    keywords: [
      { fr: 'CRM', en: 'CRM' },
      { fr: 'Dashboards', en: 'Dashboards' },
      { fr: 'Automatisation', en: 'Automation' }
    ]
  },
  {
    icon: 'Code2',
    title: { fr: 'Applications web & mobiles', en: 'Web & mobile applications' },
    description: {
      fr: 'Expériences rapides, accessibles et adaptées aux parcours réels des utilisateurs.',
      en: 'Fast, accessible experiences shaped around real user journeys.'
    },
    keywords: [
      { fr: 'Web', en: 'Web' },
      { fr: 'Mobile', en: 'Mobile' },
      { fr: 'Accessibilité', en: 'Accessibility' }
    ]
  },
  {
    icon: 'ShoppingBag',
    title: { fr: 'Réservation, catalogues & marketplaces', en: 'Booking, catalogs & marketplaces' },
    description: {
      fr: 'Parcours de réservation, sélection de produits, demandes de devis, paiements et espaces administrateurs.',
      en: 'Booking journeys, product selection, quotation requests, payments and admin spaces.'
    },
    keywords: [
      { fr: 'Réservation', en: 'Booking' },
      { fr: 'Devis', en: 'Quotation' },
      { fr: 'Paiements', en: 'Payments' }
    ]
  },
  {
    icon: 'Sparkles',
    title: { fr: 'IA & automatisation', en: 'AI & automation' },
    description: {
      fr: 'Intégration de modèles IA, génération de contenu, analyse documentaire, vision et automatisation de workflows.',
      en: 'AI model integration, content generation, document analysis, vision and workflow automation.'
    },
    keywords: [
      { fr: 'Modèles IA', en: 'AI models' },
      { fr: 'Workflows', en: 'Workflows' },
      { fr: 'Analyse documentaire', en: 'Document analysis' }
    ]
  },
  {
    icon: 'TrendingUp',
    title: { fr: 'SEO & lancement', en: 'SEO & launch' },
    description: {
      fr: 'Architecture SEO, contenu multilingue, données structurées, Search Console, Google Business Profile et accompagnement à l’acquisition.',
      en: 'SEO architecture, multilingual content, structured data, Search Console, Google Business Profile and acquisition support.'
    },
    keywords: [
      { fr: 'SEO technique', en: 'Technical SEO' },
      { fr: 'Contenu multilingue', en: 'Multilingual content' },
      { fr: 'Acquisition', en: 'Acquisition' }
    ]
  }
];

// Homepage keeps only THREE broad pillars. The six detailed services above
// stay in the data for a future dedicated /expertise page.
export const EXPERTISE_HOME_INTRO: Bi = {
  fr: 'Je transforme des processus, des idées et des besoins métier en produits utiles, évolutifs et prêts à être utilisés.',
  en: 'I turn processes, ideas and business needs into useful, scalable products that are ready to be used.'
};

export const EXPERTISE_PILLARS: ExpertiseItem[] = [
  {
    icon: 'Rocket',
    title: { fr: 'SaaS & MVP', en: 'SaaS & MVP' },
    description: {
      fr: 'De l’idée à une première version utile, testable et prête à évoluer.',
      en: 'From idea to a first version that is useful, testable and ready to grow.'
    },
    keywords: []
  },
  {
    icon: 'LayoutDashboard',
    title: { fr: 'CRM & systèmes métier', en: 'CRM & business systems' },
    description: {
      fr: 'Des plateformes qui centralisent les opérations, les équipes et les données.',
      en: 'Platforms that centralise operations, teams and data.'
    },
    keywords: []
  },
  {
    icon: 'Code2',
    title: { fr: 'Applications & expériences digitales', en: 'Applications & digital experiences' },
    description: {
      fr: 'Web, mobile, réservation, catalogues, automatisations et intégrations IA.',
      en: 'Web, mobile, booking, catalogs, automations and AI integrations.'
    },
    keywords: []
  }
];

// Condensed "About" paragraph for the homepage (~100 words). The full About
// content stays in ui-strings for a future dedicated /about page.
export const ABOUT_HOME: Bi = {
  fr: 'Je suis Aicha Njimate, Software Engineer et fondatrice de FalconDeev. Je conçois et développe des SaaS, des plateformes métier et des applications web et mobiles, de la clarification du besoin jusqu’au lancement. Je pilote personnellement chaque produit et je coordonne, selon le périmètre, les compétences nécessaires en design, contenu, SEO et acquisition. Je travaille avec des entreprises, des startups et des porteurs de projets au Maroc et à l’international.',
  en: 'I’m Aicha Njimate, a Software Engineer and the founder of FalconDeev. I design and build SaaS products, business platforms and web and mobile applications, from problem definition to launch. I personally lead every product and, when the scope requires it, coordinate the design, content, SEO and growth expertise around it. I work with companies, startups and project owners in Morocco and internationally.'
};

export const TECH_STACK = ['Laravel', 'Next.js', 'React', 'Flutter', 'Supabase', 'WordPress', 'APIs', 'AI'];

export const MENTORING_STATS: { value: string; label: Bi }[] = [
  { value: '6h', label: { fr: 'de mentorat', en: 'of mentoring' } },
  { value: '30–60', label: { fr: 'min par session', en: 'min per session' } },
  { value: 'IA → Digital', label: { fr: 'entrepreneuriat digital', en: 'digital entrepreneurship' } }
];

const WHATSAPP_MESSAGE = 'Bonjour Aicha, je souhaite discuter avec vous d’un projet digital.';

export const CONTACT = {
  email: 'njimateaicha@gmail.com',
  whatsapp: ['+212 601-927552'],
  whatsappLink: `https://wa.me/212601927552?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  instagram: '@njimate_aicha',
  instagramUrl: 'https://www.instagram.com/njimate_aicha/',
  linkedin: 'linkedin.com/in/aicha-njimate-846aa5245',
  linkedinUrl: 'https://www.linkedin.com/in/aicha-njimate-846aa5245/',
  city: { fr: 'Kénitra, Maroc', en: 'Kénitra, Morocco' },
  falcondeevUrl: FALCONDEEV_URL
};

export interface ContactStat {
  value: number;
  prefix?: string;
  suffix?: string;
  padZero?: boolean;
  label: Bi;
  caption?: Bi;
}

export const CONTACT_STATS: ContactStat[] = [
  { value: 25, prefix: '+', label: { fr: 'Entreprises & projets', en: 'Companies & projects' } },
  { value: 3, label: { fr: 'Langues de travail', en: 'Working languages' } },
  { value: 360, suffix: '°', label: { fr: 'De l’idée au déploiement', en: 'From idea to deployment' } },
  { value: 1, padZero: true, label: { fr: 'Partenaire produit', en: 'Product partner' } }
];

export const HERO_STATS: ContactStat[] = [
  { value: 25, prefix: '+', label: { fr: 'Entreprises & projets', en: 'Companies & projects' } },
  {
    value: 4,
    label: { fr: 'Solutions digitales', en: 'Digital solutions' },
    caption: { fr: 'Web · Mobile · SaaS · Systèmes', en: 'Web · Mobile · SaaS · Systems' }
  },
  { value: 360, suffix: '°', label: { fr: 'De l’idée au déploiement', en: 'From idea to deployment' } },
  {
    value: 1,
    padZero: true,
    label: { fr: 'Vision produit', en: 'Product vision' },
    caption: { fr: 'Stratégie · Design · Développement', en: 'Strategy · Design · Development' }
  }
];

export const SOLUTIONS_MARQUEE: Bi[] = [
  { fr: 'Startups & MVP', en: 'Startups & MVP' },
  { fr: 'Plateformes SaaS', en: 'SaaS Platforms' },
  { fr: 'Systèmes internes', en: 'Internal Systems' },
  { fr: 'Chatbots IA', en: 'AI Chatbots' },
  { fr: 'Automatisation', en: 'Automation' },
  { fr: 'Applications mobiles', en: 'Mobile Applications' },
  { fr: 'E-commerce', en: 'E-commerce' },
  { fr: 'Expériences web', en: 'Web Experiences' }
];

export const ABOUT_BADGES: Bi[] = [
  { fr: 'Web, Mobile & SaaS', en: 'Web, Mobile & SaaS' },
  { fr: 'Fondatrice de FalconDeev', en: 'Founder of FalconDeev' },
  { fr: 'Consultations 1:1', en: '1:1 Consulting' },
  { fr: 'Tech Speaker', en: 'Tech Speaker' }
];
