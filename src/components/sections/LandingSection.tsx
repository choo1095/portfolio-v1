import React, { useEffect, useState } from "react";
import ScrollDownIndicator from "@/components/common/ScrollDownIndicator";
import strings from "@/constants/strings";
import clsx from "clsx";
import Me from "../me/Me";
import useScroll, { ScrollDirection } from "../hooks/useScroll";
import { sleep } from "@/lib/utils";

interface Props {
  className?: string;
  onToggleHide: () => void;
}

const LandingSection = (props: Props) => {
  const { scrollDirection } = useScroll();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      return;
    }

    const toggleHide = async () => {
      setIsTransitioning(true);
      await sleep(3000);
      props.onToggleHide();
      setIsTransitioning(false);
    };

    if (scrollDirection === ScrollDirection.DOWN) {
      toggleHide();
    }
  }, [scrollDirection, isTransitioning, props]);

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
