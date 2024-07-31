"use client";

import { useNavContext } from "@/contexts/useNavContext";
import { sleep } from "@/lib/utils";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
              <motion.div
                className={clsx(
                  {
                    "bg-primary-900": highlightedSection === item.id,
                  },
                  "absolute top-2 left-0 bottom-2"
                )}
                animate={
                  highlightedSection === item.id
                    ? { opacity: 1, width: 4 }
                    : { opacity: 0, width: 1 }
                }
                transition={{
                  delay: 0.03,
                  ease: "backIn",
                }}
                exit={{ opacity: 0, width: 0 }}
              ></motion.div>
              <motion.span
                className={clsx(
                  {
                    "text-primary-900 font-medium":
                      highlightedSection === item.id,
                  },
                  {
                    "text-stone-600 group-hover/nav:text-primary-900":
                      highlightedSection !== item.id,
                  }
                )}
                animate={
                  highlightedSection === item.id
                    ? {
                        transform: "translateX(20px)",
                        fontWeight: "500",
                      }
                    : { transform: "translateX(0)", fontWeight: "400" }
                }
                transition={{
                  delay: 0.08,
                  ease: "easeOut",
                }}
              >
                {item.title}
              </motion.span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
  ``;
};

export default Nav;
