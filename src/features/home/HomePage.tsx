'use client';

import Header from '@/components/elements/header';
import HomeMainContents from '@/features/home/components/contents';
import MarqueeContents from '@/features/home/components/marquee';
import CustomCanvas from '@/features/home/components/three/customCanvas';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <Header />

      {/* 背景キャンバス */}
      <div className="fixed inset-0 z-0">
        <CustomCanvas />
      </div>

      {/* メイン */}
      <div className="grid grid-cols-1 justify-items-center">
        {/* マーキー */}
        <MarqueeContents />

        {/* メインコンテンツ */}
        <div className="col-start-1 row-start-2 grid justify-center gap-16 px-12 py-32">
          <HomeMainContents />
        </div>
      </div>
    </div>
  );
}
