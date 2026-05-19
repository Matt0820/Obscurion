import Link from 'next/link'
import { ShoppingBag, Search, Package } from 'lucide-react'

interface EmptyStateProps {
  type: 'cart' | 'search' | 'products'
  title: string
  description: string
  actionLabel?: string
  actionHref?: string
}

const icons = {
  cart: ShoppingBag,
  search: Search,
  products: Package,
}

export function EmptyState({ 
  type, 
  title, 
  description, 
  actionLabel, 
  actionHref 
}: EmptyStateProps) {
  const Icon = icons[type]

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-6">
        <Icon className="w-10 h-10 text-muted-foreground" />
      </div>
      <h3 className="font-serif text-xl font-semibold tracking-[0.1em] uppercase text-bone mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground max-w-md mb-6">
        {description}
      </p>
      {actionLabel && actionHref && (
        <Link
          href={actionHref}
          className="px-6 py-3 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  )
}
