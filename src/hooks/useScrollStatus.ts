import { useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

/**
 * スクロール状態を管理するフック
 */
export default function useScrollStatus() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setHasScrolled(latest > 0);
    });
  }, [scrollY]);

  return {
    /** スクロールしているかどうか */
    hasScrolled,
  };
}
