import clsx from "clsx";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  percentage: number;
}

const SkillPill = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "px-3 py-0.5 border-primary-800 border bg-primary-800 bg-opacity-10 rounded-md relative w-fit text-primary-800 overflow-clip"
      )}
    >
      <span>{props.children}</span>
      <div
        className={clsx(
          "w-full absolute bottom-0 left-0 h-[2.5px] bg-primary-900"
        )}
        style={{
          width: `${props.percentage}%`,
          backgroundColor: "var(--color-primary-900)",
        }}
      ></div>
    </div>
  );
};

export default SkillPill;
