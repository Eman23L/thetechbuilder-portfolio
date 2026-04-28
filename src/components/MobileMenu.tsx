"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navItems, portfolio } from "@/data/portfolio";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-50/96 px-5 py-5 backdrop-blur-xl dark:bg-slate-950/96 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              {portfolio.brand}
            </span>
            <button
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-slate-900/10 text-slate-800 dark:border-white/10 dark:text-slate-100"
              onClick={onClose}
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-14 grid gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg border border-slate-900/10 bg-white/70 px-4 py-4 text-lg font-medium text-slate-900 active:scale-[0.99] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
