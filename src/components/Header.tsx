"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
        <div
          className={cn(
            "mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-full border pl-2 pr-2 transition-all duration-300",
            scrolled
              ? "border-line bg-surface/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl"
              : "border-transparent bg-transparent",
          )}
        >
          <a href="#top" className="group flex items-center gap-2.5 rounded-full pr-3" aria-label={`${portfolio.brand} home`}>
            <span className="relative grid size-10 place-items-center rounded-full bg-ink font-display text-[15px] font-bold leading-none text-bg after:absolute after:bottom-[9px] after:right-[9px] after:size-1.5 after:rounded-full after:bg-accent transition-transform duration-300 group-hover:rotate-[-12deg]">
              tb
            </span>
            <span className="hidden font-display text-[17px] font-semibold tracking-tight text-ink sm:block">
              {portfolio.brand}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors",
                  active === item.href ? "bg-ink text-bg" : "text-muted hover:text-ink",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={`mailto:${portfolio.email}`}
              className="hidden h-10 items-center gap-1.5 rounded-full bg-accent px-4 text-[15px] font-semibold text-on-accent transition hover:brightness-110 active:scale-[0.98] sm:inline-flex"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full bg-ink text-bg md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-[18px]" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
