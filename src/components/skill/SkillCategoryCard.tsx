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
    <div className={clsx("content_fade", props.className, "flex flex-col")}>
      <h3 className="flex items-center mb-3 gap-4 sm:mb-4 sm:grid sm:grid-cols-4 sm:gap-5 md:grid-cols-5">
        <div className="h-6 w-1 bg-stone-600/60 sm:w-0 sm:hidden"></div>
        <span className="flex-1 text-sm font-semibold uppercase text-stone-600/60 sm:text-right sm:text-primary-900">
          {props.data.category}
        </span>
        <div className="hidden h-px w-auto bg-primary-800/20 col-span-3 sm:block md:col-span-4"></div>
      </h3>
      <div className="space-y-3 sm:flex-1 sm:space-y-3">
        {props.data.subcategory.map((subcategory) => (
          <div
            key={subcategory.name}
            className="grid gap-1 sm:gap-5 sm:grid-cols-4 md:grid-cols-5"
          >
            {subcategory.name && (
              <h4 className="text-sm font-light text-stone-600 col-span-1 sm:text-right sm:mt-1">
                {subcategory.name}
              </h4>
            )}
            <div
              key={subcategory.name}
              className="flex flex-wrap gap-2 col-span-2 sm:col-span-3 sm:gap-3 md:col-span-4"
            >
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
