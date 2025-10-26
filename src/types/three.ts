import { useGLTF } from '@react-three/drei';

export type GLTFDataType = ReturnType<typeof useGLTF<string>>;

export type Position = [x: number, y: number, z: number];
