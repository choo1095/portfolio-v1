import SectionHeader from "@/components/common/SectionHeader";
import ArrowOutwardsSvg from "@/components/common/svg/ArrowOutwardsSvg";
import strings from "@/constants/strings";
import { useNavContext } from "@/contexts/useNavContext";
import React, { forwardRef } from "react";
import { InView } from "react-intersection-observer";

interface Props {
  id: string;
  ref: React.RefObject<HTMLDivElement>;
}

const ResumeLink = () => {
  return (
    <p>
      <span>{strings.about_me.resume.text_1}</span>
      <span>
        <a
          href={strings.about_me.resume.link}
          target="_blank"
          className="group/resume-link text-primary-900"
        >
          <span className="font-medium group-hover/resume-link:underline">
            {strings.about_me.resume.text_2}
          </span>
          <span className="inline-block align-middle">
            <ArrowOutwardsSvg
              className="group-hover/resume-link:animate-outwards ml-1 mb-1"
              color="#831c19"
              height={20}
              width={20}
            ></ArrowOutwardsSvg>
          </span>
        </a>
      </span>
    </p>
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

      <div className="space-y-4">
        {strings.about_me.contents.map((content) => (
          <p key={content}>{content}</p>
        ))}

        <ResumeLink></ResumeLink>
      </div>
    </InView>
  );
});

AboutMeSection.displayName = "AboutMeSection";

export default AboutMeSection;
