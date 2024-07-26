import strings from "@/app/constants/strings";
import clsx from "clsx";
import React from "react";
import ProjectCard from "../project/ProjectCard";
import professionalProjects from "@/app/contents/professional_projects";

interface Props {
  className?: string;
}

const ProfessionalProjectsSection = (props: Props) => {
  return (
    <section id="professional_projects" className={clsx(props.className)}>
      <h2 className="section_header">{strings.professional_projects.header}</h2>
      <div className="space-y-3">
        {professionalProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalProjectsSection;
