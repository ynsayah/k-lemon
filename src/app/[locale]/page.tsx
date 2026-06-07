import type { Metadata } from 'next'
import type { Locale } from '@/types'
import { buildMetadata, buildOrganizationSchema } from '@/lib/seo'
import { JsonLd } from '@/components/ui/JsonLd'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIsSection } from '@/components/sections/WhatIsSection'
import { HighlightedSections } from '@/components/sections/HighlightedSections'
import { RecettesPreview } from '@/components/sections/RecettesPreview'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  return buildMetadata({ locale: locale as Locale })
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  const l = locale as Locale

  return (
    <>
      <JsonLd data={buildOrganizationSchema()} />
      <HeroSection locale={l} />
      <WhatIsSection locale={l} />
      <HighlightedSections locale={l} />
      <RecettesPreview locale={l} />
    </>
  )
}
