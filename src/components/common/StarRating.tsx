import React from "react";
import StarFilledSvg from "./svg/StarFilledSvg";
import clsx from "clsx";

interface Props {
  total: number;
  stars: number;
  className?: string;
}

const StarRating = (props: Props) => {
  return (
    <div className={clsx("flex items-end gap-1", props.className)}>
      {[...Array(props.total)].map((_, index) =>
        index < props.stars ? (
          <StarFilledSvg
            key={index}
            className="fill-primary-900"
            width={14}
            height={14}
          ></StarFilledSvg>
        ) : (
          <StarFilledSvg
            key={index}
            className="fill-stone-400"
            width={14}
            height={14}
          ></StarFilledSvg>
        )
      )}
    </div>
  );
};

export default StarRating;
