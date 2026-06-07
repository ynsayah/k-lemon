import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale: locale as Locale, path: '/boutique', title: locale === 'fr' ? 'Boutique Calamansi' : 'Calamansi Shop' })
}

const PRODUITS = [
  { id:'1', emoji:'🌱', name_fr:'Plant Calamansi (30 cm)',   name_en:'Calamansi plant (30 cm)', price:'24,90 €', cat_fr:'Plants',    cat_en:'Plants',     badge:'bestseller', badge_color:'green' as const },
  { id:'2', emoji:'🌰', name_fr:'Graines Calamansi x50',    name_en:'Calamansi seeds x50',     price:'6,90 €',  cat_fr:'Graines',   cat_en:'Seeds',      badge:null, badge_color:'green' as const },
  { id:'3', emoji:'📖', name_fr:'Guide Culture PDF',        name_en:'Growing Guide PDF',        price:'9,90 €',  cat_fr:'Guides PDF', cat_en:'PDF Guides', badge:'new', badge_color:'yellow' as const },
  { id:'4', emoji:'📚', name_fr:'Livre : La Cuisine Calamansi', name_en:'Book: Calamansi Cuisine', price:'22,00 €', cat_fr:'Livres',  cat_en:'Books',      badge:null, badge_color:'earth' as const },
  { id:'5', emoji:'🌿', name_fr:'Plant XXL (60 cm)',        name_en:'Calamansi XXL plant (60 cm)', price:'44,90 €', cat_fr:'Plants', cat_en:'Plants',    badge:'premium', badge_color:'earth' as const },
  { id:'6', emoji:'🍋', name_fr:'Engrais agrumes bio',      name_en:'Organic citrus fertilizer', price:'12,50 €', cat_fr:'Accessoires', cat_en:'Accessories', badge:null, badge_color:'green' as const },
]

export default async function BoutiquePage({ params }: PageProps) {
  const { locale } = await params
  const fr = locale === 'fr'

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="bg-gradient-to-b from-calamansi-700 to-calamansi-900 text-white py-20 px-4 text-center">
        <Badge variant="green">Boutique</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-3">
          {fr ? 'Boutique Calamansi' : 'Calamansi Shop'}
        </h1>
        <p className="text-calamansi-200 text-lg max-w-xl mx-auto">
          {fr ? 'Plants, graines, guides et livres pour cultiver votre Calamansi' : 'Plants, seeds, guides and books to grow your Calamansi'}
        </p>
      </section>

      {/* Coming soon banner */}
      <div className="bg-citron-50 border-b border-citron-200 px-4 py-3 text-center">
        <p className="text-citron-800 text-sm font-medium">
          🚧 {fr ? 'Boutique en cours d\'ouverture — Inscrivez-vous pour être notifié' : 'Shop opening soon — Sign up to be notified'}
        </p>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUITS.map((p, i) => (
            <AnimateOnScroll key={p.id} delay={i * 60}>
              <div className="card flex flex-col h-full relative">
                {p.badge && (
                  <div className="absolute top-3 right-3 z-10">
                    <Badge variant={p.badge_color} size="sm">{p.badge}</Badge>
                  </div>
                )}
                <div className="bg-calamansi-50 flex items-center justify-center text-6xl py-12">
                  {p.emoji}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="section-label mb-1">{fr ? p.cat_fr : p.cat_en}</p>
                  <h2 className="font-display font-bold text-terre-900 text-lg mb-auto leading-snug">
                    {fr ? p.name_fr : p.name_en}
                  </h2>
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-terre-100">
                    <span className="font-bold text-calamansi-700 text-xl">{p.price}</span>
                    <button className="btn-primary text-sm py-2 px-4" disabled title={fr ? 'Boutique bientôt disponible !' : 'Shop coming soon!'}>
                      {fr ? 'Ajouter' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}
