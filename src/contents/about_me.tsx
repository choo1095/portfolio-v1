import InlineLink from "@/components/common/InlineLink";
import React from "react";

const AboutMeContents = () => {
  return (
    <>
      <p>
        I began my tech career with native iOS app development using Swift as a
        mobile application developer. I then transitioned to Flutter to meet the
        need for developing Android apps in addition to iOS. This shift allowed
        me to create hybrid apps for both platforms. While working with Flutter,
        I gradually delved into front-end development using Vue and Nuxt,
        expanding my experience with dynamic web design and user interfaces.
        This experience eventually led me to embrace full-stack development,
        where I now build comprehensive applications using Laravel, integrating
        both front-end and back-end technologies. Currently, I am a developer
        for{" "}
        <InlineLink
          link="https://www.mobius-digital.com/"
          text="Mobius Digital Systems"
        ></InlineLink>
        , a Malaysian app development company.
      </p>
      <p>
        Even though I have been a mobile apps and web developer for the past
        three years, my journey began elsewhere. I was an accounting student
        during my high school years, which continued into my undergraduate
        studies. I realized early on that it was not the right path for me and
        eventually pivoted to a career in development after persevering through
        and completing my accounting degree.
      </p>
      <p>
        Throughout my journey, I have been experimenting with and exploring
        different programming languages, constantly broadening my technical
        knowledge, embracing new challenges along the way so that I can be a
        better version of myself every day.
      </p>
    </>
  );
};

export default AboutMeContents;
