'use client';

import HeroTitle from '@/assets/hero-title';
import HeroTitleBg from '@/assets/hero-title-bg';
import FolderObject from '@/features/home/components/folderObject';

export default function HomePage() {
  const handleFolderClick = (name: string) => {
    console.log(`${name}フォルダがクリックされました`);
  };

  const folders = [
    { name: 'public', position: { x: -40, y: 40, z: 20 } },
    { name: 'src', position: { x: 0, y: 0, z: 10 } },
    { name: 'zip', position: { x: 40, y: -40, z: 0 } },
  ];

  return (
    <div className="relative flex h-screen items-center justify-center">
      <HeroTitle className="absolute top-1/2 left-1/2 z-99 -translate-x-1/2 -translate-y-1/2 transform" />
      <HeroTitleBg className="absolute top-1/2 left-1/2 z-98 -translate-x-1/2 -translate-y-1/2 transform" />

      {folders.map((folder) => (
        <FolderObject
          key={folder.name}
          folderName={folder.name}
          handleFolderClick={() => handleFolderClick(folder.name)}
          position={folder.position}
        />
      ))}
    </div>
  );
}
