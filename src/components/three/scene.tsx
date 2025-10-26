'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { PropsWithChildren, Suspense } from 'react';

import { Position } from '@/types/three';

import CanvasLoading from './canvasLoading';

export default function Scene({ children }: PropsWithChildren) {
  const CAMERA_POSITION: Position = [0, 0, 2.8];
  const DERECT_FRONT_POSITION: Position = [10, 10, 5];
  const DERECT_BACK_POSITION: Position = [-10, -5, -5];

  return (
    <Canvas camera={{ position: CAMERA_POSITION }}>
      <Suspense fallback={<CanvasLoading />}>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

        <ambientLight intensity={0.8} />

        <directionalLight position={DERECT_FRONT_POSITION} intensity={0.5} />
        <directionalLight position={DERECT_BACK_POSITION} intensity={0.5} />

        <hemisphereLight intensity={1} />

        {children}
      </Suspense>
    </Canvas>
  );
}
