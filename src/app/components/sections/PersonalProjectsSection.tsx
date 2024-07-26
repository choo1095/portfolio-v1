import strings from "@/app/constants/strings";
import personalProjects from "@/app/contents/personal_projects";
import clsx from "clsx";
import React from "react";
import ProjectCard from "../project/ProjectCard";

interface Props {
  className?: string;
}

const PersonalProjectsSection = (props: Props) => {
  return (
    <section id="personal_projects" className={clsx(props.className)}>
      <h2 className="section_header">{strings.personal_projects.header}</h2>
      <div className="space-y-3">
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default PersonalProjectsSection;
