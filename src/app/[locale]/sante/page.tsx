import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale: locale as Locale, path: '/sante',
    title: locale === 'fr' ? 'Bienfaits Santé du Calamansi' : 'Calamansi Health Benefits',
    description: locale === 'fr'
      ? 'Vitamines, antioxydants, propriétés anti-inflammatoires : découvrez les bienfaits scientifiquement documentés du Calamansi.'
      : 'Vitamins, antioxidants, anti-inflammatory properties: discover the scientifically documented health benefits of Calamansi.',
  })
}

const BIENFAITS = [
  {
    emoji: '🍊', color: 'green' as const,
    title_fr: 'Riche en Vitamine C', title_en: 'Rich in Vitamin C',
    text_fr: 'Le Calamansi contient jusqu\'à 3 fois plus de vitamine C que l\'orange classique. Un seul fruit couvre jusqu\'à 35% des apports journaliers recommandés, boostant le système immunitaire et la synthèse de collagène.',
    text_en: 'Calamansi contains up to 3 times more vitamin C than regular oranges. A single fruit covers up to 35% of daily recommended intake, boosting the immune system and collagen synthesis.',
    stat: '~35 mg/100ml', stat_label: 'Vitamine C',
  },
  {
    emoji: '🛡️', color: 'yellow' as const,
    title_fr: 'Antioxydants Puissants', title_en: 'Powerful Antioxidants',
    text_fr: 'Les flavonoïdes et limonoïdes du Calamansi neutralisent les radicaux libres responsables du vieillissement cellulaire. Des études ont démontré leur rôle protecteur contre certains cancers et maladies cardiovasculaires.',
    text_en: 'The flavonoids and limonoids in Calamansi neutralize free radicals responsible for cellular aging. Studies have demonstrated their protective role against certain cancers and cardiovascular diseases.',
    stat: 'ORAC élevé', stat_label: 'Capacité antioxydante',
  },
  {
    emoji: '⚖️', color: 'earth' as const,
    title_fr: 'Aide à la Gestion du Poids', title_en: 'Weight Management Support',
    text_fr: 'Le jus de Calamansi est traditionnellement utilisé dans les cures détox en Asie du Sud-Est. Sa teneur en acide citrique stimule le métabolisme et favorise l\'élimination des graisses, avec seulement 25 kcal pour 100ml.',
    text_en: 'Calamansi juice is traditionally used in detox cleanses throughout Southeast Asia. Its citric acid content stimulates metabolism and promotes fat elimination, with only 25 kcal per 100ml.',
    stat: '25 kcal/100ml', stat_label: 'Faible en calories',
  },
  {
    emoji: '🦠', color: 'green' as const,
    title_fr: 'Propriétés Antimicrobiennes', title_en: 'Antimicrobial Properties',
    text_fr: 'Les huiles essentielles de l\'écorce de Calamansi ont démontré des propriétés antibactériennes et antifongiques. Utilisé en médecine traditionnelle philippine pour traiter infections cutanées et troubles digestifs.',
    text_en: 'Essential oils from Calamansi peel have demonstrated antibacterial and antifungal properties. Used in traditional Philippine medicine to treat skin infections and digestive disorders.',
    stat: 'Prouvé in vitro', stat_label: 'Activité antimicrobienne',
  },
  {
    emoji: '💆', color: 'yellow' as const,
    title_fr: 'Bienfaits pour la Peau', title_en: 'Skin Benefits',
    text_fr: 'La vitamine C et les acides alpha-hydroxy du Calamansi estompent les taches, unifient le teint et stimulent le renouvellement cellulaire. L\'industrie cosmétique asiatique l\'intègre largement dans crèmes et sérums.',
    text_en: 'The vitamin C and alpha-hydroxy acids in Calamansi fade spots, even skin tone and stimulate cell renewal. The Asian cosmetics industry widely incorporates it in creams and serums.',
    stat: 'pH 2-3', stat_label: 'Acide naturel',
  },
  {
    emoji: '🫀', color: 'earth' as const,
    title_fr: 'Santé Cardiovasculaire', title_en: 'Cardiovascular Health',
    text_fr: 'La pectine du Calamansi aide à réduire le mauvais cholestérol (LDL). Ses flavonoïdes améliorent la circulation sanguine et renforcent les parois des vaisseaux, réduisant le risque d\'hypertension.',
    text_en: 'Calamansi\'s pectin helps reduce bad cholesterol (LDL). Its flavonoids improve blood circulation and strengthen vessel walls, reducing the risk of hypertension.',
    stat: 'Riche en pectine', stat_label: 'Fibre soluble',
  },
]

export default async function SantePage({ params }: PageProps) {
  const { locale } = await params
  const isFr = locale === 'fr'

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-calamansi-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <Badge variant="green">
              {isFr ? '💚 Santé & Bien-être' : '💚 Health & Wellness'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-terre-900 mb-6">
              {isFr ? 'Bienfaits Santé du Calamansi' : 'Calamansi Health Benefits'}
            </h1>
            <p className="text-xl text-terre-600 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Un petit agrume aux grandes vertus : vitamine C, antioxydants, détox et bien-être au quotidien.'
                : 'A small citrus with great virtues: vitamin C, antioxidants, detox and daily wellness.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bienfaits grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BIENFAITS.map((b, i) => (
            <AnimateOnScroll key={i}>
              <div className="bg-white border border-terre-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{b.emoji}</div>
                <h2 className="font-display text-lg font-bold text-terre-900 mb-3">
                  {isFr ? b.title_fr : b.title_en}
                </h2>
                <p className="text-sm text-terre-600 leading-relaxed mb-4">
                  {isFr ? b.text_fr : b.text_en}
                </p>
                <div className="pt-3 border-t border-terre-100 flex items-center gap-2">
                  <span className="text-sm font-bold text-calamansi-600">{b.stat}</span>
                  <span className="text-xs text-terre-400">· {b.stat_label}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Disclaimer */}
        <AnimateOnScroll>
          <div className="mt-12 p-4 bg-terre-50 rounded-xl border border-terre-100 text-center">
            <p className="text-xs text-terre-500">
              {isFr
                ? '⚠️ Ces informations sont données à titre indicatif. Consultez un professionnel de santé avant toute utilisation thérapeutique.'
                : '⚠️ This information is for informational purposes only. Consult a healthcare professional before any therapeutic use.'}
            </p>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
