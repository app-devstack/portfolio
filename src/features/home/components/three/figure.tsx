// figure.tsx
import { useGLTF } from '@react-three/drei';
import React from 'react';

interface FigureProps {
  position?: [number, number, number];
}

export default function Figure({ position = [0, 0, 0] }: FigureProps) {
  const gltf = useGLTF('/models/Chikawa.glb');

  return (
    <group position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
}
