import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden noise-bg">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-shadow to-abyss" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blood/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blood/3 rounded-full blur-3xl" />
      
      {/* Cross decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-20">
        <svg width="60" height="100" viewBox="0 0 60 100" fill="none" className="text-blood">
          <path d="M30 0V100M15 25H45" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-blood/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-blood/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-blood/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-blood/30" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Pre-title */}
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-blood mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Promo de Inauguração — 10% OFF
        </p>

        {/* Logo/Title */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.1em] text-bone mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          OBSCURION
        </h1>
        
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          Metal Store
        </p>

        {/* Slogan */}
        <p className="text-lg sm:text-xl lg:text-2xl text-bone-dark max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          Roupas e artefatos sombrios para os que nunca pertenceram à luz do dia.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <Link
            href="/products"
            className="group relative px-8 py-4 bg-blood text-bone text-sm font-semibold tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:bg-blood-dark"
          >
            <span className="relative z-10">Explorar Coleção</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blood-dark to-blood opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          
          <Link
            href="/products?filter=new"
            className="px-8 py-4 border border-bone/30 text-bone text-sm font-semibold tracking-[0.2em] uppercase hover:border-blood hover:text-blood transition-colors"
          >
            Ver Lançamentos
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-bone/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-blood rounded-full animate-pulse" />
        </div>
      </div>

      {/* Side text */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground whitespace-nowrap">
          Feitos de som, dor e atitude
        </p>
      </div>
    </section>
  )
}
