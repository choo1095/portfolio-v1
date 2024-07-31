"use client";

import { NavProvider } from "@/contexts/useNavContext";
import strings from "@/constants/strings";
import ParticleBackground from "@/components/ParticleBackground";
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

  return initialized ? (
    <main>
      <NavProvider>
        <ContentSection menu={menu}></ContentSection>
      </NavProvider>
    </main>
  ) : (
    <Loader></Loader>
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
