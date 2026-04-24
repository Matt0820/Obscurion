export interface Product {
  id: string
  name: string
  slug: string
  price: number
  oldPrice?: number
  category: string
  categorySlug: string
  description: string
  images: string[]
  sizes?: string[]
  stock: number
  featured: boolean
  isNew: boolean
  material?: string
  care?: string
  tags: string[]
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
}
