import clsx from "clsx";
import React from "react";

const ArrowOutwardsSvg = (props: SvgProps) => {
  return (
    <svg
      className={clsx(props.className)}
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? 32}
      height={props.height ?? 32}
      viewBox="0 0 24 24"
    >
      <path
        fill={props.color}
        d="M6.189 17.289L5.5 16.6L15.58 6.5H6.289v-1h11v11h-1V7.208z"
      />
    </svg>
  );
};

export default ArrowOutwardsSvg;
