import strings from "@/constants/strings";
import personalProjects from "@/contents/personal_projects";
import clsx from "clsx";
import React, { forwardRef } from "react";
import ProjectCard from "@/components/project/ProjectCard";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/contexts/useNavContext";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import SectionHeader from "@/components/common/SectionHeader";

interface Props {
  id: string;
  className?: string;
}

const PersonalProjectsSection = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { setCurrentSection } = useNavContext();
    const { oneSecondAfterInitialized } = useInitializationContext();

    return (
      <InView
        as="section"
        id={props.id}
        className={clsx("content_section", props.className)}
        onChange={(inView) => {
          if (!oneSecondAfterInitialized) {
            return;
          }

          if (inView) {
            setCurrentSection(props.id);
          } else {
            setCurrentSection("professional_projects");
          }
        }}
      >
        <SectionHeader>{strings.personal_projects.header}</SectionHeader>

        <p className="content_fade">{strings.personal_projects.description}</p>

        <div className="mt-5 space-y-10 lg:space-y-5">
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
