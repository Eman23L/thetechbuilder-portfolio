import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <SectionReveal id="about" className="section-shell py-20">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-slate-950 dark:text-white sm:text-4xl">
            Technical delivery with product clarity.
          </h2>
        </div>
        <div className="glass-card rounded-2xl p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-800 dark:text-slate-200">{portfolio.summary}</p>
          <div className="mt-6 grid gap-5 text-slate-600 dark:text-slate-300">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph} className="leading-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
