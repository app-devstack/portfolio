'use client';

import { MotionValue } from 'motion/react';
import { createContext, PropsWithChildren, useContext } from 'react';

interface ScrollContextType {
  scrollY: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({
  children,
  scrollY,
}: PropsWithChildren<{ scrollY: MotionValue<number> }>) {
  return <ScrollContext.Provider value={{ scrollY }}>{children}</ScrollContext.Provider>;
}

/**
 * スクロール値を取得するカスタムフック
 * @returns scrollY: スクロール値（MotionValue）
 */
export function useScrollValue() {
  const context = useContext(ScrollContext);

  if (!context) {
    throw new Error('useScrollValue must be used within ScrollProvider');
  }

  return context.scrollY;
}
