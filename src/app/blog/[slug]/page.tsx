import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | Hipp0.ai" };
  return {
    title: `${post.title} | Hipp0.ai Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-8 max-w-7xl mx-auto">
      <div className="swarm-orb orb-blue w-[400px] h-[400px] -top-32 -right-32 opacity-50" />
      <div className="swarm-orb orb-pink w-[300px] h-[300px] bottom-40 -left-32 opacity-30" />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-10"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </Link>

      <div className="max-w-3xl mx-auto mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span
            className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-${post.categoryColor}/10 text-${post.categoryColor}`}
          >
            {post.category}
          </span>
          <span className="text-sm text-on-surface-variant">{post.date}</span>
          <span className="text-sm text-on-surface-variant">
            {post.readTime} read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-background leading-tight mb-6">
          {post.title}
        </h1>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold text-on-background">
              {post.author}
            </p>
            <p className="text-xs text-on-surface-variant">{post.authorRole}</p>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
        <div
          className="
            prose prose-slate max-w-none
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-on-background [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-on-background [&_h3]:mt-8 [&_h3]:mb-3
            [&_p]:text-on-surface-variant [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-2
            [&_li]:text-on-surface-variant [&_li]:leading-relaxed
            [&_strong]:text-on-background [&_strong]:font-semibold
            [&_em]:text-on-surface-variant
            [&_code]:bg-slate-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono [&_code]:text-on-background
            [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:mb-6 [&_pre]:overflow-x-auto
            [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-slate-100 [&_pre_code]:text-sm
            [&_a]:text-primary [&_a]:underline [&_a]:hover:no-underline
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-slate-200/60">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          All posts
        </Link>
      </div>
    </section>
  );
}
