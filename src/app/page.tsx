import Image from "next/image";
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

export default function Home() {
  return (
    <>
      <main>
        <LandingSection></LandingSection>
        <div className="screen_container section_padding relative grid md:grid-cols-3 md:gap-20">
          <div className="h-fit md:col-span-1 md:sticky md:top-10">
            <Me></Me>
            <LinkedInButton></LinkedInButton>
            <Nav className="hidden md:block md:mt-20"></Nav>
          </div>
          <div className="md:col-span-2">
            <AboutMeSection></AboutMeSection>
            <SkillsSection></SkillsSection>
            <ProfessionalProjectsSection></ProfessionalProjectsSection>
            <PersonalProjectsSection></PersonalProjectsSection>
            <Footer></Footer>
          </div>
        </div>
      </main>
      <ParticleBackground></ParticleBackground>
    </>
  );
}
