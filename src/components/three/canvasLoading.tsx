'use client';

import { Html } from '@react-three/drei';

import { Spinner } from '@/components/ui/spinner';

export default function CanvasLoading() {
  return (
    <Html center>
      <Spinner className="text-muted-foreground/50 size-10" />
    </Html>
  );
}
