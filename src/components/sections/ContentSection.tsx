import React, { useEffect } from "react";
import Me from "../me/Me";
import LinkedInButton from "../socials/LinkedInButton";
import Nav from "../layout/Nav";
import AboutMeSection from "./content/AboutMeSection";
import SkillsSection from "./content/SkillsSection";
import ProfessionalProjectsSection from "./content/ProfessionalProjectsSection";
import PersonalProjectsSection from "./content/PersonalProjectsSection";
import Footer from "../layout/Footer";
import useScroll, { ScrollDirection } from "../hooks/useScroll";

interface Props {
  menu: MenuItem[];
  onToggleHide: () => void;
}

const ContentSection = (props: Props) => {
  const { menu } = props;
  const { scrollDirection, scrollY } = useScroll();

  useEffect(() => {
    if (scrollDirection === ScrollDirection.UP && scrollY === 0) {
      props.onToggleHide();
    }
  }, [scrollDirection, scrollY]);

  return (
    <>
      <div className="h-fit md:col-span-1 md:sticky md:top-14">
        <Me></Me>
        <LinkedInButton className="mt-6"></LinkedInButton>
        <Nav className="hidden md:block md:mt-16" menu={menu}></Nav>
      </div>
      <div className="mt-10 space-y-10 md:col-span-2 md:mt-0 md:space-y-16">
        <AboutMeSection id={menu[0].id}></AboutMeSection>
        <SkillsSection id={menu[1].id}></SkillsSection>
        <ProfessionalProjectsSection
          id={menu[2].id}
        ></ProfessionalProjectsSection>
        <PersonalProjectsSection id={menu[3].id}></PersonalProjectsSection>
        <Footer></Footer>
      </div>
    </>
  );
};

export default ContentSection;
