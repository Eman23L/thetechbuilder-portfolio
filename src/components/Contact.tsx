"use client";

import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  };

  const links = [
    { label: "GitHub", href: `${portfolio.github}?tab=repositories` },
    { label: "LinkedIn", href: portfolio.linkedin },
  ];

  return (
    <SectionReveal id="contact" className="px-3 py-12 sm:px-5">
      <div className="relative isolate mx-auto max-w-[1280px] overflow-hidden rounded-[36px] bg-invert-bg px-6 py-16 text-invert-ink sm:px-12 sm:py-24 lg:px-16">
        <div className="absolute -bottom-36 -right-36 -z-10 size-[300px] sm:-bottom-40 sm:-right-40 sm:size-[520px] rounded-full bg-accent opacity-90 blur-[2px]" />
        <div className="dots absolute -bottom-36 -right-36 -z-10 size-[300px] sm:-bottom-40 sm:-right-40 sm:size-[520px] rounded-full text-invert-bg opacity-20" />

        <p className="flex items-center gap-3 font-mono text-xs opacity-70">
          <span className="text-accent">(06)</span> Contact
        </p>
        <h2 className="mt-6 max-w-4xl font-display text-[length:clamp(3rem,8vw,7rem)] font-bold leading-[0.9]">
          Let&apos;s build something <span className="font-serif font-normal italic text-accent">useful.</span>
        </h2>
        <p className="mt-8 max-w-xl text-lg leading-relaxed opacity-75">
          Got a manual process, a messy dataset, or a product idea? I&apos;d love to hear about it. I usually reply within a day.
        </p>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={`mailto:${portfolio.email}`}
            className="group inline-flex h-16 items-center justify-between gap-4 rounded-full bg-accent pl-7 pr-2 text-lg font-semibold text-on-accent transition active:scale-[0.98]"
          >
            Email me
            <span className="grid size-12 place-items-center rounded-full bg-on-accent text-accent transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-5" />
            </span>
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex h-16 items-center justify-center gap-2 rounded-full border border-current/25 px-6 font-mono text-sm transition hover:border-current"
            aria-live="polite"
          >
            {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
            {copied ? "Copied to clipboard" : portfolio.email}
          </button>
        </div>

        <div className="mt-16 flex flex-wrap gap-x-8 gap-y-4 border-t border-current/15 pt-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 font-display text-2xl font-semibold"
            >
              <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
                {link.label}
              </span>
              <ArrowUpRight className="size-5 opacity-60 transition group-hover:opacity-100" />
            </a>
          ))}
          <a
            href={portfolio.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-display text-2xl font-semibold"
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
              Download CV
            </span>
            <Download className="size-5 opacity-60 transition group-hover:opacity-100" />
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
