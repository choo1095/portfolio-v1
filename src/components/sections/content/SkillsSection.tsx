import { forwardRef } from "react";
import clsx from "clsx";
import strings from "@/constants/strings";
import { InView } from "react-intersection-observer";
import { useNavContext } from "@/contexts/useNavContext";
import SectionHeader from "@/components/common/SectionHeader";
import skills from "@/contents/skills";
import SkillCategoryCard from "@/components/skill/SkillCategoryCard";

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
      <SectionHeader>{strings.technical_skills.header}</SectionHeader>

      <p>{strings.technical_skills.description}</p>

      <div className="space-y-6 mt-5 sm:space-y-0">
        {skills.map((item) => {
          return (
            <SkillCategoryCard
              key={item.category}
              data={item}
            ></SkillCategoryCard>
          );
        })}
      </div>
    </InView>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
