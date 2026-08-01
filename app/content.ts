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
}

export const CALENDLY_URL = 'https://calendly.com/njimateaicha/30min';

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
    slug: 'divindeep',
    title: 'DivinDeep',
    category: CAT.saas,
    description: {
      fr: 'Plateforme SaaS de psychométrie appliquée avec backend structuré, rapports et parcours multilingue.',
      en: 'Applied psychometrics SaaS platform with a structured backend, reporting engine and multilingual journey.'
    },
    tags: ['Laravel', 'Next.js', 'Supabase'],
    image: '/images/projects/divindeep.jpeg',
    featured: true,
    link: 'https://divindeep.com/'
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
    title: 'Mehdi Taxi',
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
    description: {
      fr: 'Expérience de réservation multilingue avec chambres, spa et excursions à Chefchaouen.',
      en: 'Multilingual booking experience covering rooms, spa and excursions in Chefchaouen.'
    },
    tags: ['Next.js', 'Multilingue', 'Réservation'],
    image: '/images/projects/riad-alia-suites-spa.jpeg',
    featured: false,
    link: 'https://riadalia.com/'
  },
  {
    slug: 'marocsol-crm',
    title: 'Marocsol CRM',
    category: CAT.crm,
    description: {
      fr: 'CRM interne centralisant les demandes web, les prospects et le suivi commercial de Marocsol.',
      en: 'Internal CRM centralizing web leads, prospects and sales follow-up for Marocsol.'
    },
    tags: ['Laravel', 'MySQL', 'CRM'],
    image: '/images/projects/marocsol-crm.jpeg',
    featured: false,
    link: 'https://marocsol.com/'
  },
  {
    slug: 'ima-transport',
    title: 'Application mobile de transport destinée aux femmes',
    category: CAT.saas,
    description: {
      fr: 'Application pensée pour la mobilité sécurisée et la logique de réservation dédiée aux femmes.',
      en: 'App designed for safe mobility and a booking flow dedicated to women passengers.'
    },
    tags: ['Flutter', 'Mobile', 'Mobilité'],
    image: '/images/projects/ima-transport.png',
    featured: false
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
    description: {
      fr: 'Prototype et automatisation orientés prospection et workflows intelligents, sous FalconDeev.',
      en: 'AI-driven prospecting prototype and smart workflow automation, built under FalconDeev.'
    },
    tags: ['Python', 'Automatisation', 'IA'],
    image: '/images/projects/falconprospect-ai.jpeg',
    featured: false
  },
  {
    slug: 'jafiz',
    title: 'Jafiz',
    category: CAT.saas,
    categoryOverride: { fr: 'SaaS & Application mobile', en: 'SaaS & Mobile Application' },
    description: {
      fr: 'Plateforme SaaS de gestion des accès et du parc automobile, accompagnée d’une application mobile dédiée.',
      en: 'SaaS platform for access and fleet management, supported by a dedicated mobile application.'
    },
    tags: ['Laravel', 'SaaS'],
    image: '/images/projects/jafiz.jpeg',
    featured: true,
    link: 'https://jafiz.ma/'
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
    description: { fr: 'Application de gestion de syndic et de copropriété.', en: 'Property syndicate and co-ownership management app.' },
    tags: ['Mobile', 'Gestion'],
    image: '/images/projects/syndic-management.png',
    featured: false
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
    title: 'FalconDev Portfolio',
    category: CAT.web,
    description: { fr: 'Site corporate de l’agence FalconDeev.', en: 'Corporate site for the FalconDeev agency.' },
    tags: ['Corporate', 'Agence'],
    image: '/images/projects/falcondev-portfolio.jpeg',
    featured: false,
    link: 'https://falcondeev.com'
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

// The 3 projects showcased on the homepage (see FEATURED_PROJECTS below).
export const HOME_FEATURED_SLUGS = ['jafiz', 'divindeep', 'oatzy-foods'];
export const FEATURED_PROJECTS = HOME_FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

export interface Niche {
  key: string;
  icon: string;
  title: Bi;
  description: Bi;
  category?: Bi;
  externalLink?: { url: string; label: Bi };
}

export const NICHES: Niche[] = [
  {
    key: 'hospitality',
    icon: 'Hotel',
    title: { fr: 'Hôtellerie & réservation', en: 'Hospitality & booking' },
    description: {
      fr: 'Réservation, chambres, services et expérience client.',
      en: 'Booking, rooms, services and guest experience.'
    },
    category: CAT.web
  },
  {
    key: 'transport',
    icon: 'CarFront',
    title: { fr: 'Transport & mobilité', en: 'Transport & mobility' },
    description: {
      fr: 'Réservations, gestion de flotte et applications chauffeur.',
      en: 'Bookings, fleet management and driver apps.'
    },
    category: CAT.web
  },
  {
    key: 'fitness',
    icon: 'Activity',
    title: { fr: 'Fitness & wellness', en: 'Fitness & wellness' },
    description: {
      fr: 'Cours, planning, abonnements et prise de contact.',
      en: 'Classes, schedules, memberships and inquiries.'
    },
    category: CAT.web
  },
  {
    key: 'saas',
    icon: 'Rocket',
    title: { fr: 'SaaS pour startups', en: 'SaaS for startups' },
    description: {
      fr: 'MVP, plateformes métiers, IA et produits scalables.',
      en: 'MVPs, business platforms, AI and scalable products.'
    },
    category: CAT.saas
  },
  {
    key: 'ecommerce',
    icon: 'ShoppingBag',
    title: { fr: 'E-commerce & marques', en: 'E-commerce & brands' },
    description: {
      fr: 'Boutiques performantes, paiement et présentation produit.',
      en: 'High-performing stores, payments and product presentation.'
    },
    category: CAT.ecommerce
  },
  {
    key: 'crm',
    icon: 'LayoutDashboard',
    title: { fr: 'CRM & systèmes internes', en: 'CRM & internal systems' },
    description: {
      fr: 'Prospects, équipes, données et automatisations centralisées.',
      en: 'Leads, teams, data and automations, centralized.'
    },
    category: CAT.crm
  },
  {
    key: 'professional-services',
    icon: 'BriefcaseBusiness',
    title: { fr: 'Services professionnels', en: 'Professional services' },
    description: {
      fr: 'Sites corporate pour cabinets, consultants et entreprises.',
      en: 'Corporate sites for firms, consultants and businesses.'
    },
    category: CAT.web
  },
  {
    key: 'personal-branding',
    icon: 'Clapperboard',
    title: { fr: 'Personal branding & création de contenu', en: 'Personal branding & content creation' },
    description: {
      fr: 'Portfolio, présence digitale, Instagram et création de contenu.',
      en: 'Portfolio, digital presence, Instagram and content creation.'
    },
    externalLink: {
      url: 'https://www.instagram.com/njimate_aicha/',
      label: { fr: 'Voir mon univers', en: 'Explore my content' }
    }
  }
];

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

export interface ExpertiseItem {
  icon: string;
  title: Bi;
  description: Bi;
  keywords: Bi[];
}

export const EXPERTISE: ExpertiseItem[] = [
  {
    icon: 'Compass',
    title: { fr: 'MVP pour startups', en: 'MVP for startups' },
    description: {
      fr: 'Transformer une idée en produit fonctionnel, testable et prêt à être lancé.',
      en: 'Turn an idea into a functional, testable product ready to launch.'
    },
    keywords: [
      { fr: 'Validation', en: 'Validation' },
      { fr: 'MVP', en: 'MVP' },
      { fr: 'Lancement', en: 'Launch' }
    ]
  },
  {
    icon: 'Code2',
    title: { fr: 'Solutions web & mobiles', en: 'Web & mobile solutions' },
    description: {
      fr: 'Créer des expériences digitales modernes pour développer votre activité.',
      en: 'Modern digital experiences designed to support business growth.'
    },
    keywords: [
      { fr: 'Web', en: 'Web' },
      { fr: 'Mobile', en: 'Mobile' },
      { fr: 'Expérience', en: 'Experience' }
    ]
  },
  {
    icon: 'Database',
    title: { fr: 'SaaS & systèmes internes', en: 'SaaS & internal systems' },
    description: {
      fr: 'Centraliser les données, automatiser les opérations et simplifier la gestion.',
      en: 'Centralize data, automate operations and simplify business management.'
    },
    keywords: [
      { fr: 'SaaS', en: 'SaaS' },
      { fr: 'CRM', en: 'CRM' },
      { fr: 'Automatisation', en: 'Automation' }
    ]
  },
  {
    icon: 'TrendingUp',
    title: { fr: 'Solutions pour agences', en: 'Solutions for agencies' },
    description: {
      fr: 'Développement en marque blanche, renfort technique et solutions sur mesure.',
      en: 'White-label development, technical support and custom digital solutions.'
    },
    keywords: [
      { fr: 'Agences', en: 'Agencies' },
      { fr: 'White-label', en: 'White-label' },
      { fr: 'Partenariat', en: 'Partnership' }
    ]
  }
];

export const TECH_STACK = ['Laravel', 'Next.js', 'React', 'Flutter', 'Supabase', 'WordPress', 'APIs', 'AI'];

export const MENTORING_STATS: { value: string; label: Bi }[] = [
  { value: '+10', label: { fr: 'participants mentorés', en: 'mentored participants' } },
  { value: '6h', label: { fr: 'd’accompagnement', en: 'of mentoring' } },
  { value: '30–60', label: { fr: 'min par session', en: 'min per session' } },
  { value: 'IA → Digital', label: { fr: 'entrepreneuriat digital', en: 'digital entrepreneurship' } }
];

const WHATSAPP_MESSAGE = 'Bonjour Aicha, je souhaite discuter avec vous d’un projet digital.';

export const CONTACT = {
  email: 'njimateaicha@gmail.com',
  whatsapp: ['+212 621-309024', '+212 601-927552'],
  whatsappLink: `https://wa.me/212621309024?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  instagram: '@njimate_aicha',
  instagramUrl: 'https://www.instagram.com/njimate_aicha/',
  linkedin: 'linkedin.com/in/aicha-njimate-846aa5245',
  linkedinUrl: 'https://www.linkedin.com/in/aicha-njimate-846aa5245/',
  city: { fr: 'Kénitra, Maroc', en: 'Kénitra, Morocco' },
  falcondeevUrl: 'https://www.falcondeev.com/'
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
