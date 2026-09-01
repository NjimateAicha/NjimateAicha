# Captures — Prime Event Rental

Déposer ici les **captures d'écran réelles** de https://www.primeventrental.com/
(prises par Aicha, jamais récupérées automatiquement, aucune image protégée scrapée).

Format conseillé : **WebP**, largeur ~1600 px, ratio proche de 16:9, poids < 300 Ko.

## Fichiers

| Fichier | Contenu | Utilisé où |
|---|---|---|
| `prime.jpeg` ✅ **en place** | Page d'accueil (univers de marque premium) | Carte principale de l'accueil + hero de l'étude de cas + image Open Graph. |
| `prime-event-rental-catalog.webp` | Catalogue — catégories et filtres | Galerie de l'étude de cas |
| `prime-event-rental-product.webp` | Fiche produit | Galerie |
| `prime-event-rental-selection.webp` | Sélection d'articles et quantités | Galerie |
| `prime-event-rental-quote.webp` | Formulaire de demande de devis | Galerie |
| `prime-event-rental-admin.webp` | Espace d'administration du catalogue | Galerie |
| `prime-event-rental-mobile.webp` | Expérience mobile | Galerie |

## Comportement actuel

- `prime-event-rental-home.webp` **absent** → placeholder élégant (jamais de gros bloc « PER » cassé) ;
  l'image Open Graph retombe automatiquement sur la photo de profil.
- `prime-event-rental-home.webp` **présent** → utilisé immédiatement partout, plus aucun placeholder.
- Galerie de l'étude de cas : masquée tant qu'il y a moins de **2** vraies images.

## Pour activer la galerie

Dans `app/case-studies.ts`, entrée `prime-event-rental`, tableau `gallery` :
remplacer chaque `src: null` par le chemin correspondant
(`'/images/projects/prime-event-rental/prime-event-rental-catalog.webp'`, etc.).
