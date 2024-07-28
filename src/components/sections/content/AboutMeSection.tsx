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
      <h2 className="section_header">{strings.about_me.header}</h2>
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
