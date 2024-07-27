"use client";

import ParticleBackground from "./components/ParticleBackground";
import LandingSection from "./components/sections/LandingSection";
import Me from "./components/me/Me";
import LinkedInButton from "./components/socials/LinkedInButton";
import AboutMeSection from "./components/sections/AboutMeSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProfessionalProjectsSection from "./components/sections/ProfessionalProjectsSection";
import PersonalProjectsSection from "./components/sections/PersonalProjectsSection";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import { NavProvider } from "./contexts/useNavContext";
import strings from "./constants/strings";

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

export default function Home() {
  return (
    <>
      <main>
        <LandingSection></LandingSection>

        <NavProvider>
          <div className="screen_container section_padding relative grid md:grid-cols-3 md:gap-20">
            <div className="h-fit md:col-span-1 md:sticky md:top-10">
              <Me></Me>
              <LinkedInButton></LinkedInButton>
              <Nav className="hidden md:block md:mt-20" menu={menu}></Nav>
            </div>
            <div className="space-y-10 md:col-span-2">
              <AboutMeSection id={menu[0].id}></AboutMeSection>
              <SkillsSection id={menu[1].id}></SkillsSection>
              <ProfessionalProjectsSection
                id={menu[2].id}
              ></ProfessionalProjectsSection>
              <PersonalProjectsSection
                id={menu[3].id}
              ></PersonalProjectsSection>
              <Footer></Footer>
            </div>
          </div>
        </NavProvider>
      </main>
      <ParticleBackground></ParticleBackground>
    </>
  );
}
