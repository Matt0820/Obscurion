import { Skull, Music, Flame, Moon } from 'lucide-react'

const values = [
  {
    icon: Skull,
    title: 'Autenticidade',
    description: 'Cada peça é criada por quem vive a cena. Sem imitações, sem diluições. Puro underground.',
  },
  {
    icon: Music,
    title: 'Música como Essência',
    description: 'O metal é mais que som — é filosofia. Nossas roupas carregam essa energia primordial.',
  },
  {
    icon: Flame,
    title: 'Qualidade Brutal',
    description: 'Tecidos resistentes, estampas duráveis. Feito para durar tanto quanto sua devoção.',
  },
  {
    icon: Moon,
    title: 'Comunidade',
    description: 'Conectamos os que escolheram as sombras. Uma tribo unida pela escuridão.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-shadow via-abyss to-shadow" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/30 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blood/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blood/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-blood mb-4">
            Nossa história
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[0.05em] text-bone mb-8">
            Sobre a Obscurion
          </h1>
          <p className="text-lg text-bone-dark leading-relaxed">
            Nascemos da fusão entre música pesada, arte sombria, moda alternativa e cultura independente.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-bone mb-6">
                Da Cena para a Cena
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Obscurion nasceu em 2024, mas sua essência existe desde sempre — nas noites de show, 
                  nos corredores dos festivais, nos fones de ouvido durante madrugadas solitárias.
                </p>
                <p>
                  Somos um coletivo de headbangers, artistas e visionários que acreditam que a roupa é 
                  mais do que tecido — é uma declaração. Um escudo. Uma identidade.
                </p>
                <p>
                  Cada estampa carrega o peso de riffs distorcidos. Cada costura foi pensada para 
                  resistir aos mosh pits da vida. Não fazemos moda — forjamos armaduras para os 
                  filhos da noite.
                </p>
              </div>
            </div>
            <div className="relative aspect-square bg-card border border-ash overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-shadow via-secondary to-shadow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-4xl text-bone/10 tracking-[0.2em] uppercase">
                  Obscurion
                </span>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-blood/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-blood/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-shadow/50 border-y border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-bone mb-4">
              Nossos Pilares
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os valores que guiam cada decisão, cada estampa, cada produto que criamos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-blood" />
                </div>
                <h3 className="font-serif text-lg font-semibold tracking-wide text-bone mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-px h-16 bg-blood mx-auto mb-6" />
            <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
              Manifesto
            </p>
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-bone leading-relaxed mb-8">
            &ldquo;Não vestimos roupas. Vestimos nossa essência. Cada peça é um grito silencioso, 
            uma rebelião contra o ordinário, um ritual de autoafirmação.&rdquo;
          </blockquote>

          <p className="text-muted-foreground">
            Vista a escuridão. Forje seu ruído.
          </p>

          <div className="mt-8">
            <div className="w-px h-16 bg-blood mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blood">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide text-bone mb-4">
            Pronto para entrar no ritual?
          </h2>
          <p className="text-bone/80 mb-8 max-w-xl mx-auto">
            Explore nossa coleção e encontre a armadura perfeita para expressar quem você realmente é.
          </p>
          <a
            href="/products"
            className="inline-block px-8 py-4 bg-abyss text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-shadow transition-colors"
          >
            Ver Coleção Completa
          </a>
        </div>
      </section>
    </div>
  )
}
