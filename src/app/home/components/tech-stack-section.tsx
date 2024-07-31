import React, { memo } from "react";
import Heading from "@/core/heading";
import ParagraphOpacityScroll from "@/components/ui-david/paragraph-opacity-scroll";
import TechStackScribbleSvg from "@/components/svg/tech-stack-scribble";
import TechStackParallax from "./tech-stack-section-parallax";

const TechStackSection = () => {
  return (
    <section
      className="relative mt-8 flex h-auto w-full flex-col overflow-hidden pb-28 pt-0 md:-mt-40 lg:mt-0 lg:pt-6 xl:pt-28 2xl:pt-0"
      id="tech-stack"
    >
      <div className="z-10 mx-auto flex max-w-[1536px] flex-col gap-6 px-6 md:px-14 xl:px-[13.5rem]">
        <Heading type={2}>Tech stack</Heading>

        <ParagraphOpacityScroll
          paragraphText={paragraphText}
          paragraphClassName="text-[34px] leading-[38px] md:text-6xl font-bold text-balance"
          wordClassName="mr-[10px] mt-[6px] md:mr-3 md:mt-2"
          coloredWords={[
            { word: "code", position: 2 },
            { word: "addict,", position: 3 },
          ]}
        />
      </div>

      <div className="absolute bottom-[40%] right-5 z-[-1] rotate-[90deg] md:bottom-[45%] md:right-[20%] 2xl:bottom-[50%] 2xl:right-[25%]">
        <TechStackScribbleSvg className="scale-[170%]" />
      </div>
      <div className="mt-20 xl:mt-28 2xl:mt-40">
        <TechStackParallax />
      </div>
    </section>
  );
};

const paragraphText = `As a code addict, my journey through tech has been fueled by a passion for learning and mastering frameworks and languages, with a recent focus on Next.js, TypeScript, and Tailwind.`;

export default memo(TechStackSection);
