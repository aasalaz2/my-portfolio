import { projects } from '@/lib/data'

export default function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-border">
      <h2 className="text-sm font-medium text-muted uppercase tracking-widest mb-8">
        Projects
      </h2>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="group">
            <div className="flex items-start justify-between gap-4 mb-2">
              <div className="flex items-center gap-2">
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-foreground hover:text-foreground/80 transition-colors group-hover:underline underline-offset-4 decoration-muted"
                  >
                    {project.name}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-foreground">
                    {project.name}
                  </span>
                )}
                {project.private && (
                  <span className="text-[11px] px-1.5 py-0.5 rounded bg-foreground/5 text-muted border border-border font-mono">
                    private
                  </span>
                )}
              </div>
              <span className="text-xs text-muted shrink-0 mt-0.5 font-mono">
                {project.year}
              </span>
            </div>

            <p className="text-[14px] text-muted leading-relaxed mb-3">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2 py-0.5 rounded-full border border-border text-muted font-mono"
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
