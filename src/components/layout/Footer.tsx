'use client'
import Link from 'next/link'
import { getTranslations, getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface FooterProps { locale: Locale }

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale)
  const year = new Date().getFullYear()

  const cols = [
    {
      title: 'Découvrir',
      links: [
        { label: t.nav.histoire,  href: '/histoire' },
        { label: t.nav.botanique, href: '/botanique' },
        { label: t.nav.culture,   href: '/culture' },
        { label: t.nav.economie,  href: '/economie' },
        { label: t.nav.carte,     href: '/carte' },
      ],
    },
    {
      title: 'Recettes & Santé',
      links: [
        { label: t.nav.recettes, href: '/recettes' },
        { label: t.nav.sante,    href: '/sante' },
        { label: t.nav.galerie,  href: '/galerie' },
        { label: t.nav.blog,     href: '/blog' },
        { label: t.nav.faq,      href: '/faq' },
      ],
    },
    {
      title: 'Boutique',
      links: [
        { label: 'Plants',           href: '/boutique?cat=plants' },
        { label: 'Graines',          href: '/boutique?cat=graines' },
        { label: 'Guides PDF',       href: '/boutique?cat=guides-pdf' },
        { label: 'Livres',           href: '/boutique?cat=livres' },
        { label: t.nav.contact,      href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-terre-900 text-white">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">{t.footer.newsletter_title}</h3>
            <p className="text-terre-300 text-sm">Articles, recettes et actus calamansi directement dans votre boîte mail.</p>
          </div>
          <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={t.footer.newsletter_placeholder}
              className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-terre-400 text-sm focus:outline-none focus:border-calamansi-400 focus:bg-white/15 transition"
            />
            <button type="submit" className="btn-primary text-sm whitespace-nowrap">
              {t.footer.newsletter_cta}
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 bg-calamansi-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg">🍋</span>
            </div>
            <span className="font-display font-bold text-lg">Calamansi K Lemon</span>
          </div>
          <p className="text-terre-300 text-sm leading-relaxed mb-6">{t.footer.tagline}</p>
          {/* Social */}
          <div className="flex gap-3">
            {['instagram', 'facebook', 'youtube', 'pinterest'].map((s) => (
              <a key={s} href={`https://${s}.com`} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-calamansi-600 transition-colors text-xs capitalize"
                aria-label={s}
              >
                {s[0].toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-terre-400 mb-4">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map(({ label, href }) => (
                <li key={href}>
                  <Link href={getLocalePath(locale, href)}
                    className="text-terre-300 text-sm hover:text-calamansi-300 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-terre-400 text-xs">
          <p>© {year} Calamansi K Lemon. {t.footer.rights}.</p>
          <div className="flex gap-4">
            <Link href={getLocalePath(locale, '/mentions-legales')} className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href={getLocalePath(locale, '/confidentialite')} className="hover:text-white transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
