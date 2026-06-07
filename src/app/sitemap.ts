import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://calamansi-k-lemon.com'

const STATIC_PAGES = [
  '', '/botanique', '/histoire', '/culture', '/sante',
  '/recettes', '/economie', '/galerie', '/blog',
  '/carte', '/boutique', '/faq', '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of ['fr', 'en']) {
    for (const page of STATIC_PAGES) {
      entries.push({
        url: `${SITE_URL}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: { fr: `${SITE_URL}/fr${page}`, en: `${SITE_URL}/en${page}` },
        },
      })
    }
  }

  return entries
}
