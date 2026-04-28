"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionReveal id="skills" className="section-shell py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">Skills</p>
        <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Tools used to build durable systems.</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {portfolio.skills.map((skill, index) => (
          <motion.span
            key={skill}
            className="rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-900/5 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:shadow-black/10"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.025 }}
            whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.55)" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </SectionReveal>
  );
}
