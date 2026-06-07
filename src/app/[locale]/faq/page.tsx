'use client'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'

const FAQS_FR = [
  { q: 'Qu\'est-ce que le Calamansi ?', a: 'Le Calamansi (Citrus × microcarpa) est un petit agrume hybride originaire d\'Asie du Sud-Est, issu du croisement entre la mandarine et le kumquat. Son goût est à la fois acide comme le citron vert et légèrement sucré.' },
  { q: 'Le Calamansi est-il le même que le Calamondin ?', a: 'Oui, Calamansi et Calamondin désignent le même fruit. "Calamansi" est le nom courant aux Philippines, tandis que "Calamondin" est plus utilisé en botanique occidentale.' },
  { q: 'Comment utiliser le jus de Calamansi ?', a: 'Le jus de Calamansi peut remplacer le citron dans la plupart des recettes : boissons, marinades, vinaigrettes, desserts, cocktails. Il est aussi excellent en cure détox dilué dans l\'eau chaude.' },
  { q: 'Quelle est la teneur en vitamine C du Calamansi ?', a: 'Le Calamansi contient environ 30–35 mg de vitamine C pour 100 g, soit un niveau similaire au citron. Sa petite taille implique généralement une consommation en plus grande quantité (jus de plusieurs fruits), augmentant l\'apport réel.' },
  { q: 'Peut-on cultiver le Calamansi en Europe ?', a: 'Oui, en pot ! Le Calamansi supporte mal le gel (< 0°C). En Europe, on le cultive en pot et on le rentre à l\'intérieur en hiver. Il fleurit et fructifie très bien à l\'intérieur d\'une véranda lumineuse.' },
  { q: 'Où acheter des plants de Calamansi en France ?', a: 'Des plants sont disponibles dans les jardineries spécialisées en agrumes, sur des sites comme Amazon ou Cdiscount, ou directement sur notre boutique Calamansi K Lemon.' },
  { q: 'Le Calamansi est-il bon pour la santé ?', a: 'Oui. Riche en vitamine C, antioxydants, acide citrique et flavonoïdes, il est utilisé en médecine traditionnelle asiatique pour ses propriétés anti-inflammatoires, digestives et immunitaires. Des études scientifiques commencent à valider ces usages.' },
  { q: 'Quelle est la différence entre Calamansi vert et orange ?', a: 'La couleur indique le stade de maturité. Vert = acide et moins sucré (idéal pour le jus). Orange = plus mûr, légèrement moins acide, parfait pour la consommation directe. Les deux sont comestibles.' },
  { q: 'Peut-on manger la peau du Calamansi ?', a: 'Oui ! Contrairement à la chair très acide, le zeste est doux et légèrement sucré. On peut le manger directement, le confire ou l\'utiliser pour aromatiser des plats.' },
  { q: 'Combien de temps se conserve le Calamansi ?', a: 'À température ambiante : 5–7 jours. Au réfrigérateur : 2–3 semaines. Congelé (jus pressé ou fruits entiers) : 6 mois. Le jus peut aussi être conservé pasteurisé en bouteille pendant plusieurs mois.' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-terre-100 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-calamansi-50 transition-colors">
        <span className="font-semibold text-terre-900 text-sm">{q}</span>
        <svg className={`w-5 h-5 text-calamansi-600 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      {open && (
        <div className="px-5 pb-5 text-terre-600 text-sm leading-relaxed border-t border-terre-100 pt-4">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="pt-[var(--nav-height)]">
      <section className="bg-gradient-to-b from-calamansi-800 to-terre-900 text-white py-20 px-4 text-center">
        <Badge variant="green">FAQ</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-3">Questions fréquentes</h1>
        <p className="text-calamansi-200 text-lg max-w-xl mx-auto">Tout ce que vous voulez savoir sur le Calamansi</p>
      </section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-3">
        {FAQS_FR.map((faq) => <FAQItem key={faq.q} {...faq} />)}
      </div>
    </div>
  )
}
