import { Link } from "react-router-dom";
import { blogs, blogProfileUrl } from "../data/resume";
import FadeIn from "../components/FadeIn";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-(--bg)">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <FadeIn>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-(--text) hover:text-(--accent) transition-colors mb-8"
          >
            ← Back to home
          </Link>
        </FadeIn>
        <FadeIn delay={0.05}>
          <h1 className="text-3xl font-semibold mb-2">All Blogs</h1>
          <p className="text-(--text) mb-10">
            Thoughts on frontend engineering, JavaScript, and the craft of building software.
          </p>
        </FadeIn>
        <div className="flex flex-col gap-4">
          {blogs.map((blog, i) => (
            <FadeIn key={blog.link} delay={i * 0.08}>
              <a
                href={blog.link}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-(--border) px-6 py-5 text-left hover:border-(--accent) transition-colors"
              >
                <h2 className="text-base font-semibold text-(--text-h) mb-2">{blog.title}</h2>
                <p className="text-sm text-(--text) leading-relaxed">{blog.excerpt}</p>
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="text-center mt-12">
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
      </div>
    </div>
  );
}
