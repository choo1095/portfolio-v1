import { useState, useEffect, useRef } from "react";

export enum ScrollDirection {
  UP = "up",
  DOWN = "down",
  NONE = "none",
}

const SCROLL_TIMEOUT_DURATION_SECONDS = 0.2;

function useScroll() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(
    ScrollDirection.NONE
  );
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let isScrollingTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      // update scrollY value
      setScrollY(window.scrollY);

      // update scroll direction
      clearTimeout(isScrollingTimeout);
      if (e.deltaY > 0) {
        setScrollDirection(ScrollDirection.DOWN);
      } else {
        setScrollDirection(ScrollDirection.UP);
      }

      // after user stops scrolling, automatically set scroll direction to NONE
      isScrollingTimeout = setTimeout(() => {
        setScrollDirection(ScrollDirection.NONE);
      }, SCROLL_TIMEOUT_DURATION_SECONDS * 1000);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return { scrollDirection, scrollY };
}

export default useScroll;
