import { skillGroups } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-12 border-t border-white/[0.06]">
      <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-8">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs text-neutral-600 uppercase tracking-widest font-mono mb-3">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-[13px] text-neutral-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
