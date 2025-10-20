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

      <div className="fixed z-0 overflow-x-hidden overflow-y-visible">
        {/* マーキー */}
        <MarqueeContents />
      </div>

      <div className="h-[100vh]" />

      {/* メイン */}
      <div className="overflow-x-hidden overflow-y-visible">
        {/* メインコンテンツ */}
        <HomeMainContents />
      </div>
    </div>
  );
}
