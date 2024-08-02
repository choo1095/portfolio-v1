import { placeholderBase64 } from "@/constants/assets";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const CommonImage = (props: Props) => {
  const [src, setSrc] = useState(props.src);

  const handleError = () => {
    setSrc(placeholderBase64);
  };

  return (
    <Image
      className={clsx(props.className)}
      src={src}
      alt={props.alt}
      onError={handleError}
      width={props.width}
      height={props.height}
    ></Image>
  );
};

export default CommonImage;
