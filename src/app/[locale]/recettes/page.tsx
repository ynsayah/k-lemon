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
  return buildMetadata({
    locale: locale as Locale, path: '/recettes',
    title: locale === 'fr' ? '50+ Recettes au Calamansi' : '50+ Calamansi Recipes',
    description: locale === 'fr'
      ? 'Recettes de boissons, desserts, plats, sauces et cocktails au Calamansi. Faciles à réaliser, authentiques et savoureuses.'
      : 'Calamansi drinks, desserts, mains, sauces and cocktail recipes. Easy to make, authentic and delicious.',
  })
}

const CATS_FR = ['Toutes', 'Boissons', 'Desserts', 'Plats', 'Sauces', 'Cocktails', 'Pâtisserie']
const CATS_EN = ['All', 'Drinks', 'Desserts', 'Mains', 'Sauces', 'Cocktails', 'Pastry']

const RECETTES = [
  { slug:'jus-calamansi-gingembre',      emoji:'🍹', cat_fr:'Boissons',    cat_en:'Drinks',    title_fr:'Jus Calamansi Gingembre',       title_en:'Calamansi Ginger Juice',      time:10, diff:'facile' },
  { slug:'limonade-calamansi',           emoji:'🥤', cat_fr:'Boissons',    cat_en:'Drinks',    title_fr:'Limonade Calamansi',             title_en:'Calamansi Lemonade',          time:5,  diff:'facile' },
  { slug:'cheesecake-calamansi',         emoji:'🍰', cat_fr:'Desserts',    cat_en:'Desserts',  title_fr:'Cheesecake Calamansi',           title_en:'Calamansi Cheesecake',        time:60, diff:'moyen' },
  { slug:'tarte-calamansi-meringue',     emoji:'🥧', cat_fr:'Pâtisserie',  cat_en:'Pastry',    title_fr:'Tarte Meringuée Calamansi',      title_en:'Calamansi Meringue Tart',     time:90, diff:'difficile' },
  { slug:'poulet-marine-calamansi',      emoji:'🍗', cat_fr:'Plats',       cat_en:'Mains',     title_fr:'Poulet Mariné Calamansi',        title_en:'Calamansi Chicken',           time:30, diff:'facile' },
  { slug:'ceviche-calamansi',            emoji:'🐟', cat_fr:'Plats',       cat_en:'Mains',     title_fr:'Ceviche au Calamansi',           title_en:'Calamansi Ceviche',           time:20, diff:'facile' },
  { slug:'sauce-calamansi-miel',         emoji:'🍯', cat_fr:'Sauces',      cat_en:'Sauces',    title_fr:'Sauce Calamansi & Miel',         title_en:'Calamansi Honey Sauce',       time:10, diff:'facile' },
  { slug:'mojito-calamansi',             emoji:'🍸', cat_fr:'Cocktails',   cat_en:'Cocktails', title_fr:'Mojito Calamansi',               title_en:'Calamansi Mojito',            time:5,  diff:'facile' },
  { slug:'confiture-calamansi',          emoji:'🫙', cat_fr:'Pâtisserie',  cat_en:'Pastry',    title_fr:'Confiture de Calamansi',         title_en:'Calamansi Jam',               time:45, diff:'moyen' },
]

export default async function RecettesPage({ params }: PageProps) {
  const { locale } = await params
  const fr = locale === 'fr'
  const cats = fr ? CATS_FR : CATS_EN

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="bg-gradient-to-b from-citron-900 to-terre-900 text-white py-20 px-4 text-center">
        <Badge variant="yellow">Recettes</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-3">
          {fr ? 'Recettes au Calamansi' : 'Calamansi Recipes'}
        </h1>
        <p className="text-citron-200 text-lg max-w-xl mx-auto">
          {fr ? '50+ recettes authentiques pour cuisiner avec le calamansi' : '50+ authentic recipes to cook with calamansi'}
        </p>
      </section>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter — static for now */}
        <div className="flex flex-wrap gap-2 mb-12">
          {cats.map((cat, i) => (
            <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-calamansi-600 text-white' : 'bg-calamansi-100 text-calamansi-800 hover:bg-calamansi-200'}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RECETTES.map((r, i) => (
            <AnimateOnScroll key={r.slug} delay={i * 60}>
              <Link href={getLocalePath(locale as Locale, `/recettes/${r.slug}`)} className="card group flex flex-col h-full">
                <div className="bg-calamansi-50 flex items-center justify-center text-6xl py-10 transition-transform duration-300 group-hover:scale-105">
                  {r.emoji}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-2 mb-3">
                    <Badge variant="green" size="sm">{fr ? r.cat_fr : r.cat_en}</Badge>
                    <Badge variant={r.diff === 'facile' ? 'green' : r.diff === 'moyen' ? 'yellow' : 'earth'} size="sm">
                      {r.diff === 'facile' ? (fr ? 'Facile' : 'Easy') : r.diff === 'moyen' ? (fr ? 'Moyen' : 'Medium') : (fr ? 'Difficile' : 'Hard')}
                    </Badge>
                  </div>
                  <h2 className="font-display font-bold text-terre-900 text-lg mb-auto leading-snug">
                    {fr ? r.title_fr : r.title_en}
                  </h2>
                  <div className="flex items-center gap-1 text-terre-500 text-xs mt-4">
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
    </div>
  )
}
