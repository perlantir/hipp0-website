import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Hipp0.ai",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="swarm-orb orb-blue w-[500px] h-[500px] -top-40 -right-40 opacity-60" />
      <div className="swarm-orb orb-pink w-[400px] h-[400px] bottom-20 -left-40 opacity-40" />

      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-on-background">
          Intelligence, Logged.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Product updates, engineering deep dives, and lessons learned building
          the decision memory layer for AI&nbsp;agents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          href={`/blog/${featured.slug}`}
          className="md:col-span-2 glass-panel-heavy rounded-3xl p-10 md:p-14 group hover:shadow-lg transition-all"
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span
                className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-${featured.categoryColor}/10 text-${featured.categoryColor}`}
              >
                {featured.category}
              </span>
              <span className="text-sm text-on-surface-variant">
                {featured.date}
              </span>
              <span className="text-sm text-on-surface-variant">
                {featured.readTime} read
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-on-background group-hover:text-primary transition-colors leading-tight">
              {featured.title}
            </h2>

            <p className="text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              {featured.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-on-surface-variant">
                By {featured.author}
              </span>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Read article &rarr;
              </span>
            </div>
          </div>
        </Link>

        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass-panel rounded-2xl p-8 group hover:shadow-lg transition-all flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-${post.categoryColor}/10 text-${post.categoryColor}`}
              >
                {post.category}
              </span>
              <span className="text-xs text-on-surface-variant">
                {post.readTime} read
              </span>
            </div>

            <h3 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors mb-3 leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
              {post.description}
            </p>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/60">
              <div className="flex items-center gap-2">
                <span className="text-xs text-on-surface-variant">
                  {post.author}
                </span>
                <span className="text-xs text-on-surface-variant">&middot;</span>
                <span className="text-xs text-on-surface-variant">
                  {post.date}
                </span>
              </div>
              <span className="text-primary font-semibold text-sm group-hover:underline">
                Read article &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
