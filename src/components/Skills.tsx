import { skillGroups } from "../data/resume";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-6">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-3 text-center">Skills</h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 gap-6">
        {skillGroups.map((group, i) => (
          <FadeIn key={group.label} delay={i * 0.1}>
            <div className="rounded-2xl border border-(--border) p-5 bg-(--bg-soft)">
              <h3 className="text-sm font-semibold mb-3 text-(--text-h)">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-(--accent-soft) text-(--text)"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
