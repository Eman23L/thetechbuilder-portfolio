"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { navItems, portfolio } from "@/data/portfolio";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-ink px-5 pb-8 pt-5 text-bg md:hidden"
          initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">{portfolio.brand}</span>
            <button
              type="button"
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full bg-bg text-ink"
              onClick={onClose}
            >
              <X className="size-[18px]" />
            </button>
          </div>
          <nav className="mt-14 flex flex-col" aria-label="Mobile">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.05 }}
                className="flex items-baseline gap-4 border-b border-bg/15 py-4 font-display text-5xl font-semibold"
              >
                <span className="font-mono text-xs font-normal text-accent">0{index + 1}</span>
                {item.label}
              </motion.a>
            ))}
          </nav>
          <a
            href={`mailto:${portfolio.email}`}
            className="mt-auto inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent text-lg font-semibold text-on-accent"
          >
            Let&apos;s talk <ArrowUpRight className="size-5" />
          </a>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
