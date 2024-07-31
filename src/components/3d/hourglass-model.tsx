import { Mesh, MeshStandardMaterial, Group } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { GroupProps, useFrame } from "@react-three/fiber";
import { MotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/core/generic/use-media-query";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: Mesh;
    Sphere: Mesh;
    Sphere_2: Mesh;
  };
  materials: {
    Material: MeshStandardMaterial;
    Transparent: MeshStandardMaterial;
    Sand: MeshStandardMaterial;
  };
};

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

interface Hourglass3dModelProps extends GroupProps {
  scrollYProgress: MotionValue<number>;
}

export function Hourglass3dModel({
  scrollYProgress,
  ...props
}: Hourglass3dModelProps) {
  const { nodes, materials } = useGLTF(
    "3d/hourglass-transformed.glb",
  ) as GLTFResult;

  const hourglassRef = useRef<Group>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const positionYTransform = isMobile ? [2.5, -2.5] : [1.5, -1.5];

  const positionY = useSpring(
    useTransform(scrollYProgress, [0, 1], positionYTransform),
  );
  const rotationZ = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, Math.PI]),
  );

  useFrame(() => {
    if (hourglassRef.current) {
      hourglassRef.current.rotation.z = rotationZ.get();
      hourglassRef.current.position.y = positionY.get();
    }
  });

  return (
    <group {...props} dispose={null} ref={hourglassRef}>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.Material}
        position={[0, -0.584, 0]}
        scale={[0.01, 0.014, 0.01]}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={materials.Transparent}
        position={[-0.012, -0.492, 0.006]}
        scale={[0.034, 0.045, 0.034]}
      />
      <mesh
        geometry={nodes.Sphere_2.geometry}
        // material={materials.Sand}
        position={[-0.012, -0.5, 0.006]}
        scale={[0.029, 0.038, 0.029]}
      >
        <meshStandardMaterial
          attach="material"
          color="#F05A19"
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("3d/hourglass-transformed.glb");
