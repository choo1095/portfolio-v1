import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { animate, motion, stagger, useAnimate, useSpring } from "framer-motion";
import { useInitializationContext } from "@/contexts/useInitializationContext";
import { sleep } from "@/lib/utils";
import Me from "../me/Me";
import strings from "@/constants/strings";

const initial = {
  opacity: 0,
  transform: "translateY(50%)",
};

interface Props {
  className?: string;
}

// const LOADER_DURATION_SECONDS = 2;

// const loaderTextClass = "text-2xl font-sans-serif font-semibold md:text-3xl";
// const percentageTextClass = "text-lg font-sans font-light md:text-xl";

// const initialFadeClass = "opacity-0 translate-y-1/2";

// const useLoaderAnimation = () => {
//   const [scope, animate] = useAnimate();

//   const { setLoaderComplete } = useInitializationContext();

//   useEffect(() => {
//     const _animate = async () => {
//       // fade grey text in, then reveal red text
//       await animate([
//         [
//           ".loading_background div",
//           { transform: "translateY(0)", opacity: 1 },
//           { delay: stagger(0.07), ease: "easeInOut" },
//         ],
//         [
//           ".loading_foreground",
//           { width: "100%", overflow: "clip" },
//           {
//             duration: LOADER_DURATION_SECONDS,
//             delay: stagger(0.8),
//             ease: [0, 0.43, 0.67, 0.9],
//           },
//         ],
//       ]);

//       // set the properties required for the next animation to continue
//       await animate([
//         [".loading_background", { visibility: "hidden" }],
//         [".loading_foreground", { overflow: "visible" }],
//       ]);

//       // fade out red text
//       await animate([
//         [
//           ".loading_foreground div",
//           { transform: "translateY(-50%)", opacity: 0 },
//           { delay: stagger(0.05), ease: "easeInOut" },
//         ],
//       ]);

//       await sleep(300);

//       setLoaderComplete(true);
//     };

//     _animate();
//   }, []);

//   return scope;
// };

// const LoaderPercentage = () => {
//   const [number, setNumber] = useState("0");

//   useEffect(() => {
//     const updateNumber = animate(0, 100, {
//       duration: LOADER_DURATION_SECONDS,
//       ease: "easeInOut",
//       delay: 2,
//       onUpdate: (latest: number) => setNumber(latest.toFixed(0)),
//     });

//     return () => {
//       updateNumber.cancel();
//     };
//   }, []);

//   return (
//     <div className="relative items-end">
//       <span className="loading_background flex text-stone-400 animate-pulse">
//         <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>.</div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>
//           {number[0]}
//         </div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>
//           {number[1]}
//         </div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>
//           {number[2]}
//         </div>
//         <div className={clsx(percentageTextClass, initialFadeClass)}>%</div>
//       </span>
//       {/* <motion.span */}
//       <motion.span
//         className={clsx(
//           percentageTextClass,
//           "loading_foreground flex absolute left-0 bottom-0 text-primary-900"
//         )}
//         initial={{
//           width: 0,
//           overflow: "clip",
//         }}
//       >
//         <div className={clsx(percentageTextClass)}>.</div>
//         <div className={clsx(percentageTextClass)}>.</div>
//         <div className={clsx(percentageTextClass)}>.</div>
//         <div className={clsx(percentageTextClass)}>{number[0]}</div>
//         <div className={clsx(percentageTextClass)}>{number[1]}</div>
//         <div className={clsx(percentageTextClass)}>{number[2]}</div>
//         <div className={clsx(percentageTextClass)}>%</div>
//       </motion.span>
//     </div>
//   );
// };

// const Loader = (props: Props) => {
//   const scope = useLoaderAnimation();

//   return (
//     <div
//       ref={scope}
//       className={clsx(
//         props.className,
//         "screen_container section_padding fixed top-0 left-0 bottom-0 right-0 z-50 flex items-end justify-start"
//       )}
//     >
//       <div className="relative flex gap-1 items-end">
//         <span className="loading_background flex text-stone-400 animate-pulse">
//           <div className={clsx(loaderTextClass, initialFadeClass)}>L</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>o</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>a</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>d</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>i</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>n</div>
//           <div className={clsx(loaderTextClass, initialFadeClass)}>g</div>
//         </span>

//         <motion.span
//           className={clsx(
//             "loading_foreground flex absolute left-0 bottom-0 text-primary-900"
//           )}
//           initial={{
//             width: 0,
//             overflow: "clip",
//           }}
//         >
//           <div className={clsx(loaderTextClass)}>L</div>
//           <div className={clsx(loaderTextClass)}>o</div>
//           <div className={clsx(loaderTextClass)}>a</div>
//           <div className={clsx(loaderTextClass)}>d</div>
//           <div className={clsx(loaderTextClass)}>i</div>
//           <div className={clsx(loaderTextClass)}>n</div>
//           <div className={clsx(loaderTextClass)}>g</div>
//         </motion.span>

//         <LoaderPercentage></LoaderPercentage>
//       </div>
//     </div>
//   );
// };

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

      await sleep(300);

      setLoaderComplete(true);
    };

    _animate();
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
    <div className="bg-stone-300 relative w-dvw h-dvh" ref={scope}>
      {/* line */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 screen_container">
        <div
          style={{ width: `${number}%` }}
          className="h-px rounded-full bg-stone-700"
        ></div>
        <div
          id="loader_line_cover"
          className="relative origin-right w-0 -translate-y-px h-px rounded-full bg-stone-300"
        ></div>
      </div>

      {/* my name and loader percentage */}
      <div className="screen_container h-fit w-dvw relative top-1/2 -translate-y-full left-0 pb-3">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <h1 id="loader_name" className="flex gap-1.5 text-3xl sm:text-4xl">
              {["Choo", "En-Ni"].map((item) => (
                <motion.div key={item} initial={initial}>
                  {item}
                </motion.div>
              ))}
            </h1>
            <div
              id="loader_message"
              className="flex gap-1.5 text-sm sm:text-base"
            >
              {["I", "make", "mobile", "apps", "and", "websites"].map(
                (item) => (
                  <motion.div key={item} initial={initial}>
                    {item}
                  </motion.div>
                )
              )}
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

const Curtains = (props: Props) => {
  return (
    <div
      className={clsx(
        "absolute top-0 left-0 right-0 bottom-0 flex flex-col",
        props.className
      )}
    >
      <motion.div
        className="bg-stone-700 w-full h-full"
        initial={{ transform: "translateY(100%) " }}
        animate={{ transform: "translateY(-100%)" }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 1,
        }}
      ></motion.div>
      {/* <div className="w-full h-px bg-stone-300"></div>
      <motion.div
        className="bg-stone-700 w-full h-1/2"
        animate={{ transform: "translateY(100%)" }}
        transition={{
          duration: 1,
        }}
      ></motion.div> */}
    </div>
  );
};

const Loader = (props: Props) => {
  return (
    <div
      className={clsx(
        props.className,
        "w-dvw h-dvh fixed top-0 left-0 text-stone-700"
      )}
    >
      {/* <Curtains></Curtains> */}
      <LoaderContents></LoaderContents>
    </div>
  );
};

export default Loader;
