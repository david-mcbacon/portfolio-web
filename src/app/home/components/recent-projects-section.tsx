import OrangeMacbookScene from "@/components/3d/orange-macbook-scene";
import CollapsibleHoverTable from "@/components/ui-david/collapsible-hover-table";
import CollapsibleHoverTableRow from "@/components/ui-david/collapsible-hover-table-row";
import ParagraphOpacityScroll from "@/components/ui-david/paragraph-opacity-scroll";

export default function RecentProjectsSection() {
  return (
    <section
      id="recent-projects"
      className="relative flex w-full flex-col overflow-visible pt-10 md:overflow-hidden md:pt-20 xl:pt-40"
    >
      <CollapsibleHoverTable
        tableTitle="Recent Projects"
        rows={<Rows />}
        rowsLength={PROJECTS.length}
        rowHeightMobile="h-32"
      />

      <div className="pointer-events-none absolute -bottom-[55%] right-0 z-10 h-[1100px] w-screen md:top-20 md:h-full md:translate-x-[25%]">
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
  const infotext = props.client
    ? `${props.type} • ${props.client}`
    : props.type;
  return (
    <div className="flex h-full w-full flex-col items-start justify-center">
      <ParagraphOpacityScroll
        paragraphText={props.title}
        paragraphClassName="font-primary text-2xl md:text-5xl font-extrabold uppercase tracking-wide"
        wordClassName="mr-2"
        scrollProgressOffset={["start 1", "start 0.9"]}
      />
      <div className="flex items-center justify-start gap-3 pt-1">
        <ParagraphOpacityScroll
          paragraphText={infotext}
          paragraphClassName="text-sm font-light italic text-foreground-800"
          wordClassName="mr-1"
          scrollProgressOffset={["start 1", "start 0.9"]}
        />
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
      <p className="text-sm text-background md:text-base">
        {props.description}
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
                className="text-xs text-background transition-all duration-200 ease-in-out hover:underline"
              >
                {link.title}
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
    title: "Framer Components",
    client: "Workbase & Vanquish Capital",
    type: "Custom Code Components for Framer",
    description:
      "I developed custom calculators for performance fees, rebates, and CPA earnings with precision input sliders and an ROI calculator to compute total, onboarding, and productivity savings from four key inputs.",
    links: [
      {
        title: "Vanquish Solutions",
        url: "https://www.vanquishsolutions.io/",
      },
      {
        title: "Workbase",
        url: "https://workbase.com/roi-calculator",
      },
    ],
  },
  {
    title: "Bachoff Studio",
    badge: "In Progress",
    type: "Website, Digital Products",
    description:
      "I built a custom website for Bachoff Studio, integrating dynamic animations and 3D features. It also has MDX blog functionality and a Framer component library. This project has ongoing additions and refinements to the digital products.",

    links: [
      {
        title: "Bachoff Studio",
        url: "https://bachoff.studio",
      },
      // {
      //   title: "Bachoff Framer",
      //   url: "https://framer.bachoff.studio",
      // },
    ],
  },
  {
    title: "AMP Service",
    client: "AMP Service",
    badge: "In Progress",
    type: "Website",
    description:
      "I am redesigning the website for a local car repair service, to replace their outdated, non-mobile-friendly site. The new site will be modern, mobile-responsive, and SEO-optimized, ensuring a fresh and user-friendly online presence.",
  },
  {
    title: "Multi-app sync",
    client: "Kontentino",
    type: "Integrations",
    description:
      "I created data integrations for Kontentino, linking it with third-party applications such as Heap, Intercom, Userpilot, and Velaris. My system ensures seamless data synchronization, maintaining accuracy across platforms.",
  },
  {
    title: "PPC Ads Optimizer",
    client: "Amazon",
    type: "Automation, Integration",
    description:
      "I built an automation system to optimize PPC ads for my Amazon business. This system continuously adjusts bids according to sales, clicks, and inventory levels, ensuring maximum profitability and reducing manual effort.",
  },
];
