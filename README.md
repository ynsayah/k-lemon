# 🍋 Calamansi K Lemon

> La référence mondiale sur le Calamansi (Calamondin)

## Stack technique

- **Next.js 15** — App Router + Server Components
- **TypeScript** — Typage strict
- **Tailwind CSS** — Design system custom (calamansi/citron/terre)
- **Fonts** — Playfair Display (titres) + DM Sans (corps)
- **i18n** — Bilingue FR/EN avec architecture `/fr` et `/en`
- **SEO** — Metadata API, Schema.org JSON-LD, sitemap auto, robots.txt

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'env
cp .env.example .env.local

# 3. Lancer le serveur de dev
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) → redirige vers `/fr`

## Structure du projet

```
src/
├── app/
│   ├── [locale]/           # Routes bilingues (/fr, /en)
│   │   ├── page.tsx        # Homepage
│   │   ├── botanique/      # Fiche botanique
│   │   ├── recettes/       # Index + pages recettes
│   │   ├── blog/           # Articles
│   │   ├── boutique/       # Shop (Phase 4)
│   │   ├── faq/            # FAQ interactive
│   │   └── contact/        # Formulaire contact
│   ├── sitemap.ts          # Sitemap auto
│   └── robots.ts           # Robots.txt auto
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Hero, WhatIs, Recettes...
│   └── ui/                 # Badge, AnimateOnScroll...
├── lib/
│   ├── i18n.ts             # Traductions + helpers
│   └── seo.ts              # Metadata + JSON-LD builders
├── types/index.ts          # Types TypeScript
└── styles/globals.css      # Design system

content/
├── fr/                     # Articles MDX en français
│   ├── articles/
│   ├── recettes/
│   ├── pays/
│   └── sante/
└── en/                     # Articles MDX en anglais

public/
├── data/                   # JSON (pays producteurs, etc.)
└── images/                 # Photos (à ajouter)
```

## Roadmap

| Phase | Contenu | Statut |
|-------|---------|--------|
| ✅ 1 | Structure + Design + Pages clés | Fait |
| 🔲 2 | Contentlayer + 20 articles SEO | À faire |
| 🔲 3 | Carte Leaflet + Galerie + Newsletter | À faire |
| 🔲 4 | Stripe + Boutique + Espace membre | À faire |

## Déploiement Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel --prod
```

Variables d'environnement à configurer dans le dashboard Vercel :
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optionnel)
- `RESEND_API_KEY` (Phase 3)
- `STRIPE_SECRET_KEY` (Phase 4)

## Design system

Palette : `calamansi` (vert), `citron` (jaune), `terre` (brun)
Fonts : Playfair Display + DM Sans
Voir `src/styles/globals.css` et `tailwind.config.ts`
