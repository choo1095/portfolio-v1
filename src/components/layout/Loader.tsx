import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import { sleep } from "@/lib/utils";

interface Props {
  className?: string;
}

const LOADER_DURATION_SECONDS = 1.5;

const LOADER_EASE = "easeIn";

const loaderTextClass = "text-2xl font-sans-serif font-semibold md:text-3xl";
const percentageTextClass = "text-lg font-sans font-light md:text-xl";

const initialFadeClass = "opacity-0 translate-y-full";

const useLoaderAnimation = () => {
  const [scope, animate] = useAnimate();

  const { setLoaderComplete } = useInitializationContext();

  useEffect(() => {
    const _animate = async () => {
      // fade grey text in, then reveal red text
      await animate([
        [
          ".loading_background div",
          { transform: "translateY(0)", opacity: 1 },
          { delay: stagger(0.07) },
        ],
        [
          ".loading_foreground",
          { width: "100%", overflow: "clip" },
          { duration: LOADER_DURATION_SECONDS, delay: stagger(0.8) },
        ],
      ]);

      // set the properties required for the next animation to continue
      await animate([
        [".loading_background", { visibility: "hidden" }],
        [".loading_foreground", { overflow: "visible" }],
      ]);

      // fade out red text
      await animate([
        [
          ".loading_foreground div",
          { transform: "translateY(-120%)", opacity: 0 },
          { delay: stagger(0.05) },
        ],
      ]);

      await sleep(300);

      setLoaderComplete(true);
    };

    _animate();
  }, []);

  return scope;
};

const LoaderPercentage = () => {
  const [number, setNumber] = useState("0");

  useEffect(() => {
    const updateNumber = animate(0, 100, {
      duration: LOADER_DURATION_SECONDS,
      ease: LOADER_EASE,
      delay: 2,
      onUpdate: (latest: number) => setNumber(latest.toFixed(0)),
    });

    return () => {
      updateNumber.cancel();
    };
  }, []);

  return (
    <div className="relative items-end">
      <span className="loading_background flex text-stone-400 animate-pulse">
        <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>
          {number[0]}
        </div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>
          {number[1]}
        </div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>
          {number[2]}
        </div>
        <div className={clsx(percentageTextClass, initialFadeClass)}>%</div>
      </span>
      {/* <motion.span */}
      <motion.span
        className={clsx(
          percentageTextClass,
          "loading_foreground flex absolute left-0 bottom-0 text-primary-900"
        )}
        initial={{
          width: 0,
          overflow: "clip",
        }}
      >
        <div className={clsx(percentageTextClass)}>.</div>
        <div className={clsx(percentageTextClass)}>.</div>
        <div className={clsx(percentageTextClass)}>.</div>
        <div className={clsx(percentageTextClass)}>{number[0]}</div>
        <div className={clsx(percentageTextClass)}>{number[1]}</div>
        <div className={clsx(percentageTextClass)}>{number[2]}</div>
        <div className={clsx(percentageTextClass)}>%</div>
      </motion.span>
    </div>
  );
};

const Loader = (props: Props) => {
  const scope = useLoaderAnimation();

  return (
    <div
      ref={scope}
      className={clsx(
        props.className,
        "screen_container section_padding fixed top-0 left-0 bottom-0 right-0 z-50 flex items-end justify-start"
      )}
    >
      <div className="relative flex gap-1 items-end">
        <span className="loading_background flex text-stone-400 animate-pulse">
          <div className={clsx(loaderTextClass, initialFadeClass)}>L</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>o</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>a</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>d</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>i</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>n</div>
          <div className={clsx(loaderTextClass, initialFadeClass)}>g</div>
        </span>

        <motion.span
          className={clsx(
            "loading_foreground flex absolute left-0 bottom-0 text-primary-900"
          )}
          initial={{
            width: 0,
            overflow: "clip",
          }}
        >
          <div className={clsx(loaderTextClass)}>L</div>
          <div className={clsx(loaderTextClass)}>o</div>
          <div className={clsx(loaderTextClass)}>a</div>
          <div className={clsx(loaderTextClass)}>d</div>
          <div className={clsx(loaderTextClass)}>i</div>
          <div className={clsx(loaderTextClass)}>n</div>
          <div className={clsx(loaderTextClass)}>g</div>
        </motion.span>

        <LoaderPercentage></LoaderPercentage>
      </div>
    </div>
  );
};

export default Loader;
