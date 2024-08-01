import SectionHeader from "@/components/common/SectionHeader";
import strings from "@/constants/strings";
import { useNavContext } from "@/contexts/useNavContext";
import React, { forwardRef } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

const AboutMeSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { setCurrentSection } = useNavContext();

  return (
    <InView
      as="section"
      id={props.id}
      className="md:py-0"
      onChange={(inView) => {
        if (inView) {
          setCurrentSection(props.id);
        }
      }}
    >
      <SectionHeader>{strings.about_me.header}</SectionHeader>

      <div className="space-y-4">
        {strings.about_me.contents.map((content) => (
          <p key={content}>{content}</p>
        ))}
      </div>
    </InView>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
