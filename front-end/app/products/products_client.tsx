'use client'

export const dynamic = 'force-dynamic'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ProductGrid } from '@/components/product/product-grid'
import { EmptyState } from '@/components/ui/empty-state'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

type SortOption = 'newest' | 'price-asc' | 'price-desc' | 'name'

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Mais recentes' },
  { value: 'price-asc', label: 'Menor preço' },
  { value: 'price-desc', label: 'Maior preço' },
  { value: 'name', label: 'Nome A-Z' },
]

const priceRanges = [
  { value: 'all', label: 'Todos os preços' },
  { value: '0-50', label: 'Até R$50' },
  { value: '50-100', label: 'R$50 - R$100' },
  { value: '100-200', label: 'R$100 - R$200' },
  { value: '200+', label: 'Acima de R$200' },
]

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const initialFilter = searchParams.get('filter') || ''

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
      )
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.categorySlug === selectedCategory)
    }

    // Filter by new items
    if (initialFilter === 'new') {
      result = result.filter((p) => p.isNew)
    }

    // Filter by price range
    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map((v) => (v === '+' ? Infinity : parseInt(v)))
      result = result.filter((p) => {
        if (max === undefined) return p.price >= min
        return p.price >= min && p.price <= max
      })
    }

    // Sort
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
      default:
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return result
  }, [searchQuery, selectedCategory, selectedPrice, sortBy, initialFilter])

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedPrice('all')
    setSortBy('newest')
  }

  const hasActiveFilters = searchQuery || selectedCategory !== 'all' || selectedPrice !== 'all'

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-shadow border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-bone mb-4">
            {initialFilter === 'new' ? 'Lançamentos' : 'Produtos'}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full pl-12 pr-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 bg-secondary border border-ash text-bone text-sm hover:border-blood transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
            </button>

            {/* Desktop filters */}
            <div className={`${showFilters ? 'flex' : 'hidden'} lg:flex flex-wrap items-center gap-3`}>
              {/* Category */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-secondary border border-ash text-bone text-sm focus:outline-none focus:border-blood transition-colors cursor-pointer"
                >
                  <option value="all">Todas categorias</option>
                  {categories.map((cat) => (
                    <option key={cat.slug} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Price */}
              <div className="relative">
                <select
                  value={selectedPrice}
                  onChange={(e) => setSelectedPrice(e.target.value)}
                  className="appearance-none px-4 py-3 pr-10 bg-secondary border border-ash text-bone text-sm focus:outline-none focus:border-blood transition-colors cursor-pointer"
                >
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none px-4 py-3 pr-10 bg-secondary border border-ash text-bone text-sm focus:outline-none focus:border-blood transition-colors cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>

              {/* Clear filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 text-blood text-sm hover:text-bone transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} columns={4} />
        ) : (
          <EmptyState
            type="search"
            title="Nenhum produto encontrado"
            description="Tente ajustar os filtros ou buscar por outro termo."
            actionLabel="Limpar filtros"
            actionHref="/products"
          />
        )}
      </div>
    </div>
  )
}
