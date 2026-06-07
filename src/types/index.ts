// ─── Article / Blog ──────────────────────────────────────────────────────────
export interface Article {
  slug: string
  title: string
  excerpt: string
  content: string
  category: ArticleCategory
  author: string
  publishedAt: string
  updatedAt?: string
  image: string
  imageAlt: string
  tags: string[]
  locale: Locale
  readingTime: number
  featured?: boolean
  seo?: SEOMeta
}

export type ArticleCategory =
  | 'actualites' | 'agriculture' | 'sante'
  | 'recettes' | 'economie' | 'voyages' | 'botanique'

// ─── Recette ─────────────────────────────────────────────────────────────────
export interface Recette {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
  category: RecetteCategory
  difficulty: 'facile' | 'moyen' | 'difficile'
  prepTime: number   // minutes
  cookTime: number   // minutes
  servings: number
  calories?: number
  ingredients: Ingredient[]
  steps: string[]
  tags: string[]
  locale: Locale
  seo?: SEOMeta
}

export type RecetteCategory =
  | 'boissons' | 'desserts' | 'plats' | 'sauces'
  | 'cocktails' | 'patisserie' | 'marinades'

export interface Ingredient {
  name: string
  quantity: string
  unit?: string
  optional?: boolean
}

// ─── Pays producteur ─────────────────────────────────────────────────────────
export interface Pays {
  slug: string
  name: string
  continent: string
  flag: string
  coordinates: [number, number]
  description: string
  production: {
    volume: string     // tonnes/an
    surface: string    // hectares
    exportVolume?: string
    mainMarkets?: string[]
  }
  climate: string
  varieties: string[]
  image: string
  locale: Locale
}

// ─── Fiche santé ─────────────────────────────────────────────────────────────
export interface FicheSante {
  slug: string
  title: string
  category: string
  summary: string
  content: string
  vitamins?: NutritionItem[]
  minerals?: NutritionItem[]
  benefits: string[]
  studies?: StudyRef[]
  image?: string
  locale: Locale
}

export interface NutritionItem {
  name: string
  amount: string
  unit: string
  dv?: string  // daily value %
}

export interface StudyRef {
  title: string
  authors: string
  year: number
  journal: string
  url?: string
}

// ─── Navigation ──────────────────────────────────────────────────────────────
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
  icon?: string
  badge?: string
}

// ─── SEO ─────────────────────────────────────────────────────────────────────
export interface SEOMeta {
  title?: string
  description?: string
  ogImage?: string
  keywords?: string[]
  noindex?: boolean
  canonical?: string
}

// ─── i18n ────────────────────────────────────────────────────────────────────
export type Locale = 'fr' | 'en'

// ─── Produit boutique ─────────────────────────────────────────────────────────
export interface Produit {
  id: string
  slug: string
  name: string
  description: string
  price: number         // cents
  currency: 'EUR' | 'USD'
  category: ProduitCategory
  images: string[]
  stock?: number
  digital?: boolean
  locale: Locale
}

export type ProduitCategory =
  | 'plants' | 'graines' | 'livres' | 'guides-pdf'
  | 'accessoires' | 'produits-transformes'
