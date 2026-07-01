import { experience } from "../data/resume";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-6">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-3 text-center">Experience</h2>
      </FadeIn>
      <div className="flex flex-col gap-8">
        {experience.map((job, i) => (
          <FadeIn key={job.company + job.period} delay={i * 0.1}>
            <div className="rounded-2xl border border-(--border) p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-base font-semibold text-(--text-h)">
                  {job.role} · {job.company}
                </h3>
                <span className="text-xs text-(--accent)">{job.period}</span>
              </div>
              <p className="text-xs text-(--text) mb-4">{job.location}</p>
              <ul className="space-y-2 text-left">
                {job.highlights.map((point, j) => (
                  <li key={j} className="text-sm text-(--text) leading-relaxed pl-4 relative">
                    <span className="absolute left-0 text-(--accent)">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
