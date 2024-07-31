import CollapsibleHoverTable from "@/components/ui-david/collapsible-hover-table";
import CollapsibleHoverTableRow from "@/components/ui-david/collapsible-hover-table-row";
import React, { memo } from "react";

import { Hourglass3dScene } from "@/components/3d/hourglass-scene";

const TimelineSection = () => {
  return (
    <section
      id="timeline"
      className="relative flex h-[62rem] w-full flex-col pb-20 md:h-[60rem]"
    >
      <CollapsibleHoverTable
        tableTitle="Timeline"
        rows={<Rows />}
        rowsLength={TIMELINE.length}
        rowHeightMobile={"h-28"}
      />

      <div className="pointer-events-none absolute right-0 top-10 z-10 h-[1000px] w-screen">
        <Hourglass3dScene />
      </div>
    </section>
  );
};

function Rows() {
  return (
    <>
      {TIMELINE.map((item) => (
        <CollapsibleHoverTableRow
          beforeHoverContent={
            <BeforeHoverContent
              from={item.from}
              to={item.to}
              title={item.title}
              company={item.company}
            />
          }
          hoverContent={
            <AfterHoverContent
              from={item.from}
              to={item.to}
              description={item.description}
            />
          }
          key={item.title}
          rowHeightMobile={"h-28"}
        />
      ))}
    </>
  );
}

function BeforeHoverContent({
  from,
  to,
  company,
  title,
}: {
  from: string;
  to: string;
  company: string;
  title: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-start gap-14 md:gap-44">
      <div className="flex h-full w-10 flex-col justify-center gap-2 py-5 md:w-20">
        <p className="text-xl uppercase tracking-wide md:text-3xl">{to}</p>
        <p className={`text-sm font-light opacity-60 md:text-base`}>{from}</p>
      </div>
      <div className="pointer-events-auto flex h-full cursor-default flex-col justify-center gap-2 py-5 pr-10 md:gap-2">
        <p>{title}</p>
        <p className={`text-xs font-light text-foreground/60 md:text-base`}>
          {company}
        </p>
      </div>
    </div>
  );
}

function AfterHoverContent({
  from,
  to,
  description,
}: {
  from: string;
  to: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center md:justify-start md:gap-44">
      <div className="hidden h-full w-20 flex-col justify-center gap-2 py-5 md:flex">
        <p className="text-3xl uppercase tracking-wide text-background">{to}</p>
        <p className={`font-light text-background/80`}>{from}</p>
      </div>
      <div className="flex h-full flex-col items-center justify-center md:py-5 md:pr-10">
        <p className={`text-sm text-background`}>{description}</p>
      </div>
    </div>
  );
}

const TIMELINE = [
  {
    from: "2024",
    to: "Now",
    title: "Tech Co-founder",
    company: "Bachoff Studio • Web design & development",
    description:
      "At Bachoff Studio, I am a tech co-founder responsible for coding custom web solutions, working diligently with clients to develop websites and applications that meet their specific needs.",
  },

  {
    from: "2016",
    to: "Now",
    title: "Entrepreneur & Full-stack Engineer",
    company: "Hoffe • E-com • Amazon",
    description:
      "At Hoffe, I combine my entrepreneurial skills with full-stack engineering to scale our e-commerce operations. I built a web application that automates inventory, order fulfillment, financial accounting, and advertising strategies.",
  },
  {
    from: "2022",
    to: "2024",
    title: "Full-stack Engineer",
    company: "Freelance",
    description:
      "In my role as a Full-Stack Engineer, I focus on front-end development, integrating 3D elements and animations to create immersive web experiences. Additionally, I develop AI chatbots and full-stack solutions to meet clients' diverse needs.",
  },
  {
    from: "2022",
    to: "2024",
    title: "Data Engineer",
    company: "Kontentino • Start-up • Part-time contract",
    description:
      "At Kontentino, I build data pipelines and integrations, ensuring seamless data collection and processing. I manage data storage, create advanced data models, and develop ETL scripts to improve data operations.",
  },
  {
    from: "2019",
    to: "2022",
    title: "Big Data & Marketing Analyst",
    company: "O2 • Telco • Full-time",
    description:
      "At O2, I engineered customer segmentation frameworks and conducted comprehensive data analyses. I developed automated SQL procedures to harmonize multi-source data for structured reporting.",
  },
  {
    from: "2020",
    to: "2022",
    title: "Co-founder & Full-stack Engineer",
    company: "Bacon&Balucci • E-com • Shopify",
    description:
      "As co-founder of Bacon&Balucci, I developed a customized Shopify storefront and built a backend ERP system. I also managed Google Ads campaigns and provided data analytics to enhance business performance.",
  },
  {
    from: "2016",
    to: "2018",
    title: "Specialist for Data & Reporting",
    company: "Cofidis • Bank • Full-time",
    description:
      "At Cofidis, I developed and automated ANACREDIT batch reporting mechanisms for compliance with ECB and NBS guidelines. I also engineered specialized reports focusing on risk assessment and cross-departmental needs.",
  },
  {
    from: "2015",
    to: "2016",
    title: "Risk Analyst & Accountant",
    company: "Profi Credit • Loans • Internship",
    description:
      "During my internship at Profi Credit, I conducted risk assessments and managed bookkeeping activities. I was responsible for generating diversified risk reports and assisting with monthly financial closing activities.",
  },
];

export default memo(TimelineSection);
