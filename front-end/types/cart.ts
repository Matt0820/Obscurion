import type { Product } from './product'

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
}

export interface CartState {
  items: CartItem[]
  addItem: (product: Product, quantity?: number, size?: string) => void
  removeItem: (productId: string, size?: string) => void
  updateQuantity: (productId: string, quantity: number, size?: string) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}
