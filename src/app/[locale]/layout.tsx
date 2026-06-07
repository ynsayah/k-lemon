import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { locales } from '@/lib/i18n'
import type { Locale } from '@/types'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return {
    alternates: {
      languages: { 'fr': '/fr', 'en': '/en' },
    },
  }
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return (
    <>
      <ScrollProgress />
      <Header locale={locale as Locale} />
      <main id="main-content">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  )
}
