"use client";

import { useNavContext } from "@/contexts/useNavContext";
import { sleep } from "@/lib/utils";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  menu: MenuItem[];
}

const Nav = (props: Props) => {
  const { currentSection } = useNavContext();

  const [highlightedSection, setHighlightedSection] = useState("");

  useEffect(() => {
    setHighlightedSection(currentSection);
  }, [currentSection]);

  const onClickNav = async (navId: string) => {
    await sleep(300);
    setHighlightedSection(() => navId);
  };

  return (
    <nav className={clsx(props.className)}>
      <ul>
        {props.menu.map((item) => (
          <li className="relative" key={item.id}>
            <a
              className="group/nav flex items-center py-3 w-fit"
              href={`#${item.id}`}
              onClick={() => onClickNav(item.id)}
            >
              <div
                className={clsx(
                  {
                    "bg-primary-900 w-1": highlightedSection === item.id,
                  },
                  "absolute top-2 left-0 bottom-2"
                )}
              ></div>
              <span
                className={clsx(
                  {
                    "text-primary-900 font-medium ml-5":
                      highlightedSection === item.id,
                  },
                  {
                    "text-stone-600 group-hover/nav:text-primary-900":
                      highlightedSection !== item.id,
                  }
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
