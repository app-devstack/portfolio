'use client';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';

type FolderObjectProps = {
  folderName: string;
  handleFolderClick: () => void;
  position?: {
    x: number;
    y: number;
    z: number;
  };
  isResponsive?: boolean;
};

export default function FolderObject({
  folderName = 'public',
  handleFolderClick,
  position,
  isResponsive = false,
}: FolderObjectProps) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={1170}
      height={1012}
      fill="none"
      viewBox="0 0 1170 1012"
      className={cn('max-h-full max-w-full')}
      style={
        isResponsive
          ? undefined
          : {
              position: 'absolute',
              left: position ? `calc(50% + ${position.x}px)` : '50%',
              top: position ? `calc(50% + ${position.y}px)` : '50%',
              transform: `translate(-50%, -50%)`,
              zIndex: position ? position.z : 1,
            }
      }
      whileHover={{ y: -16 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      {/* フォルダ本体 */}
      <path
        fill="#d4c8b8"
        d="M2 90c0-22.091 17.909-40 40-40h1086c22.09 0 40 17.909 40 40v880c0 22.091-17.91 40-40 40H42c-22.091 0-40-17.909-40-40z"
        style={{ cursor: 'pointer', pointerEvents: 'auto' }}
        onClick={handleFolderClick}
      />
      <path
        stroke="#2b2825"
        strokeWidth="4"
        d="M2 90c0-22.091 17.909-40 40-40h1086c22.09 0 40 17.909 40 40v880c0 22.091-17.91 40-40 40H42c-22.091 0-40-17.909-40-40z"
        fill="none"
      />

      {/* インデックス部分*/}
      <g onClick={handleFolderClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
        <path fill="#d4c8b8" d="M822 17c0-6.627 5.373-12 12-12h226c6.63 0 12 5.373 12 12v36H822z" />
        <path
          stroke="#2b2825"
          strokeWidth="4"
          d="M822 51V17c0-6.627 5.373-12 12-12h226c6.63 0 12 5.373 12 12v36"
          fill="none"
        />
        <text
          x="947"
          y="41"
          fontSize="24"
          fontWeight="bold"
          fill="#2B2825"
          textAnchor="middle"
          style={{ pointerEvents: 'none' }}
        >
          {folderName}
        </text>
      </g>
    </motion.svg>
  );
}
