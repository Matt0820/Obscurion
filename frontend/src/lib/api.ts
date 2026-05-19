import type { Product } from '@/types/product'

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000').replace(/\/$/, '')

type HttpMethod = 'GET' | 'POST' | 'DELETE'

type BackendProduct = {
  id: number | string
  nome: string
  preco: number
  estoque: number
  tamanho?: string | null
  categoria: string
}

type ClientePayload = {
  nome: string
  email: string
  telefone: string
  cpf: string
  endereco: string
  cep: string
}

type ProdutoPayload = {
  nome: string
  preco: number
  estoque: number
  tamanho: string
  categoria: string
}

type CarrinhoPayload = {
  cliente_id: number
  produto_id: number
  quantidade: number
}

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

export function slugify(value: string) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function categoryToSlug(category: string) {
  const normalizedCategory = normalizeText(category)

  const aliases: Record<string, string> = {
    't-shirts': 'camisetas',
    tshirts: 'camisetas',
    shirts: 'camisetas',
    camisa: 'camisetas',
    camisas: 'camisetas',
    camiseta: 'camisetas',
    camisetas: 'camisetas',
    moletom: 'moletons',
    moletons: 'moletons',
    hoodie: 'moletons',
    hoodies: 'moletons',
    acessorio: 'acessorios',
    acessorios: 'acessorios',
    patches: 'patches',
    patch: 'patches',
    poster: 'posteres',
    posters: 'posteres',
    posteres: 'posteres',
    colecionavel: 'colecionaveis',
    colecionaveis: 'colecionaveis',
  }

  return aliases[normalizedCategory] ?? slugify(category)
}

function sizeListFromApi(size?: string | null) {
  if (!size) return undefined

  return size
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
}

export function normalizeProduct(product: BackendProduct): Product {
  const id = String(product.id)
  const category = product.categoria || 'Sem categoria'

  return {
    id,
    name: product.nome,
    slug: `${slugify(product.nome)}-${id}`,
    price: Number(product.preco),
    category,
    categorySlug: categoryToSlug(category),
    description: `${product.nome} disponível na Obscurion Store.`,
    images: [],
    sizes: sizeListFromApi(product.tamanho),
    stock: Number(product.estoque),
    featured: Number(product.estoque) > 0,
    isNew: false,
    tags: [categoryToSlug(category)],
  }
}

async function request<T>(path: string, method: HttpMethod = 'GET', body?: unknown): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Erro na API: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<T>
}

export async function createClient(cliente: ClientePayload) {
  return request('/cliente/', 'POST', cliente)
}

export async function listClients() {
  return request('/cliente/')
}

export async function getClientById(id: number) {
  return request(`/cliente/${id}/`)
}

export async function deleteClient(id: number) {
  return request(`/cliente/${id}/`, 'DELETE')
}

export async function createProduct(produto: ProdutoPayload) {
  const createdProduct = await request<BackendProduct>('/produto/', 'POST', produto)
  return normalizeProduct(createdProduct)
}

export async function listProducts(): Promise<Product[]> {
  try {
    const products = await request<BackendProduct[]>('/produto/')
    return products.map(normalizeProduct)
  } catch (error) {
    console.error('Não foi possível carregar produtos da API:', error)
    return []
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  try {
    const product = await request<BackendProduct | null>(`/produto/${id}/`)
    return product ? normalizeProduct(product) : null
  } catch (error) {
    console.error(`Não foi possível carregar o produto ${id}:`, error)
    return null
  }
}

export async function deleteProduct(id: number) {
  return request(`/produto/${id}/`, 'DELETE')
}

export async function createCartItem(carrinho: CarrinhoPayload) {
  return request('/carrinho/', 'POST', carrinho)
}

export async function listCartItems() {
  return request('/carrinho/')
}

export async function deleteCartItem(id: number) {
  return request(`/carrinho/${id}/`, 'DELETE')
}

// Compatibilidade com os nomes antigos usados pelo projeto.
export const CriarClientes = createClient
export const ListarClientes = listClients
export const SelecionarCliente = getClientById
export const DeletarCliente = deleteClient
export const CriarProduto = createProduct
export const ListarProdutos = listProducts
export const SelecionarProduto = getProductById
export const DeletarProduto = deleteProduct
export const CriarCarrinho = createCartItem
export const ListarCarrinhos = listCartItems
export const ExcluirCarrinho = deleteCartItem
