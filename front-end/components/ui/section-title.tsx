interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}: SectionTitleProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.1em] uppercase text-bone">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {/* Decorative line */}
      <div className={`mt-6 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="w-12 h-px bg-blood" />
        <div className="w-2 h-2 rotate-45 border border-blood" />
        <div className="w-12 h-px bg-blood" />
      </div>
    </div>
  )
}
