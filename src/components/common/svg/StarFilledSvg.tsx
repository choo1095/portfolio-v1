import clsx from "clsx";
import React from "react";

const StarFilledSvg = (props: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 24 24"
      className={clsx(props.className)}
    >
      <path
        fill={props.color}
        d="m5.825 21l1.625-7.025L2 9.25l7.2-.625L12 2l2.8 6.625l7.2.625l-5.45 4.725L18.175 21L12 17.275z"
      />
    </svg>
  );
};

export default StarFilledSvg;
