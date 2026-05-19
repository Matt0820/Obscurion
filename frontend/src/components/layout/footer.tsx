'use client'

import Link from 'next/link'
import { Instagram, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  loja: [
    { href: '/products', label: 'Todos os Produtos' },
    { href: '/products?category=camisetas', label: 'Camisetas' },
    { href: '/products?category=moletons', label: 'Moletons' },
    { href: '/products?category=acessorios', label: 'Acessórios' },
  ],
  institucional: [
    { href: '/about', label: 'Sobre Nós' },
    { href: '/contact', label: 'Contato' },
    { href: '#', label: 'Políticas de Troca' },
    { href: '#', label: 'FAQ' },
  ],
  social: [
    { href: 'https://instagram.com/obscurion', label: 'Instagram', icon: Instagram },
    { href: 'https://youtube.com/@obscurion', label: 'YouTube', icon: Youtube },
    { href: 'mailto:contato@obscurion.com', label: 'E-mail', icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-shadow border-t border-ash/50 mt-auto">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold tracking-[0.15em] text-bone">
                OBSCURION
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Roupas e acessórios para os que nunca pertenceram à luz do dia. 
              Forjados em distorção, vestidos em silêncio.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-bone/60 hover:text-blood transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Loja */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-bone mb-4">
              Loja
            </h3>
            <ul className="space-y-3">
              {footerLinks.loja.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blood transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-bone mb-4">
              Institucional
            </h3>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-blood transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-[0.2em] uppercase text-bone mb-4">
              Entre para o Culto
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba ofertas exclusivas e novidades das trevas.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-input border border-ash text-bone placeholder:text-muted-foreground text-sm focus:outline-none focus:border-blood transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blood text-bone text-sm font-semibold tracking-[0.15em] uppercase hover:bg-blood-dark transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ash/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground tracking-wider">
              © {new Date().getFullYear()} Obscurion Metal Store. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground tracking-wider">
                Forjado em distorção. Vestido em silêncio.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="h-1 bg-gradient-to-r from-blood-dark via-blood to-blood-dark" />
    </footer>
  )
}
