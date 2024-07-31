import React, { memo } from "react";
import Heading from "@/core/heading";
import ParagraphOpacityScroll from "@/components/ui-david/paragraph-opacity-scroll";
import { InViewAnimation } from "@/core/in-view-animation";
import AboutMeScribbleSvg from "@/components/svg/about-me-scribble";

const paragraphText = `I'm an athlete-turned-geek, blending frontend engineering with seamless backend functionalities and AI & 3D integrations for a cutting-edge digital experience.`;

const alsoMeList = [
  "girl dad",
  "husband",
  "basketballer",
  "runner",
  "hiker",
  "ice plunger",
];

const AboutSection = () => {
  return (
    <section
      className="relative mx-auto flex h-auto w-full max-w-[1536px] flex-col px-6 pb-40 pt-60 md:px-14 md:pb-28 md:pt-[450px] lg:pb-28 lg:pt-40 xl:px-[13.5rem] 2xl:pb-40"
      id="about"
    >
      <div className="flex flex-col gap-6">
        <Heading type={2}>About me</Heading>
        <ParagraphOpacityScroll
          paragraphText={paragraphText}
          paragraphClassName="text-[34px] leading-[38px] md:text-6xl font-bold text-balance"
          wordClassName="mr-[10px] mt-[6px] md:mr-3 md:mt-2"
          coloredWords={[{ word: "athlete-turned-geek,", position: 2 }]}
        />
      </div>
      <div className="mt-20 flex flex-col gap-6">
        <Heading type={2}>Also me...</Heading>

        <div className="flex flex-wrap items-center justify-start gap-6 md:gap-8 lg:gap-12">
          {alsoMeList.map((item, index) => (
            <InViewAnimation key={index} delay={index * 0.05}>
              <p className="flex h-10 items-center justify-center border-l border-primary pl-3 text-foreground/70">
                {item}
              </p>
            </InViewAnimation>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[33%] right-[25%] z-[-1] rotate-[20deg] md:bottom-[20%] lg:bottom-[33%] xl:bottom-[250px]">
        <AboutMeScribbleSvg className="scale-[150%] md:scale-[220%]" />
      </div>
    </section>
  );
};

export default memo(AboutSection);
