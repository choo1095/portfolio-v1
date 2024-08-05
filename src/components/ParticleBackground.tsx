"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";
import particlesOptions from "@/../../public/particles/particles_options.json";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import clsx from "clsx";

interface Props {
  className?: string;
}

const ParticleBackground = (props: Props) => {
  const [init, setInit] = useState(false);
  const options: ISourceOptions = JSON.parse(JSON.stringify(particlesOptions)); // Parse JSON to ISourceOptions

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <div
        className={clsx(
          props.className,
          "fixed top-0 left-0 -z-10 h-lvh w-dvw"
        )}
      >
        <div className="w-full h-full backdrop-blur-sm"></div>

        <Particles
          id="tsparticles"
          className="relative -z-20"
          options={options}
        />
      </div>
    );
  }

  return <></>;
};

export default ParticleBackground;
