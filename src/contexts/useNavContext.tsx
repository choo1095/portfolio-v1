"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavContextType {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export function useNavContext(): NavContextType {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavProvider");
  }
  return context;
}

interface NavProviderProps {
  children: ReactNode;
}

export function NavProvider({ children }: NavProviderProps): JSX.Element {
  const [currentSection, setCurrentSection] = useState<string>("about");

  const value = {
    currentSection,
    setCurrentSection,
  };

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}
