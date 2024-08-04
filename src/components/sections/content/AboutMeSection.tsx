import InlineLink from "@/components/common/InlineLink";
import SectionHeader from "@/components/common/SectionHeader";
import ArrowOutwardsSvg from "@/components/common/svg/ArrowOutwardsSvg";
import strings from "@/constants/strings";
import AboutMeContents from "@/contents/about_me";
import { useNavContext } from "@/contexts/useNavContext";
import React, { forwardRef } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

const ResumeLink = () => {
  return (
    <blockquote className="sm:border-l-8 sm:border-solid sm:border-l-primary-900/80 sm:px-5 sm:py-5">
      <span className="font-medium">{strings.about_me.resume.text_1}</span>
      <InlineLink
        link={strings.about_me.resume.link}
        text={strings.about_me.resume.text_2}
      ></InlineLink>
    </blockquote>
  );
};

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

      <div className="space-y-4 mb-4 sm:mb-8">
        <AboutMeContents></AboutMeContents>
      </div>
      <ResumeLink></ResumeLink>
    </InView>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
