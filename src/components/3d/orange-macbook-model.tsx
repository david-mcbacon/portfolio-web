import { Mesh, MeshStandardMaterial, Group } from "three";
import React, { Suspense, useRef } from "react";
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { a as three } from "@react-spring/three";
import { useFrame } from "@react-three/fiber";
import { MotionValue, useSpring, useTransform } from "framer-motion";

type GLTFResult = GLTF & {
  nodes: {
    keyboard: Mesh;
    base: Mesh;
    touchbar: Mesh;
    ["macbook-bachoff-logo"]: Mesh;
    ["macbook-bachoff-logo-trackpad"]: Mesh;
    ["macbook-framer-logo"]: Mesh;
    Cube008: Mesh;
    Cube008_1: Mesh;
    Cube008_2: Mesh;
  };
  materials: {
    keys: MeshStandardMaterial;
    aluminium: MeshStandardMaterial;
    touchbar: MeshStandardMaterial;
    ["macbook-bachoff-logo"]: MeshStandardMaterial;
    ["macbook-framer-logo"]: MeshStandardMaterial;
    ["matte.001"]: MeshStandardMaterial;
    ["screen.001"]: MeshStandardMaterial;
  };
};

export function Model({
  scrollYProgress,
  isMobile,
  props,
}: {
  scrollYProgress: MotionValue<number>;
  isMobile: boolean;
  props?: JSX.IntrinsicElements["group"];
}) {
  const { nodes, materials } = useGLTF(
    "/3d/orange-macbook-transformed.glb",
  ) as GLTFResult;

  const group = useRef<Group>(null);
  const hingeRef = useRef<Group>(null);

  const newHinge = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [1.575, 1.575, -0.2],
  );

  const newZPositionScrollOffset = isMobile ? [0, 0.8, 1] : [0, 0.6, 0.8];
  const newZPosition = useTransform(
    scrollYProgress,
    newZPositionScrollOffset,
    [-10, -5, 0],
  );

  const newYRotationScrollOffset = isMobile ? [0, 1] : [0, 0.8];
  const newYRotation = useSpring(
    useTransform(scrollYProgress, newYRotationScrollOffset, [-Math.PI * 2, 0]),
    { bounce: 0.15 },
  );

  // update the hinge rotation
  useFrame(() => {
    if (hingeRef.current) {
      hingeRef.current.rotation.x = newHinge.get();
    }
    if (group.current) {
      group.current.position.z = newZPosition.get();
      group.current.rotation.y = newYRotation.get();
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={group}
      position={[0, -1, 0]}
      rotation={[0, 0, 0]}
    >
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.keys}
        position={[1.793, 0, 3.451]}
      />
      <mesh
        geometry={nodes.base.geometry}
        material={materials.aluminium}
        position={[0, -0.1, 3.394]}
      />
      <mesh
        geometry={nodes.touchbar.geometry}
        material={materials.touchbar}
        position={[0, -0.027, 1.201]}
      />
      <mesh
        geometry={nodes["macbook-bachoff-logo-trackpad"].geometry}
        material={materials["macbook-bachoff-logo"]}
        position={[-3.178, 0.189, 5.076]}
      />

      <three.group position={[0, 0.0, 0.41]} ref={hingeRef}>
        <mesh
          geometry={nodes["macbook-bachoff-logo"].geometry}
          material={materials["macbook-bachoff-logo"]}
          position={[0, 3.067, -0.34]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1.7, 1, 1.7]}
        />
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.Cube008.geometry}
            material={materials.aluminium}
          />
          <mesh
            geometry={nodes.Cube008_1.geometry}
            material={materials["matte.001"]}
          />
          <mesh
            geometry={nodes.Cube008_2.geometry}
            material={materials["screen.001"]}
          >
            <Suspense
              fallback={<FallbackMaterial url="images/macbook-fallback.webp" />}
            >
              <VideoMaterial url="3d/showcase.mp4" />
            </Suspense>
          </mesh>
        </group>
      </three.group>
    </group>
  );
}

function FallbackMaterial({ url }: { url: string }) {
  const texture = useTexture(url);
  texture.flipY = false;
  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

function VideoMaterial({ url }: { url: string }) {
  const texture = useVideoTexture(url, {
    autoplay: true,
    loop: true,
    playsInline: true,
    muted: true,
  });
  texture.flipY = false;

  return <meshBasicMaterial map={texture} toneMapped={false} />;
}

useGLTF.preload("/3d/orange-macbook-transformed.glb");
