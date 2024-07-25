import { linkedIn } from "@/app/constants/assets";
import strings from "@/app/constants/strings";
import Image from "next/image";
import React from "react";

const LinkedInButton = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={linkedIn} alt="LinkedIn" width={20} height={20}></Image>

      <span>{strings.socials.linkedin.title}</span>
    </div>
  );
};

export default LinkedInButton;
