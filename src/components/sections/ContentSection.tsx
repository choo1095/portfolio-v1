import React, { useEffect, useState } from "react";
import Me from "../me/Me";
import LinkedInButton from "../socials/LinkedInButton";
import Nav from "../layout/Nav";
import AboutMeSection from "./content/AboutMeSection";
import SkillsSection from "./content/SkillsSection";
import ProfessionalProjectsSection from "./content/ProfessionalProjectsSection";
import PersonalProjectsSection from "./content/PersonalProjectsSection";
import Footer from "../layout/Footer";
import useScroll, { ScrollDirection } from "../hooks/useScroll";
import { sleep } from "@/lib/utils";
import clsx from "clsx";

interface Props {
  className?: string;
  menu: MenuItem[];
  onToggleHide: () => void;
}

const ContentSection = (props: Props) => {
  const { menu } = props;
  const { scrollDirection, scrollY } = useScroll();

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      return;
    }

    const toggleHide = async () => {
      setIsTransitioning(true);
      await sleep(3000);
      props.onToggleHide();
      setIsTransitioning(false);
    };

    if (scrollDirection === ScrollDirection.UP && scrollY === 0) {
      toggleHide();
    }
  }, [scrollDirection, scrollY, props, isTransitioning]);

  return (
    <div
      className={clsx(
        props.className,
        { "h-dvh overflow-clip": isTransitioning }, // to prevent scrolling
        "screen_container grid section_padding relative md:grid-cols-3 md:gap-20"
      )}
    >
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
    </div>
  );
};

export default ContentSection;
