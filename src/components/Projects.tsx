import ProjectAccordion from "@/components/ProjectAccordion";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionReveal id="projects" className="section-shell py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">Projects</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Practical systems I&apos;ve built.</h2>
      </div>
      <ProjectAccordion projects={portfolio.projects} />
    </SectionReveal>
  );
}
