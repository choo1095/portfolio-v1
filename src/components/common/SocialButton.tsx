import clsx from "clsx";
import React from "react";
import ArrowOutwardsSvg from "./svg/ArrowOutwardsSvg";

interface Props {
  className?: string;
  link: string;
  title: string;
  children: React.ReactNode;
}

const SocialButton = (props: Props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      className={clsx(
        props.className,
        "group/social-link flex items-center w-fit text-stone-700 fill-stone-700 hover:-translate-y-px duration-100"
      )}
    >
      {props.children}
      <span className="ml-1.5 group-hover/social-link:text-primary-900">
        {props.title}
      </span>
      {/* <ArrowOutwardsSvg
        className="fill-primary-900 origin-center scale-0 group-hover/social-link:scale-100 group-hover/social-link:translate-x-1 group-hover/social-link:-translate-y-1 duration-200"
        width={16}
        height={16}
      ></ArrowOutwardsSvg> */}
    </a>
  );
};

export default SocialButton;
