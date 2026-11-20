import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function About() {
  return (
    <SectionReveal id="about" className="section-shell py-16 sm:py-24">
      <SectionHeading
        index="01"
        label="About"
        title={
          <>
            Engineering background. <br className="hidden sm:block" />
            <span className="font-serif font-normal italic text-accent">Product</span> mindset.
          </>
        }
      />

      <div className="grid gap-10 md:grid-cols-[200px_1fr] md:gap-10">
        <div className="hidden md:block" />
        <div>
          <p className="max-w-4xl font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
            {portfolio.summary}
          </p>
          <div className="mt-10 grid gap-6 text-[17px] leading-relaxed text-muted lg:grid-cols-2 lg:gap-10">
            {portfolio.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <dl className="mt-20 grid grid-cols-2 overflow-hidden rounded-3xl border border-line bg-surface lg:grid-cols-4">
        {portfolio.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={[
              "flex flex-col justify-between gap-8 p-6 sm:p-8",
              i % 2 === 1 ? "border-l border-line" : "",
              i >= 2 ? "border-t border-line lg:border-t-0" : "",
              i === 2 ? "lg:border-l" : "",
            ].join(" ")}
          >
            <dt className="order-2 text-sm font-medium text-muted">{stat.label}</dt>
            <dd className="order-1 font-display text-6xl font-bold leading-none text-ink sm:text-7xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </SectionReveal>
  );
}
