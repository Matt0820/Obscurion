'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-abyss/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-shadow border-l border-ash/50 flex flex-col animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ash/50">
          <span className="font-serif text-xl font-bold tracking-[0.15em] text-bone">
            MENU
          </span>
          <button
            onClick={onClose}
            className="p-2 text-bone/80 hover:text-blood transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block text-lg tracking-[0.2em] uppercase text-bone/80 hover:text-blood transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-ash/50">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground text-center">
            Feito de som, dor e atitude
          </p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blood/30 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-blood/30 to-transparent" />
      </div>
    </div>
  )
}
