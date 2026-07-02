import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/resume";

const ROLES = [
  "Senior Frontend Engineer",
  "React & TypeScript Engineer",
  "Micro Frontend Engineer",
  "GraphQL Engineer",
  "SEO & Performance Engineer",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-8 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm font-medium text-(--accent) mb-3"
      >
        Hi, I'm
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4"
      >
        {profile.name}
      </motion.h1>

      {/* Typing / cycling role */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-8 flex items-center justify-center mb-6 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={ROLES[index]}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-lg sm:text-xl text-(--text)"
          >
            {ROLES[index]}
          </motion.p>
        </AnimatePresence>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-2xl mx-auto text-(--text) leading-relaxed mb-8"
      >
        {profile.summary}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="/#contact"
          className="px-5 py-2.5 rounded-full bg-(--accent) text-white text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2.5 rounded-full border border-(--border) text-sm font-medium hover:border-(--accent) transition-colors"
        >
          View Resume
        </a>
      </motion.div>
    </section>
  );
}
