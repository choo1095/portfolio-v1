import React from "react";
import ScrollDownIndicator from "../common/ScrollDownIndicator";
import strings from "@/app/constants/strings";
import clsx from "clsx";

interface Props {
  className?: string;
}

const LandingSection = (props: Props) => {
  return (
    <section
      className={clsx(
        props.className,
        "screen_container section_padding relative z-0 h-[100dvh] p-10 flex flex-col items-start justify-end"
      )}
    >
      <div>
        <h1>{strings.me.name}</h1>
        <h2>{strings.me.title}</h2>
        <p>{strings.me.description}</p>
      </div>
      <div className="w-full flex justify-center">
        <ScrollDownIndicator></ScrollDownIndicator>
      </div>
    </section>
  );
};

export default LandingSection;
