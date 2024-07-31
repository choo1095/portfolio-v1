"use client";

import { sleep } from "@/lib/utils";
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
  loaderComplete: boolean;
  setLoaderComplete: React.Dispatch<React.SetStateAction<boolean>>;
  oneSecondAfterInitialized: boolean;
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
  const [oneSecondAfterInitialized, setOneSecondAfterInitialized] =
    useState<boolean>(false);

  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    if (loaderComplete) {
      setInitialized(true);

      sleep(1000).then(() => {
        setOneSecondAfterInitialized(true);
      });
    }
  }, [loaderComplete]);

  const value = {
    initialized,
    setInitialized,
    loaderComplete,
    setLoaderComplete,
    oneSecondAfterInitialized,
  };

  return (
    <InitializationContext.Provider value={value}>
      {children}
    </InitializationContext.Provider>
  );
}
