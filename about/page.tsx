import { Container } from "@/components/container";
import FadeIn from "@/components/fade-in";
import StaggerChildren, { StaggerItem } from "@/components/stagger-children";

export const metadata = {
  title: "About - Nikhil Shinde",
  description: "A little about me, my skills, and my journey.",
};

const skills = [
  {
    label: "Languages",
    items: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "NoSQL", "Bash"],
  },
  {
    label: "Cloud & Infra",
    items: ["Kubernetes", "Docker", "AWS", "GitHub Actions", "Jenkins", "Linux"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Tempo", "AlertManager"],
  },
  {
    label: "Frameworks",
    items: ["FastAPI", "Node.js", "PyTorch", "Tailwind CSS", "React", "Redux"],
  },
];

const timeline = [
  {
    year: "2024 – Present",
    title: "MS in Computer Science",
    place: "George Washington University, D.C.",
    description: "Focusing on systems, cloud architecture, and security. Researching reliable infrastructure at scale.",
  },
  {
    year: "2022",
    title: "Full Stack Developer Intern",
    place: "Hyderabad, India",
    description: "Shipped features for production codebases and managed early-stage deployments.",
  },
  {
    year: "2019 – 2023",
    title: "B.Tech in IT",
    place: "Pune, India",
    description: "Undergraduate studies with a focus on networking and system administration.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pb-28">
      <Container className="pt-36 md:pt-44">
        <h1 className="hero-enter text-primary text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.9] tracking-[-0.04em] italic [font-family:var(--font-display)]">
          about me<span className="text-accent">.</span>
        </h1>

        {/* GW Campus */}
        <FadeIn className="mt-16">
          <div className="overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://gwtoday.gwu.edu/sites/g/files/zaxdzs5401/files/image/SIZED_1080x720_Snow_2022_WLA_459A3905.jpg"
              alt="George Washington University Campus"
              className="w-full h-56 md:h-72 object-cover"
            />
            <p className="text-tertiary text-[11px] mt-3 uppercase tracking-[0.08em] [font-family:var(--font-mono)]">
              George Washington University, Washington D.C.
            </p>
          </div>
        </FadeIn>

        {/* Skills */}
        <FadeIn className="mt-28">
          <h2 className="text-primary text-[clamp(1.25rem,3vw,1.75rem)] leading-none tracking-[-0.03em] italic [font-family:var(--font-display)] mb-10">
            Skills
          </h2>
          <div className="space-y-6">
            {skills.map((category, i) => (
              <div key={i} className="flex flex-col gap-2 md:flex-row md:gap-12 border-t border-stone-200/80 dark:border-stone-800/80 pt-5">
                <span className="text-tertiary text-[11px] font-medium uppercase tracking-[0.08em] w-28 shrink-0 [font-family:var(--font-mono)]">
                  {category.label}
                </span>
                <p className="text-primary text-sm leading-relaxed">
                  {category.items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Journey */}
        <FadeIn className="mt-28">
          <h2 className="text-[11px] font-medium uppercase tracking-[0.14em] text-tertiary mb-10 [font-family:var(--font-mono)]">Journey</h2>
          <StaggerChildren className="flex flex-col" stagger={0.1}>
            {timeline.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col gap-1 md:flex-row md:gap-12 border-t border-stone-200/80 dark:border-stone-800/80 py-6">
                  <span className="text-tertiary text-[11px] font-medium tabular-nums uppercase tracking-[0.06em] w-32 shrink-0 [font-family:var(--font-mono)]">
                    {item.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-primary text-[15px] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-xs mt-0.5">{item.place}</p>
                    <p className="text-secondary mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
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
