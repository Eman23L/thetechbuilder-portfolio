"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "@/components/MobileMenu";
import ThemeToggle from "@/components/ThemeToggle";
import { navItems, portfolio } from "@/data/portfolio";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-900/10 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg bg-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/25">
            TB
          </span>
          <span className="text-sm font-semibold tracking-[0.2em] text-slate-950 group-hover:text-cyan-700 dark:text-slate-100 dark:group-hover:text-cyan-200">
            {portfolio.brand}
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-900/5 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            className="grid size-11 place-items-center rounded-full border border-slate-900/10 text-slate-800 md:hidden dark:border-white/10 dark:text-slate-100"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
