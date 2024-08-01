import SocialButton from "@/components/common/LinkedInButton";
import LinkedInSvg from "@/components/common/svg/LinkedInSvg";
import strings from "@/constants/strings";
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

const Socials = (props: Props) => {
  return (
    <div className={clsx("flex gap-3 mt-6", props.className)}>
      {/* LinkedIn */}
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
  );
};

export default Socials;
