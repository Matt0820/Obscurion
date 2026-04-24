import { Truck, Shield, RefreshCw, Package } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Frete Grátis',
    description: 'Acima de R$199',
  },
  {
    icon: Shield,
    title: 'Compra Segura',
    description: 'Seus dados protegidos',
  },
  {
    icon: RefreshCw,
    title: 'Troca Fácil',
    description: 'Até 7 dias após receber',
  },
  {
    icon: Package,
    title: 'Produtos Exclusivos',
    description: 'Peças limitadas',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-8 border-y border-ash/50 bg-shadow/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-blood" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-bone tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
