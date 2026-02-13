import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-2xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
        >
          Andrew Salazar
        </Link>

        <nav className="flex items-center gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}

          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
