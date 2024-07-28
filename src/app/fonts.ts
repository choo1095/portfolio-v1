import { Crimson_Text, Raleway } from "next/font/google";

export const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-raleway",
});

export const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  preload: true,
  variable: "--font-crimson-text",
});
