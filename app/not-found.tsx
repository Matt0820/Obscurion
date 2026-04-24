import Link from 'next/link'
import { Skull } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center">
          <Skull className="w-12 h-12 text-blood" />
        </div>
        
        <h1 className="font-serif text-6xl sm:text-7xl font-bold text-bone mb-4">
          404
        </h1>
        
        <h2 className="font-serif text-xl font-semibold tracking-wide text-bone mb-4">
          Página não encontrada
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Esta página se perdeu nas sombras. Talvez ela nunca tenha existido, 
          ou foi consumida pelo vazio.
        </p>
        
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors"
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
