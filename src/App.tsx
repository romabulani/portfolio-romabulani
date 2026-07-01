import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
        <ScrollToHash />
        <Navbar />
        <Suspense fallback={<div className="flex-1" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
          </Routes>
        </Suspense>
        <ScrollToTop />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
