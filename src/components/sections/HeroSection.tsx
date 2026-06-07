import Link from 'next/link'
import { getTranslations, getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface HeroSectionProps { locale: Locale }

export function HeroSection({ locale }: HeroSectionProps) {
  const t = getTranslations(locale)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — gradient naturel, remplacer par vraie photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-calamansi-900 via-terre-900 to-calamansi-800">
        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-citron-400/10 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full bg-calamansi-400/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center text-white pt-[var(--nav-height)]">

        {/* Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-citron-400 animate-pulse" />
          <span className="text-xs font-medium tracking-widest uppercase text-citron-300">
            {locale === 'fr' ? 'La référence mondiale' : 'The world reference'}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 animate-fade-up">
          <span className="block">{t.home.hero_title}</span>
          <span className="block text-citron-400 italic text-4xl sm:text-5xl md:text-6xl mt-2">K Lemon</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-terre-200 mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {t.home.hero_subtitle}
        </p>

        {/* Tagline scientifique */}
        <p className="text-sm text-terre-400 italic mb-12 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          Citrus × microcarpa — Rutaceae
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Link href={getLocalePath(locale, '/botanique')} className="btn-primary text-base px-8 py-3.5 shadow-lg shadow-calamansi-900/30">
            {t.home.hero_cta}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href={getLocalePath(locale, '/recettes')} className="btn-secondary border-white/30 text-white hover:bg-white/10 text-base px-8 py-3.5">
            {t.home.hero_cta2}
          </Link>
        </div>

        {/* Stats rapides */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-white/10 pt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '20+', label: locale === 'fr' ? 'Pays producteurs' : 'Producing countries' },
            { value: '100+', label: locale === 'fr' ? 'Recettes' : 'Recipes' },
            { value: '50+', label: locale === 'fr' ? 'Fiches santé' : 'Health guides' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-display font-bold text-3xl text-citron-400">{value}</p>
              <p className="text-terre-400 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-terre-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <span className="text-2xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-terre-600 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-terre-500 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
