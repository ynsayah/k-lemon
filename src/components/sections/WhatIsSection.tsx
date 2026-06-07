import Link from 'next/link'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface Props { locale: Locale }

const FACTS_FR = [
  { icon: '🌿', title: 'Citrus × microcarpa', desc: 'Hybride naturel entre la mandarine et le kumquat. Famille des Rutaceae.' },
  { icon: '🗺️', title: 'Originaire d\'Asie du Sud-Est', desc: 'Cultivé depuis des siècles aux Philippines, en Malaisie et en Indonésie.' },
  { icon: '💛', title: 'Petit mais puissant', desc: '2–3 cm de diamètre, mais une concentration exceptionnelle en vitamine C.' },
  { icon: '🍹', title: 'Ingrédient star', desc: 'Base des jus calamansi, marinades, sauces et pâtisseries asiatiques.' },
]
const FACTS_EN = [
  { icon: '🌿', title: 'Citrus × microcarpa', desc: 'Natural hybrid between mandarin and kumquat. Family Rutaceae.' },
  { icon: '🗺️', title: 'Native to Southeast Asia', desc: 'Cultivated for centuries in Philippines, Malaysia and Indonesia.' },
  { icon: '💛', title: 'Small but mighty', desc: '2–3 cm in diameter, yet an exceptional concentration of Vitamin C.' },
  { icon: '🍹', title: 'Star ingredient', desc: 'Base of calamansi juices, marinades, sauces and Asian pastries.' },
]

export function WhatIsSection({ locale }: Props) {
  const facts = locale === 'fr' ? FACTS_FR : FACTS_EN

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <AnimateOnScroll>
              <p className="section-label mb-4">
                {locale === 'fr' ? 'Le fruit' : 'The fruit'}
              </p>
              <h2 className="section-title mb-6">
                {locale === 'fr'
                  ? <>Qu&apos;est-ce que<br />le <em className="text-calamansi-600 not-italic">Calamansi</em> ?</>
                  : <>What is<br />the <em className="text-calamansi-600 not-italic">Calamansi</em>?</>
                }
              </h2>
              <p className="section-subtitle mb-8">
                {locale === 'fr'
                  ? 'Le Calamansi, aussi appelé Calamondin, est un agrume miniature originaire d\'Asie du Sud-Est. Alliant la douceur de la mandarine au piquant du citron vert, il est à la fois fruit culinaire, plante ornementale et médecine traditionnelle.'
                  : 'The Calamansi, also called Calamondin, is a miniature citrus originating from Southeast Asia. Combining the sweetness of mandarin with the tartness of lime, it is at once a culinary fruit, ornamental plant and traditional medicine.'
                }
              </p>
              <Link href={getLocalePath(locale, '/botanique')} className="btn-primary">
                {locale === 'fr' ? 'Fiche botanique complète' : 'Full botanical guide'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </AnimateOnScroll>
          </div>

          {/* Right — fact grid */}
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <AnimateOnScroll key={fact.title} delay={i * 80}>
                <div className="card-flat p-6 h-full">
                  <span className="text-3xl mb-3 block">{fact.icon}</span>
                  <h3 className="font-display font-semibold text-terre-900 mb-2 text-sm leading-snug">{fact.title}</h3>
                  <p className="text-terre-600 text-sm leading-relaxed">{fact.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
