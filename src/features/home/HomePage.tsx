'use client';

import MarqueeTitle from './components/MarqueeTitle';
import CustomCanvas from './components/three/customCanvas';

export default function HomePage() {
  return (
    <div className="main relative h-screen w-screen">
      <div className="absolute top-1/2 left-1/2 z-10 w-screen -translate-x-1/2 -translate-y-1/2">
        <MarqueeTitle />
      </div>

      <CustomCanvas />
    </div>
  );
}
