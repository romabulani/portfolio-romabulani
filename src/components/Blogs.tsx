import { Link } from "react-router-dom";
import { blogs, blogProfileUrl } from "../data/resume";
import FadeIn from "./FadeIn";

export default function Blogs() {
  return (
    <section id="blogs" className="mx-auto max-w-4xl px-6 py-6">
      <FadeIn>
        <h2 className="text-2xl font-semibold mb-3 text-center">Blogs</h2>
      </FadeIn>
      <div className="flex flex-col gap-3">
        {blogs.slice(0, 4).map((blog, i) => (
          <FadeIn key={blog.link} delay={i * 0.07}>
            <a
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl border border-(--border) px-5 py-4 text-left hover:border-(--accent) transition-colors"
            >
              <h3 className="text-sm font-medium text-(--text-h) mb-1.5">{blog.title}</h3>
              <p className="text-sm text-(--text) leading-relaxed">{blog.excerpt}</p>
            </a>
          </FadeIn>
        ))}
      </div>
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <Link
            to="/blogs"
            className="px-5 py-2.5 rounded-full bg-(--accent) text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See all blogs
          </Link>
          <a
            href={blogProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full border border-(--border) text-sm font-medium hover:border-(--accent) hover:text-(--accent) transition-colors"
          >
            Read more on Hashnode
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
