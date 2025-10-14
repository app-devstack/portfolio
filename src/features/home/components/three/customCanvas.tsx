'use client';

import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';

import HeroTitle from '@/assets/hero-title';

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
      <Figure position={[0, 0, 1]} />
      <Figure position={[-0.4, -0.6, 2]} />
      <Figure position={[0.4, 0.6, 0]} />
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
    <div className="relative h-screen w-screen">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <HeroTitle width={400} height={100} />
      </div>
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Suspense fallback={<Loading />}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
