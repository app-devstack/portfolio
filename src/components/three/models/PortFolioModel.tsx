import { useAnimations, useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

import { MODEL_PATHS } from '@/constants';
import { useAnimationState } from '@/contexts/AnimationStateContext';
import { useScrollValue } from '@/contexts/ScrollContext';
import {
  useThreeAnimationPlayer,
  useThreePosition,
  useThreeScrollReverseAnimation,
  useThreeUpdateBaseColor,
} from '@/hooks/useThree';
import { Position } from '@/types/three';

interface FigureProps {
  position?: Position;
  baseColor?: string;
  maxScroll?: number;
}

useGLTF.preload(MODEL_PATHS.portfolio);

export default function PortFolioModel({ position, baseColor, maxScroll = 1000 }: FigureProps) {
  const INITIAL_POSITION: Position = [0, -2.5, -0.5];
  const MAX_POSITION: Position = [0, -1, 8];
  const POSITION_SCROLL_SENSITIVITY = 0.002; // スクロール感度

  // const path = `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`;
  const gltf = useGLTF(MODEL_PATHS.portfolio);
  const groupRef = useRef<THREE.Group>(null);
  const { actions, names } = useAnimations(gltf.animations, groupRef);
  const scrollY = useScrollValue();
  const { isInitialAnimationComplete, setIsInitialAnimationComplete } = useAnimationState();

  // 初回アニメーション完了時のコールバック
  const handleInitialAnimationComplete = () => {
    setIsInitialAnimationComplete(true);
  };

  // アニメーションを再生（初回アニメーション）
  useThreeAnimationPlayer({ actions, names, onComplete: handleInitialAnimationComplete });

  // スクロール時のアニメーション逆再生を制御（初回完了後に開始）
  useThreeScrollReverseAnimation({
    scrollY,
    actions,
    names,
    maxScroll,
    isInitialAnimationComplete,
  });

  // ベースカラーの適用
  useThreeUpdateBaseColor({ baseColor, gltf });

  // スクロール値量に応じて位置を制御
  useThreePosition({
    scrollY,
    threeRef: groupRef,
    initialPosition: position || INITIAL_POSITION,
    maxPosition: MAX_POSITION,
    scrollSensitivity: POSITION_SCROLL_SENSITIVITY,
  });

  return (
    <group ref={groupRef} position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
}
