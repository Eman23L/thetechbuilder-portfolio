import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
};

export default function SectionHeading({ index, label, title, intro, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 grid gap-5 sm:mb-12 sm:gap-6 border-t border-line pt-6 md:grid-cols-[200px_1fr] md:gap-10", className)}>
      <p className="flex items-center gap-3 font-mono text-xs text-muted">
        <span className="text-accent">({index})</span>
        <span>{label}</span>
      </p>
      <div>
        <h2 className="font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-5xl lg:text-6xl">{title}</h2>
        {intro ? <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p> : null}
      </div>
    </div>
  );
}
