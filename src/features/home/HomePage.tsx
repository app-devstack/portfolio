'use client';

import { useScroll } from 'motion/react';

import Header from '@/components/elements/header';
import { AnimationStateProvider } from '@/contexts/AnimationStateContext';
import { ScrollProvider } from '@/contexts/ScrollContext';
import HomeMainContents from '@/features/home/components/contents';
import MarqueeContents from '@/features/home/components/marquee';
import HomeThreeCanvas from '@/features/home/three/homeThreeCanvas';

export default function HomePage() {
  const { scrollY } = useScroll();

  return (
    <AnimationStateProvider>
      <div className="relative min-h-screen">
        <Header />

        {/* 背景キャンバス */}
        <div className="fixed inset-0 z-0">
          <ScrollProvider scrollY={scrollY}>
            <HomeThreeCanvas />
          </ScrollProvider>
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
    </AnimationStateProvider>
  );
}
