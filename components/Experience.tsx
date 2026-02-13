import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-12 border-t border-white/[0.06]">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">
        Experience & Education
      </h2>

      <div className="space-y-8">
        {experience.map((item, i) => (
          <div key={i} className="grid grid-cols-[140px_1fr] gap-6 items-start">
            {/* Date */}
            <p className="text-xs text-neutral-600 font-mono pt-0.5 leading-relaxed">
              {item.date}
            </p>

            {/* Content */}
            <div>
              <div className="flex items-baseline gap-2 flex-wrap mb-0.5">
                <h3 className="text-[15px] font-medium text-foreground">
                  {item.role}
                </h3>
                {item.gpa && (
                  <span className="text-xs text-neutral-600 font-mono">
                    {item.gpa}
                  </span>
                )}
              </div>
              <p className="text-sm text-neutral-500 mb-2">{item.org}</p>
              <ul className="space-y-1">
                {item.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-[13px] text-neutral-600 leading-relaxed"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
