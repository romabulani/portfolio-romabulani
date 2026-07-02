import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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

  useState(() => {
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
  });

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
              className="sm:hidden rounded-full border border-(--border) w-9 h-9 flex items-center justify-center text-(--text) cursor-pointer"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? "✕" : "☰"}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-page overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden fixed inset-0 z-40 bg-(--bg) flex flex-col"
          >
            {/* Close button top-right */}
            <div className="flex justify-end px-6 py-4">
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-(--border) w-9 h-9 flex items-center justify-center text-(--text) cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Links centered */}
            <div className="flex flex-col items-center justify-center flex-1 gap-2 pb-16">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-3xl font-semibold py-4 transition-colors ${
                      isHome && active === link.id
                        ? "text-(--accent)"
                        : "text-(--text-h) hover:text-(--accent)"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
