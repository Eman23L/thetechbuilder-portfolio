"use client";

import { motion } from "framer-motion";
import { ArrowDown, BriefcaseBusiness, Mail, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { portfolio } from "@/data/portfolio";

export default function Hero() {
  const roles = useMemo(() => portfolio.typingRoles, []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [letters, setLetters] = useState("");
  const [headshotMissing, setHeadshotMissing] = useState(false);
  const headshotSrc = "/images/profile.jpg";

  useEffect(() => {
    const active = roles[roleIndex];
    let frame = 0;
    const type = window.setInterval(() => {
      frame += 1;
      setLetters(active.slice(0, frame));
      if (frame >= active.length) {
        window.clearInterval(type);
        window.setTimeout(() => setRoleIndex((current) => (current + 1) % roles.length), 1400);
      }
    }, 42);
    return () => window.clearInterval(type);
  }, [roleIndex, roles]);

  return (
    <section id="top" className="section-shell flex min-h-screen flex-col justify-center pb-16 pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
          <p className="mb-5 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-800 dark:border-cyan-300/20 dark:bg-cyan-300/10 dark:text-cyan-200">
            {portfolio.role} / {portfolio.brand}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="gradient-text">Emmanuel Bamgbala</span>
          </h1>
          <div className="mt-6 h-9 text-xl font-medium text-cyan-700 dark:text-cyan-200 sm:text-2xl">
            {letters}
            <span className="ml-1 animate-pulse text-blue-600 dark:text-blue-300">|</span>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            {portfolio.hero}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 font-semibold text-slate-950 transition hover:bg-cyan-200">
              <BriefcaseBusiness className="size-4" /> View My Work
            </a>
            <a href="#contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-900/10 px-6 font-semibold text-slate-800 transition hover:border-cyan-500/50 hover:bg-cyan-500/10 dark:border-white/12 dark:text-slate-100 dark:hover:border-cyan-300/50 dark:hover:bg-white/5">
              <Mail className="size-4" /> Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div className="relative mx-auto w-full max-w-md" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <div className="glass-card relative aspect-square overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.2),transparent_36%)]" />
            <div className="relative flex h-full flex-col items-center justify-center rounded-xl border border-cyan-500/20 bg-white/55 text-center dark:border-cyan-300/20 dark:bg-slate-950/50">
              {headshotMissing ? (
                <div className="grid size-36 place-items-center rounded-full border border-cyan-500/30 bg-gradient-to-br from-white to-slate-200 text-cyan-700 shadow-2xl shadow-cyan-900/10 dark:border-cyan-300/30 dark:from-slate-800 dark:to-slate-950 dark:text-cyan-200 dark:shadow-cyan-950/40">
                  <UserRound className="size-16" />
                </div>
              ) : (
                <Image
                  src={headshotSrc}
                  alt={`${portfolio.name} headshot`}
                  width={224}
                  height={224}
                  className="size-56 rounded-full border border-cyan-500/30 object-cover shadow-2xl shadow-cyan-900/10 dark:border-cyan-300/30 dark:shadow-cyan-950/40"
                  onError={() => setHeadshotMissing(true)}
                />
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" className="mx-auto mt-10 grid size-11 place-items-center rounded-full border border-slate-900/10 text-cyan-700 dark:border-white/10 dark:text-cyan-200" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
        <ArrowDown className="size-5" />
      </motion.a>
    </section>
  );
}
