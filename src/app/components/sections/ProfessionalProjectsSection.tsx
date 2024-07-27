import strings from "@/app/constants/strings";
import clsx from "clsx";
import React, { forwardRef } from "react";
import ProjectCard from "../project/ProjectCard";
import professionalProjects from "@/app/contents/professional_projects";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/app/contexts/useNavContext";

interface Props {
  id: string;
  className?: string;
}

const ProfessionalProjectsSection = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { setCurrentSection } = useNavContext();

    return (
      <InView
        as="section"
        id={props.id}
        className={clsx(props.className)}
        rootMargin="0% 0% -100% 0%"
        onChange={(inView) => {
          if (inView) {
            setCurrentSection(props.id);
          }
        }}
      >
        <h2 className="section_header">
          {strings.professional_projects.header}
        </h2>
        <div className="space-y-3">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </InView>
    );
  }
);

ProfessionalProjectsSection.displayName = "ProfessionalProjectsSection";

export default ProfessionalProjectsSection;
