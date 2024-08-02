import React from "react";
import SkillPill from "../common/SkillPill";
import { SkillCategory } from "@/types/skillCategory";
import clsx from "clsx";

interface Props {
  data: SkillCategory;
  className?: string;
}

const SkillCategoryCard = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "flex flex-col sm:gap-5 sm:flex-row sm:border-l sm:border-solid sm:border-l-zinc-400/50 sm:px-6 sm:py-1"
      )}
    >
      <h3 className="flex items-center mb-3 gap-4 sm:w-36 sm:items-start md:w-40">
        <div className="h-6 w-1 bg-stone-600/50 sm:hidden"></div>
        <span className="text-sm font-semibold uppercase text-zinc-600/50 sm:text-sm">
          {props.data.category}
        </span>
      </h3>
      <div className="sm:flex-1 sm:mb-6">
        {props.data.subcategory.map((subcategory) => (
          <div key={subcategory.name} className="mb-2">
            {subcategory.name && (
              <h4 className="font-light text-stone-600 mb-1">
                {subcategory.name}
              </h4>
            )}
            <div key={subcategory.name} className="flex flex-wrap gap-2 mb-3">
              {subcategory.items.map((item) => (
                <SkillPill key={item.skillName} level={item.level}>
                  {item.skillName}
                </SkillPill>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategoryCard;
