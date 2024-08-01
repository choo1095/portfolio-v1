import React from "react";
import Me from "../me/Me";
import Nav from "../layout/Nav";
import AboutMeSection from "./content/AboutMeSection";
import SkillsSection from "./content/SkillsSection";
import ProfessionalProjectsSection from "./content/ProfessionalProjectsSection";
import PersonalProjectsSection from "./content/PersonalProjectsSection";
import Footer from "../layout/Footer";
import clsx from "clsx";
import { motion } from "framer-motion";
import Socials from "@/contents/socials";

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
        "screen_container grid section_padding relative lg:grid-cols-3 lg:gap-10 xl:gap-20"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="h-fit lg:col-span-1 lg:sticky lg:top-14">
        <Me></Me>
        <Socials className="mt-6"></Socials>
        <Nav className="hidden lg:block lg:mt-16" menu={menu}></Nav>
      </div>
      <div className="mt-14 space-y-10 lg:col-span-2 lg:mt-0 lg:space-y-16">
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
