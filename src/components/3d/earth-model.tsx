"use client";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { MeshProps, useFrame } from "@react-three/fiber";

interface Earth3dModelProps extends MeshProps {
  scrollYProgress: MotionValue<number>;
}

export default function EarthModel({
  scrollYProgress,
  ...props
}: Earth3dModelProps) {
  const colorMap = useTexture("/3d/2k_earth_nightmap.webp");
  const globeRef = useRef<Mesh>(null);

  const globeYRotation = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -4]),
  );

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y = globeYRotation.get();
    }
  });

  return (
    <mesh {...props} ref={globeRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}
