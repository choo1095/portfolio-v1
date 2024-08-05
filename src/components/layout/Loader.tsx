import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { animate, motion, stagger, useAnimate } from "framer-motion";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import { sleep } from "@/lib/utils";
import strings from "@/constants/strings";

const initial = {
  opacity: 0,
  transform: "translateY(50%)",
};

interface Props {
  className?: string;
}

const useFadeSequenceAnimation = () => {
  const { setLoaderComplete } = useInitializationContext();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const _animate = async () => {
      await animate([
        [
          "#loader_name div",
          { transform: "translateY(0)", opacity: 1 },
          { duration: 0.4, delay: stagger(0.15), ease: "easeIn" },
        ],
        [
          "#loader_message div",
          { transform: "translateY(0)", opacity: 1 },
          {
            duration: 0.4,
            delay: stagger(0.1, { startDelay: 0 }),
            ease: "easeIn",
          },
        ],
      ]);

      await sleep(1000);

      await animate([
        [
          "#loader_name div",
          { transform: "translateY(-50%)", opacity: 0 },
          { duration: 0.4, delay: stagger(0.15), ease: "circOut" },
        ],
        [
          "#loader_message div",
          { transform: "translateY(-50%)", opacity: 0 },
          {
            duration: 0.4,
            delay: stagger(0.1),
            ease: "circOut",
            at: "-0.25",
          },
        ],
        [
          "#loader_line_cover",
          { width: "100%" },
          { duration: 1, ease: "circOut", at: "-0.2" },
        ],
        [
          "#loader_percentage",
          { transform: "translateY(-50%)", opacity: 0 },
          { at: "-0.1" },
        ],
      ]);

      setLoaderComplete(true);
    };

    _animate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return scope;
};

const usePercentageAnimation = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    animate(0, 100, {
      duration: 2,
      ease: "circInOut",
      delay: 1,
      onUpdate: (latest: number) => setNumber(latest),
    });
  }, []);

  return { number };
};

const LoaderPercentage = (props: Props) => {
  const { number } = usePercentageAnimation();

  return (
    <div
      id="loader_percentage"
      className={clsx(
        "flex gap-2 items-center overflow-visible text-lg sm:text-xl",
        props.className
      )}
    >
      <div className="mt-0.5 bg-stone-600 w-2 h-2 animate-pulse rounded-full"></div>
      <div className="w-fit">{number.toFixed(0)}%</div>
    </div>
  );
};

const LoaderContents = (props: Props) => {
  const { number } = usePercentageAnimation();
  const scope = useFadeSequenceAnimation();

  return (
    <div className="bg-stone-200 relative w-dvw h-dvh" ref={scope}>
      {/* line */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 screen_container">
        <div
          style={{ width: `${number}%` }}
          className="h-px rounded-full bg-stone-700"
        ></div>
        <div
          id="loader_line_cover"
          className="relative origin-right w-0 -translate-y-px h-px rounded-full bg-stone-200"
        ></div>
      </div>

      {/* my name and loader percentage */}
      <div className="screen_container h-fit w-dvw relative top-1/2 -translate-y-full left-0 pb-3">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h1 id="loader_name" className="flex gap-1.5 text-3xl sm:text-4xl">
              {strings.me.name.split(" ").map((item) => (
                <motion.div key={item} initial={initial}>
                  {item}
                </motion.div>
              ))}
            </h1>
            <div
              id="loader_message"
              className="flex gap-1.5 text-sm sm:text-base"
            >
              {strings.loading_message.split(" ").map((item) => (
                <motion.div key={item} initial={initial}>
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <LoaderPercentage className="hidden w-16 sm:flex"></LoaderPercentage>
        </div>
      </div>

      {/* loader percentage (mobile only)  */}
      <div className="screen_container section_padding absolute top-0 left-0 bottom-0 right-0 sm:hidden">
        <div className="relative w-full h-full">
          <LoaderPercentage className="absolute bottom-0 right-0"></LoaderPercentage>
        </div>
      </div>
    </div>
  );
};

// const Curtains = (props: Props) => {
//   return (
//     <div
//       className={clsx(
//         "absolute top-0 left-0 right-0 bottom-0 flex flex-col",
//         props.className
//       )}
//     >
//       <motion.div
//         className="bg-stone-700 w-full h-full"
//         initial={{ transform: "translateY(100%) " }}
//         animate={{ transform: "translateY(-100%)" }}
//         transition={{
//           ease: "easeOut",
//           duration: 0.5,
//           delay: 4.5,
//         }}
//       ></motion.div>
//       {/* <div className="w-full h-px bg-stone-300"></div>
//       <motion.div
//         className="bg-stone-700 w-full h-1/2"
//         animate={{ transform: "translateY(100%)" }}
//         transition={{
//           duration: 1,
//         }}
//       ></motion.div> */}
//     </div>
//   );
// };

const Loader = (props: Props) => {
  return (
    <motion.div
      className={clsx(
        props.className,
        "w-dvw h-dvh fixed top-0 left-0 text-stone-700"
      )}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 4.3 }}
    >
      {/* <Curtains></Curtains> */}
      <LoaderContents></LoaderContents>
    </motion.div>
  );
};

export default Loader;
