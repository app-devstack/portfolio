'use client';

import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

import Figure from './figure';

const Loading = () => {
  return <Text>Loading...</Text>;
};

const FigureGroup = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Figure position={[0, 0, 0]} />
    </group>
  );
};

const Scene = () => (
  <>
    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    <ambientLight intensity={0.8} />
    <directionalLight position={[10, 10, 5]} intensity={0.5} />
    <hemisphereLight intensity={1} />
    <FigureGroup />
  </>
);

export default function CustomCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={<Loading />}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
