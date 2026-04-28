import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FocusAreas from "@/components/FocusAreas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-[#030712] dark:text-slate-50">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.1),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.1),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_46%,#f8fafc_100%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.13),transparent_24%),linear-gradient(180deg,#030712_0%,#050816_46%,#020617_100%)]" />
        <div className="noise-layer absolute inset-0 opacity-30" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <ImpactStats />
        <FocusAreas />
        <Projects />
        <Skills />
        <ExperienceTimeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
