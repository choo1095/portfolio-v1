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
    <div className={clsx(props.className, "section_padding")}>
      <h2>{strings.professional_projects.header}</h2>
      <div className="space-y-3">
        {professionalProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProjectsSection;
