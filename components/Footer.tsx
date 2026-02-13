import { personal } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="py-10 mt-4 border-t border-white/[0.06]">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()}{' '}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-400 transition-colors"
          >
            {personal.name}
          </a>
          . All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            {personal.email}
          </a>
          <a
            href={`tel:${personal.phone.replace(/-/g, '')}`}
            className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors"
          >
            {personal.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
