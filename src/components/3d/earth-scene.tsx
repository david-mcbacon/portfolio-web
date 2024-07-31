"use client";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { OrthographicCamera } from "@react-three/drei";
import EarthModel from "./earth-model";
import { useMediaQuery } from "@/core/generic/use-media-query";

export function Earth3dScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["start end", "end start"],
  });

  // LEVA CONTROLS

  // const controls = useControls;
  // const options = useMemo(() => {
  //   return {
  //     x: { value: 0, min: 0, max: 10, step: 0.01 },
  //     y: { value: 0, min: 0, max: 10, step: 0.01 },
  //     z: { value: 0, min: 0, max: 10, step: 0.01 },
  //     color: "#d7ffd8",
  //   };
  // }, []);

  // const dr = controls("Directional Light", options);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const modelXPosition = isMobile ? 1.9 : 2.5;

  return (
    <Canvas ref={canvasRef}>
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={140} />
      <ambientLight intensity={3} />
      <directionalLight position={[-10, 3, 1]} intensity={3} color="#FDE1AC" />
      <EarthModel
        position={[modelXPosition, 0.2, 0]}
        scale={[2, 2, 2]}
        rotation={[0.1, 4.5, 0]}
        scrollYProgress={scrollYProgress}
      />
    </Canvas>
  );
}
