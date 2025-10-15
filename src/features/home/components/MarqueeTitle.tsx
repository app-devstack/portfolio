'use client';

import { motion } from 'framer-motion';

import HeroTitle from '@/assets/hero-title';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function MarqueeTitle() {
  const isMobile = useIsMobile();

  // 定数の定義
  const TITLE_WIDTH = isMobile ? 200 : 400;
  const TITLE_HEIGHT = isMobile ? 50 : 100;
  const TITLE_GAP = isMobile ? 200 : 200;
  const TITLE_COUNT = 4;
  const ANIMATION_DURATION = 40;

  // 計算式 :(タイトル幅400px + 間隔400px) × 4個 = 3200px
  const SINGLE_ITEM_WIDTH = TITLE_WIDTH + TITLE_GAP; // 1つのタイトル+間隔
  const MOVE_DISTANCE = -(SINGLE_ITEM_WIDTH * TITLE_COUNT); // 移動距離

  return (
    <motion.div
      className="relative flex"
      style={{ gap: TITLE_GAP }}
      animate={{ x: [0, MOVE_DISTANCE] }}
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
        <motion.div
          key={index}
          drag
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          whileHover={{
            scale: 1.2,
            rotate: 3,
            transition: { duration: 0.2, type: 'spring', stiffness: 200 },
          }}
          whileTap={{
            scale: 0.9,
          }}
          initial={{ y: -800, opacity: 0, scale: 0.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.5, // 順番に登場
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,

            // ホバー解除時の戻りアニメーション
            scale: { duration: 0.2, ease: 'easeInOut' },
            rotate: { duration: 0.2, ease: 'easeInOut' },
          }}
        >
          <HeroTitle width={TITLE_WIDTH} height={TITLE_HEIGHT} />
        </motion.div>
      ))}
    </motion.div>
  );
}
