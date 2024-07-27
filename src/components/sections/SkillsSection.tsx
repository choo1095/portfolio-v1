import { forwardRef } from "react";
import skills from "@/contents/skills";
import clsx from "clsx";
import SkillPill from "../common/SkillPill";
import strings from "@/constants/strings";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/contexts/useNavContext";

interface Props {
  id: string;
  className?: string;
}

const SkillsSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
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
      <h2 className="section_header">{strings.technical_skills.header}</h2>
      <p>{strings.technical_skills.description}</p>
      <div className="space-y-5">
        {skills.map((category) => {
          return (
            <div key={category.title}>
              <p>{category.title}</p>
              <div className="flex flex-wrap gap-1">
                {category.skills.map((skill) => (
                  <SkillPill key={skill.title} percentage={skill.percentage}>
                    {skill.title}
                  </SkillPill>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </InView>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
