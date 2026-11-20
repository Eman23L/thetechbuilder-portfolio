"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, UserRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingWord() {
  const words = portfolio.rotatingWords;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => window.clearInterval(id);
  }, [words.length]);

  return (
    <span className="relative inline-grid align-baseline">
      {/* reserve width of the longest word to avoid layout jumps */}
      <span className="invisible col-start-1 row-start-1 font-serif italic" aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="col-start-1 row-start-1 font-serif italic text-accent"
          initial={{ y: "60%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SpinningBadge() {
  const text = "THE TECH BUILDER ✦ SOFTWARE ENGINEER ✦ ";
  return (
    <a
      href="#projects"
      aria-label="View my work"
      className="group absolute -left-3 -top-10 z-10 grid size-28 place-items-center rounded-full bg-accent text-on-accent shadow-xl sm:-left-12 sm:size-36"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-mono text-[9px] font-medium">
          <textPath href="#badge-circle" textLength="230" lengthAdjust="spacing">{text}</textPath>
        </text>
      </svg>
      <ArrowDownRight className="size-8 transition-transform duration-300 group-hover:rotate-[-45deg]" />
    </a>
  );
}

export default function Hero() {
  const [headshotMissing, setHeadshotMissing] = useState(false);
  const [first, ...rest] = portfolio.name.split(" ");

  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="blueprint-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="section-shell grid items-center gap-16 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10 lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-ink">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </span>
            <span className="font-mono text-xs text-muted">{portfolio.location}</span>
          </motion.div>

          <h1 className="mt-8 font-display font-bold leading-[0.88] text-ink">
            {[first, rest.join(" ")].map((part, i) => (
              <span key={part} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block text-[length:clamp(3.6rem,12vw,9.25rem)] lg:text-[length:clamp(4rem,8.6vw,9.25rem)]"
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease }}
                >
                  {part}
                  {i === 1 ? <span className="text-accent">.</span> : null}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="mt-8 max-w-2xl text-2xl leading-snug text-ink sm:text-[1.9rem]"
          >
            Software engineer turning messy, manual work into clear, usable <RotatingWord />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#projects"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink pl-7 pr-2 text-base font-semibold text-bg transition active:scale-[0.98]"
            >
              See my work
              <span className="grid size-10 place-items-center rounded-full bg-accent text-on-accent transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
            <a
              href={portfolio.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-line px-7 text-base font-semibold text-ink transition hover:border-ink hover:bg-surface"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[380px] lg:mr-0"
          initial={{ opacity: 0, rotate: 0, y: 30 }}
          animate={{ opacity: 1, rotate: 2.5, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
        >
          <SpinningBadge />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-line bg-surface-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)]">
            {headshotMissing ? (
              <div className="grid size-full place-items-center text-muted">
                <UserRound className="size-20" />
              </div>
            ) : (
              <Image
                src="/images/profile.jpg"
                alt={`${portfolio.name} headshot`}
                fill
                priority
                sizes="(max-width: 1024px) 380px, 380px"
                className="object-cover"
                onError={() => setHeadshotMissing(true)}
              />
            )}
          </div>
          <div className="absolute -bottom-6 -right-3 rotate-[-4deg] rounded-2xl border border-line bg-surface px-4 py-3 shadow-lg sm:-right-8">
            <p className="font-mono text-[11px] uppercase text-muted">Currently</p>
            <p className="mt-0.5 font-display text-base font-semibold text-ink">
              {portfolio.currently.role}
              <span className="text-muted"> @ </span>
              {portfolio.currently.organisation}
            </p>
          </div>
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [...portfolio.skills.slice(0, 12)];
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((skill) => (
        <span key={skill} className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold sm:text-3xl">
          {skill}
          <span className="text-accent" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="pb-6 pt-2" aria-hidden="true">
      <div className="-mx-6 -rotate-1 bg-ink py-5 text-bg">
      <div className="marquee-mask flex overflow-hidden">
        <div className="flex animate-marquee">
          {row}
          {row}
        </div>
      </div>
      </div>
    </div>
  );
}
