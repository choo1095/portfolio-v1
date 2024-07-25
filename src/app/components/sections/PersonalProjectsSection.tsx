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
    <div className={clsx(props.className, "section_padding")}>
      <h2>{strings.personal_projects.header}</h2>
      <div className="space-y-3">
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjectsSection;
