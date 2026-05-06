import { Container } from "@/components/container";
import { Link } from "next-view-transitions";
import { ArrowUpRight } from "lucide-react";
import HeroBio from "@/components/hero-bio";
import FadeIn from "@/components/fade-in";
import StaggerChildren, { StaggerItem } from "@/components/stagger-children";
import { getBlogs } from "@/utils/mdx";
import { books, papers } from "@/data/reading";
import { projects } from "@/data/projects";

const sectionHeadingClass =
  "text-primary text-[clamp(1.25rem,3vw,1.75rem)] leading-none tracking-[-0.03em] italic [font-family:var(--font-display)]";

export default async function Home() {
  const blogs = await getBlogs();
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const featuredProjects = projects.slice(0, 4);

  const readingBooks = books.filter((b) => b.status === "reading").slice(0, 5);
  const readingPapers = papers.filter((p) => p.status === "reading").slice(0, 5);

  return (
    <div className="min-h-screen">
      <Container className="pt-36 md:pt-44">
        {/* Hero */}
        <div>
          <h1
            className="hero-enter text-primary font-normal leading-[0.88] tracking-[-0.045em] [font-family:var(--font-display)] text-[clamp(4rem,15vw,8.5rem)]"
            style={{ animationDelay: "100ms" }}
          >
            Nikhil Shinde<span className="text-accent">.</span>
          </h1>
          <HeroBio />
          <div
            className="hero-enter mt-10 flex items-center gap-4 text-sm"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary underline underline-offset-4 decoration-stone-300 hover:decoration-accent dark:decoration-stone-700 dark:hover:decoration-accent transition-colors"
            >
              Resume
            </a>
            <span className="text-stone-300 dark:text-stone-700">/</span>
            <Link
              href="/contact"
              className="text-secondary hover:text-primary underline underline-offset-4 decoration-stone-300 hover:decoration-accent dark:decoration-stone-700 dark:hover:decoration-accent transition-colors"
            >
              Contact
            </Link>
            <span className="text-stone-300 dark:text-stone-700">/</span>
            <a
              href="https://x.com/plutohsin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary underline underline-offset-4 decoration-stone-300 hover:decoration-accent dark:decoration-stone-700 dark:hover:decoration-accent transition-colors"
            >
              X
            </a>
          </div>
        </div>

        {/* Divider after hero */}
        <div
          className="hero-enter mt-20 h-px w-full bg-stone-200 dark:bg-stone-800"
          style={{ animationDelay: "600ms" }}
        />

        {/* Projects */}
        <FadeIn className="mt-20">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className={sectionHeadingClass}>Projects</h2>
            <Link
              href="/projects"
              className="text-tertiary text-[11px] font-medium uppercase tracking-[0.08em] hover:text-accent transition-colors [font-family:var(--font-mono)]"
            >
              All &rarr;
            </Link>
          </div>
          <StaggerChildren className="flex flex-col" stagger={0.06}>
            {featuredProjects.map((project) => (
              <StaggerItem key={project.num}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="accent-hover group flex items-start justify-between gap-4 border-t border-stone-200/80 py-5 transition-colors dark:border-stone-800/80 pl-0 hover:pl-1 duration-200"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-primary text-[15px] font-medium tracking-[-0.01em] group-hover:text-accent transition-colors duration-200">
                      {project.name}
                    </h3>
                    <p className="text-secondary text-[13px] mt-1 line-clamp-1 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-stone-300 dark:text-stone-700 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        {/* Writing */}
        <FadeIn className="mt-28">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className={sectionHeadingClass}>Writing</h2>
            <Link
              href="/blog"
              className="text-tertiary text-[11px] font-medium uppercase tracking-[0.08em] hover:text-accent transition-colors [font-family:var(--font-mono)]"
            >
              All &rarr;
            </Link>
          </div>
          <StaggerChildren className="flex flex-col" stagger={0.06}>
            {recentBlogs.map((blog, idx) => (
              <StaggerItem key={idx}>
                <Link href={`/blog/${blog.slug}`}>
                  <div className="accent-hover group flex items-center justify-between gap-4 border-t border-stone-200/80 py-4 dark:border-stone-800/80 pl-0 hover:pl-1 transition-all duration-200">
                    <h3 className="text-primary text-[15px] font-medium tracking-[-0.01em] group-hover:text-accent transition-colors duration-200 truncate">
                      {blog.title}
                    </h3>
                    <time
                      dateTime={blog.date}
                      className="text-tertiary shrink-0 text-[11px] tabular-nums [font-family:var(--font-mono)]"
                    >
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        timeZone: "UTC",
                      })}
                    </time>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>

        {/* Reading */}
        <FadeIn className="mt-28 pb-32">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className={sectionHeadingClass}>Currently reading</h2>
            <Link
              href="/reading"
              className="text-tertiary text-[11px] font-medium uppercase tracking-[0.08em] hover:text-accent transition-colors [font-family:var(--font-mono)]"
            >
              All &rarr;
            </Link>
          </div>
          <StaggerChildren className="flex flex-col" stagger={0.06}>
            {[...readingBooks, ...readingPapers].map((item) => (
              <StaggerItem key={item.title}>
                <div className="border-t border-stone-200/80 py-3 dark:border-stone-800/80">
                  <p className="text-primary text-[14px] font-medium tracking-[-0.01em]">
                    {item.title}
                  </p>
                  {item.author && (
                    <p className="text-tertiary text-[12px] mt-0.5">
                      {item.author}
                    </p>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>
      </Container>
    </div>
  );
}
