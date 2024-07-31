import CollapsibleHoverTable from "@/components/ui-david/collapsible-hover-table";
import { Earth3dScene } from "@/components/3d/earth-scene";
import CollapsibleHoverTableRow from "@/components/ui-david/collapsible-hover-table-row";
import ParagraphOpacityScroll from "@/components/ui-david/paragraph-opacity-scroll";

export default function WorkSection() {
  return (
    <section
      id="work"
      className={
        "relative my-2 w-full md:mt-32 md:pb-20 xl:mb-14 xl:mt-32 2xl:mt-0 3xl:mt-40"
      }
    >
      <CollapsibleHoverTable
        tableTitle="What I bring to the table"
        rows={<Rows />}
        rowsLength={WORK.length}
      />

      <div className="pointer-events-none absolute -top-12 right-0 z-10 h-[800px] w-screen overflow-visible">
        <Earth3dScene />
      </div>
    </section>
  );
}

function Rows() {
  return (
    <>
      {WORK.map((item) => (
        <CollapsibleHoverTableRow
          beforeHoverContent={<BeforeHoverContent title={item.title} />}
          hoverContent={<AfterHoverContent {...item} />}
          key={item.title}
        />
      ))}
    </>
  );
}

function BeforeHoverContent({ title }: { title: string }) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center">
      <ParagraphOpacityScroll
        paragraphText={title}
        paragraphClassName="font-primary text-5xl md:text-8xl font-extrabold uppercase tracking-wide"
        scrollProgressOffset={["start 0.9", "start 0.8"]}
      />
    </div>
  );
}

function AfterHoverContent({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="hidden pt-2 font-primary text-8xl font-extrabold uppercase tracking-wide text-background lg:block">
        {title}
      </p>
      <p className="absolute right-0 top-[50%] -translate-y-1/2 px-6 text-sm text-background md:px-14 md:text-base lg:right-10 lg:max-w-[300px] lg:px-0 xl:right-[11.5rem] 2xl:right-[13.5rem]">
        {description}
      </p>
    </>
  );
}

const WORK = [
  {
    title: "Frontend",
    description:
      "Passionate about creating visually appealing and highly functional user interfaces from the ground up.",
  },
  {
    title: "Backend",
    description:
      "I love creating APIs, designing backend systems, and building database architectures for seamless operations.",
  },
  {
    title: "Data",
    description:
      "Specializing in data engineering, I combine multiple data sources and conduct analytics to generate insights.",
  },
  {
    title: "3D",
    description:
      "I specialize in integrating 3D graphics into websites, bringing 3D models and animations to life online.",
  },
  {
    title: "AI",
    description:
      "I transform business processes with AI, integrating LLMs to automate tasks and create dynamic chatbots.",
  },
];
