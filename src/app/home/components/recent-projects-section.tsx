import OrangeMacbookScene from "@/components/3d/orange-macbook-scene";
import CollapsibleHoverTable from "@/components/ui-david/collapsible-hover-table";
import CollapsibleHoverTableRow from "@/components/ui-david/collapsible-hover-table-row";
import { IoMdArrowDown } from "react-icons/io";

export default function RecentProjectsSection() {
  return (
    <section
      id="recent-projects"
      className="relative flex w-full flex-col overflow-visible md:overflow-hidden md:pt-40 xl:pt-40"
    >
      <CollapsibleHoverTable
        tableTitle="Recent Projects"
        rows={<Rows />}
        rowsLength={PROJECTS.length}
        rowHeightMobile="h-32"
      />

      <div className="pointer-events-none absolute -bottom-[45%] right-0 z-10 h-[1100px] w-screen md:top-40 md:h-[800px] md:translate-x-[25%]">
        <OrangeMacbookScene />
      </div>
    </section>
  );
}

function Rows() {
  return (
    <>
      {PROJECTS.map((item) => (
        <CollapsibleHoverTableRow
          beforeHoverContent={<BeforeHoverContent {...item} />}
          hoverContent={<AfterHoverContent {...item} />}
          key={item.title}
          rowHeightMobile="h-32"
        />
      ))}
    </>
  );
}

function BeforeHoverContent(props: Project) {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center">
      <p className="font-primary text-2xl font-extrabold uppercase tracking-wide text-foreground-600 md:text-5xl">
        {props.title}
      </p>
      <div className="flex items-center justify-start gap-3 pt-1">
        <p className="text-sm font-light italic text-foreground-800">
          {/* {infotext} */}
          {props.type}{" "}
          <span className="pl-0.5 underline underline-offset-2">
            @{props.client}
          </span>
        </p>
        {props.badge && (
          <span className="flex-shrink-0 rounded-full bg-secondary-800 px-2 text-xs font-light italic">
            {props.badge}
          </span>
        )}
      </div>
    </div>
  );
}

function AfterHoverContent(props: Project) {
  return (
    <div className="relative flex h-full w-full items-center justify-start">
      <p className="text-sm font-semibold text-background md:text-base md:font-normal">
        {props.description}{" "}
        <a
          href={props.links?.[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-background underline md:hidden"
        >
          <span>Preview</span>
          <IoMdArrowDown size={16} className="rotate-[225deg]" />
        </a>
      </p>
      {props.links && (
        <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[100%] pl-6 lg:block">
          <div className="flex flex-col items-start justify-center gap-2 border-l pl-4">
            {props.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-background transition-all duration-200 ease-in-out hover:underline"
              >
                <span className="flex items-center gap-0.5">
                  Preview
                  <IoMdArrowDown
                    size={20}
                    className="rotate-[225deg] transition-all duration-200 ease-in-out group-hover:rotate-[270deg]"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface Project {
  title: string;
  client?: string;
  badge?: string;
  type: string;
  description: string;
  links?: {
    title: string;
    url: string;
  }[];
}

const PROJECTS: Project[] = [
  {
    title: "Bachoff Studio",
    type: "Website • Next.js • TypeScript • Tailwind • R3F • MDX",
    client: "Bachoff Studio",
    description:
      "A custom-coded website for a studio I co-founded, featuring dynamic animations, 3D elements, and MDX blog functionality.",

    links: [
      {
        title: "Bachoff Studio",
        url: "https://bachoff.studio",
      },
    ],
  },
  {
    title: "Components Library",
    type: "Custom Code Components for Framer • React • TypeScript",
    client: "Bachoff Studio",
    description:
      "An ever-growing library of custom code components for Framer, offering functionality that can't be achieved with native no-code tools.",
    links: [
      {
        title: "Bachoff Studio",
        url: "https://bachoff.studio/framer-components",
      },
    ],
  },
  {
    title: "Circle Labs",
    type: "Website • Next.js • TypeScript • Tailwind • Motion",
    client: "Circle Labs",
    description:
      "A playful website for an environmental startup, featuring smooth animations and hand-drawn illustrations.",
    links: [
      {
        title: "Circle Labs",
        url: "https://circlelabs.sk",
      },
    ],
  },
  {
    title: "Circle Map & Admin",
    type: "Webapp • Next.js • TypeScript • Tailwind • Supabase",
    client: "Circle Labs",
    description:
      "A fully featured map with ~10k locations, including search, filters, and the ability to add new locations. Admin dashboard for managing locations and users.",
    links: [
      {
        title: "Circular Map",
        url: "https://map.circlelabs.sk",
      },
    ],
  },
  {
    title: "P2E Runner Game",
    type: "Game • React • TypeScript • Framer • Canvas API",
    client: "Degen Zoo Club",
    description:
      "A play-to-earn game with a custom-coded game engine, public leaderboard, authentication, wallet integration, a Telegram bot, an admin dashboard, and more.",
    links: [
      {
        title: "$LIO P2E Game",
        url: "https://www.degenzoo.club/game",
      },
    ],
  },
  // {
  //   title: "AMP Service",
  //   client: "AMP Service",
  //   badge: "In Progress",
  //   type: "Website",
  //   description:
  //     "I am redesigning the website for a local car repair service, to replace their outdated, non-mobile-friendly site. The new site will be modern, mobile-responsive, and SEO-optimized, ensuring a fresh and user-friendly online presence.",
  // },
  {
    title: "Multi-app sync",
    client: "Kontentino",
    type: "Integrations • Data Pipelines • Python • Prefect",
    description:
      "Data pipelines for 3rd-party apps like Heap, Intercom, Userpilot, and Velaris, ensuring seamless data synchronization and accuracy across platforms.",
  },
  {
    title: "3D Playground",
    client: "Bachoff Studio",
    type: "My Playground for 3D Experiments • Three.js • R3F",
    description:
      "A playground and showroom for my 3D experiments, where I explore and test new ideas.",
    links: [
      {
        title: "3D Playground",
        url: "https://3dplayground.bachoff.studio/",
      },
    ],
  },
  // {
  //   title: "PPC Ads Optimizer",
  //   client: "Amazon",
  //   type: "Automation • Integration",
  //   description:
  //     "I built an automation system to optimize PPC ads for my Amazon business. This system continuously adjusts bids according to sales, clicks, and inventory levels, ensuring maximum profitability and reducing manual effort.",
  // },
];
