import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 py-8 dark:border-white/10">
      <div className="section-shell flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {portfolio.name}. All rights reserved.</p>
        <p>{portfolio.brand} / {portfolio.domain}</p>
      </div>
    </footer>
  );
}
