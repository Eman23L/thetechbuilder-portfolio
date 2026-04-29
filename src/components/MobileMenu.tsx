"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navItems, portfolio } from "@/data/portfolio";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-white px-5 pb-8 pt-20 dark:bg-slate-950 md:hidden"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="absolute inset-x-5 top-5 flex items-center justify-between">
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
          <nav className="grid gap-4">
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
