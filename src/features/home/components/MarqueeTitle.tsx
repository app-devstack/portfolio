'use client';

import { motion } from 'framer-motion';

import HeroTitle from '@/assets/hero-title';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function MarqueeTitle() {
  const isMobile = useIsMobile();

  // 定数の定義
  const TITLE_WIDTH = isMobile ? 200 : 400;
  const TITLE_HEIGHT = isMobile ? 50 : 100;
  const TITLE_GAP = isMobile ? 200 : 400;
  const TITLE_COUNT = 4;
  const ANIMATION_DURATION = 40;

  // 計算式 :(タイトル幅400px + 間隔400px) × 4個 = 3200px
  const SINGLE_ITEM_WIDTH = TITLE_WIDTH + TITLE_GAP; // 1つのタイトル+間隔
  const MOVE_DISTANCE = -(SINGLE_ITEM_WIDTH * TITLE_COUNT); // 移動距離

  return (
    <motion.div
      className="flex"
      style={{ gap: TITLE_GAP }}
      animate={{
        x: [0, MOVE_DISTANCE],
      }}
      transition={{
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: ANIMATION_DURATION,
          ease: 'linear',
        },
      }}
    >
      {Array.from({ length: TITLE_COUNT * 2 }).map((_, index) => (
        <HeroTitle key={index} width={TITLE_WIDTH} height={TITLE_HEIGHT} />
      ))}
    </motion.div>
  );
}
