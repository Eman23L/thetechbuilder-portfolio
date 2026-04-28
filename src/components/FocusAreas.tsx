import { Bot, ChartNoAxesCombined, Cloud, LayoutDashboard, Workflow } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

const icons = {
  layout: LayoutDashboard,
  bot: Bot,
  chart: ChartNoAxesCombined,
  workflow: Workflow,
  cloud: Cloud,
};

export default function FocusAreas() {
  return (
    <SectionReveal className="section-shell py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">Key Focus Areas</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Where engineering meets operations.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {portfolio.focusAreas.map((area) => {
          const Icon = icons[area.icon as keyof typeof icons];
          return (
            <article key={area.title} className="glass-card group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-cyan-900/10 dark:hover:border-cyan-300/40 dark:hover:shadow-cyan-950/30">
              <div className="grid size-11 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 transition group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-200 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{area.description}</p>
            </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
