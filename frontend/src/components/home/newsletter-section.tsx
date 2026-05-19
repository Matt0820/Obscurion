'use client'

import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-shadow via-abyss to-shadow" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/30 to-transparent" />
      
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blood/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blood/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blood/10 border border-blood/30 flex items-center justify-center">
          <Mail className="w-7 h-7 text-blood" />
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.1em] uppercase text-bone mb-4">
          Entre para o Culto
        </h2>
        
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Receba em primeira mão ofertas exclusivas, lançamentos e novidades das trevas. 
          Sem spam, apenas o essencial.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 px-5 py-4 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitted}
              className={`px-8 py-4 text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitted
                  ? 'bg-green-900 text-green-100'
                  : 'bg-blood text-bone hover:bg-blood-dark'
              }`}
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4" />
                  Inscrito
                </>
              ) : (
                'Inscrever'
              )}
            </button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground mt-4">
          Ao se inscrever, você concorda com nossa política de privacidade.
        </p>
      </div>
    </section>
  )
}
