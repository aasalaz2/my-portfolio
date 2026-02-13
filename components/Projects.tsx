import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-white/[0.06]">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="group">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-2">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-foreground hover:text-foreground/80 transition-colors group-hover:underline underline-offset-4 decoration-neutral-600"
                >
                  {project.name}
                </a>
                {project.private && (
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-white/5 text-neutral-600 border border-white/[0.06] font-mono">
                    private
                  </span>
                )}
              </div>
              <span className="text-xs text-neutral-600 shrink-0 mt-0.5 font-mono">
                {project.year}
              </span>
            </div>

            <p className="text-[14px] text-neutral-500 leading-relaxed mb-3">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-white/[0.08] text-neutral-500 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
