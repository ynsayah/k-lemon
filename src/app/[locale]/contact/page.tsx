'use client'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <div className="pt-[var(--nav-height)]">
      <section className="bg-gradient-to-b from-terre-900 to-terre-800 text-white py-20 px-4 text-center">
        <Badge variant="earth">Contact</Badge>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-3">Nous contacter</h1>
        <p className="text-terre-300 text-lg max-w-xl mx-auto">Une question, un partenariat ou une suggestion ? Écrivez-nous.</p>
      </section>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
        {sent ? (
          <div className="text-center py-16">
            <span className="text-6xl">✅</span>
            <h2 className="font-display text-2xl font-bold text-terre-900 mt-6 mb-2">Message envoyé !</h2>
            <p className="text-terre-600">Nous vous répondrons dans les 48h.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-terre-700 mb-1.5">Prénom</label>
                <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-terre-200 focus:outline-none focus:border-calamansi-500 focus:ring-2 focus:ring-calamansi-100 transition text-sm" placeholder="Jean" />
              </div>
              <div>
                <label className="block text-sm font-medium text-terre-700 mb-1.5">Nom</label>
                <input type="text" required className="w-full px-4 py-2.5 rounded-xl border border-terre-200 focus:outline-none focus:border-calamansi-500 focus:ring-2 focus:ring-calamansi-100 transition text-sm" placeholder="Dupont" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-terre-700 mb-1.5">Email</label>
              <input type="email" required className="w-full px-4 py-2.5 rounded-xl border border-terre-200 focus:outline-none focus:border-calamansi-500 focus:ring-2 focus:ring-calamansi-100 transition text-sm" placeholder="jean@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-terre-700 mb-1.5">Sujet</label>
              <select className="w-full px-4 py-2.5 rounded-xl border border-terre-200 focus:outline-none focus:border-calamansi-500 focus:ring-2 focus:ring-calamansi-100 transition text-sm bg-white">
                <option>Question générale</option>
                <option>Partenariat / Presse</option>
                <option>Commande / Boutique</option>
                <option>Collaboration éditoriale</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-terre-700 mb-1.5">Message</label>
              <textarea required rows={5} className="w-full px-4 py-2.5 rounded-xl border border-terre-200 focus:outline-none focus:border-calamansi-500 focus:ring-2 focus:ring-calamansi-100 transition text-sm resize-none" placeholder="Votre message..." />
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
