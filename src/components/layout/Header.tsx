'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getTranslations, getLocalePath } from '@/lib/i18n'
import type { Locale } from '@/types'

interface HeaderProps { locale: Locale }

const NAV_LINKS = [
  { key: 'histoire',  path: '/histoire' },
  { key: 'botanique', path: '/botanique' },
  { key: 'recettes',  path: '/recettes' },
  { key: 'sante',     path: '/sante' },
  { key: 'carte',     path: '/carte' },
  { key: 'boutique',  path: '/boutique' },
  { key: 'blog',      path: '/blog' },
] as const

export function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale)
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const otherLocale = locale === 'fr' ? 'en' : 'fr'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-terre-100 shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ height: 'var(--nav-height)' }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href={getLocalePath(locale, '')} className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 bg-calamansi-500 rounded-full flex items-center justify-center">
            <span className="text-white text-lg">🍋</span>
          </div>
          <span className="font-display font-bold text-terre-900 text-lg leading-tight">
            Calamansi<br />
            <span className="text-calamansi-600 text-sm font-normal">K Lemon</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {NAV_LINKS.map(({ key, path }) => (
            <Link
              key={key}
              href={getLocalePath(locale, path)}
              className="nav-link"
            >
              {t.nav[key as keyof typeof t.nav]}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Lang switcher */}
          <Link
            href={`/${otherLocale}`}
            className="btn-ghost text-xs font-semibold tracking-wide px-2.5 py-1.5"
            aria-label={`Switch to ${otherLocale.toUpperCase()}`}
          >
            {otherLocale.toUpperCase()}
          </Link>

          {/* Search (placeholder) */}
          <button
            className="btn-ghost p-2"
            aria-label="Rechercher"
            title="Search coming soon"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7 7 0 1016.65 16.65z"/>
            </svg>
          </button>

          {/* Boutique CTA */}
          <Link href={getLocalePath(locale, '/boutique')} className="hidden sm:inline-flex btn-primary text-sm py-2 px-4">
            {t.nav.boutique}
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden btn-ghost p-2"
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-terre-100 px-4 py-4 space-y-1">
          {NAV_LINKS.map(({ key, path }) => (
            <Link
              key={key}
              href={getLocalePath(locale, path)}
              className="block nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[key as keyof typeof t.nav]}
            </Link>
          ))}
          <div className="pt-2 border-t border-terre-100 mt-2">
            <Link
              href={getLocalePath(locale, '/boutique')}
              className="btn-primary w-full justify-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav.boutique}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
