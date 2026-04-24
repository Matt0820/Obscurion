import { cn } from '@/lib/utils'

interface ProductBadgeProps {
  variant: 'new' | 'sale'
  className?: string
}

export function ProductBadge({ variant, className }: ProductBadgeProps) {
  return (
    <span
      className={cn(
        'px-2 py-1 text-[10px] font-bold tracking-[0.2em] uppercase',
        variant === 'new' && 'bg-blood text-bone',
        variant === 'sale' && 'bg-bone text-abyss',
        className
      )}
    >
      {variant === 'new' ? 'Novo' : 'Oferta'}
    </span>
  )
}
