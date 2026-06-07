import type { Metadata } from 'next'
import type { Locale, SEOMeta } from '@/types'
import { getTranslations } from './i18n'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://calamansi-k-lemon.com'

export function buildMetadata({
  locale,
  path = '/',
  seo,
  title,
  description,
  image,
}: {
  locale: Locale
  path?: string
  seo?: SEOMeta
  title?: string
  description?: string
  image?: string
}): Metadata {
  const t = getTranslations(locale)
  const resolvedTitle = seo?.title || title
    ? `${seo?.title || title} — ${t.meta.site_name}`
    : t.meta.site_name
  const resolvedDesc = seo?.description || description || t.meta.description
  const resolvedImage = seo?.ogImage || image || `${SITE_URL}/og-default.jpg`
  const canonical = seo?.canonical || `${SITE_URL}/${locale}${path}`

  return {
    title: resolvedTitle,
    description: resolvedDesc,
    keywords: seo?.keywords,
    alternates: {
      canonical,
      languages: {
        'fr': `${SITE_URL}/fr${path}`,
        'en': `${SITE_URL}/en${path}`,
      },
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDesc,
      url: canonical,
      siteName: t.meta.site_name,
      images: [{ url: resolvedImage, width: 1200, height: 630, alt: resolvedTitle }],
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description: resolvedDesc,
      images: [resolvedImage],
    },
    robots: seo?.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

// Schema.org JSON-LD helpers
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Calamansi K Lemon',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.instagram.com/calamansi_k_lemon',
      'https://www.facebook.com/calamansi.k.lemon',
      'https://www.youtube.com/@calamansi_k_lemon',
    ],
  }
}

export function buildArticleSchema({
  title, description, image, publishedAt, updatedAt, author, url,
}: { title: string; description: string; image: string; publishedAt: string; updatedAt?: string; author: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: { '@type': 'Person', name: author },
    publisher: { '@type': 'Organization', name: 'Calamansi K Lemon', logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export function buildRecipeSchema({
  name, description, image, prepTime, cookTime, servings, calories, ingredients, steps, url,
}: { name: string; description: string; image: string; prepTime: number; cookTime: number; servings: number; calories?: number; ingredients: string[]; steps: string[]; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name,
    description,
    image,
    prepTime: `PT${prepTime}M`,
    cookTime: `PT${cookTime}M`,
    totalTime: `PT${prepTime + cookTime}M`,
    recipeYield: `${servings} portions`,
    nutrition: calories ? { '@type': 'NutritionInformation', calories: `${calories} kcal` } : undefined,
    recipeIngredient: ingredients,
    recipeInstructions: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      text: step,
    })),
    author: { '@type': 'Organization', name: 'Calamansi K Lemon' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}
