import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function ExperienceTimeline() {
  return (
    <SectionReveal id="experience" className="section-shell py-16 sm:py-24">
      <SectionHeading
        index="05"
        label="Experience"
        title={
          <>
            The path <span className="font-serif font-normal italic text-accent">so far.</span>
          </>
        }
      />
      <ol className="grid gap-5">
        {portfolio.timeline.map((item) => (
          <li
            key={`${item.title}-${item.organisation}`}
            className="grid gap-6 rounded-[28px] border border-line bg-surface p-6 sm:p-8 md:grid-cols-[200px_1fr] md:gap-10 lg:p-10"
          >
            <div className="flex flex-row items-center justify-between gap-3 md:flex-col md:items-start md:justify-start">
              <span className="inline-flex rounded-full bg-ink px-3 py-1 font-mono text-xs text-bg">{item.period}</span>
              <span className="font-display text-lg font-semibold text-accent">{item.organisation}</span>
            </div>
            <div>
              <h3 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{item.title}</h3>
              <div className="mt-5 grid gap-4 text-[17px] leading-relaxed text-muted">
                {item.detail.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {item.highlights ? (
                <ul className="mt-7 grid gap-3 border-t border-line pt-7 sm:grid-cols-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] leading-snug text-ink">
                      <span className="mt-[7px] size-2 shrink-0 rotate-45 bg-accent" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </SectionReveal>
  );
}
