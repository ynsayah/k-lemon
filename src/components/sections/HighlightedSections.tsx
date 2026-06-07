import Link from 'next/link'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface Props { locale: Locale }

const SECTIONS = [
  {
    id: 'sante',
    emoji: '💊',
    path: '/sante',
    bg: 'bg-calamansi-50',
    border: 'border-calamansi-200',
    accent: 'text-calamansi-700',
    label_fr: 'Santé & Nutrition',  label_en: 'Health & Nutrition',
    title_fr: 'Vertus exceptionnelles', title_en: 'Exceptional benefits',
    desc_fr: 'Riche en vitamine C, antioxydants et acide citrique. Découvrez pourquoi le Calamansi est un super-aliment reconnu en médecine traditionnelle asiatique.',
    desc_en: 'Rich in Vitamin C, antioxidants and citric acid. Find out why Calamansi is a superfood recognized in Asian traditional medicine.',
    cta_fr: 'Voir les bienfaits', cta_en: 'See health benefits',
  },
  {
    id: 'culture',
    emoji: '🌱',
    path: '/culture',
    bg: 'bg-terre-50',
    border: 'border-terre-200',
    accent: 'text-terre-700',
    label_fr: 'Guide de culture', label_en: 'Growing guide',
    title_fr: 'Cultiver son calamansi', title_en: 'Grow your own',
    desc_fr: 'En pot, en pleine terre, en serre : tous nos conseils pour réussir la culture du calamansi, du semis à la récolte, en amateur ou en professionnel.',
    desc_en: 'In pots, outdoors, or in greenhouses: all our tips to successfully grow calamansi, from seed to harvest, for hobbyists and professionals.',
    cta_fr: 'Guide culture', cta_en: 'Growing guide',
  },
  {
    id: 'economie',
    emoji: '📊',
    path: '/economie',
    bg: 'bg-citron-50',
    border: 'border-citron-200',
    accent: 'text-citron-700',
    label_fr: 'Économie mondiale', label_en: 'World economy',
    title_fr: 'Un marché en pleine croissance', title_en: 'A booming market',
    desc_fr: 'Le calamansi est en pleine expansion en Europe et Amérique du Nord. Chiffres de production, import-export, tendances et opportunités commerciales.',
    desc_en: 'Calamansi is rapidly expanding in Europe and North America. Production figures, import-export, trends and commercial opportunities.',
    cta_fr: 'Données économiques', cta_en: 'Economic data',
  },
]

export function HighlightedSections({ locale }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-16">
          <p className="section-label mb-3">{locale === 'fr' ? 'Explorer' : 'Explore'}</p>
          <h2 className="section-title mb-4">
            {locale === 'fr' ? 'Tout sur le Calamansi' : 'Everything about Calamansi'}
          </h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {SECTIONS.map((s, i) => (
            <AnimateOnScroll key={s.id} delay={i * 100}>
              <div className={`card-flat ${s.bg} border ${s.border} p-8 flex flex-col h-full`}>
                <span className="text-4xl mb-4">{s.emoji}</span>
                <p className={`section-label ${s.accent} mb-2`}>
                  {locale === 'fr' ? s.label_fr : s.label_en}
                </p>
                <h3 className="font-display text-2xl font-bold text-terre-900 mb-4">
                  {locale === 'fr' ? s.title_fr : s.title_en}
                </h3>
                <p className="text-terre-600 text-sm leading-relaxed flex-1 mb-6">
                  {locale === 'fr' ? s.desc_fr : s.desc_en}
                </p>
                <Link href={getLocalePath(locale, s.path)} className="btn-ghost p-0 text-sm font-semibold text-calamansi-600 hover:text-calamansi-800 hover:bg-transparent gap-1">
                  {locale === 'fr' ? s.cta_fr : s.cta_en}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
