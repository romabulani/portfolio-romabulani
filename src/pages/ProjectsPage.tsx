import { Link } from "react-router-dom";
import { projects, profile } from "../data/resume";
import FadeIn from "../components/FadeIn";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-(--bg)">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <FadeIn>
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-(--text) hover:text-(--accent) transition-colors mb-8">
            ← Back to home
          </Link>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="text-3xl font-semibold mb-2">All Projects</h1>
          <p className="text-(--text) mb-10">
            A collection of things I've built — personal projects, tools, and experiments.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.name} delay={i * 0.07}>
              <div className="flex flex-col h-full rounded-2xl border border-(--border) p-6 hover:border-(--accent) transition-colors">
                <h2 className="text-base font-semibold text-(--text-h) mb-2">{project.name}</h2>
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
          <div className="text-center mt-12">
            <a href={profile.links.github} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors">
              See more on GitHub
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
