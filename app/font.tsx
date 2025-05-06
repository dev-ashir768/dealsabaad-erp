import { Lato } from "next/font/google";

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  fallback: ["sans-serif"],
  preload: true,
});
