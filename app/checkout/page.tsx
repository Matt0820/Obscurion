'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Check, ShoppingBag, ArrowLeft } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { formatCurrency } from '@/lib/format'

const SHIPPING_THRESHOLD = 199
const SHIPPING_COST = 19.90

export default function CheckoutPage() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const { items, getTotalPrice, clearCart } = useCartStore()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    number: '',
    complement: '',
    city: '',
    state: '',
  })

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

  if (items.length === 0 && !isComplete) {
    router.push('/cart')
    return null
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST
  const total = subtotal + shipping

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    clearCart()
    setIsComplete(true)
    setIsSubmitting(false)
  }

  if (isComplete) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-900/30 border border-green-700 flex items-center justify-center">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.1em] uppercase text-bone mb-4">
            Pedido Confirmado
          </h1>
          <p className="text-muted-foreground mb-8">
            Seu pedido foi recebido com sucesso. Em breve você receberá um e-mail com os detalhes da sua compra.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors"
          >
            Continuar Comprando
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Header */}
      <div className="bg-shadow border-b border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-bone transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao carrinho
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-bone">
            Checkout
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Info */}
              <div className="bg-card border border-ash p-6">
                <h2 className="font-serif text-lg font-semibold tracking-wide text-bone mb-6">
                  Dados Pessoais
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-bone mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-card border border-ash p-6">
                <h2 className="font-serif text-lg font-semibold tracking-wide text-bone mb-6">
                  Endereço de Entrega
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      CEP *
                    </label>
                    <input
                      type="text"
                      name="cep"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                      placeholder="00000-000"
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-bone mb-2">
                      Endereço *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Número *
                    </label>
                    <input
                      type="text"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Complemento
                    </label>
                    <input
                      type="text"
                      name="complement"
                      value={formData.complement}
                      onChange={handleChange}
                      placeholder="Apto, bloco, etc."
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-bone mb-2">
                      Estado *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-ash text-bone text-sm focus:outline-none focus:border-blood transition-colors cursor-pointer"
                    >
                      <option value="">Selecione</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapá</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceará</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espírito Santo</option>
                      <option value="GO">Goiás</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Pará</option>
                      <option value="PB">Paraíba</option>
                      <option value="PR">Paraná</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piauí</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondônia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantins</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-ash p-6 sticky top-24">
                <h2 className="font-serif text-lg font-semibold tracking-wide text-bone mb-6">
                  Resumo do Pedido
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}`}
                      className="flex items-center gap-3"
                    >
                      <div className="w-12 h-12 bg-secondary border border-ash flex-shrink-0 flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-bone truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Qtd: {item.quantity}
                          {item.selectedSize && ` • Tam: ${item.selectedSize}`}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-bone">
                        {formatCurrency(item.product.price * item.quantity)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-ash pt-4 space-y-3 mb-6">
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
                </div>

                <div className="border-t border-ash pt-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-bone">Total</span>
                    <span className="text-xl font-bold text-blood">
                      {formatCurrency(total)}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bone border-t-transparent rounded-full animate-spin" />
                      Processando...
                    </>
                  ) : (
                    'Confirmar Pedido'
                  )}
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Ao confirmar, você concorda com nossos termos de uso e política de privacidade.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
