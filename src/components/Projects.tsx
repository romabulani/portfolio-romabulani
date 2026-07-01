import { Link } from "react-router-dom";
import { projects, profile } from "../data/resume";
import FadeIn from "./FadeIn";

const INITIAL_COUNT = 4;

export default function Projects() {
  const visible = projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-6">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-3 text-center">Projects</h2>
      </FadeIn>
      <div className="grid sm:grid-cols-2 gap-6">
        {visible.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.07}>
            <div className="flex flex-col h-full rounded-2xl border border-(--border) p-6 hover:border-(--accent) transition-colors">
              <h3 className="text-base font-semibold text-(--text-h) mb-2">{project.name}</h3>
              <p className="text-sm text-(--text) leading-relaxed mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-(--accent-soft) text-(--text)">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-xs font-medium">
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="text-(--accent) hover:underline">
                    Live demo ↗
                  </a>
                )}
                <a href={project.link} target="_blank" rel="noreferrer" className="text-(--text) hover:text-(--accent) transition-colors">
                  GitHub ↗
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link to="/projects" className="px-5 py-2.5 rounded-full bg-(--accent) text-white text-sm font-medium hover:opacity-90 transition-opacity">
            See all projects
          </Link>
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors">
            See more on GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
