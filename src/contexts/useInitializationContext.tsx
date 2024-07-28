"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

interface InitializationContextType {
  initialized: boolean;
  setInitialized: React.Dispatch<React.SetStateAction<boolean>>;
  scrollLottieLoaded: boolean;
  setScrollLottieLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundLoaded: boolean;
  setBackgroundLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  loaderComplete: boolean;
  setLoaderComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const InitializationContext = createContext<
  InitializationContextType | undefined
>(undefined);

export function useInitializationContext(): InitializationContextType {
  const context = useContext(InitializationContext);
  if (!context) {
    throw new Error(
      "useInitializationContext must be used within a InitializationProvider"
    );
  }
  return context;
}

interface InitializationProviderProps {
  children: ReactNode;
}

export function InitializationProvider({
  children,
}: InitializationProviderProps): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>(false);

  const [scrollLottieLoaded, setScrollLottieLoaded] = useState(false);
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    if (scrollLottieLoaded && backgroundLoaded && loaderComplete) {
      setInitialized(true);
    }
  }, [scrollLottieLoaded, backgroundLoaded, loaderComplete]);

  const value = {
    initialized,
    setInitialized,
    scrollLottieLoaded,
    setScrollLottieLoaded,
    backgroundLoaded,
    setBackgroundLoaded,
    loaderComplete,
    setLoaderComplete,
  };

  return (
    <InitializationContext.Provider value={value}>
      {children}
    </InitializationContext.Provider>
  );
}
