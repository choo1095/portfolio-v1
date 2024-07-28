"use client";

import { NavProvider } from "@/contexts/useNavContext";
import strings from "@/constants/strings";
import LandingSection from "@/components/sections/LandingSection";
import Me from "@/components/me/Me";
import LinkedInButton from "@/components/socials/LinkedInButton";
import Nav from "@/components/layout/Nav";
import AboutMeSection from "@/components/sections/content/AboutMeSection";
import SkillsSection from "@/components/sections/content/SkillsSection";
import ProfessionalProjectsSection from "@/components/sections/content/ProfessionalProjectsSection";
import PersonalProjectsSection from "@/components/sections/content/PersonalProjectsSection";
import Footer from "@/components/layout/Footer";
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
  const [showContents, setShowContents] = useState(false);

  return (
    <>
      {/* Page contents */}
      <main className={clsx(initialized ? "opacity-100" : "opacity-0")}>
        {!showContents ? (
          <LandingSection
            className={clsx({
              hidden: showContents,
            })}
            onToggleHide={() => setShowContents(true)}
          ></LandingSection>
        ) : (
          <NavProvider>
            <ContentSection
              menu={menu}
              onToggleHide={() => setShowContents(false)}
              className={clsx({ hidden: !showContents })}
            ></ContentSection>
          </NavProvider>
        )}
      </main>
      {/* Background */}
      <ParticleBackground
        className={clsx(initialized ? "opacity-100" : "opacity-0")}
      ></ParticleBackground>

      {/* Full-page loader (if assets not initialized yet) */}
      <Loader className={clsx(initialized ? "hidden" : "block")}></Loader>
    </>
  );
};

export default function Home() {
  return (
    <InitializationProvider>
      <HomeContents></HomeContents>
    </InitializationProvider>
  );
}
