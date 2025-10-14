import { useLoader } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
// import { SVGLoader } from 'three/examples/jsm/Addons.js';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';

interface FigureProps {
  position?: [number, number, number];
}

export default function Figure({ position = [0, 0, 0] }: FigureProps) {
  const svgData = useLoader(SVGLoader, '/images/folder.svg');
  const shapes = svgData.paths.flatMap((path) => path.toShapes(true));

  const geometry = new THREE.ExtrudeGeometry(shapes, {
    depth: 20,
  });
  geometry.center();

  const edgesGeometry = new THREE.EdgesGeometry(geometry, 15);

  return (
    <group position={position} scale={[0.01, -0.01, 0.01]}>
      <mesh geometry={geometry}>
        <meshPhongMaterial attach="material" color={'#D4C8B8'} />
      </mesh>
      <lineSegments geometry={edgesGeometry}>
        <lineBasicMaterial attach="material" color={'#2B2825'} linewidth={20} />
      </lineSegments>
    </group>
  );
}
