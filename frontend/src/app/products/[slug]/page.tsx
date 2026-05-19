'use client'

import { useEffect, useState, use } from 'react'
import Link from 'next/link'
import { Minus, Plus, ShoppingBag, ChevronRight, Truck, RefreshCw, Shield, Check } from 'lucide-react'
import { getProductById, listProducts } from '@/lib/api'
import type { Product } from '@/types/product'
import { formatCurrency } from '@/lib/format'
import { useCartStore } from '@/store/cart-store'
import { ProductGrid } from '@/components/product/product-grid'
import { ProductBadge } from '@/components/ui/product-badge'
import { SectionTitle } from '@/components/ui/section-title'
import { EmptyState } from '@/components/ui/empty-state'

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

function getProductIdFromSlug(slug: string) {
  const productId = Number(slug.match(/-(\d+)$/)?.[1])
  return Number.isFinite(productId) ? productId : null
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params)
  const productId = getProductIdFromSlug(slug)

  const [product, setProduct] = useState<Product | null>(null)
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    if (!productId) {
      setIsLoading(false)
      return
    }

    const selectedProductId = productId

    async function loadProduct() {
      setIsLoading(true)
      const selectedProduct = await getProductById(selectedProductId)
      const products = await listProducts()

      setProduct(selectedProduct)
      setRelatedProducts(
        selectedProduct
          ? products
              .filter((item) => item.categorySlug === selectedProduct.categorySlug && item.id !== selectedProduct.id)
              .slice(0, 4)
          : []
      )
      setIsLoading(false)
    }

    loadProduct()
  }, [productId])

  useEffect(() => {
    if (!product) return
    setSelectedSize(product.sizes?.[0] || '')
    setQuantity(1)
  }, [product])

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blood border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center px-4">
        <EmptyState
          type="products"
          title="Produto não encontrado"
          description="Esse item não existe no banco de dados ou a API não está disponível."
          actionLabel="Voltar para produtos"
          actionHref="/products"
        />
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize || undefined)
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1)
  }

  const increaseQuantity = () => {
    if (quantity < product.stock) setQuantity(quantity + 1)
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <div className="bg-shadow border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-bone transition-colors">
              Início
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-bone transition-colors">
              Produtos
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              href={`/products?category=${product.categorySlug}`}
              className="hover:text-bone transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-bone truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-card border border-ash overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-shadow via-secondary to-shadow" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <span className="font-serif text-2xl lg:text-3xl text-bone/20 text-center tracking-wider uppercase">
                    {product.name}
                  </span>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <ProductBadge variant="new" />}
                  {product.oldPrice && <ProductBadge variant="sale" />}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((thumbnailNumber) => (
                  <button
                    key={thumbnailNumber}
                    className={`aspect-square bg-card border transition-colors ${
                      thumbnailNumber === 1 ? 'border-blood' : 'border-ash hover:border-blood/50'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-shadow via-secondary to-shadow" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <p className="text-xs tracking-[0.2em] uppercase text-blood mb-2">
                {product.category}
              </p>
              
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-bone mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-blood">
                  {formatCurrency(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatCurrency(product.oldPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Size selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-bone mb-3">
                    Tamanho
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[48px] px-4 py-3 text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'bg-blood text-bone'
                            : 'bg-secondary border border-ash text-bone hover:border-blood'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-bone mb-3">
                  Quantidade
                </label>
                <div className="flex items-center gap-1 w-fit">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="w-12 h-12 bg-secondary border border-ash text-bone hover:border-blood disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-16 h-12 bg-input border border-ash text-bone flex items-center justify-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="w-12 h-12 bg-secondary border border-ash text-bone hover:border-blood disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {product.stock} unidades em estoque
                </p>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className={`w-full py-4 text-sm font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isAdded
                    ? 'bg-green-900 text-green-100'
                    : 'bg-blood text-bone hover:bg-blood-dark'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Adicionado ao carrinho
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5" />
                    Adicionar ao carrinho
                  </>
                )}
              </button>

              {/* Info cards */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-ash">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto text-blood mb-2" />
                  <p className="text-xs text-muted-foreground">Frete grátis acima de R$199</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-5 h-5 mx-auto text-blood mb-2" />
                  <p className="text-xs text-muted-foreground">Troca em até 7 dias</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto text-blood mb-2" />
                  <p className="text-xs text-muted-foreground">Compra segura</p>
                </div>
              </div>

              {/* Product details */}
              <div className="mt-8 pt-8 border-t border-ash space-y-4">
                {product.material && (
                  <div>
                    <h3 className="text-sm font-medium text-bone mb-1">Material</h3>
                    <p className="text-sm text-muted-foreground">{product.material}</p>
                  </div>
                )}
                {product.care && (
                  <div>
                    <h3 className="text-sm font-medium text-bone mb-1">Cuidados</h3>
                    <p className="text-sm text-muted-foreground">{product.care}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-shadow/50 border-t border-ash/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Produtos Relacionados"
              subtitle="Outros itens que podem te interessar"
            />
            <div className="mt-12">
              <ProductGrid products={relatedProducts} columns={4} />
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
