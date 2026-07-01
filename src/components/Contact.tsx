import { profile } from "../data/resume";
import FadeIn from "./FadeIn";

const socials = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Twitter", href: profile.links.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-6 text-center">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-3">Let's work together</h2>
        <p className="max-w-xl mx-auto text-(--text) mb-8">
          I'm always open to discussing new opportunities and interesting projects. Feel free to
          reach out.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
