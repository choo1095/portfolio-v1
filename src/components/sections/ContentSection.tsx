import React from "react";
import Me from "../me/Me";
import LinkedInButton from "../socials/LinkedInButton";
import Nav from "../layout/Nav";
import AboutMeSection from "./content/AboutMeSection";
import SkillsSection from "./content/SkillsSection";
import ProfessionalProjectsSection from "./content/ProfessionalProjectsSection";
import PersonalProjectsSection from "./content/PersonalProjectsSection";
import Footer from "../layout/Footer";
import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  menu: MenuItem[];
}

const ContentSection = (props: Props) => {
  const { menu } = props;

  return (
    <motion.div
      className={clsx(
        props.className,
        "screen_container grid section_padding relative md:grid-cols-3 md:gap-10 lg:gap-20"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="h-fit md:col-span-1 md:sticky md:top-14">
        <Me></Me>
        <LinkedInButton className="mt-6"></LinkedInButton>
        <Nav className="hidden md:block md:mt-16" menu={menu}></Nav>
      </div>
      <div className="mt-14 space-y-10 md:col-span-2 md:mt-0 md:space-y-16">
        <AboutMeSection id={menu[0].id}></AboutMeSection>
        <SkillsSection id={menu[1].id}></SkillsSection>
        <ProfessionalProjectsSection
          id={menu[2].id}
        ></ProfessionalProjectsSection>
        <PersonalProjectsSection id={menu[3].id}></PersonalProjectsSection>
        <Footer></Footer>
      </div>
    </motion.div>
  );
};

export default ContentSection;
