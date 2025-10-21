'use client';
import { ReactLenis, useLenis } from 'lenis/react';

export default function Lenis() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis);
  });

  return <ReactLenis root />;
}
