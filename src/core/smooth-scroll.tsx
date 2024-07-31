"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { ReactNode, useCallback } from "react";

function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.075,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export const useScrollToElement = () => {
  const lenisInstance = useLenis();

  const scrollToElement = useCallback(
    (targetElement: string | number | HTMLElement) => {
      if (targetElement && lenisInstance) {
        lenisInstance.scrollTo(targetElement);
      }
    },
    [lenisInstance],
  );

  return scrollToElement;
};

export default SmoothScroll;
