"use client";
import { useRef } from "react";
import Heading from "@/core/heading";
import { useScroll } from "framer-motion";
import dynamic from "next/dynamic";
const LineChart = dynamic(() => import("@/components/ui-david/line-chart"), {
  ssr: false,
});

const LineChartStorySection = () => {
  const animationRefDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationRefDiv,
    offset: ["start end", "end end"],
  });

  return (
    <section className="xl:px-[13.5rem]m mx-auto flex w-full max-w-[1536px] flex-col gap-20 px-6 md:-mt-40 md:flex-row md:gap-6 md:px-14 lg:mt-0 lg:gap-10">
      <div className="sticky top-0 flex h-screen w-full items-start justify-center md:top-0 md:w-[60%] md:items-center lg:w-2/3">
        <div className="relative h-auto w-full bg-gradient-to-b from-background from-80% to-transparent pb-32 pt-12 md:w-[700px] md:pt-0">
          <LineChart
            lines={lines}
            scrollYProgress={scrollYProgress}
            axisX={{
              color: "#F1F1E3",
              strokeWidth: 1,
              axisLabels: axisXLabels,
              axisLabelsColor: "#F1F1E3",
            }}
            axisY={{
              color: "#F1F1E3",
              strokeWidth: 1,
              title: "Skill level",
              titleColor: "#F1F1E3",
            }}
          />
        </div>
      </div>
      <div className="w-full pb-28 md:w-1/3 md:pb-0" ref={animationRefDiv}>
        <div className="-mt-[400px] h-auto w-full space-y-36 md:mt-[25vh] md:space-y-20">
          {storyLine.map((story) => (
            <StoryLineItem key={story.year} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StoryLineItem = ({
  story,
}: {
  story: {
    year: string;
    title: string;
    descrtiption: string;
  };
}) => {
  return (
    <div className="h-fit md:h-[90vh] xl:pr-28">
      <p className="flex h-12 items-center justify-start border-l border-primary pl-4 text-3xl uppercase tracking-wide">
        {story.year}
      </p>
      <div className="mt-5 flex flex-col gap-10">
        <Heading type={3} className="text-base">
          {story.title}
        </Heading>
        <p className="text-foreground/80">{story.descrtiption}</p>
      </div>
    </div>
  );
};

const lines = [
  {
    // max is 270
    data: [2, 30, 50, 70, 80, 120, 140, 160, 250, 260, 260],
    dataName: "Data",
    color: "#ED9C05",
    strokeWidth: 2,
  },
  {
    data: [2, 2, 20, 40, 60, 100, 150, 180, 190, 200, 200],
    dataName: "E-com",
    color: "#FCCB70",
    strokeWidth: 2,
  },
  {
    data: [2, 2, 2, 10, 50, 60, 100, 150, 200, 220, 240],
    dataName: "Backend",
    color: "#F48A5C",
    strokeWidth: 2,
  },
  {
    data: [2, 2, 2, 2, 20, 30, 40, 70, 120, 200, 240],
    dataName: "Frontend",
    color: "#F05A19",
    strokeWidth: 2,
  },

  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 10, 150, 210],
    dataName: "AI",
    color: "#D4D4D4",
    strokeWidth: 2,
  },
  {
    data: [2, 2, 2, 2, 2, 2, 2, 2, 20, 100, 220],
    dataName: "3D",
    color: "#8F8F8F",
    strokeWidth: 2,
  },
];

const axisXLabels = [
  "'15",
  "'16",
  "'17",
  "'18",
  "'19",
  "'20",
  "'21",
  "'22",
  "'23",
  "'24",
  "",
];

interface Story {
  year: string;
  title: string;
  descrtiption: string;
}

const storyLine: Story[] = [
  {
    year: "2015 - 2016",
    title: "Beginning",
    descrtiption:
      "My journey in the tech world began during my university years, when I landed my first tech-related job as a risk analyst and accountant intern at Profi Credit. Here, I mastered MS Excel, delved into data analysis, and had my first encounter with SQL. Driven by an entrepreneurial spirit, I launched my own e-commerce business on Amazon, eager to explore the vast possibilities of the digital marketplace.",
  },
  {
    year: "2017 - 2018",
    title: "Switching gears",
    descrtiption:
      "I transitioned to a role at Cofidis, focusing on data and reporting. Here, I advanced my skills in SQL, data analysis tools, and modeling, while also beginning to learn Python to automate both my professional tasks and personal business. My growing knowledge in PPC advertising and marketing further fueled the growth of my e-commerce venture.",
  },
  {
    year: "2019 - 2020",
    title: "Dev calling",
    descrtiption:
      "Driven by a passion for development, I dived into backend and frontend technologies to automate my business and create web applications. I began building Shopify stores, refining my web development skills. Concurrently, I joined O2 Slovakia as a big data and marketing analyst, utilizing my new skills and delving into data engineering and data science.",
  },
  {
    year: "2021 - 2022",
    title: "Engineering",
    descrtiption:
      "As a data engineer at Kontentino, I focused on advanced data engineering tools and learning about data architecture and pipelines. I continued improving my backend skills and automating business processes. Motivated by the impressive websites and applications I encountered, I delved deeper into frontend development.",
  },
  {
    year: "2023 - Now",
    title: "Explosion",
    descrtiption:
      "The recent boom in AI and LLMs accelerated my growth as a full-stack engineer. I began working with 3D graphics and animations, developing complex web applications with AI integrations. My fascination with 3D graphics led me to delve deeper into 3D development while continuing to enhance my frontend and backend skills. Learning is my passion, and I am committed to continuous growth.",
  },
];

export default LineChartStorySection;
