import { Container } from "@/components/container";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Link } from "next-view-transitions";
import { ArrowLeft } from "lucide-react";
import { BlogReadProgress } from "@/components/blog-read-progress";
import {
  getSingleBlogData,
  getAllBlogSlugs,
  getBlogFrontMatterBySlug,
} from "@/utils/mdx";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return { title: "Blog not found" };
  }
  return {
    title: frontmatter.title,
    description: frontmatter.description,
  };
}

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = await getSingleBlogData(slug).catch(() => redirect("/blog"));

  return (
    <div className="min-h-screen">
      <BlogReadProgress />
      <Container className="pt-36 md:pt-44 pb-32">
        {/* Back link */}
        <Link
          href="/blog"
          className="text-tertiary hover:text-accent inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors [font-family:var(--font-mono)]"
        >
          <ArrowLeft className="h-3 w-3" />
          All posts
        </Link>

        {/* Header */}
        <div className="mt-14 mb-14">
          <h1 className="text-primary text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-[-0.03em] [font-family:var(--font-display)]">
            {blog.frontmatter.title}
          </h1>
          <p className="text-secondary mt-5 text-[15px] leading-[1.7]">
            {blog.frontmatter.description}
          </p>
          <div className="text-tertiary mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.08em] [font-family:var(--font-mono)]">
            <span className="text-primary font-medium">{blog.frontmatter.author}</span>
            <span className="text-accent">/</span>
            <time dateTime={blog.frontmatter.date}>
              {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Cover image */}
        <div className="relative mb-16 h-56 overflow-hidden rounded-sm md:h-80">
          <Image
            src={blog.frontmatter.image}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* MDX content */}
        <div className="prose prose-stone dark:prose-invert md:prose-lg prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-accent prose-a:decoration-accent/30 hover:prose-a:decoration-accent prose-code:text-sm prose-code:before:content-none prose-code:after:content-none prose-pre:rounded-sm prose-pre:border prose-pre:border-stone-200 dark:prose-pre:border-stone-800 prose-img:rounded-sm max-w-none [font-family:var(--font-sans)] leading-relaxed text-stone-800 dark:text-stone-200">
          {blog.content}
        </div>
      </Container>
    </div>
  );
}
