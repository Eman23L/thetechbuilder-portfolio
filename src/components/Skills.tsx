import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionReveal id="skills" className="section-shell py-16 sm:py-24">
      <SectionHeading
        index="04"
        label="Toolkit"
        title={
          <>
            Tools for building <span className="font-serif font-normal italic">durable</span> systems.
          </>
        }
      />
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {portfolio.skillGroups.map((group, i) => (
          <div key={group.label} className="bg-surface p-6 sm:p-7">
            <p className="flex items-center justify-between font-mono text-xs text-muted">
              <span>{group.label}</span>
              <span className="text-accent">{String(i + 1).padStart(2, "0")}</span>
            </p>
            <ul className="mt-6 grid gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="group flex items-center gap-2.5 font-display text-xl font-semibold leading-tight text-ink"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-line transition-colors group-hover:bg-accent" />
                  <span className="transition-transform duration-300 group-hover:translate-x-1">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionReveal>
  );
}
