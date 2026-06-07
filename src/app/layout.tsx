import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display, DM_Mono } from 'next/font/google'
import '@/styles/globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default:  'Calamansi K Lemon — La référence mondiale du Calamansi',
    template: '%s — Calamansi K Lemon',
  },
  description: 'Découvrez le Calamansi (Calamondin) : histoire, botanique, recettes, culture, économie et bienfaits santé. La ressource mondiale de référence.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://calamansi-k-lemon.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} ${dmMono.variable} grain`}>
        {children}
      </body>
    </html>
  )
}
