"use client";

import Image from "next/image";
import { useRef, memo } from "react";
import {
  LazyMotion,
  m,
  domAnimation,
  useScroll,
  useTransform,
} from "framer-motion";

import profilePic1 from "@/../public/images/me_11.webp";
import profilePic2 from "@/../public/images/me_12.webp";

const HeroSectionImages = memo(() => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });

  const up = useTransform(scrollYProgress, [0, 0.5], [0, -75]);
  const down = useTransform(scrollYProgress, [0, 0.5], [0, 75]);
  return (
    <LazyMotion strict features={domAnimation}>
      <div
        className="relative h-[420px] w-[300px] md:h-[640px] md:w-[480px]"
        ref={container}
      >
        <m.div
          style={{ y: down }}
          className="absolute left-0 top-10 h-[280px] w-[160px] md:h-[500px] md:w-[260px] lg:top-12 4xl:top-10 5xl:top-5"
        >
          <Image
            src={profilePic1}
            alt="David Slaninka portrait"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 260px, 260px"
            className="rounded-2xl border object-cover"
            priority
            placeholder="blur"
            quality={100}
          />
        </m.div>
        <m.div
          style={{ y: up }}
          className="absolute bottom-[48px] right-0 h-[270px] w-[135px] md:bottom-2 md:h-[500px] md:w-[210px] lg:bottom-0"
        >
          <Image
            src={profilePic2}
            alt="David Slaninka portrait"
            fill
            sizes="(max-width: 768px) 135px, (max-width: 1024px) 210px, 210px"
            className="rounded-2xl border object-cover"
            priority
            placeholder="blur"
            quality={100}
          />
        </m.div>
      </div>
    </LazyMotion>
  );
});

HeroSectionImages.displayName = "HeroSectionImages";

export default HeroSectionImages;
