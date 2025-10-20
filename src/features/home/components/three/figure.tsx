// figure.tsx
import { useGLTF, useTexture } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

import { ASSETS_DOMAIN } from '@/constants';

interface FigureProps {
  position?: [number, number, number];
}

// 代替画像を表示するコンポーネント
function FallbackImage({ position: _ }: FigureProps) {
  const fallbackImagePath = `/images/fallback.png`;
  const texture = useTexture(fallbackImagePath);

  // 766 × 1021 のアスペクト比を計算
  const aspectRatio = 766 / 1021;
  const height = 4;
  const width = height * aspectRatio;

  return (
    <group position={[0, 0, 0]}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
      </mesh>
    </group>
  );
}

// エラーをキャッチするためのラッパーコンポーネント
class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('GLTFモデルの読み込みに失敗しました:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 3Dモデルを表示するコンポーネント
function FigureModel({ position }: FigureProps) {
  const path = `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`;
  const gltf = useGLTF(path);

  return (
    <group position={position}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// 外部に公開するメインコンポーネント
export default function Figure({ position = [0, 0, 0] }: FigureProps) {
  return (
    <ErrorBoundary fallback={<FallbackImage position={position} />}>
      <FigureModel position={position} />
    </ErrorBoundary>
  );
}
