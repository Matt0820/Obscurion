'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '@/store/cart-store'
import { MobileMenu } from './mobile-menu'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/products', label: 'Produtos' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const totalItems = useCartStore((state) => state.getTotalItems())

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-abyss/95 backdrop-blur-md border-b border-ash/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.15em] text-bone group-hover:text-blood transition-colors">
                OBSCURION
              </span>
              <span className="hidden sm:block text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                Metal Store
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm tracking-[0.15em] uppercase text-bone/80 hover:text-blood transition-colors animated-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                className="p-2 text-bone/80 hover:text-blood transition-colors"
                aria-label="Buscar produtos"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                className="hidden sm:block p-2 text-bone/80 hover:text-blood transition-colors"
                aria-label="Minha conta"
              >
                <User className="w-5 h-5" />
              </button>

              <Link
                href="/cart"
                className="relative p-2 text-bone/80 hover:text-blood transition-colors"
                aria-label="Carrinho de compras"
              >
                <ShoppingBag className="w-5 h-5" />
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blood text-bone text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItems > 9 ? '9+' : totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-bone/80 hover:text-blood transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood/30 to-transparent" />
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  )
}
