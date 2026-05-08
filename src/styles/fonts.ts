import localFont from "next/font/local";
import { Newsreader } from "next/font/google";

export const gowunBatang = localFont({
  src: "./fonts/gowun-batang-700-subset.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
  variable: "--font-gowun-batang",
  preload: true,
});

export const pretendard = localFont({
  src: [
    {
      path: "./fonts/pretendard-400-subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/pretendard-600-subset.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-pretendard",
  preload: true,
});

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});
