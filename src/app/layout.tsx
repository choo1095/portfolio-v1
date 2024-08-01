import type { Metadata } from "next";
import "./globals.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { crimsonText, raleway } from "./fonts";
import clsx from "clsx";

gsap.registerPlugin(useGSAP);

export const metadata: Metadata = {
  title: "Choo En-Ni | Developer Porfolio",
  description:
    "Hello! Here is my portfolio where I showcase the various web and mobile projects that I've worked on over the years.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(raleway.variable, crimsonText.variable)}>
        {children}
      </body>
    </html>
  );
}
