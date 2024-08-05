import InlineLink from "@/components/common/InlineLink";
import SectionHeader from "@/components/common/SectionHeader";
import strings from "@/constants/strings";
import AboutMeContents from "@/contents/about_me";
import { useNavContext } from "@/contexts/useNavContext";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

const ResumeLink = () => {
  return (
    <p className="content_fade lg:border-l-8 lg:border-solid lg:border-l-primary-900 lg:px-5 lg:py-5">
      <span className="font-medium">{strings.about_me.resume.text_1}</span>
      <InlineLink
        link={strings.about_me.resume.link}
        text={strings.about_me.resume.text_2}
      ></InlineLink>
    </p>
  );
};

const AboutMeSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { setCurrentSection } = useNavContext();

  return (
    <InView
      as="section"
      id={props.id}
      className={clsx("content_section", "md:py-0")}
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
