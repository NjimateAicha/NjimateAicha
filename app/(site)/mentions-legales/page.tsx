import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site www.aichanjimate.com — Aicha Njimate, Software Engineer et fondatrice de FalconDeev.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true }
};

export default function MentionsLegalesPage() {
  return (
    <div className="legal-page">
      <p className="eyebrow">Mentions légales</p>
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>www.aichanjimate.com</strong> est édité par Aicha Njimate, Software Engineer et
          fondatrice du studio de développement FalconDeev.
        </p>
        <p>
          Contact : <a href="mailto:njimateaicha@gmail.com">njimateaicha@gmail.com</a>
        </p>
        {/*
          INFORMATION RÉELLE REQUISE — à compléter par Aicha :
          raison sociale exacte, forme juridique, adresse du siège, ICE / RC / IF,
          nom du directeur de la publication, hébergeur (Vercel Inc. par défaut) et
          ses coordonnées. Tant que ces éléments ne sont pas fournis, cette page
          reste volontairement minimale et en noindex.
        */}
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Sauf mention contraire, les contenus, textes et visuels présents sur ce site sont la
          propriété d’Aicha Njimate ou de ses clients. Les captures d’écran de projets sont publiées
          avec l’accord des clients concernés.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Les informations transmises via le formulaire de contact ou le formulaire d’avis sont
          utilisées uniquement pour répondre à votre demande et, pour les avis, après validation,
          pour publication. L’adresse e-mail fournie dans un avis n’est jamais publiée. Vous pouvez
          demander la suppression de vos données en écrivant à l’adresse ci-dessus.
        </p>
      </section>
    </div>
  );
}
