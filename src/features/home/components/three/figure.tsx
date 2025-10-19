// figure.tsx
import { useGLTF } from '@react-three/drei';
import React from 'react';

import { ASSETS_DOMAIN } from '@/constants';

interface FigureProps {
  position?: [number, number, number];
}

export default function Figure({ position = [0, 0, 0] }: FigureProps) {
  const path = `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`;
  const gltf = useGLTF(path);

  return (
    <group position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
}
