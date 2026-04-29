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
          className="pointer-events-auto fixed inset-0 z-[99999] min-h-screen overflow-y-auto bg-white px-6 pb-8 pt-28 dark:bg-slate-950 md:hidden"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <div className="absolute inset-x-6 top-5 z-[100001] flex items-center justify-between">
            <span className="text-sm font-semibold tracking-[0.24em] text-cyan-700 dark:text-cyan-300">
              {portfolio.brand}
            </span>
            <button
              aria-label="Close menu"
              className="z-[100001] grid size-11 place-items-center rounded-full border border-slate-900/10 text-slate-800 dark:border-white/10 dark:text-slate-100"
              onClick={onClose}
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="relative z-[100000] flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="w-full rounded-lg border border-slate-900/10 bg-white px-4 py-4 text-lg font-medium text-slate-900 active:scale-[0.99] dark:border-white/10 dark:bg-slate-950 dark:text-slate-100"
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
