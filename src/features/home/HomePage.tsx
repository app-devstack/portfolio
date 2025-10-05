'use client';

import FolderObject from '@/features/home/components/folderObject';

export default function HomePage() {
  const handleFolderClick = (name: string) => {
    console.log('Tab clicked');
    alert(`${name}フォルダがクリックされました`);
  };

  const folders = [
    { name: 'public', position: { x: -40, y: 40, z: 20 } },
    { name: 'src', position: { x: 0, y: 0, z: 10 } },
    { name: 'zip', position: { x: 40, y: -40, z: 0 } },
  ];

  return (
    <div className="flex h-screen items-center justify-center">
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
