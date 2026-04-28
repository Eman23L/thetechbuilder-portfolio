import AnimatedCounter from "@/components/AnimatedCounter";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function ImpactStats() {
  return (
    <SectionReveal className="section-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">Impact In Numbers</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Measured delivery, real systems.</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.stats.map((stat) => (
          <div key={stat.label} className="glass-card rounded-2xl p-6">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
