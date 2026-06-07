import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata } from '@/lib/seo'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Badge } from '@/components/ui/Badge'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({
    locale: locale as Locale, path: '/histoire',
    title: locale === 'fr' ? 'Histoire du Calamansi' : 'History of Calamansi',
    description: locale === 'fr'
      ? 'Des Philippines à la conquête du monde : l\'histoire fascinante du Calamansi à travers les siècles.'
      : 'From the Philippines to world conquest: the fascinating history of Calamansi through the centuries.',
  })
}

const fr = true

const TIMELINE = [
  { period: 'Antiquité', date: '~1000 av. J.-C.', title_fr: 'Origines en Asie du Sud-Est', title_en: 'Origins in Southeast Asia', text_fr: 'Le Calamansi est cultivé dans les régions tropicales d\'Asie du Sud-Est, notamment aux Philippines et en Malaisie. Hybride naturel entre la mandarine et le kumquat, il devient rapidement un ingrédient essentiel de la cuisine locale.', text_en: 'Calamansi is cultivated in the tropical regions of Southeast Asia, particularly in the Philippines and Malaysia. A natural hybrid between mandarin and kumquat, it quickly becomes an essential ingredient in local cuisine.' },
  { period: 'Moyen Âge', date: 'XIIe–XVe siècle', title_fr: 'Expansion en Asie', title_en: 'Asian Expansion', text_fr: 'Les routes commerciales maritimes diffusent le Calamansi dans toute l\'Asie du Sud-Est. Il s\'implante solidement en Indonésie, à Bornéo et en Chine méridionale, où il est apprécié autant pour ses vertus culinaires que médicinales.', text_en: 'Maritime trade routes spread Calamansi throughout Southeast Asia. It establishes firmly in Indonesia, Borneo and southern China, appreciated for both culinary and medicinal properties.' },
  { period: 'Époque coloniale', date: 'XVIe–XVIIIe siècle', title_fr: 'Introduction en Occident', title_en: 'Introduction to the West', text_fr: 'Les explorateurs espagnols et portugais découvrent le Calamansi aux Philippines et l\'introduisent dans leurs colonies. Il arrive en Europe comme plante ornementale, fascinant les botanistes par ses petits fruits dorés et son parfum intense.', text_en: 'Spanish and Portuguese explorers discover Calamansi in the Philippines and introduce it in their colonies. It arrives in Europe as an ornamental plant, fascinating botanists with its small golden fruits and intense fragrance.' },
  { period: 'XXe siècle', date: '1900–2000', title_fr: 'Industrialisation aux Philippines', title_en: 'Industrialization in the Philippines', text_fr: 'Le Calamansi devient une culture commerciale majeure aux Philippines, au point d\'être surnommé « citron des Philippines ». L\'industrie du jus concentré se développe et le Calamansi apparaît dans les marchés internationaux.', text_en: 'Calamansi becomes a major commercial crop in the Philippines, earning the nickname "Philippine lemon". The concentrated juice industry develops and Calamansi appears in international markets.' },
  { period: 'Aujourd\'hui', date: '2000–présent', title_fr: 'Conquête mondiale', title_en: 'Global Conquest', text_fr: 'Le Calamansi connaît un engouement mondial porté par les tendances food et la cuisine asiatique. Chefs étoilés, bartenders et amateurs de jardinage s\'arrachent ce petit agrume aux qualités gustatives et aromatiques exceptionnelles.', text_en: 'Calamansi is experiencing global enthusiasm driven by food trends and Asian cuisine. Michelin-starred chefs, bartenders and gardening enthusiasts are all after this small citrus with exceptional taste and aromatic qualities.' },
]

export default async function HistoirePage({ params }: PageProps) {
  const { locale } = await params
  const isFr = locale === 'fr'

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-calamansi-50 to-white pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <Badge variant="green">
              {isFr ? '📜 Histoire' : '📜 History'}
            </Badge>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-terre-900 mb-6">
              {isFr ? 'L\'Histoire du Calamansi' : 'The History of Calamansi'}
            </h1>
            <p className="text-xl text-terre-600 max-w-2xl mx-auto leading-relaxed">
              {isFr
                ? 'Des forêts tropicales d\'Asie du Sud-Est aux cuisines du monde entier, le voyage millénaire d\'un agrume d\'exception.'
                : 'From the tropical forests of Southeast Asia to kitchens worldwide, the millennial journey of an exceptional citrus.'}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-calamansi-200" />
          <div className="space-y-12">
            {TIMELINE.map((item, i) => (
              <AnimateOnScroll key={i}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-calamansi-500 flex items-center justify-center text-white font-bold text-xs text-center leading-tight z-10">
                      {item.period.split(' ').slice(0, 2).join('\n')}
                    </div>
                  </div>
                  <div className="pt-3 pb-8">
                    <span className="text-xs font-semibold text-calamansi-600 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h2 className="font-display text-xl font-bold text-terre-900 mt-1 mb-3">
                      {isFr ? item.title_fr : item.title_en}
                    </h2>
                    <p className="text-terre-600 leading-relaxed">
                      {isFr ? item.text_fr : item.text_en}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
