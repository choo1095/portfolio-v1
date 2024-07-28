"use client";

import { scrollLottie } from "@/constants/assets";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import { DotLottiePlayer } from "@dotlottie/react-player";

const ScrollDownIndicator = () => {
  const { setScrollLottieLoaded } = useInitializationContext();

  return (
    <DotLottiePlayer
      className="w-10 animate-slow-bounce md:w-14"
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
