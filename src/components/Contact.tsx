import { Code2, Download, Mail, Network } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "Email me",
      href: `mailto:${portfolio.email}`,
      icon: Mail,
    },
    {
      label: "GitHub",
      value: "View my GitHub",
      href: `${portfolio.github}?tab=repositories`,
      icon: Code2,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: portfolio.linkedin,
      icon: Network,
      external: true,
    },
    {
      label: "Download CV",
      value: "Open CV",
      href: portfolio.cvPath,
      icon: Download,
      external: true,
    },
  ];

  return (
    <SectionReveal id="contact" className="section-shell py-20">
      <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-300">CONTACT ME</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">Build the next revolutionary idea.</h2>
            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
              Ready to turn bold ideas into practical digital systems, automation tools, dashboards, and scalable software products.
            </p>
          </div>
          <div className="grid gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-xl border border-slate-900/10 bg-white/65 p-4 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-300/40 dark:hover:bg-cyan-300/10"
              >
                <span className="grid size-11 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 group-hover:bg-cyan-500 group-hover:text-white dark:bg-cyan-300/10 dark:text-cyan-200 dark:group-hover:bg-cyan-300 dark:group-hover:text-slate-950">
                  <contact.icon className="size-5" />
                </span>
                <span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">{contact.label}</span>
                  <span className="break-all font-medium text-slate-900 dark:text-slate-100">{contact.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
