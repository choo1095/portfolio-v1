import strings from "@/app/constants/strings";
import React from "react";

const AboutMeSection = () => {
  return (
    <div className="section_padding md:py-0">
      <h2>{strings.about_me.header}</h2>
      <p>{strings.about_me.contents}</p>
    </div>
  );
};

export default AboutMeSection;
