import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const SectionHeader = (props: Props) => {
  return (
    <h2 className="content_fade sticky top-0 z-20 py-2 -my-2 mb-4 flex items-center gap-4 text-primary-900 bg-stone-200/80 backdrop-blur-sm md:border-none lg:relative lg:backdrop-blur-none lg:bg-transparent">
      <div className="h-8 w-1 bg-primary-900 md:hidden"></div>
      <div className="hidden w-12 h-0.5 bg-primary-900/80 md:block"></div>
      <span className="font-semibold">{props.children}</span>
    </h2>
  );
};

export default SectionHeader;
