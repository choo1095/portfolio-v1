"use client";

import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { emit } from "process";
import particlesOptions from "../../../public/particles/particles_options.json";

const ParticleBackground = () => {
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

  const particlesLoaded = async (container: Container | undefined) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        className="relative -z-10"
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticleBackground;
