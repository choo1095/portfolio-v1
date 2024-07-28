import strings from "@/constants/strings";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";

interface Props {
  className?: string;
}

const DURATION_SECONDS = 1.5;
const EASE = "easeIn";

const loaderTextClass = "text-2xl font-sans-serif font-semibold md:text-3xl";
const percentageTextClass = "text-lg font-sans font-light md:text-xl";

const LoaderPercentage = () => {
  const [number, setNumber] = useState("0");

  useEffect(() => {
    const updateNumber = animate(0, 100, {
      duration: DURATION_SECONDS,
      ease: EASE,
      onUpdate: (latest: number) => setNumber(latest.toFixed(0)),
    });

    return () => {
      updateNumber.cancel();
    };
  }, []);

  return (
    <span className="relative">
      <span
        className={clsx(percentageTextClass, "text-stone-400 animate-pulse")}
      >
        ...{number}%
      </span>
      <motion.span
        className={clsx(
          percentageTextClass,
          "absolute left-0 text-primary-800 text-opacity-50 overflow-clip"
        )}
        initial={{ width: "0px" }}
        animate={{ width: "min-content" }}
        transition={{
          duration: DURATION_SECONDS / 4,
          ease: "easeOut",
          delay: DURATION_SECONDS,
        }}
      >
        ...100%
      </motion.span>
    </span>
  );
};

const Loader = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "screen_container section_padding fixed top-0 left-0 bottom-0 right-0 z-50 flex items-end justify-start"
      )}
    >
      <div className="relative">
        <p className="flex gap-1 items-end">
          <span
            className={clsx(loaderTextClass, "text-stone-400 animate-pulse")}
          >
            {strings.loading}
          </span>
          <LoaderPercentage></LoaderPercentage>
        </p>
        <motion.p
          initial={{ width: "0%" }}
          animate={{ width: "min-content" }}
          transition={{
            duration: DURATION_SECONDS,
            ease: EASE,
          }}
          className={clsx(
            loaderTextClass,
            "absolute left-0 bottom-0 text-primary-800 overflow-clip"
          )}
        >
          {strings.loading}
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
