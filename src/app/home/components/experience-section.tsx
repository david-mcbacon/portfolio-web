import React from "react";
import Heading from "@/core/heading";
import ParagraphOpacityScroll from "@/components/ui-david/paragraph-opacity-scroll";
import { InViewAnimation } from "@/core/in-view-animation";
import ExperienceScribbleSvg from "@/components/svg/experience-scribble";

const ExperienceSection = () => {
  return (
    <section
      className="relative mx-auto flex h-auto w-full max-w-[1536px] flex-col overflow-hidden px-6 py-40 md:px-14 xl:px-[13.5rem]"
      id="experience"
    >
      <div className="z-10 flex flex-col gap-6">
        <Heading type={2}>Experience</Heading>

        <ParagraphOpacityScroll
          paragraphText={paragraphText}
          paragraphClassName="text-[34px] leading-[38px] md:text-6xl font-bold text-balance"
          wordClassName="mr-[10px] mt-[6px] md:mr-3 md:mt-2"
          coloredWords={[
            { word: "2015,", position: 2 },
            { word: "in", position: 1 },
          ]}
        />
      </div>
      <div className="mt-20 flex flex-col gap-6">
        <Heading type={2}>Education</Heading>

        <div className="flex flex-col items-start justify-start gap-6">
          {educationList.map((item, index) => (
            <InViewAnimation key={item.title} delay={index * 0.05}>
              <EducationItem item={item} />
            </InViewAnimation>
          ))}
        </div>
      </div>
      <div className="absolute -right-20 bottom-[25%] z-[-1] lg:right-[15%] xl:bottom-[10%]">
        <ExperienceScribbleSvg className="scale-[70%] md:scale-[100%]" />
      </div>
    </section>
  );
};

const EducationItem = ({
  item,
}: {
  item: { title: string; subtitle: string };
}) => {
  return (
    <p className="flex h-28 flex-col items-start justify-center border-l border-primary pl-3 md:h-12">
      <span className="text-foreground">{item.title}</span>
      <span className="font-light text-foreground/60">{item.subtitle}</span>
    </p>
  );
};

const paragraphText = `Starting in 2015, I've carved a niche in tech, balancing data expertise and e-com entrepreneurship, with recent years dedicated to full-stack development with AI and 3D integrations.`;

const educationList = [
  {
    title: "Master's degree in Statistical Methods in Economics",
    subtitle:
      "Faculty of Economic Informatics | University of Economics in Bratislava",
  },
  {
    title: "Bachelor's degree in Quantitative Methods in Economics",
    subtitle:
      "Faculty of Economic Informatics | University of Economics in Bratislava",
  },
];

export default ExperienceSection;
