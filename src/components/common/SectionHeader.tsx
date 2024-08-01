import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const SectionHeader = (props: Props) => {
  return (
    <h2 className="flex items-center gap-4 text-primary-900 py-1 mb-4 md:py-0 md:mb-5 md:border-none">
      <div className="h-8 w-1 bg-primary-900 md:hidden"></div>
      <div className="hidden w-12 h-0.5 bg-primary-900/80 md:block"></div>
      <span className="font-semibold">{props.children}</span>
    </h2>
  );
};

export default SectionHeader;
