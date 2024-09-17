import type { Metadata } from "next";
import { primaryFont, headingFont } from "@/core/fonts";
import "./globals.css";
import SmoothScroll from "@/core/smooth-scroll";
import { CSPostHogProvider } from "./_analytics/provider";
import { CookieBanner } from "@/components/ui-david/cookie-banner";
import TopNavigationLogo from "@/components/ui-david/top-navigation-logo";
import { configuration } from "@/configuration";

export const metadata: Metadata = {
  title: configuration.site.title,
  description: configuration.site.description,
  openGraph: {
    url: configuration.site.baseUrl,
    siteName: configuration.site.title,
    description: configuration.site.description,
    images: [
      {
        url: `${configuration.site.baseUrl}/images/ds-opengraph-banner.webp`,
        alt: "david slaninka banner full-stack engineer web development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: configuration.site.title,
    description: configuration.site.description,
    creator: configuration.twitter.username,
    site: configuration.twitter.username,
    images: [
      {
        url: `${configuration.site.baseUrl}/images/ds-opengraph-banner.webp`,
        alt: "david slaninka banner full-stack engineer web development",
      },
    ],
  },
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
