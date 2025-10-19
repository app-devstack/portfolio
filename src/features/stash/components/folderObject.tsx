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
      width={1208}
      height={848}
      fill="none"
      viewBox="0 0 1208 848"
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
      <g id="file" onClick={handleFolderClick} style={{ cursor: 'pointer' }}>
        <rect
          id="file-background"
          x="2"
          y="42"
          width="1204"
          height="804"
          rx="42"
          fill="#D4C8B8"
          stroke="#2B2825"
          strokeWidth="4"
        />
        <g id="file-tab">
          <mask
            id="path-2-outside-1_46_715"
            maskUnits="userSpaceOnUse"
            x="870"
            y="0"
            width="258"
            height="54"
            fill="black"
          >
            <rect fill="white" x="870" width="258" height="54" />
            <path d="M874 16C874 9.37258 879.373 4 886 4H1112C1118.63 4 1124 9.37258 1124 16V54H874V16Z" />
          </mask>
          <path
            d="M874 16C874 9.37258 879.373 4 886 4H1112C1118.63 4 1124 9.37258 1124 16V54H874V16Z"
            fill="#D4C8B8"
          />
          <path
            d="M870 16C870 7.16344 877.163 0 886 0H1112C1120.84 0 1128 7.16344 1128 16H1120C1120 11.5817 1116.42 8 1112 8H886C881.582 8 878 11.5817 878 16H870ZM1124 54H874H1124ZM870 54V16C870 7.16344 877.163 0 886 0V8C881.582 8 878 11.5817 878 16V54H870ZM1112 0C1120.84 0 1128 7.16344 1128 16V54H1120V16C1120 11.5817 1116.42 8 1112 8V0Z"
            fill="#2B2825"
            mask="url(#path-2-outside-1_46_715)"
            strokeWidth="4"
          />
        </g>

        <text
          x="604"
          y="464"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#2B2825"
          fontSize="80"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          {folderName}
        </text>
      </g>
    </motion.svg>
  );
}
