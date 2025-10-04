'use client';

import FolderObject from '@/features/home/components/folderObject';

export default function HomePage() {
  const handleTabClick = () => {
    console.log('Tab clicked');
    alert('publicタブがクリックされました');
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <FolderObject
        folderName="public"
        handleTabClick={handleTabClick}
        position={{
          x: -40,
          y: 40,
          z: 0,
        }}
      />
      <FolderObject
        folderName="2"
        handleTabClick={handleTabClick}
        position={{
          x: 0,
          y: 0,
          z: -1,
        }}
      />
      <FolderObject
        folderName="3"
        handleTabClick={handleTabClick}
        position={{
          x: 40,
          y: -40,
          z: -2,
        }}
      />
    </div>
  );
}
