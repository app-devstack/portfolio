'use client';

import { motion } from 'motion/react';

import MarqueeTitle from '@/features/home/components/marquee/marqueeTitle';
import useScrollStatus from '@/hooks/useScrollStatus';

// スクロール開始後のアニメーション設定
const SCROLL_ANIMATION = {
  targetY: '45vh',
  targetScale: 0.5,
  transition: { duration: 0.5, ease: 'easeOut', type: 'spring', stiffness: 50 },
} as const;

/**
 * マーキーコンポーネント
 */
export default function MarqueeContents() {
  const { hasScrolled } = useScrollStatus();

  return (
    <div className="sticky top-0 col-start-1 row-start-1 flex h-screen items-center justify-center">
      <div className="w-screen">
        <motion.div
          className="w-max"
          animate={{
            y: SCROLL_ANIMATION.targetY,
            // x: hasScrolled ? '-30%' : undefined,
            x: '-30%',
            scale: hasScrolled ? SCROLL_ANIMATION.targetScale : 0.7,
          }}
          transition={SCROLL_ANIMATION.transition}
        >
          <MarqueeTitle />
        </motion.div>
      </div>
    </div>
  );
}
