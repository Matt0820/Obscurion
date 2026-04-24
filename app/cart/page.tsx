'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { formatCurrency } from '@/lib/format'
import { EmptyState } from '@/components/ui/empty-state'

const SHIPPING_THRESHOLD = 199
const SHIPPING_COST = 19.90

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-blood border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <EmptyState
            type="cart"
            title="Seu carrinho está vazio"
            description="Parece que você ainda não adicionou nenhum artefato das trevas ao seu carrinho."
            actionLabel="Explorar produtos"
            actionHref="/products"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-shadow border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-bone mb-2">
            Carrinho
          </h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? 'item' : 'itens'} no carrinho
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedSize}`}
                className="bg-card border border-ash p-4 sm:p-6"
              >
                <div className="flex gap-4 sm:gap-6">
                  {/* Image placeholder */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-secondary border border-ash">
                    <div className="w-full h-full flex items-center justify-center">
                      <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">
                          {item.product.category}
                        </p>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-medium text-bone hover:text-blood transition-colors line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        {item.selectedSize && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Tamanho: {item.selectedSize}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id, item.selectedSize)}
                        className="p-2 text-muted-foreground hover:text-blood transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity - 1,
                              item.selectedSize
                            )
                          }
                          className="w-8 h-8 bg-secondary border border-ash text-bone hover:border-blood transition-colors flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-10 h-8 bg-input border border-ash text-bone flex items-center justify-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.quantity + 1,
                              item.selectedSize
                            )
                          }
                          className="w-8 h-8 bg-secondary border border-ash text-bone hover:border-blood transition-colors flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="font-semibold text-blood">
                          {formatCurrency(item.product.price * item.quantity)}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">
                            {formatCurrency(item.product.price)} cada
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear cart button */}
            <button
              onClick={clearCart}
              className="text-sm text-muted-foreground hover:text-blood transition-colors"
            >
              Limpar carrinho
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-ash p-6 sticky top-24">
              <h2 className="font-serif text-lg font-semibold tracking-wide text-bone mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-bone">{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Frete</span>
                  <span className={shipping === 0 ? 'text-green-500' : 'text-bone'}>
                    {shipping === 0 ? 'Grátis' : formatCurrency(shipping)}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Frete grátis para compras acima de {formatCurrency(SHIPPING_THRESHOLD)}
                  </p>
                )}
              </div>

              <div className="border-t border-ash pt-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-bone">Total</span>
                  <span className="text-xl font-bold text-blood">
                    {formatCurrency(total)}
                  </span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full py-4 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors flex items-center justify-center gap-2"
              >
                Finalizar Compra
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="block w-full py-4 mt-3 border border-ash text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:border-blood transition-colors text-center"
              >
                Continuar Comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
