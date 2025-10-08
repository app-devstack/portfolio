'use client';

import { useEffect, useState } from 'react';

const MBILE_BREAKPOINT = 768; // px

export function useIsMobile(breakpoint: number = MBILE_BREAKPOINT): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // 初期チェック
    checkIsMobile();

    // リサイズイベントリスナー
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
}
