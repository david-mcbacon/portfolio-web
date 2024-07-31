"use client";
import { useMediaQuery } from "@/core/generic/use-media-query";
import { LazyMotion, m, domAnimation } from "framer-motion";
import { useState } from "react";

interface CollapsibleHoverRowProps {
  beforeHoverContent: React.ReactNode;
  hoverContent: React.ReactNode;
  rowHeightMobile?: string;
}

export default function CollapsibleHoverTableRow({
  rowHeightMobile = "h-20",
  ...props
}: CollapsibleHoverRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isTabletorMobile = useMediaQuery("(max-width: 1023px)");
  return (
    <LazyMotion strict features={domAnimation}>
      <div
        className={`relative z-30 ${rowHeightMobile} overflow-hidden md:h-28`}
        onMouseEnter={() => {
          if (!isTabletorMobile) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!isTabletorMobile) setIsHovered(false);
        }}
        onClick={() => {
          if (isTabletorMobile) setIsHovered(!isHovered);
        }}
      >
        <div className="absolute left-0 top-1/2 z-30 h-full w-full -translate-y-1/2 overflow-hidden">
          <div className="mx-auto h-full w-full max-w-[1536px] px-6 md:px-14 xl:px-[13.5rem]">
            {props.beforeHoverContent}
          </div>
        </div>
        <m.div
          className="absolute left-0 top-0 z-30 h-full w-full overflow-hidden bg-primary"
          initial={{
            // y: "-100%",
            height: "0",
          }}
          animate={{
            // y: isHovered ? "0%" : "-100%",
            height: isHovered ? "100%" : "0",
          }}
          transition={{
            type: "spring",
            bounce: 0,
          }}
        >
          <div className="relative mx-auto h-full w-full max-w-[1536px] px-6 md:px-14 xl:px-[13.5rem]">
            {props.hoverContent}
          </div>
        </m.div>
      </div>
    </LazyMotion>
  );
}
