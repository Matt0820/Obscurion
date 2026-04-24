import type { Category } from '@/types/product'

export const categories: Category[] = [
  {
    id: '1',
    name: 'Camisetas',
    slug: 'camisetas',
    description: 'Vestimentas das trevas para os filhos da noite',
    image: '/categories/apparel.jpg',
  },
  {
    id: '2',
    name: 'Moletons',
    slug: 'moletons',
    description: 'Abrigo contra o frio do abismo',
    image: '/categories/hoodies.jpg',
  },
  {
    id: '3',
    name: 'Acessórios',
    slug: 'acessorios',
    description: 'Ornamentos forjados nas chamas',
    image: '/categories/accessories.jpg',
  },
  {
    id: '4',
    name: 'Patches',
    slug: 'patches',
    description: 'Insígnias do submundo',
    image: '/categories/patches.jpg',
  },
  {
    id: '5',
    name: 'Pôsteres',
    slug: 'posteres',
    description: 'Arte para os corredores sombrios',
    image: '/categories/posters.jpg',
  },
  {
    id: '6',
    name: 'Colecionáveis',
    slug: 'colecionaveis',
    description: 'Relíquias e artefatos obscuros',
    image: '/categories/collectibles.jpg',
  },
]
