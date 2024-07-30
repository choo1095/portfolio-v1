"use client";

import { NavProvider } from "@/contexts/useNavContext";
import strings from "@/constants/strings";
import ParticleBackground from "@/components/ParticleBackground";
import clsx from "clsx";
import { useState } from "react";
import {
  InitializationProvider,
  useInitializationContext,
} from "@/contexts/useInitializationContext";
import Loader from "@/components/layout/Loader";
import ContentSection from "@/components/sections/ContentSection";

const menu: MenuItem[] = [
  {
    id: "about",
    title: strings.about_me.header,
  },
  {
    id: "skills",
    title: strings.technical_skills.header,
  },
  {
    id: "professional_projects",
    title: strings.professional_projects.header,
  },
  {
    id: "personal_projects",
    title: strings.personal_projects.header,
  },
];

const HomeContents = () => {
  const { initialized } = useInitializationContext();

  return (
    <>
      <main className={clsx(initialized ? "block" : "hidden")}>
        <NavProvider>
          <ContentSection menu={menu}></ContentSection>
        </NavProvider>
      </main>

      {/* Full-page loader (if assets not initialized yet) */}
      <Loader className={clsx(initialized ? "hidden" : "block")}></Loader>
    </>
  );
};

export default function Home() {
  return (
    <InitializationProvider>
      <HomeContents></HomeContents>
      <ParticleBackground></ParticleBackground>
    </InitializationProvider>
  );
}
