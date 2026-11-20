import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MotionProvider from "@/components/MotionProvider";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <MotionProvider>
      <div className="relative min-h-screen bg-bg text-ink">
        <a
          href="#projects"
          className="sr-only z-[200] rounded-full bg-ink px-4 py-2 text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to work
        </a>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Skills />
          <ExperienceTimeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
