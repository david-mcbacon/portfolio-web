"use client";
import { FC, useRef, useCallback, memo } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { IconType } from "react-icons";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiThreedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiPython,
  SiPostgresql,
  SiFastapi,
  SiSupabase,
  SiPrefect,
  SiDbt,
  SiAirbyte,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglebigquery,
  SiMongodb,
  SiOpenai,
  SiDocker,
  SiUbuntu,
  SiNginx,
  SiGithub,
  SiDigitalocean,
  SiGoogledatastudio,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  const frameAnimation = useCallback(
    (t: any, delta: number) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    },
    [baseVelocity, velocityFactor, directionFactor, baseX],
  );

  useAnimationFrame(frameAnimation);

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <LazyMotion strict features={domAnimation}>
      <div className="mx-0 flex flex-nowrap overflow-hidden whitespace-nowrap py-8">
        <m.div className="flex flex-nowrap whitespace-nowrap" style={{ x }}>
          {children}
          {children}
          {children}
          {children}
        </m.div>
      </div>
    </LazyMotion>
  );
}

export default function TechStackParallax() {
  return (
    <section className="relative">
      <div className="absolute bottom-0 left-0 top-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <ParallaxText baseVelocity={-0.4}>
        <IconWithText Icon={SiNextdotjs} text="Next.js" />
        <IconWithText Icon={SiTypescript} text="TypeScript" />
        <IconWithText Icon={SiJavascript} text="JavaScript" />
        <IconWithText Icon={SiTailwindcss} text="Tailwind CSS" />
        <IconWithText Icon={SiHtml5} text="HTML5" />
        <IconWithText Icon={SiThreedotjs} text="React Three Fiber" />
        <IconWithText Icon={SiReact} text="React" />
        <IconWithText Icon={TbBrandFramerMotion} text="Framer Motion" />
        <IconWithText Icon={SiPython} text="Python" />
        <IconWithText Icon={SiPostgresql} text="PostgreSQL" />
        <IconWithText Icon={SiFastapi} text="FastAPI" />
        <IconWithText Icon={SiSupabase} text="Supabase" />
        <IconWithText Icon={SiMongodb} text="MongoDB" />
      </ParallaxText>
      <ParallaxText baseVelocity={0.25}>
        <IconWithText Icon={SiPrefect} text="Prefect" />
        <IconWithText Icon={SiDbt} text="Dbt" />
        <IconWithText Icon={SiAirbyte} text="Airbyte" />
        <IconWithText Icon={SiGoogleanalytics} text="Google Analytics" />
        <IconWithText Icon={SiGoogletagmanager} text="Google Tag Manager" />
        <IconWithText Icon={SiGooglebigquery} text="Google BigQuery" />
        <IconWithText Icon={SiGoogledatastudio} text="Google Looker Studio" />
        <IconWithText Icon={SiOpenai} text="OpenAI products" />
        <IconWithText Icon={SiDocker} text="Docker" />
        <IconWithText Icon={SiUbuntu} text="Ubuntu" />
        <IconWithText Icon={SiNginx} text="Nginx" />
        <IconWithText Icon={SiGithub} text="GitHub" />
        <IconWithText Icon={SiDigitalocean} text="Digital Ocean" />
      </ParallaxText>
      <div className="absolute bottom-0 right-0 top-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}

interface IconTextProps {
  Icon: IconType;
  text: string;
}

const IconWithText: FC<IconTextProps> = memo(({ Icon, text }) => (
  <div className="mr-16 flex cursor-default items-center gap-4">
    <Icon size={42} className="text-foreground/80" />
    <p className="text-foreground/80">{text}</p>
  </div>
));

IconWithText.displayName = "IconWithText";
