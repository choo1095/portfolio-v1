import strings from "@/app/constants/strings";
import { useNavContext } from "@/app/contexts/useNavContext";
import React, { forwardRef, useEffect } from "react";
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
      <p>{strings.about_me.contents}</p>
    </InView>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
