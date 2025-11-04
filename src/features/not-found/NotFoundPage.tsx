'use client';

import { HomeIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="bg-background relative h-screen w-full overflow-hidden">
      {/* コンテンツオーバーレイ */}
      <div className="relative z-10 grid h-full place-items-center px-6">
        <div className="text-center">
          {/* 404 */}
          <motion.div
            className="text-center"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Image
              className="pointer-events-none touch-none select-none"
              draggable={false}
              src={'/images/optimized/notfound.webp'}
              alt="NotFound"
              width={1920 / 2}
              height={1080 / 2}
            />
            <h1 className="sr-only">404</h1>
          </motion.div>

          <div className="mx-auto">
            <h2 className="text-foreground mb-2 text-2xl font-semibold md:text-5xl">
              Page Not Found
            </h2>
            <p className="text-muted-foreground mb-8 text-sm md:text-lg">
              お探しのページは見つかりませんでした
            </p>

            {/* ホームに戻るボタン */}
            <Button
              asChild
              className="relative mx-auto mt-8 flex size-40 rounded-full bg-[#1d1d1d] hover:scale-95"
            >
              <Link href="/" className="inline-flex flex-col items-center justify-center gap-0">
                <span className="text-center text-lg font-semibold">ホームに戻る</span>
                <HomeIcon size={32} className="size-10" />
                <span className="absolute inset-0 rounded-full bg-gradient-to-bl from-white/30 to-transparent" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
