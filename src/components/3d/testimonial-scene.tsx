"use client";
import { OrthographicCamera } from "@react-three/drei";
import { Testimonial3dModel } from "./testimonial-model";
import { Canvas } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { useRef } from "react";
// import { DirectionalLightHelper, DirectionalLight } from "three";
// import { useControls } from "leva";

export function Testimonial3dScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["start end", "end start"],
  });

  return (
    <Canvas ref={canvasRef}>
      <OrthographicCamera makeDefault position={[0, 0, 7]} zoom={170} />
      <Lights />
      <Testimonial3dModel
        position={[3.5, 3, 0]}
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
  //     x: { value: -1.7, min: -10, max: 10, step: 0.01 },
  //     y: { value: 1.75, min: -10, max: 10, step: 0.01 },
  //     z: { value: 0, min: -10, max: 10, step: 0.01 },
  //     intensity: { value: 6.75, min: 0, max: 10, step: 0.01 },
  //     color: "#ecffed",
  //   };
  // }, []);

  // const dr = controls("Directional Light", options);
  // useHelper(directionalLightRef, DirectionalLightHelper, 1, "cyan");

  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <directionalLight
        ref={directionalLightRef}
        position={[dr.x, dr.y, dr.z]}
        intensity={dr.intensity}
        color={dr.color}
      /> */}
      <directionalLight
        position={[-1.7, 1.75, 0.75]}
        intensity={4.0}
        color={"#ecffed"}
      />
    </>
  );
};
