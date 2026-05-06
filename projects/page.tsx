import type { Metadata } from "next";
import { Container } from "@/components/container";
import FadeIn from "@/components/fade-in";
import StaggerChildren, { StaggerItem } from "@/components/stagger-children";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects - Nikhil Shinde",
  description: "Things I've built — side projects, experiments, and tools.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pb-28">
      <Container className="pt-36 md:pt-44">
        <h1 className="hero-enter text-primary text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] tracking-[-0.04em] italic [font-family:var(--font-display)]">
          projects<span className="text-accent">.</span>
        </h1>

        <FadeIn className="mt-16">
          <StaggerChildren className="flex flex-col" stagger={0.06}>
            {projects.map((project) => (
              <StaggerItem key={project.num}>
                <div className="accent-hover group border-t border-stone-200/80 dark:border-stone-800/80 py-6 pl-0 hover:pl-1 transition-all duration-200">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] text-tertiary tabular-nums [font-family:var(--font-mono)]">
                          {project.num}
                        </span>
                        <h3 className="text-primary text-lg tracking-[-0.02em] [font-family:var(--font-display)]">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-3 shrink-0 mt-1">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] text-tertiary hover:text-accent transition-colors [font-family:var(--font-mono)]"
                        >
                          live ↗
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-tertiary hover:text-accent transition-colors [font-family:var(--font-mono)]"
                      >
                        github ↗
                      </a>
                    </div>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed ml-[calc(10px+1.5rem)]">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3 ml-[calc(10px+1.5rem)]">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] text-tertiary [font-family:var(--font-mono)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>
      </Container>
    </div>
  );
}
