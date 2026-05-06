import type { Metadata } from "next";
import type React from "react";
import { Container } from "@/components/container";
import FadeIn from "@/components/fade-in";
import StaggerChildren, { StaggerItem } from "@/components/stagger-children";
import { books, papers, type ReadingItem as Item } from "@/data/reading";

export const metadata: Metadata = {
  title: "Reading - Nikhil Shinde",
  description: "Books, papers, and articles I'm reading.",
};

const statusLabel: Record<Item["status"], string> = {
  reading: "Current",
  done: "Finished",
  queue: "Next",
};

function Section({
  title,
  items,
  delay = 0,
}: {
  title: string;
  items: Item[];
  delay?: number;
}) {
  return (
    <FadeIn className="mt-24" delay={delay}>
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-primary text-[clamp(1rem,2vw,1.15rem)] leading-none tracking-[-0.02em] italic [font-family:var(--font-display)]">
          {title}
        </h2>
        <span className="text-[10px] text-tertiary tabular-nums [font-family:var(--font-mono)]">
          {items.length}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="text-tertiary text-sm">Nothing here yet.</p>
      ) : (
        <StaggerChildren className="flex flex-col" stagger={0.05}>
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex items-start justify-between gap-4 border-t border-stone-200/80 py-4 dark:border-stone-800/80">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    {item.status === "reading" && (
                      <span className="relative flex h-1.5 w-1.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                      </span>
                    )}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-[15px] font-medium hover:text-accent transition-colors truncate"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <p className="text-primary text-[15px] font-medium truncate">
                        {item.title}
                      </p>
                    )}
                  </div>
                  {item.author && (
                    <p className="text-tertiary text-xs mt-0.5">
                      {item.author}
                    </p>
                  )}
                </div>
                <span className={`text-[10px] font-medium uppercase tracking-[0.08em] shrink-0 mt-1 [font-family:var(--font-mono)] ${item.status === "reading" ? "text-accent" : "text-tertiary"}`}>
                  {statusLabel[item.status]}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      )}
    </FadeIn>
  );
}

export default function ReadingPage() {
  return (
    <div className="min-h-screen pb-28">
      <Container className="pt-36 md:pt-44">
        <h1 className="hero-enter text-primary text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] tracking-[-0.04em] italic [font-family:var(--font-display)]">
          reading<span className="text-accent">.</span>
        </h1>

        <Section title="Books" items={books} />
        <Section title="Papers" items={papers} delay={0.05} />
      </Container>
    </div>
  );
}
