"use client";

import { scrollLottie } from "@/constants/assets";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import { DotLottiePlayer } from "@dotlottie/react-player";
import clsx from "clsx";

interface Props {
  className?: string;
}

const ScrollDownIndicator = (props: Props) => {
  const { setScrollLottieLoaded } = useInitializationContext();

  return (
    <DotLottiePlayer
      className={clsx(props.className, "w-8 animate-slow-bounce md:w-10")}
      src={scrollLottie}
      autoplay
      loop
      onEvent={(event) => {
        if (event === "ready") {
          setScrollLottieLoaded(true);
        }
      }}
    ></DotLottiePlayer>
  );
};

export default ScrollDownIndicator;
