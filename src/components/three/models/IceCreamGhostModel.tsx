import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

import { MODEL_PATHS } from '@/constants';
import { useScrollValue } from '@/contexts/ScrollContext';
import { useThreePosition, useThreeRotation } from '@/hooks/useThree';
import { Position } from '@/types/three';

interface FigureProps {
  position?: Position;
  baseColor?: string;
}

useGLTF.preload(MODEL_PATHS.iceCreamGhost);

export default function IceCreamGhostModel({
  position = [0, -2.5, -0.5],
  baseColor: _,
}: FigureProps) {
  const ROTATION_SPEED = 0.5;
  const INITIAL_POSITION: Position = position;
  const MAX_POSITION: Position = [0, -1, 0.5];
  const POSITION_SCROLL_SENSITIVITY = 0.002; // 位置のスクロール感度

  const scrollY = useScrollValue();

  // const path = `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`;
  const gltf = useGLTF(MODEL_PATHS.iceCreamGhost);
  const groupRef = useRef<THREE.Group>(null);

  // モデルの回転（固定速度）
  useThreeRotation({
    threeRef: groupRef,
    speed: ROTATION_SPEED,
  });

  // スクロール値量に応じて位置を制御
  useThreePosition({
    scrollY,
    threeRef: groupRef,
    initialPosition: INITIAL_POSITION,
    maxPosition: MAX_POSITION,
    scrollSensitivity: POSITION_SCROLL_SENSITIVITY,
  });

  return (
    <group ref={groupRef} position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
}
