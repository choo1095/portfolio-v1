import React from "react";
import ArrowOutwardsSvg from "./svg/ArrowOutwardsSvg";

interface Props {
  link: string;
  text: string;
}

const InlineLink = (props: Props) => {
  return (
    <span>
      <a
        href={props.link}
        target="_blank"
        className="group/resume-link text-primary-900"
      >
        <span className="font-medium">{props.text}</span>
        <span className="inline-block align-middle">
          <ArrowOutwardsSvg
            className="group-hover/resume-link:animate-outwards ml-0.5 mb-2"
            color="#831c19"
            height={16}
            width={16}
          ></ArrowOutwardsSvg>
        </span>
      </a>
    </span>
  );
};

export default InlineLink;
