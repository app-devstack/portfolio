'use client';

import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface AnimationStateContextType {
  /**
   * 初回アニメーション完了フラグ
   * true: 初回アニメーション完了 → リバースアニメーション有効
   * false: 初回アニメーション実行中
   */
  isInitialAnimationComplete: boolean;
  setIsInitialAnimationComplete: (value: boolean) => void;
}

const AnimationStateContext = createContext<AnimationStateContextType | undefined>(undefined);

export function AnimationStateProvider({ children }: PropsWithChildren) {
  const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState(false);

  return (
    <AnimationStateContext.Provider
      value={{
        isInitialAnimationComplete,
        setIsInitialAnimationComplete,
      }}
    >
      {children}
    </AnimationStateContext.Provider>
  );
}

/**
 * アニメーション状態を取得するカスタムフック
 * @returns isInitialAnimationComplete: 初回アニメーション完了フラグ
 * @returns setIsInitialAnimationComplete: フラグをセットする関数
 */
export function useAnimationState() {
  const context = useContext(AnimationStateContext);

  if (!context) {
    throw new Error('useAnimationState must be used within AnimationStateProvider');
  }

  return context;
}
