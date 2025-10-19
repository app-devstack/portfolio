'use client';

import { useEffect, useState } from 'react';

const SP_BREAKPOINT = 768; // px

export function useIsMobile(breakpoint: number = SP_BREAKPOINT): boolean {
  // 初期値をundefinedにして、クライアントサイドで初めて判定するようにする
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    // 初期チェック
    handleChange(mediaQuery);

    // matchMediaのリスナーを設定
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [breakpoint]);

  return isMobile ?? false;
}
