import { ArrowUp } from "lucide-react";
import { navItems, portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="section-shell pb-8 pt-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] font-medium text-muted transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#top"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink transition hover:border-ink md:self-auto"
        >
          Back to top <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>

      <p
        aria-hidden="true"
        className="mt-12 select-none whitespace-nowrap font-display text-[length:clamp(2.5rem,17vw,14.75rem)] font-bold leading-[0.8] text-ink"
      >
        tech builder<span className="text-accent">.</span>
      </p>

      <div className="mt-8 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}</p>
        <p>{portfolio.domain} · Built with Next.js</p>
      </div>
    </footer>
  );
}
