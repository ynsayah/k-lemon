import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-calamansi-50">
      <div className="text-center px-4">
        <p className="text-8xl font-display font-bold text-calamansi-200 select-none">404</p>
        <h1 className="text-3xl font-display font-bold text-terre-900 mt-4 mb-2">Page introuvable</h1>
        <p className="text-terre-600 mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Link href="/fr" className="btn-primary">Retour à l&apos;accueil</Link>
      </div>
    </div>
  )
}
