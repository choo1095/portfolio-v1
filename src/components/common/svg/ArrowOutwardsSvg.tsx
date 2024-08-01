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
        d="m16 8.4l-8.9 8.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7L14.6 7H7q-.425 0-.712-.288T6 6t.288-.712T7 5h10q.425 0 .713.288T18 6v10q0 .425-.288.713T17 17t-.712-.288T16 16z"
      />
    </svg>
  );
};

export default ArrowOutwardsSvg;
