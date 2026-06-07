import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale: locale as Locale, path: '/botanique',
    title: locale === 'fr' ? 'Botanique du Calamansi' : 'Calamansi Botany',
    description: locale === 'fr'
      ? 'Classification scientifique, morphologie, floraison et culture du Calamansi (Citrus × microcarpa). Fiche botanique complète.'
      : 'Scientific classification, morphology, flowering and cultivation of Calamansi (Citrus × microcarpa). Complete botanical guide.',
  })
}

const CLASSIFICATION = [
  { rank: 'Règne', value: 'Plantae' },
  { rank: 'Ordre', value: 'Sapindales' },
  { rank: 'Famille', value: 'Rutaceae' },
  { rank: 'Genre', value: 'Citrus' },
  { rank: 'Espèce', value: 'Citrus × microcarpa' },
  { rank: 'Synonyme', value: 'Citrofortunella microcarpa' },
]

const MORPHO = [
  { aspect: 'Taille', detail: '3 à 6 m en pleine terre, 60–150 cm en pot' },
  { aspect: 'Feuilles', detail: 'Persistantes, luisantes, vert foncé, 4–8 cm' },
  { aspect: 'Fleurs', detail: 'Blanches, très parfumées, 5 pétales, solitaires ou en grappes' },
  { aspect: 'Fruit', detail: '2–4 cm de diamètre, vert virant à l\'orange-jaune à maturité' },
  { aspect: 'Chair', detail: 'Juteuse, acide, 6–10 segments, pépins nombreux' },
  { aspect: 'Zeste', detail: 'Comestible, mince, légèrement sucré contrairement à la chair' },
]

export default async function BotaniquePage({ params }: PageProps) {
  const { locale } = await params
  const fr = locale === 'fr'

  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-calamansi-900 to-calamansi-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="green">Botanique</Badge>
          <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-4">
            {fr ? 'Botanique du Calamansi' : 'Calamansi Botany'}
          </h1>
          <p className="text-calamansi-200 text-xl italic">Citrus × microcarpa — Rutaceae</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 space-y-20">

        {/* Classification */}
        <AnimateOnScroll>
          <h2 className="font-display text-3xl font-bold text-terre-900 mb-8">
            {fr ? 'Classification scientifique' : 'Scientific classification'}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-terre-100">
            {CLASSIFICATION.map((row, i) => (
              <div key={row.rank} className={`flex items-center px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-calamansi-50'}`}>
                <span className="text-sm font-semibold text-terre-500 w-32 shrink-0">{row.rank}</span>
                <span className="text-terre-900 font-medium italic">{row.value}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Morphologie */}
        <AnimateOnScroll>
          <h2 className="font-display text-3xl font-bold text-terre-900 mb-8">
            {fr ? 'Morphologie' : 'Morphology'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {MORPHO.map((m) => (
              <div key={m.aspect} className="card-flat p-5">
                <p className="section-label mb-1">{m.aspect}</p>
                <p className="text-terre-700 text-sm leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Culture */}
        <AnimateOnScroll>
          <h2 className="font-display text-3xl font-bold text-terre-900 mb-6">
            {fr ? 'Conditions de culture' : 'Growing conditions'}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: '☀️', label: fr ? 'Ensoleillement' : 'Sunlight', value: fr ? 'Plein soleil, 6h+ par jour' : 'Full sun, 6h+ per day' },
              { icon: '🌡️', label: fr ? 'Température' : 'Temperature', value: fr ? '15–35°C idéal. Sensible au gel' : '15–35°C ideal. Frost sensitive' },
              { icon: '💧', label: fr ? 'Arrosage' : 'Watering', value: fr ? 'Régulier, sans excès. Bon drainage' : 'Regular, no excess. Good drainage' },
              { icon: '🌱', label: fr ? 'Sol' : 'Soil', value: fr ? 'Bien drainé, légèrement acide (pH 5.5–6.5)' : 'Well-drained, slightly acidic (pH 5.5–6.5)' },
              { icon: '🌸', label: fr ? 'Floraison' : 'Flowering', value: fr ? 'Continue toute l\'année en climat tropical' : 'Year-round in tropical climates' },
              { icon: '🍋', label: fr ? 'Fructification' : 'Fruiting', value: fr ? '6–12 mois après plantation' : '6–12 months after planting' },
            ].map((c) => (
              <div key={c.label} className="text-center p-6 bg-white rounded-2xl border border-terre-100">
                <span className="text-3xl mb-2 block">{c.icon}</span>
                <p className="font-semibold text-terre-900 text-sm mb-1">{c.label}</p>
                <p className="text-terre-600 text-xs leading-relaxed">{c.value}</p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Variétés */}
        <AnimateOnScroll>
          <h2 className="font-display text-3xl font-bold text-terre-900 mb-6">
            {fr ? 'Principales variétés' : 'Main varieties'}
          </h2>
          <div className="space-y-4">
            {[
              { name: 'Calamansi standard', origin: fr ? 'Philippines' : 'Philippines', desc: fr ? 'La variété la plus répandue. Fruit rond, juteux, très acide.' : 'The most widespread variety. Round fruit, juicy, very tart.' },
              { name: 'Calamansi variegata', origin: fr ? 'Mutation ornementale' : 'Ornamental mutation', desc: fr ? 'Feuilles panachées jaune-vert. Principalement décoratif.' : 'Variegated yellow-green leaves. Mainly ornamental.' },
              { name: 'Calamansi doux', origin: fr ? 'Sélection moderne' : 'Modern selection', desc: fr ? 'Moins acide, plus sucré. Idéal pour consommation directe.' : 'Less acidic, sweeter. Ideal for direct consumption.' },
            ].map((v) => (
              <div key={v.name} className="flex gap-4 p-5 bg-white rounded-xl border border-terre-100">
                <span className="text-2xl">🍊</span>
                <div>
                  <h3 className="font-semibold text-terre-900">{v.name}</h3>
                  <p className="text-2xs text-calamansi-600 font-medium mb-1">{v.origin}</p>
                  <p className="text-terre-600 text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </div>
  )
}
