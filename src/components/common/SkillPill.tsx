import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  /**
   * level of skill level.
   * - 1: confident
   * - 2: experienced
   * - 3: decent
   * - 4: limited experience
   */
  level: 1 | 2 | 3 | 4;
}

const SkillPill = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "px-3 py-0.5 border-primary-900 border bg-primary-900/10 rounded-md relative w-fit text-primary-900 overflow-clip"
      )}
    >
      <span>{props.children}</span>
      <div
        className={clsx(
          "w-full absolute bottom-0 left-0 h-[2.5px] bg-primary-900"
        )}
        style={{
          width: `${100 - (props.level - 1) * 25}%`,
          backgroundColor: "var(--color-primary-900)",
        }}
      ></div>
    </div>
  );
};

export default SkillPill;
