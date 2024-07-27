import strings from "@/constants/strings";
import personalProjects from "@/contents/personal_projects";
import clsx from "clsx";
import React, { forwardRef } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/contexts/useNavContext";

interface Props {
  id: string;
  className?: string;
}

const PersonalProjectsSection = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { setCurrentSection } = useNavContext();

    return (
      <InView
        as="section"
        id={props.id}
        className={clsx(props.className)}
        onChange={(inView) => {
          if (inView) {
            setCurrentSection(props.id);
          } else {
            setCurrentSection("professional_projects");
          }
        }}
      >
        <h2 className="section_header">{strings.personal_projects.header}</h2>
        <div className="space-y-3">
          {personalProjects.map((project) => (
            <ProjectCard key={project.id} project={project}></ProjectCard>
          ))}
        </div>
      </InView>
    );
  }
);

PersonalProjectsSection.displayName = "PersonalProjectsSection";

export default PersonalProjectsSection;
