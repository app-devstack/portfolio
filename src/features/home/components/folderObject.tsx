'use client';

import { useWindowSize } from '@uidotdev/usehooks';

type FolderObjectProps = {
  folderName: string;
  handleTabClick: () => void;
  position?: {
    x: number;
    y: number;
    z: number;
  };
};

export default function FolderObject({
  folderName = 'public',
  handleTabClick,
  position,
}: FolderObjectProps) {
  const { width, height } = useWindowSize();

  // const handleTabClick = () => {
  //   console.log('Tab clicked');
  //   alert('publicタブがクリックされました');
  // };

  // ウィンドウサイズに基づいてスケールを計算
  const scale = Math.min((width || 1170) / 1170, (height || 1012) / 1012) * 0.8;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width={1170 * scale}
      // height={1012 * scale}
      width={1170}
      height={1012}
      fill="none"
      viewBox="0 0 1170 1012"
      className="max-h-full max-w-full"
      style={{
        position: 'absolute',
        left: position ? `calc(50% + ${position.x}px)` : '50%',
        top: position ? `calc(50% + ${position.y}px)` : '50%',
        transform: `translate(-50%, -50%) scale(${scale})`,
        zIndex: position ? position.z : 1,
      }}
    >
      {/* フォルダ本体 */}
      <path
        fill="#d4c8b8"
        d="M2 90c0-22.091 17.909-40 40-40h1086c22.09 0 40 17.909 40 40v880c0 22.091-17.91 40-40 40H42c-22.091 0-40-17.909-40-40z"
        style={{ pointerEvents: 'none' }}
      />
      <path
        stroke="#2b2825"
        strokeWidth="4"
        d="M2 90c0-22.091 17.909-40 40-40h1086c22.09 0 40 17.909 40 40v880c0 22.091-17.91 40-40 40H42c-22.091 0-40-17.909-40-40z"
        fill="none"
        style={{ pointerEvents: 'none' }}
      />

      {/* インデックス部分*/}
      <g onClick={handleTabClick} style={{ cursor: 'pointer', pointerEvents: 'auto' }}>
        <path fill="#d4c8b8" d="M822 14c0-6.627 5.373-12 12-12h226c6.63 0 12 5.373 12 12v36H822z" />
        <path
          stroke="#2b2825"
          strokeWidth="4"
          d="M822 14c0-6.627 5.373-12 12-12h226c6.63 0 12 5.373 12 12v36H822z"
          fill="none"
        />
        <text
          x="947"
          y="38"
          fontSize="32"
          fontWeight="bold"
          fill="#2B2825"
          textAnchor="middle"
          style={{ pointerEvents: 'none' }}
        >
          {folderName}
        </text>
      </g>
    </svg>
  );
}
