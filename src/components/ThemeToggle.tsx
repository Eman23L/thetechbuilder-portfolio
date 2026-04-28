"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)")
      .matches
      ? "light"
      : "dark";
    const initialTheme =
      saved === "dark" || saved === "light" ? saved : systemTheme;

    document.documentElement.classList.toggle("dark", initialTheme === "dark");

    const frame = window.requestAnimationFrame(() => {
      setTheme(initialTheme);
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("theme", nextTheme);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      onClick={toggleTheme}
      className="grid size-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-700 shadow-sm transition hover:border-cyan-500/40 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:hover:text-cyan-200"
    >
      {mounted ? (
        isDark ? (
          <Moon className="size-5" />
        ) : (
          <Sun className="size-5" />
        )
      ) : (
        <span className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}
