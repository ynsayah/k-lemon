import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale: locale as Locale, path: '/carte',
    title: locale === 'fr' ? 'Carte Mondiale du Calamansi' : 'Calamansi World Map',
    description: locale === 'fr'
      ? 'Découvrez la répartition mondiale du Calamansi : pays producteurs, zones de culture et marchés d\'exportation.'
      : 'Discover the global distribution of Calamansi: producing countries, growing zones and export markets.',
  })
}

const PAYS = [
  { pays: 'Philippines', role_fr: 'Premier producteur mondial', role_en: 'World\'s top producer', emoji: '🇵🇭', detail_fr: 'Le Calamansi est le citrus national, cultivé sur plus de 20 000 hectares. Essentiel à la cuisine philippine.', detail_en: 'Calamansi is the national citrus, grown on over 20,000 hectares. Essential to Philippine cuisine.', production: '~500 000 t/an' },
  { pays: 'Indonésie', role_fr: 'Grand producteur régional', role_en: 'Major regional producer', emoji: '🇮🇩', detail_fr: 'Cultivé sous le nom "Calamondin" sur les îles de Sumatra, Java et Kalimantan.', detail_en: 'Grown under the name "Calamondin" on the islands of Sumatra, Java and Kalimantan.', production: '~150 000 t/an' },
  { pays: 'Malaisie', role_fr: 'Production locale importante', role_en: 'Important local production', emoji: '🇲🇾', detail_fr: 'Ingrédient incontournable de la cuisine malaise, cultivé dans les jardins familiaux et exploitations commerciales.', detail_en: 'Essential ingredient in Malaysian cuisine, grown in family gardens and commercial farms.', production: '~80 000 t/an' },
  { pays: 'Chine (Yunnan)', role_fr: 'Culture traditionnelle', role_en: 'Traditional cultivation', emoji: '🇨🇳', detail_fr: 'Cultivé dans le sud de la Chine depuis des siècles, utilisé en médecine traditionnelle chinoise.', detail_en: 'Grown in southern China for centuries, used in traditional Chinese medicine.', production: '~60 000 t/an' },
  { pays: 'Inde (Kerala)', role_fr: 'Expansion récente', role_en: 'Recent expansion', emoji: '🇮🇳', detail_fr: 'Introduit au Kerala, le Calamansi gagne du terrain comme culture commerciale prometteuse.', detail_en: 'Introduced to Kerala, Calamansi is gaining ground as a promising commercial crop.', production: '~20 000 t/an' },
  { pays: 'États-Unis (Floride)', role_fr: 'Production ornementale', role_en: 'Ornamental production', emoji: '🇺🇸', detail_fr: 'Cultivé principalement comme plante d\'intérieur ornementale, avec une production fruitière émergente en Floride.', detail_en: 'Grown mainly as an ornamental houseplant, with emerging fruit production in Florida.', production: 'Marché de niche' },
]

export default async function CartePage({ params }: PageProps) {
  const { locale } = await params
  const isFr = locale === 'fr'

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-calamansi-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <Badge variant="green">
              {isFr ? '🗺️ Carte mondiale' : '🗺️ World map'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-terre-900 mb-6">
              {isFr ? 'Le Calamansi dans le Monde' : 'Calamansi Around the World'}
            </h1>
            <p className="text-xl text-terre-600 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Des Philippines à l\'Occident, explorez la géographie d\'un agrume qui conquiert le monde.'
                : 'From the Philippines to the West, explore the geography of a citrus conquering the world.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pays producteurs */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <AnimateOnScroll>
          <h2 className="font-display text-2xl font-bold text-terre-900 mb-8 text-center">
            {isFr ? 'Principaux pays producteurs' : 'Main producing countries'}
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PAYS.map((p, i) => (
            <AnimateOnScroll key={i}>
              <div className="bg-white border border-terre-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{p.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-display text-lg font-bold text-terre-900">{p.pays}</h3>
                      <span className="text-xs font-medium text-calamansi-700 bg-calamansi-50 px-2 py-0.5 rounded-full">
                        {p.production}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-calamansi-600 mb-2">
                      {isFr ? p.role_fr : p.role_en}
                    </p>
                    <p className="text-sm text-terre-600 leading-relaxed">
                      {isFr ? p.detail_fr : p.detail_en}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Zone climatique */}
        <AnimateOnScroll>
          <div className="mt-12 bg-calamansi-50 rounded-2xl p-6 border border-calamansi-100">
            <h3 className="font-display text-lg font-bold text-terre-900 mb-3">
              {isFr ? '🌡️ Zone de culture optimale' : '🌡️ Optimal growing zone'}
            </h3>
            <p className="text-terre-600 leading-relaxed">
              {isFr
                ? 'Le Calamansi prospère dans la zone tropicale et subtropicale (15°N–15°S), avec des températures entre 20°C et 35°C, une pluviométrie de 1 200 à 2 000 mm/an et une altitude comprise entre 0 et 1 200 m. Il peut également être cultivé en pot dans les régions tempérées.'
                : 'Calamansi thrives in the tropical and subtropical zone (15°N–15°S), with temperatures between 20°C and 35°C, rainfall of 1,200 to 2,000 mm/year and altitude between 0 and 1,200 m. It can also be grown in pots in temperate regions.'}
            </p>
          </div>
        </AnimateOnScroll>
      </section>
    </main>
  )
}
