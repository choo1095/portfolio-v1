import strings from "@/constants/strings";
import clsx from "clsx";
import React, { forwardRef } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import professionalProjects from "@/contents/professional_projects";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/contexts/useNavContext";
import SectionHeader from "@/components/common/SectionHeader";

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
        className={clsx("content_section", props.className)}
        rootMargin="0% 0% -100% 0%"
        onChange={(inView) => {
          if (inView) {
            setCurrentSection(props.id);
          }
        }}
      >
        <SectionHeader>{strings.professional_projects.header}</SectionHeader>

        <p className="content_fade">
          {strings.professional_projects.description}
        </p>

        <div className="mt-5 space-y-4">
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
