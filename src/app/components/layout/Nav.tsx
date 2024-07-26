"use client";

import strings from "@/app/constants/strings";
import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
}

const menu = [
  {
    id: "#about",
    title: strings.about_me.header,
  },
  {
    id: "#skills",
    title: strings.technical_skills.header,
  },
  {
    id: "#professional_projects",
    title: strings.professional_projects.header,
  },
  {
    id: "#personal_projects",
    title: strings.personal_projects.header,
  },
];

const Nav = (props: Props) => {
  const active = 0;
  return (
    <nav className={clsx(props.className)}>
      <ul className="space-y-2">
        {menu.map((item, index) => (
          <li className="relative py-1" key={item.id}>
            <a className="flex items-center" href={item.id}>
              <div
                className={clsx(
                  {
                    "bg-primary-900": index === active,
                  },
                  "w-1 absolute top-0 left-0 bottom-0"
                )}
              ></div>
              <span
                className={clsx(
                  {
                    "text-primary-900 font-medium": index === active,
                  },
                  "ml-5"
                )}
              >
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  ``;
};

export default Nav;
