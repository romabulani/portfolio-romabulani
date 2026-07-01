import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/resume";
import { useTheme } from "../context/ThemeContext";

const NAV_LINKS = [
  { href: "/#about", label: "About", id: "about" },
  { href: "/#experience", label: "Experience", id: "experience" },
  { href: "/#projects", label: "Projects", id: "projects" },
  { href: "/#blogs", label: "Blogs", id: "blogs" },
  { href: "/#contact", label: "Contact", id: "contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection();

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-(--bg)/80 border-b border-(--border)">
        <nav className="mx-auto max-w-4xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="font-semibold tracking-tight text-(--text-h)">
            {profile.name}
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-colors ${
                  isHome && active === link.id
                    ? "text-(--accent) font-medium"
                    : "text-(--text) hover:text-(--accent)"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-(--border) w-9 h-9 flex items-center justify-center text-(--text) hover:border-(--accent) transition-colors cursor-pointer"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="sm:hidden rounded-full border border-(--border) w-9 h-9 flex items-center justify-center text-(--text)"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile bottom sheet */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-(--bg) border-t border-(--border) rounded-t-2xl px-6 pt-4 pb-10 transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-10 h-1 rounded-full bg-(--border) mx-auto mb-6" />
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium transition-colors py-3 border-b border-(--border) last:border-0 ${
                  isHome && active === link.id ? "text-(--accent)" : "text-(--text)"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
