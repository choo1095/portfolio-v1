import React from "react";
import ScrollDownIndicator from "@/components/common/ScrollDownIndicator";
import strings from "@/constants/strings";
import clsx from "clsx";

interface Props {
  className?: string;
}

const LandingSection = (props: Props) => {
  return (
    <section
      id="landing"
      className={clsx(
        props.className,
        "screen_container section_padding relative z-0 h-dvh p-10 flex flex-col items-start justify-end"
      )}
    >
      <div className="-m-10 p-10 backdrop-blur-xl">
        <h1>{strings.me.name}</h1>
        <h2 className="section_header">{strings.me.title}</h2>
        <p>{strings.me.description}</p>
      </div>
      <div className="w-full flex justify-center">
        <ScrollDownIndicator></ScrollDownIndicator>
      </div>
    </section>
  );
};

export default LandingSection;
