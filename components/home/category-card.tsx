import Link from 'next/link'
import type { Category } from '@/types/product'
import { ArrowRight } from 'lucide-react'

interface CategoryCardProps {
  category: Category
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products?category=${category.slug}`}
      className="group relative block aspect-square overflow-hidden bg-card border border-ash hover:border-blood/50 transition-all duration-300"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-shadow via-secondary to-shadow" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/50 to-transparent" />
      
      {/* Hover effect */}
      <div className="absolute inset-0 bg-blood/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-serif text-xl font-semibold tracking-[0.1em] uppercase text-bone group-hover:text-blood transition-colors mb-2">
          {category.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-blood">
          <span>Ver produtos</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
        <div className="absolute -top-6 -right-6 w-12 h-12 bg-blood/20 rotate-45" />
      </div>
    </Link>
  )
}
