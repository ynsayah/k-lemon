import type { Locale } from '@/types'

export const locales: Locale[] = ['fr', 'en']
export const defaultLocale: Locale = 'fr'

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
}

export const localeFlags: Record<Locale, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
}

// ─── Traductions UI (hors contenu MDX) ───────────────────────────────────────
export const ui = {
  fr: {
    nav: {
      home:       'Accueil',
      histoire:   'Histoire',
      botanique:  'Botanique',
      culture:    'Culture',
      sante:      'Santé',
      recettes:   'Recettes',
      economie:   'Économie',
      galerie:    'Galerie',
      blog:       'Blog',
      carte:      'Carte',
      boutique:   'Boutique',
      faq:        'FAQ',
      contact:    'Contact',
    },
    home: {
      hero_title:    'Le Calamansi',
      hero_subtitle: 'Le petit agrume qui conquiert le monde',
      hero_cta:      'Découvrir le Calamansi',
      hero_cta2:     'Voir les recettes',
      discover:      'Découvrir',
      read_more:     'Lire la suite',
      view_all:      'Voir tout',
      minutes:       'min',
      articles:      'articles',
    },
    meta: {
      site_name:    'Calamansi K Lemon',
      description:  'La référence mondiale sur le Calamansi (Calamondin) : histoire, botanique, recettes, culture, économie et bien-être.',
    },
    footer: {
      tagline:   'La référence mondiale du Calamansi',
      rights:    'Tous droits réservés',
      newsletter_title:       'Restez informé',
      newsletter_placeholder: 'Votre adresse email',
      newsletter_cta:         "S'abonner",
    },
    recettes: {
      difficulty: { facile: 'Facile', moyen: 'Moyen', difficile: 'Difficile' },
      prep: 'Préparation',
      cook: 'Cuisson',
      servings: 'Portions',
      calories: 'Calories',
    },
  },
  en: {
    nav: {
      home:       'Home',
      histoire:   'History',
      botanique:  'Botany',
      culture:    'Farming',
      sante:      'Health',
      recettes:   'Recipes',
      economie:   'Economy',
      galerie:    'Gallery',
      blog:       'Blog',
      carte:      'World Map',
      boutique:   'Shop',
      faq:        'FAQ',
      contact:    'Contact',
    },
    home: {
      hero_title:    'The Calamansi',
      hero_subtitle: 'The small citrus conquering the world',
      hero_cta:      'Discover Calamansi',
      hero_cta2:     'See recipes',
      discover:      'Discover',
      read_more:     'Read more',
      view_all:      'View all',
      minutes:       'min',
      articles:      'articles',
    },
    meta: {
      site_name:    'Calamansi K Lemon',
      description:  'The world reference on Calamansi (Calamondin): history, botany, recipes, farming, economy and wellness.',
    },
    footer: {
      tagline:   'The world reference on Calamansi',
      rights:    'All rights reserved',
      newsletter_title:       'Stay informed',
      newsletter_placeholder: 'Your email address',
      newsletter_cta:         'Subscribe',
    },
    recettes: {
      difficulty: { facile: 'Easy', moyen: 'Medium', difficile: 'Hard' },
      prep: 'Prep time',
      cook: 'Cook time',
      servings: 'Servings',
      calories: 'Calories',
    },
  },
} as const

export type UITranslations = typeof ui.fr

export function getTranslations(locale: Locale): UITranslations {
  return ui[locale] as UITranslations
}

export function getLocalePath(locale: Locale, path: string): string {
  return `/${locale}${path}`
}
