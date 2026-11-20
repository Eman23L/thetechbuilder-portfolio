import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import SectionReveal from "@/components/SectionReveal";
import { portfolio } from "@/data/portfolio";

export default function Projects() {
  return (
    <SectionReveal id="projects" className="section-shell py-16 sm:py-24">
      <SectionHeading
        index="03"
        label="Selected work"
        title={
          <>
            Practical systems, <span className="font-serif font-normal italic text-accent">shipped.</span>
          </>
        }
        intro="Production platforms, automation pipelines and internal tools. Each one built to solve a real operational problem."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {portfolio.projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} featured={index === 0} />
        ))}
      </div>
    </SectionReveal>
  );
}
