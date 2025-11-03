'use client';

import { ContentImageProps } from '@/components/elements/imageViewer/_types';
import GridStyleImageViewer from '@/components/elements/imageViewer/gridStyleImageViewer';
import { useImageViewerDialogStore } from '@/store/useImageViewerDialogStore';

type ImageViewerProps = {
  images: ContentImageProps[];
};

/**
 * 画像ビューアトリガーコンポーネント
 * クリック時にストアを通じて ImageViewerDialog を開く
 */
export default function HomeContentsImageViewer({ images }: ImageViewerProps) {
  const { openDialog } = useImageViewerDialogStore();

  const handleClick = () => {
    openDialog(images);
  };

  return (
    <div className="h-full w-full md:w-fit">
      <button onClick={handleClick} className="h-fit w-full cursor-pointer md:w-fit">
        {/* グリッド形式で画像表示 */}
        <GridStyleImageViewer images={images} />
        <span>↑クリック(タップで詳細を表示)</span>
      </button>
    </div>
  );
}
