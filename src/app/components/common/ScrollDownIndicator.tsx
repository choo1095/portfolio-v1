"use client";

import { scrollLottie } from "@/app/constants/assets";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import { useGSAP } from "@gsap/react";

const ScrollDownIndicator = () => {
  return (
    <DotLottiePlayer
      className="w-10 animate-slow-bounce md:w-14"
      src={scrollLottie}
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default ScrollDownIndicator;
