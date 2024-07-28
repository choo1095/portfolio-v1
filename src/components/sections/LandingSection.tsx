import React from "react";
import ScrollDownIndicator from "@/components/common/ScrollDownIndicator";
import strings from "@/constants/strings";
import clsx from "clsx";
import Me from "../me/Me";

interface Props {
  className?: string;
}

const LandingSection = (props: Props) => {
  return (
    <section
      id="landing"
      className={clsx(
        props.className,
        "screen_container pt-14 relative z-0 h-dvh p-10 flex flex-col items-start justify-end"
      )}
    >
      {/* <div className="backdrop-blur-xl">
        <h1>{strings.me.name}</h1>
        <h2 className="section_header">{strings.me.title}</h2>
        <p>{strings.me.description}</p>
      </div> */}
      <Me></Me>
      <div className="w-full flex justify-center">
        <ScrollDownIndicator className="mt-10"></ScrollDownIndicator>
      </div>
    </section>
  );
};

export default LandingSection;
