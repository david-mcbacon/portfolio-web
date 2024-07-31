import { Orbitron, Nunito_Sans } from "next/font/google";

const primaryFont = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-primary",
  display: "swap",
  adjustFontFallback: false,
});

const headingFont = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-heading",
});

export { primaryFont, headingFont };
