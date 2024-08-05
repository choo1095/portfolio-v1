import React, { useEffect } from "react";
import Nav from "../layout/Nav";
import AboutMeSection from "./content/AboutMeSection";
import SkillsSection from "./content/SkillsSection";
import ProfessionalProjectsSection from "./content/ProfessionalProjectsSection";
import PersonalProjectsSection from "./content/PersonalProjectsSection";
import Footer from "../layout/Footer";
import clsx from "clsx";
import { stagger, useAnimate } from "framer-motion";
import strings from "@/constants/strings";
import SocialButton from "../common/SocialButton";
import LinkedInSvg from "../common/svg/LinkedInSvg";

interface Props {
  className?: string;
  menu: MenuItem[];
}

const useContentShowAnimation = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const _animate = async () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

      // fade in my personal info
      await animate(
        ".me_fade_in",
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          duration: 0.3,
          delay: stagger(0.08, { startDelay: 0.5 }),
          ease: "easeInOut",
        }
      );

      // fade in each item in nav bar
      if (isDesktop) {
        await animate(
          ".nav_fade_in",
          {
            opacity: 1,
            transform: "translateX(0)",
          },
          {
            delay: stagger(0.08),
            ease: "easeInOut",
          }
        );
      } else {
        animate(".nav_fade_in", {
          opacity: 1,
          transform: "translateX(0)",
        });
      }

      // fade in contents
      await animate([
        [
          ".content_fade",
          {
            opacity: 1,
            transform: "translateY(0)",
          },
          {
            ease: "easeInOut",
            delay: stagger(0.08),
            at: "-0.5",
          },
        ],
      ]);
    };

    _animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scope;
};

const Me = () => {
  return (
    <div>
      <h1 className="me_fade_in">{strings.me.name}</h1>
      <h2 className="me_fade_in mt-1">{strings.me.title}</h2>
      <p className="me_fade_in text-left text-md mt-3 leading-normal text-stone-600 text-balance">
        {strings.me.description}
      </p>

      <div className={clsx("mt-4 flex gap-3 lg:mt-6")}>
        {/* LinkedIn */}
        <div className="me_fade_in">
          <SocialButton
            link={strings.socials.linkedin.url}
            title={strings.socials.linkedin.title}
          >
            <LinkedInSvg
              width={16}
              height={16}
              className="mb-0.5 group-hover/social-link:fill-primary-900"
            ></LinkedInSvg>
          </SocialButton>
        </div>
      </div>
    </div>
  );
};

const ContentSection = (props: Props) => {
  const { menu } = props;
  const scope = useContentShowAnimation();

  return (
    <div
      ref={scope}
      className={clsx(
        props.className,
        "screen_container grid section_padding relative lg:grid-cols-3 lg:gap-10 xl:gap-20"
      )}
    >
      <div className="h-fit lg:col-span-1 lg:sticky lg:top-14">
        <Me></Me>
        <Nav className="hidden lg:block lg:mt-16" menu={menu}></Nav>
      </div>
      <div className="mt-10 space-y-10 lg:col-span-2 lg:mt-0 lg:space-y-16">
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
