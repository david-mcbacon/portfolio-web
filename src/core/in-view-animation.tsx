"use client";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import { useRef, memo } from "react";

interface InViewAnimationProps {
  children: React.ReactNode;
  yPosition?: number;
  zPosition?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export const InViewAnimation = memo(
  ({
    children,
    yPosition = 75,
    zPosition = 10,
    duration = 0.5,
    delay = 0,
    className,
  }: InViewAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          ref={ref}
          initial={{ opacity: 0.01, y: yPosition }}
          animate={{
            opacity: isInView ? 1 : 0.01,
            y: isInView ? 0 : yPosition,
            z: zPosition,
          }}
          transition={{ duration: duration, delay: delay }}
          className={className}
        >
          {children}
        </m.div>
      </LazyMotion>
    );
  },
);

InViewAnimation.displayName = "InViewAnimation";
