import { ArrowUpRight, Bot, ChartNoAxesCombined, Cloud, LayoutDashboard, Workflow } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

const icons = {
  layout: LayoutDashboard,
  bot: Bot,
  chart: ChartNoAxesCombined,
  workflow: Workflow,
  cloud: Cloud,
};

export default function Services() {
  return (
    <SectionReveal id="services" className="section-shell py-16 sm:py-24">
      <SectionHeading
        index="02"
        label="What I do"
        title={
          <>
            Where engineering <span className="font-serif font-normal italic">meets</span> operations.
          </>
        }
      />

      <ul className="border-t border-line">
        {portfolio.focusAreas.map((area, i) => {
          const Icon = icons[area.icon as keyof typeof icons];
          return (
            <li key={area.title} className="group relative border-b border-line">
              <div className="absolute inset-0 origin-bottom scale-y-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
              <div className="relative grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 px-1 py-7 transition-colors duration-300 group-hover:text-on-accent sm:px-4 md:grid-cols-[200px_1.1fr_1fr_auto] md:gap-10 md:py-9">
                <span className="font-mono text-sm text-muted transition-colors group-hover:text-on-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {area.title}
                </h3>
                <p className="col-span-3 text-base leading-relaxed text-muted transition-colors group-hover:text-on-accent md:col-span-1">
                  {area.description}
                </p>
                <span className="row-start-1 col-start-3 grid size-12 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-[-8deg] group-hover:border-on-accent group-hover:bg-on-accent group-hover:text-accent md:col-start-4">
                  <Icon className="size-5" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>

      <a
        href="#contact"
        className="group mt-10 inline-flex items-center gap-2 font-display text-xl font-semibold text-ink"
      >
        <span className="border-b-2 border-accent pb-0.5">Have a process that needs fixing?</span>
        <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </SectionReveal>
  );
}
