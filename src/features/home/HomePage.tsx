'use client';

import { motion } from 'motion/react';

import HeroTitle from '@/assets/hero-title';
import HeroTitleBg from '@/assets/hero-title-bg';
import FolderObject from '@/features/home/components/folderObject';
import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';

type FolderData = {
  name: string;
  position: { x: number; y: number; z: number };
};

const FOLDERS: FolderData[] = [
  { name: 'public', position: { x: -40, y: 40, z: 20 } },
  { name: 'src', position: { x: 0, y: 0, z: 10 } },
  { name: 'zip', position: { x: 40, y: -40, z: 0 } },
];

const HERO_CENTER_CLASS = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform';

export default function HomePage() {
  const isMobile = useIsMobile();

  const handleFolderClick = (name: string) => {
    console.log(`${name}フォルダがクリックされました`);
    alert(`${name}フォルダがクリックされました`);
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      {/* Hero要素 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <HeroTitle className={cn(HERO_CENTER_CLASS, 'z-99')} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroTitleBg className={cn(HERO_CENTER_CLASS, 'z-98')} />
      </motion.div>

      {/* フォルダ表示エリア */}
      <motion.div
        className={cn('grid max-w-6xl gap-8 px-8', isMobile ? 'grid-cols-2' : 'grid-cols-3')}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.3,
            },
          },
        }}
      >
        {FOLDERS.map((folder) => (
          <motion.div
            key={folder.name}
            variants={{
              hidden: { opacity: 0, y: isMobile ? 0 : 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <FolderObject
              folderName={folder.name}
              handleFolderClick={() => handleFolderClick(folder.name)}
              position={isMobile ? folder.position : undefined}
              // isResponsive={!isMobile}
              isResponsive
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
