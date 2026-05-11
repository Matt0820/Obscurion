import { Suspense } from 'react'
import ProductsClient from './products_client'

export const dynamic = 'force-dynamic'

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ProductsClient />
    </Suspense>
  )
}