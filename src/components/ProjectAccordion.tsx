"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, GitBranch } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  stack: readonly string[];
  github?: string;
};

const isProjectLink = (value: string) => value.startsWith("http://") || value.startsWith("https://");

export default function ProjectAccordion({ projects }: { projects: readonly Project[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-4">
      {projects.map((project, index) => {
        const isOpen = active === index;
        return (
          <article key={project.title} className="glass-card overflow-hidden rounded-2xl">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
              onClick={() => setActive(isOpen ? -1 : index)}
            >
              <span className="text-lg font-semibold text-slate-950 dark:text-white sm:text-xl">{project.title}</span>
              <ChevronDown className={cn("size-5 shrink-0 text-cyan-700 transition dark:text-cyan-200", isOpen && "rotate-180")} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                  <div className="border-t border-slate-900/10 px-5 py-5 dark:border-white/10 sm:px-7">
                    <p className="max-w-3xl leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-100">
                          {item}
                        </span>
                      ))}
                    </div>
                    {project.github && isProjectLink(project.github) ? (
                      <div className="mt-5">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 px-3 py-1 text-sm font-medium text-slate-700 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:border-white/10 dark:text-slate-200 dark:hover:border-cyan-300/50 dark:hover:bg-white/5"
                        >
                          <GitBranch className="size-4" /> View GitHub
                        </a>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );
}
