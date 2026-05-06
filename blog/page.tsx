import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import BlogList from "@/components/blog-list";

export const metadata = {
  title: "Writing - Nikhil Shinde",
  description: "Thoughts on Linux, Security, Cloud, and AI/ML.",
};

export default async function Blogspage() {
  const allBlogs = await getBlogs();

  const sortedBlogs = allBlogs.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="min-h-screen pb-28">
      <Container className="pt-32 md:pt-40">
        <h1 className="hero-enter text-primary text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] tracking-[-0.04em] italic [font-family:var(--font-display)]">
          writing
        </h1>
        <BlogList blogs={sortedBlogs} />
      </Container>
    </div>
  );
}
