import React from "react";
import ButtonPrimary from "@/components/ui-david/button-primary";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import HeroSectionImages from "./hero-section-images";

const HeroSection = () => {
  return (
    <section className="relative h-fit min-h-screen w-full">
      <div className="pointer-events-none absolute left-[50%] top-[44%] z-10 flex h-fit w-full max-w-[800px] -translate-x-1/2 -translate-y-1/2 flex-col items-start justify-center text-center lg:left-[43.5%] lg:top-1/2 lg:text-left xl:left-[42%]">
        <Headlines />
      </div>
      <div className="absolute left-1/2 top-[95%] -translate-x-1/2 -translate-y-1/2 md:top-[100%] lg:left-[53%] lg:top-[50%] lg:translate-x-0">
        <HeroSectionImages />
      </div>
    </section>
  );
};

const Headlines = () => {
  return (
    <>
      <h1 className="w-full pb-6 font-heading uppercase tracking-widest lg:w-fit lg:pl-2">
        David Slaninka
      </h1>
      <h2 className="w-full text-5xl font-extrabold uppercase tracking-wide md:text-7xl lg:w-fit lg:text-8xl">
        <span className="block bg-gradient-to-b from-foreground-700/90 to-foreground-600/90 bg-clip-text pb-3 text-transparent">
          Creative
        </span>
        <span className="block bg-gradient-to-b from-primary-500/90 from-40% to-accent-500/90 bg-clip-text pb-3 text-transparent">
          Full-stack
        </span>
        <span className="block bg-gradient-to-b from-foreground-700/90 to-foreground-600/90 bg-clip-text pb-3 text-transparent">
          Engineer
        </span>
      </h2>
      <div className="flex w-full flex-col items-center justify-start gap-7 pt-8 lg:w-fit lg:flex-row lg:gap-14">
        <ButtonPrimary
          text="Learn More"
          backgroundColor="#131313"
          borderColor="#ababab"
          hoverBorderColor="#f05a19"
          textColor="#ababab"
          hoverTextColor="#131313"
          link="/#about"
        />
        <SocialIcons />
      </div>
    </>
  );
};

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <a
        href="https://twitter.com/DavidMcBacon"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Twitter profile"
      >
        <FaXTwitter
          size={32}
          className="pointer-events-auto cursor-pointer text-foreground/60 transition-all duration-200 ease-in-out hover:scale-110 hover:text-primary-500"
        />
      </a>
      <a
        href="https://github.com/david-mcbacon"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="GitHub profile"
      >
        <FaGithub
          size={32}
          className="pointer-events-auto cursor-pointer text-foreground/60 transition-all duration-200 ease-in-out hover:scale-110 hover:text-primary-500"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/david-slaninka/"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="LinkedIn profile"
      >
        <FaLinkedin
          size={32}
          className="pointer-events-auto cursor-pointer text-foreground/60 transition-all duration-200 ease-in-out hover:scale-110 hover:text-primary-500"
        />
      </a>
    </div>
  );
};

export default HeroSection;
