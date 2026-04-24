'use client'

import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'
import type { Product } from '@/types/product'
import { formatCurrency } from '@/lib/format'
import { ProductBadge } from '@/components/ui/product-badge'
import { useCartStore } from '@/store/cart-store'
import { useState } from 'react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setIsAdding(true)
    addItem(product, 1, product.sizes?.[0])
    
    setTimeout(() => setIsAdding(false), 1000)
  }

  return (
    <Link 
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative bg-card border border-ash hover:border-blood/50 transition-all duration-300 hover-lift overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-[3/4] bg-secondary overflow-hidden">
          {/* Placeholder gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-shadow via-secondary to-shadow" />
          
          {/* Product name overlay as placeholder */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <span className="font-serif text-lg text-bone/20 text-center tracking-wider uppercase">
              {product.name}
            </span>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.isNew && <ProductBadge variant="new" />}
            {product.oldPrice && <ProductBadge variant="sale" />}
          </div>

          {/* Quick add button */}
          <button
            onClick={handleQuickAdd}
            className={`absolute bottom-3 right-3 p-3 transition-all duration-300 z-10 ${
              isAdding 
                ? 'bg-blood text-bone' 
                : 'bg-abyss/80 text-bone/80 opacity-0 group-hover:opacity-100 hover:bg-blood hover:text-bone'
            }`}
            aria-label="Adicionar ao carrinho"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blood/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1">
            {product.category}
          </p>
          <h3 className="font-medium text-bone group-hover:text-blood transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-blood font-semibold">
              {formatCurrency(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatCurrency(product.oldPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blood scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </Link>
  )
}
