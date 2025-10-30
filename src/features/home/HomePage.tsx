'use client';

import { useScroll } from 'motion/react';

import Footer from '@/components/elements/footer';
import Header from '@/components/elements/header';
import { AnimationStateProvider } from '@/contexts/AnimationStateContext';
import { ScrollProvider } from '@/contexts/ScrollContext';
import HomeMainContents from '@/features/home/components/contents';
import MarqueeContents from '@/features/home/components/marquee';
import HomeThreeCanvas from '@/features/home/three/homeThreeCanvas';
import { cn } from '@/lib/utils';

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

        <div className={cn('z-10 overflow-x-hidden overflow-y-visible')}>
          <div
            className={cn(
              'h-[80vh] px-12 py-32',
              'text-foreground text-xl/12 font-bold tracking-wide md:text-3xl/24'
            )}
          >
            <p>Thankyou for visiting my portfolio site!</p>
            <p>mite kurete arigato~!!</p>
          </div>
        </div>

        {/* フッター */}
        <Footer />
      </div>
    </AnimationStateProvider>
  );
}
