"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Model as MacbookModel } from "./orange-macbook-model";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
// import { useScroll } from "framer-motion";
import { PerspectiveCamera as PerspectiveCameraType } from "three";
import isBrowser from "@/core/generic/is-browser";
import { EffectComposer } from "@react-three/postprocessing";
import {
  LazyMotion,
  m,
  domAnimation,
  useScroll,
  useTransform,
  useMotionValue,
  MotionValue,
} from "framer-motion";
import { useMediaQuery } from "@/core/generic/use-media-query";

export default function OrangeMacbookScene() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end end"],
  });

  const isMobile = useMediaQuery("(max-width: 767px)");
  const yTransformed = useTransform(scrollYProgress, [0, 1], [-550, 350]);
  const y = isMobile ? yTransformed : 0;

  return (
    <LazyMotion strict features={domAnimation}>
      <div className="z-20 h-full w-full" ref={scrollRef}>
        <m.div style={{ y }} className="h-full w-full">
          <Canvas>
            <Camera />
            <Lights scrollYProgress={scrollYProgress} isMobile={isMobile} />
            <MacbookModel
              scrollYProgress={scrollYProgress}
              isMobile={isMobile}
            />
            <Postprocessing />
          </Canvas>
        </m.div>
      </div>
    </LazyMotion>
  );
}

function Postprocessing() {
  return (
    <EffectComposer>
      <></>
    </EffectComposer>
  );
}

function Camera() {
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const screenWidth = isBrowser() ? window.innerWidth : 0;

  const zoom = screenWidth < 768 ? 1.1 : 2.25;

  return (
    <PerspectiveCamera
      makeDefault
      zoom={zoom}
      position={[0, 1, 15]}
      rotation={[0, 0, 0]}
      fov={100}
      near={0.1}
      far={1000}
      ref={cameraRef}
    />
  );
}

function Lights({
  scrollYProgress,
  isMobile,
}: {
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
}) {
  const dirLightRef = useRef<any>();
  const intensityTransformed = useTransform(
    scrollYProgress,
    [0, 0.2, 0.7, 1],
    [0, 0.1, 1, 6],
  );
  const baseIntensity = useMotionValue(6);

  const intensity = isMobile ? intensityTransformed : baseIntensity;
  useFrame(() => {
    if (dirLightRef.current) {
      dirLightRef.current.intensity = intensity.get();
    }
  });

  return (
    <>
      <directionalLight
        position={[0, 15, 3]}
        intensity={intensity.get()}
        ref={dirLightRef}
      />
    </>
  );
}
