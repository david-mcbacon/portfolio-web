"use client";
import { useEffect, useState } from "react";
import { usePostHog } from "posthog-js/react";
import Link from "next/link";

export function cookieConsentGiven() {
  if (!localStorage.getItem("cookie_consent")) {
    return "undecided";
  }
  return localStorage.getItem("cookie_consent");
}

export function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<string | null>("");
  const posthog = usePostHog();

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven());
  }, []);

  useEffect(() => {
    if (consentGiven !== "") {
      posthog.set_config({
        persistence: consentGiven === "yes" ? "localStorage+cookie" : "memory",
      });
    }
  }, [consentGiven]);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie_consent", "yes");
    setConsentGiven("yes");
  };

  const handleDeclineCookies = () => {
    localStorage.setItem("cookie_consent", "no");
    setConsentGiven("no");
  };

  if (consentGiven === "undecided")
    return (
      <div className="fixed bottom-0 right-0 z-50 w-full border bg-background/90 p-6 md:bottom-2 md:right-2 md:w-[400px]">
        <div>
          <p className="text-xs tracking-wide">
            I use tracking cookies to understand how you use the website. Please
            accept cookies to help me improve. If you are interested in the
            details, check my{" "}
            <Link href="/cookie-policy" className="underline">
              Cookie Policy.
            </Link>
          </p>
          <div className="flex items-center justify-start gap-5 pt-5">
            <button
              onClick={handleAcceptCookies}
              // size={"sm"}
              className="rounded-full bg-secondary-300 px-2 py-1 text-xs text-background transition-colors duration-200 ease-in-out hover:bg-secondary-400"
            >
              Accept cookies
            </button>
            <button
              onClick={handleDeclineCookies}
              className="text-xs transition-colors duration-200 ease-in-out hover:text-foreground-200"
              // variant={"ghost"}
              // size={"sm"}
            >
              Decline cookies
            </button>
          </div>
        </div>
      </div>
    );
  return null;
}
