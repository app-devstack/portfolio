'use client';
import { ReactLenis, useLenis } from 'lenis/react';

import { useImageViewerDialogStore } from '@/store/useImageViewerDialogStore';

export default function Lenis() {
  const { isOpen } = useImageViewerDialogStore();
  useLenis();

  // ※ ダイアログが開いていてもbodyがスクロールされてしまうため、
  // ダイアログ表示時は、Lenisコンポーネントをレンダリングしない
  if (isOpen) return null;

  return <ReactLenis root />;
}
