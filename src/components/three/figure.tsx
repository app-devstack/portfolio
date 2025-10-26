// // figure.tsx
// import { useAnimations, useGLTF, useTexture } from '@react-three/drei';
// import React, { useRef } from 'react';
// import * as THREE from 'three';

// import { useThreeAnimationPlayer, useThreeUpdateBaseColor } from '@/hooks/useThree';

// interface FigureProps {
//   position?: [number, number, number];
//   baseColor?: string;
// }

// // 3Dモデルを表示するコンポーネント
// function FigureModel({ position, baseColor }: FigureProps) {
//   // const path = `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`;
//   const path = '/models/anima_port2.glb';
//   const gltf = useGLTF(path);
//   const groupRef = useRef<THREE.Group>(null);
//   const { actions, names } = useAnimations(gltf.animations, groupRef);

//   // アニメーションを再生
//   useThreeAnimationPlayer({ actions, names });

//   // ベースカラーの適用
//   useThreeUpdateBaseColor({ baseColor, gltf });

//   return (
//     <group ref={groupRef} position={position}>
//       <primitive object={gltf.scene} />
//     </group>
//   );
// }

// // 外部に公開するメインコンポーネント
// export default function Figure({ position = [0, 0, 0], baseColor }: FigureProps) {
//   return (
//     <ErrorBoundary fallback={<FallbackImage position={position} />}>
//       <FigureModel position={position} baseColor={baseColor} />
//     </ErrorBoundary>
//   );
// }

// // 代替画像を表示するコンポーネント
// function FallbackImage({ position: _ }: FigureProps) {
//   const fallbackImagePath = `/images/fallback.png`;
//   const texture = useTexture(fallbackImagePath);

//   // 766 × 1021 のアスペクト比を計算
//   const aspectRatio = 766 / 1021;
//   const height = 4;
//   const width = height * aspectRatio;

//   return (
//     <group position={[0, 0, 0]}>
//       <mesh>
//         <planeGeometry args={[width, height]} />
//         <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent />
//       </mesh>
//     </group>
//   );
// }

// // エラーをキャッチするためのラッパーコンポーネント
// class ErrorBoundary extends React.Component<
//   { children: React.ReactNode; fallback: React.ReactNode },
//   { hasError: boolean }
// > {
//   constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError() {
//     return { hasError: true };
//   }

//   componentDidCatch(error: Error) {
//     console.error('GLTFモデルの読み込みに失敗しました:', error);
//   }

//   render() {
//     if (this.state.hasError) {
//       return this.props.fallback;
//     }
//     return this.props.children;
//   }
// }
