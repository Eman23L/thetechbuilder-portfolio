import { CalendarDays } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <SectionReveal id="experience" className="section-shell py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">Experience</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Engineering path and education.</h2>
      </div>
      <div className="relative grid gap-5 border-l border-cyan-500/20 pl-6 dark:border-cyan-300/20">
        {portfolio.timeline.map((item) => (
          <article key={`${item.title}-${item.organisation}`} className="glass-card relative rounded-2xl p-6">
            <span className="absolute -left-[35px] top-7 grid size-5 place-items-center rounded-full border border-cyan-500/50 bg-slate-50 dark:border-cyan-300/50 dark:bg-slate-950">
              <span className="size-2 rounded-full bg-cyan-500 dark:bg-cyan-300" />
            </span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-1 font-medium text-cyan-700 dark:text-cyan-200">{item.organisation}</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-900/10 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
                <CalendarDays className="size-4" /> {item.period}
              </span>
            </div>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
