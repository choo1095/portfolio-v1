import skills from "@/app/contents/skills";
import clsx from "clsx";
import React from "react";
import SkillPill from "../common/SkillPill";
import strings from "@/app/constants/strings";

interface Props {
  className?: string;
}

const SkillsSection = (props: Props) => {
  return (
    <section id="skills" className={clsx(props.className)}>
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
    </section>
  );
};

export default SkillsSection;
