import { Container } from "@/components/container";
import FadeIn from "@/components/fade-in";
import StaggerChildren, { StaggerItem } from "@/components/stagger-children";

export const metadata = {
  title: "Contact - Nikhil Shinde",
  description: "Get in touch with me.",
};

const links = [
  {
    label: "Email",
    href: "mailto:nikhil.shinde@gwu.edu",
    note: "nikhil.shinde@gwu.edu",
  },
  {
    label: "GitHub",
    href: "https://github.com/nikhilshinde",
    note: "nikhilshinde",
  },
  {
    label: "X",
    href: "https://x.com/plutohsin",
    note: "@plutohsin",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nikhil-shinde-04a239193/",
    note: "nikhil-shinde",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-28">
      <Container className="pt-36 md:pt-44">
        <h1 className="hero-enter text-primary text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] tracking-[-0.04em] italic [font-family:var(--font-display)]">
          get in touch<span className="text-accent">.</span>
        </h1>

        <FadeIn className="mt-16">
          <StaggerChildren className="flex flex-col" stagger={0.08}>
            {links.map(({ label, href, note }) => (
              <StaggerItem key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-hover group flex items-center justify-between border-t border-stone-200/80 py-5 transition-all duration-200 dark:border-stone-800/80 pl-0 hover:pl-1"
                >
                  <div>
                    <p className="text-primary text-[15px] font-medium group-hover:text-accent transition-colors duration-200">
                      {label}
                    </p>
                    <p className="text-tertiary text-xs mt-0.5">
                      {note}
                    </p>
                  </div>
                  <span className="text-tertiary text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">↗</span>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </FadeIn>
      </Container>
    </div>
  );
}
