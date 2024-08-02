import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { Tooltip, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipArrow, TooltipContent } from "@radix-ui/react-tooltip";
import StarRating from "./StarRating";

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

const Item = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "px-3 py-0.5 border-primary-800 border bg-primary-800/10 rounded-md relative w-fit text-primary-800 overflow-clip"
      )}
    >
      <span>{props.children}</span>
      <div
        className={clsx(
          "w-full absolute bottom-0 left-0 h-[2.5px] bg-primary-800"
        )}
        style={{
          width: `${props.level * 25}%`,
          backgroundColor: "var(--color-primary-900)",
        }}
      ></div>
    </div>
  );
};

const HoverPill = ({ level }: { level: 1 | 2 | 3 | 4 }) => {
  const skillTitle = () => {
    switch (level) {
      case 4:
        return "Frequent";
      case 3:
        return "Regular";
      case 2:
        return "Occasional";
      case 1:
        return "Limited";
    }
  };

  const skillDescription = () => {
    switch (level) {
      case 4:
        return "I have extensive experience with this and have used it in a large number of projects.";
      case 3:
        return "I have strong experience with this and am confident using it in various projects.";
      case 2:
        return "I have a solid understanding of this and have effectively applied it in various situations.";
      case 1:
        return "I have only worked with this in one or two projects and have limited knowledge.";
    }
  };

  return (
    <div
      className={clsx(
        "bg-primary-400/10 backdrop-blur-xl border-primary-900/30 border-solid border px-6 py-4 rounded-md w-64 mb-2"
      )}
    >
      <div className="flex items-start gap-4 mb-1">
        <span className="uppercase text-stone-500 font-semibold text-xs">
          Usage
        </span>

        <div className="flex gap-2 items-center">
          <span className="text-primary-900 text-xs uppercase font-bold">
            {skillTitle()}
          </span>

          <StarRating total={4} stars={level}></StarRating>
        </div>
      </div>
      <p className="text-sm text-stone-600">{skillDescription()}</p>

      <TooltipArrow className="fill-primary-900/50" />
    </div>
  );
};

const SkillPill = (props: Props) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const tooltipRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeTooltip = () => {
      if (tooltipRef.current && isTooltipOpen) {
        setIsTooltipOpen(false);
      }
    };

    document.addEventListener("mousedown", closeTooltip);
    document.addEventListener("scroll", closeTooltip);

    return () => {
      document.removeEventListener("mousedown", closeTooltip);
      document.removeEventListener("scroll", closeTooltip);
    };
  }, [isTooltipOpen]);

  return (
    <TooltipProvider disableHoverableContent={false}>
      <Tooltip delayDuration={100} open={isTooltipOpen}>
        <TooltipTrigger
          ref={tooltipRef}
          onMouseDown={() =>
            !isTooltipOpen ? setIsTooltipOpen(true) : undefined
          }
          onMouseEnter={() => setIsTooltipOpen(true)}
          onMouseLeave={() => setIsTooltipOpen(false)}
        >
          <Item className={clsx(props.children)} level={props.level}>
            {props.children}
          </Item>
        </TooltipTrigger>
        <TooltipContent>
          <HoverPill level={props.level} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default SkillPill;
