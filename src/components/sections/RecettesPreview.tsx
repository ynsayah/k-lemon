import Link from 'next/link'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'
import { getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface Props { locale: Locale }

const RECETTES_PREVIEW = [
  {
    slug:       'jus-calamansi-gingembre',
    emoji:      '🍹',
    cat_fr:     'Boissons', cat_en: 'Drinks',
    title_fr:   'Jus Calamansi Gingembre',
    title_en:   'Calamansi Ginger Juice',
    desc_fr:    'Rafraîchissant, détox et plein de vitamine C. La boisson favorite des Philippines.',
    desc_en:    'Refreshing, detoxing and packed with Vitamin C. The favourite drink from the Philippines.',
    time:       10,
    difficulty: 'facile',
    color:      'bg-citron-50',
  },
  {
    slug:       'calamansi-cheesecake',
    emoji:      '🍰',
    cat_fr:     'Desserts', cat_en: 'Desserts',
    title_fr:   'Cheesecake Calamansi',
    title_en:   'Calamansi Cheesecake',
    desc_fr:    'Un cheesecake acidulé et crémeux avec un coulis de calamansi maison.',
    desc_en:    'A tangy, creamy cheesecake with a homemade calamansi coulis.',
    time:       45,
    difficulty: 'moyen',
    color:      'bg-calamansi-50',
  },
  {
    slug:       'poulet-marine-calamansi',
    emoji:      '🍗',
    cat_fr:     'Plats', cat_en: 'Mains',
    title_fr:   'Poulet mariné Calamansi',
    title_en:   'Calamansi Marinated Chicken',
    desc_fr:    'La marinade traditionnelle philippine pour un poulet fondant et parfumé.',
    desc_en:    'The traditional Filipino marinade for a tender, fragrant chicken.',
    time:       90,
    difficulty: 'facile',
    color:      'bg-terre-50',
  },
]

export function RecettesPreview({ locale }: Props) {
  return (
    <section className="py-24 bg-calamansi-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="section-label mb-3">{locale === 'fr' ? 'En cuisine' : 'In the kitchen'}</p>
            <h2 className="section-title">
              {locale === 'fr' ? 'Recettes populaires' : 'Popular recipes'}
            </h2>
          </div>
          <Link href={getLocalePath(locale, '/recettes')} className="btn-secondary shrink-0">
            {locale === 'fr' ? 'Toutes les recettes →' : 'All recipes →'}
          </Link>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECETTES_PREVIEW.map((r, i) => (
            <AnimateOnScroll key={r.slug} delay={i * 80}>
              <Link href={getLocalePath(locale, `/recettes/${r.slug}`)} className="card group flex flex-col h-full">
                {/* Illustration */}
                <div className={`${r.color} flex items-center justify-center text-6xl py-10 transition-transform duration-300 group-hover:scale-110`}>
                  {r.emoji}
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="green" size="sm">
                      {locale === 'fr' ? r.cat_fr : r.cat_en}
                    </Badge>
                    <Badge variant={r.difficulty === 'facile' ? 'green' : 'yellow'} size="sm">
                      {r.difficulty === 'facile' ? (locale === 'fr' ? 'Facile' : 'Easy') : (locale === 'fr' ? 'Moyen' : 'Medium')}
                    </Badge>
                  </div>
                  <h3 className="font-display font-bold text-terre-900 text-lg mb-2 leading-snug">
                    {locale === 'fr' ? r.title_fr : r.title_en}
                  </h3>
                  <p className="text-terre-600 text-sm leading-relaxed flex-1 mb-4">
                    {locale === 'fr' ? r.desc_fr : r.desc_en}
                  </p>
                  <div className="flex items-center gap-1 text-terre-500 text-xs">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>{r.time} min</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
