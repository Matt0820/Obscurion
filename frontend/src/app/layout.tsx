import type { Metadata, Viewport } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cinzel = Cinzel({ 
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Obscurion Metal Store | Vista a Escuridão',
  description: 'Roupas e acessórios sombrios para os filhos da noite. Camisetas, moletons, acessórios e colecionáveis com estética metal e gótica.',
  keywords: ['metal', 'gótico', 'darkwear', 'camisetas', 'moletons', 'acessórios', 'underground'],
  authors: [{ name: 'Obscurion' }],
  creator: 'Obscurion Metal Store',
  openGraph: {
    title: 'Obscurion Metal Store',
    description: 'Vista a escuridão. Forje seu ruído.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cinzel.variable} bg-[#050505]`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
