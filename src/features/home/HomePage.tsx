'use client';

import HeroTitle from '@/assets/hero-title';

import CustomCanvas from './components/three/customCanvas';

// type FolderData = {
//   name: string;
//   position: { x: number; y: number; z: number };
// };

// const FOLDERS: FolderData[] = [
//   { name: 'public', position: { x: -40, y: 40, z: 20 } },
//   { name: 'src', position: { x: 0, y: 0, z: 10 } },
//   { name: 'zip', position: { x: 40, y: -40, z: 0 } },
// ];

// const HERO_CENTER_CLASS = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform';

export default function HomePage() {
  // const isMobile = useIsMobile();

  // const handleFolderClick = (name: string) => {
  //   console.log(`${name}フォルダがクリックされました`);
  //   alert(`${name}フォルダがクリックされました`);
  // };

  return (
    <div className="main relative h-screen w-screen">
      <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <HeroTitle width={400} height={100} />
      </div>
      <CustomCanvas />
    </div>
  );
}
