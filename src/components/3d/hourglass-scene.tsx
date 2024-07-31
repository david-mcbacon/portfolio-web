"use client";
import { OrthographicCamera } from "@react-three/drei";
import { Hourglass3dModel } from "./hourglass-model";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/core/generic/use-media-query";
// import { DirectionalLight } from "three";
// import { useControls } from "leva";

export function Hourglass3dScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["start end", "end start"],
  });

  // LEVA CONTROLS

  // const controls = useControls;
  // const options = useMemo(() => {
  //   return {
  //     x: { value: 0, min: -10, max: 10, step: 0.01 },
  //     y: { value: 0, min: -10, max: 10, step: 0.01 },
  //     z: { value: 0, min: -10, max: 10, step: 0.01 },
  //   };
  // }, []);

  // const hg = controls("Hourglass", options);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const modelXposition = isMobile ? 0.8 : 2.5;
  const cameraZoom = isMobile ? 150 : 200;

  return (
    <Canvas ref={canvasRef}>
      <OrthographicCamera makeDefault position={[0, 0, 1]} zoom={cameraZoom} />
      <Lights />
      <Hourglass3dModel
        position={[modelXposition, 1.5, 0]}
        rotation={[0.2, 0, 0]}
        scrollYProgress={scrollYProgress}
      />
    </Canvas>
  );
}

const Lights = () => {
  // LEVA CONTROLS

  // const directionalLightRef = useRef<DirectionalLight>(null!);
  // const controls = useControls;
  // const options = useMemo(() => {
  //   return {
  //     x: { value: 0, min: -10, max: 10, step: 0.01 },
  //     y: { value: 0, min: -10, max: 10, step: 0.01 },
  //     z: { value: 0, min: -10, max: 10, step: 0.01 },
  //     intensity: { value: 2.5, min: 0, max: 10, step: 0.01 },
  //     color: "#d7ffd8",
  //   };
  // }, []);

  // const dr = controls("Directional Light", options);
  // useHelper(directionalLightRef, DirectionalLightHelper, 1, "cyan");

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-1.7, 2.75, 0]}
        intensity={3}
        color={"#FDE1AC"}
      />
    </>
  );
};
