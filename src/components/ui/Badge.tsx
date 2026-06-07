interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'yellow' | 'earth' | 'outline'
  size?: 'sm' | 'md'
}

export function Badge({ children, variant = 'green', size = 'md' }: BadgeProps) {
  const variants = {
    green:   'bg-calamansi-100 text-calamansi-800',
    yellow:  'bg-citron-100 text-citron-800',
    earth:   'bg-terre-100 text-terre-800',
    outline: 'border border-calamansi-300 text-calamansi-700 bg-transparent',
  }
  const sizes = { sm: 'px-2 py-0.5 text-2xs', md: 'px-2.5 py-0.5 text-xs' }
  return (
    <span className={`inline-flex items-center rounded-full font-medium ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}
