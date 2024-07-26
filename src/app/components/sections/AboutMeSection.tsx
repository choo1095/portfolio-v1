import strings from "@/app/constants/strings";
import React from "react";

const AboutMeSection = () => {
  return (
    <section id="about" className="md:py-0">
      <h2 className="section_header">{strings.about_me.header}</h2>
      <p>{strings.about_me.contents}</p>
    </section>
  );
};

export default AboutMeSection;
