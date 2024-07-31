"use client";
import { Mesh, MeshStandardMaterial, Group } from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { GroupProps, useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: Mesh;
    Star: Mesh;
  };
  materials: {
    Base: MeshStandardMaterial;
    Green: MeshStandardMaterial;
  };
  // animations: GLTFAction[]
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

interface Testimonial3dModelProps extends GroupProps {
  scrollYProgress: MotionValue<number>;
}

export function Testimonial3dModel({
  scrollYProgress,
  ...props
}: Testimonial3dModelProps) {
  const { nodes, materials } = useGLTF(
    "3d/testimonial-transformed.glb",
  ) as GLTFResult;

  const medalRef = useRef<Group>(null);

  const rotationZ = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]),
  );
  const positionY = useSpring(useTransform(scrollYProgress, [0, 1], [3, -3]));

  useFrame(() => {
    if (medalRef.current) {
      medalRef.current.position.y = positionY.get();
      medalRef.current.rotation.z = rotationZ.get();
    }
  });

  return (
    <group {...props} dispose={null} ref={medalRef}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Base}
        position={[0.008, 0.127, -0.036]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        geometry={nodes.Star.geometry}
        material={materials.Green}
        position={[0.006, 0.131, 0.105]}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("3d/testimonial-transformed.glb");
