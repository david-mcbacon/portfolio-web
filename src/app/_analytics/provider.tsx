"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { cookieConsentGiven } from "@/components/ui-david/cookie-banner";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    persistence:
      cookieConsentGiven() === "yes" ? "localStorage+cookie" : "memory",
    autocapture: {
      dom_event_allowlist: ["submit"],
    },
  });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
