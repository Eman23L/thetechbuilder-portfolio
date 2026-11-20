"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  category: string;
  summary?: string;
  description: string;
  stack: readonly string[];
  github?: string;
  live?: string;
};

const tones = [
  { bg: "bg-accent", fg: "text-[#16150f]", pattern: "dots" },
  { bg: "bg-[#1f1d18] dark:bg-[#2a2720]", fg: "text-[#f1ece1]", pattern: "hatch" },
  { bg: "bg-[#cfdcc0]", fg: "text-[#16150f]", pattern: "hatch" },
  { bg: "bg-[#c6d2e8]", fg: "text-[#16150f]", pattern: "dots" },
  { bg: "bg-[#e8dfcc]", fg: "text-[#16150f]", pattern: "hatch" },
  { bg: "bg-[#ebc9b8]", fg: "text-[#16150f]", pattern: "dots" },
] as const;

const isLink = (value?: string): value is string =>
  Boolean(value && (value.startsWith("http://") || value.startsWith("https://")));

export default function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const tone = tones[index % tones.length];
  const [name, subtitle] = project.title.split(" - ");
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-[28px] border border-line bg-surface transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]",
        featured && "md:col-span-2 lg:grid lg:grid-cols-[1.15fr_1fr]",
      )}
    >
      {/* Artwork */}
      <div
        className={cn(
          "relative isolate flex min-h-[220px] flex-col justify-between overflow-hidden p-6 sm:p-7",
          tone.bg,
          tone.fg,
          featured && "lg:min-h-[420px]",
        )}
      >
        <div
          className={cn(
            "absolute -right-10 -top-10 -z-10 size-64 rounded-full opacity-25 transition-transform duration-700 group-hover:scale-110",
            tone.pattern,
          )}
        />
        <div className="flex items-start justify-between gap-3 font-mono text-xs">
          <span className="rounded-full border border-current/30 px-2.5 py-1">{project.category}</span>
          <span className="flex items-center gap-2">
            {project.live ? (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-current/10 px-2.5 py-1">
                <span className="size-1.5 rounded-full bg-emerald-600" /> Live
              </span>
            ) : null}
            <span className="opacity-70">/{number}</span>
          </span>
        </div>
        <h3
          className={cn(
            "mt-12 font-display font-bold leading-[0.95] transition-transform duration-500 group-hover:-translate-y-1",
            featured ? "text-5xl sm:text-6xl lg:text-7xl" : "text-4xl sm:text-[2.6rem]",
          )}
        >
          {name}
        </h3>
      </div>

      {/* Body */}
      <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "lg:p-10")}>
        {subtitle ? <p className="font-mono text-xs uppercase text-muted">{subtitle}</p> : null}
        <p className={cn("text-lg leading-snug text-ink", subtitle && "mt-3", featured && "lg:text-2xl")}>
          {project.summary}
        </p>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pt-4 text-[15px] leading-relaxed text-muted">{project.description}</p>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <li key={item} className="rounded-full bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="inline-flex h-10 items-center gap-1.5 rounded-full border border-line px-4 text-sm font-semibold text-ink transition hover:border-ink"
          >
            <Plus className={cn("size-4 transition-transform duration-300", open && "rotate-45")} />
            {open ? "Less" : "Details"}
          </button>
          {isLink(project.live) ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-4 text-sm font-semibold text-bg transition hover:bg-accent hover:text-on-accent"
            >
              Visit site <ArrowUpRight className="size-4" />
            </a>
          ) : null}
          {isLink(project.github) ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-1.5 rounded-full px-3 text-sm font-semibold text-muted transition hover:text-ink"
            >
              <Code2 className="size-4" /> Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
