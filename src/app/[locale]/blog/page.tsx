import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'
import { getLocalePath } from '@/lib/i18n'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale: locale as Locale, path: '/blog', title: locale === 'fr' ? 'Blog Calamansi' : 'Calamansi Blog' })
}

const ARTICLES = [
  { slug:'calamansi-vs-citron-vert',    cat_fr:'Botanique',   cat_en:'Botany',      title_fr:'Calamansi vs Citron Vert : quelles différences ?', title_en:'Calamansi vs Lime: what are the differences?', date:'2025-01-15', read:5 },
  { slug:'culture-calamansi-france',    cat_fr:'Agriculture',  cat_en:'Farming',     title_fr:'Cultiver le Calamansi en France : guide complet',   title_en:'Growing Calamansi in France: full guide',        date:'2025-01-10', read:8 },
  { slug:'marche-calamansi-europe',     cat_fr:'Économie',     cat_en:'Economy',     title_fr:'Le Calamansi en Europe : un marché en expansion',   title_en:'Calamansi in Europe: a booming market',          date:'2025-01-05', read:6 },
  { slug:'bienfaits-vitamine-c',        cat_fr:'Santé',        cat_en:'Health',      title_fr:'Calamansi et vitamine C : les chiffres surprenants', title_en:'Calamansi and Vitamin C: the surprising numbers', date:'2024-12-28', read:4 },
  { slug:'histoire-calamansi-philippines', cat_fr:'Histoire',  cat_en:'History',     title_fr:'L\'histoire du Calamansi aux Philippines',           title_en:'The history of Calamansi in the Philippines',    date:'2024-12-20', read:7 },
  { slug:'calamansi-gastronomie-fusion', cat_fr:'Recettes',   cat_en:'Recipes',     title_fr:'Le Calamansi dans la gastronomie fusion moderne',    title_en:'Calamansi in modern fusion gastronomy',          date:'2024-12-15', read:5 },
]

const CATS_FR = ['Tous', 'Botanique', 'Agriculture', 'Économie', 'Santé', 'Histoire', 'Recettes']
const CATS_EN = ['All', 'Botany', 'Farming', 'Economy', 'Health', 'History', 'Recipes']

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params
  const fr = locale === 'fr'
  const cats = fr ? CATS_FR : CATS_EN

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="bg-gradient-to-b from-terre-900 to-terre-800 text-white py-20 px-4 text-center">
        <Badge variant="earth">Blog</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-3">
          {fr ? 'Actualités Calamansi' : 'Calamansi News'}
        </h1>
        <p className="text-terre-300 text-lg max-w-xl mx-auto">
          {fr ? 'Articles, guides et dossiers sur le calamansi et les agrumes tropicaux' : 'Articles, guides and features on calamansi and tropical citrus'}
        </p>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex flex-wrap gap-2 mb-12">
          {cats.map((cat, i) => (
            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-terre-800 text-white' : 'bg-terre-100 text-terre-800 hover:bg-terre-200'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {ARTICLES.map((a, i) => (
            <AnimateOnScroll key={a.slug} delay={i * 60}>
              <Link href={getLocalePath(locale as Locale, `/blog/${a.slug}`)}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-terre-100 hover:border-calamansi-300 hover:shadow-md transition-all group">
                <div className="hidden sm:flex w-16 h-16 bg-calamansi-100 rounded-xl items-center justify-center text-3xl shrink-0">📄</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="earth" size="sm">{fr ? a.cat_fr : a.cat_en}</Badge>
                    <span className="text-terre-400 text-2xs">{new Date(a.date).toLocaleDateString(locale === 'fr' ? 'fr-FR' : 'en-GB', { day:'numeric', month:'long', year:'numeric' })}</span>
                    <span className="text-terre-400 text-2xs">· {a.read} min</span>
                  </div>
                  <h2 className="font-display font-bold text-terre-900 text-lg group-hover:text-calamansi-700 transition-colors leading-snug">
                    {fr ? a.title_fr : a.title_en}
                  </h2>
                </div>
                <svg className="w-5 h-5 text-terre-400 group-hover:text-calamansi-600 transition-colors shrink-0 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}
