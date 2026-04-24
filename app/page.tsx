import Link from 'next/link'
import { ArrowRight, Skull, Music, Shirt, Star } from 'lucide-react'
import { HeroSection } from '@/components/home/hero-section'
import { CategoryCard } from '@/components/home/category-card'
import { NewsletterSection } from '@/components/home/newsletter-section'
import { FeaturesSection } from '@/components/home/features-section'
import { ProductGrid } from '@/components/product/product-grid'
import { SectionTitle } from '@/components/ui/section-title'
import { products } from '@/data/products'
import { categories } from '@/data/categories'

const brandValues = [
  {
    icon: Skull,
    title: 'Feito por Headbangers',
    description: 'Para headbangers',
  },
  {
    icon: Music,
    title: 'Estilo Autêntico',
    description: 'Para quem vive o metal',
  },
  {
    icon: Shirt,
    title: 'Qualidade Pesada',
    description: 'Do tecido à estampa',
  },
  {
    icon: Star,
    title: 'Vista sua Essência',
    description: 'Expresse o caos',
  },
]

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 5)
  const newProducts = products.filter((p) => p.isNew).slice(0, 4)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Bar */}
      <FeaturesSection />

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionTitle 
              title="Destaques" 
              subtitle="Peças essenciais para os devotos das trevas"
              align="left"
            />
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-bone hover:text-blood transition-colors group"
            >
              Ver todos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <ProductGrid products={featuredProducts} columns={5} />
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-shadow/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Categorias" 
            subtitle="Explore nossa coleção de artefatos sombrios"
          />
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blood-dark via-blood to-blood-dark opacity-90" />
        <div className="absolute inset-0 noise-bg opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-bone/60 mb-4">
            Manifesto
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.05em] text-bone leading-tight">
            Forjados em distorção.
            <br />
            Vestidos em silêncio.
          </h2>
          <p className="mt-6 text-bone/80 max-w-2xl mx-auto leading-relaxed">
            A Obscurion nasceu da fusão entre música pesada, arte sombria e cultura independente. 
            Cada peça carrega a essência do underground — para os que escolheram viver além do comum.
          </p>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <SectionTitle 
              title="Nova Coleção" 
              subtitle="Recém-chegados das profundezas"
              align="left"
            />
            <Link
              href="/products?filter=new"
              className="flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-bone hover:text-blood transition-colors group"
            >
              Ver todos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <ProductGrid products={newProducts} columns={4} />
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-12 border-y border-ash/50 bg-shadow/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {brandValues.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-blood" />
                </div>
                <h3 className="text-sm font-semibold text-bone tracking-wide uppercase mb-1">
                  {value.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  )
}
