import type { Metadata } from "next";
import { primaryFont, headingFont } from "@/core/fonts";
import "./globals.css";
import SmoothScroll from "@/core/smooth-scroll";
import { CSPostHogProvider } from "./_analytics/provider";
import { CookieBanner } from "@/components/ui-david/cookie-banner";
import TopNavigationLogo from "@/components/ui-david/top-navigation-logo";

export const metadata: Metadata = {
  title: "David Slaninka • Full-Stack Engineer • Web Development",
  description:
    "I'm a full-stack engineer focused on creating efficient and visually appealing websites and web applications. My work includes front-end and back-end development, data engineering, AI integration, and 3D implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CSPostHogProvider>
      <html
        lang="en"
        className={`no-scrollbar ${primaryFont.variable} ${headingFont.variable}`}
      >
        <SmoothScroll>
          <body
            className={`dark overscroll-none bg-background font-primary text-foreground`}
          >
            <TopNavigationLogo />
            {children}
            <CookieBanner />
          </body>
        </SmoothScroll>
      </html>
    </CSPostHogProvider>
  );
}
