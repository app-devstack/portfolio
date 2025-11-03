'use client';

import OriginalAspectImageViewer from '@/components/elements/imageViewer/originalAspectImageViewer';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useImageViewerDialogStore } from '@/store/useImageViewerDialogStore';

/**
 * 画像ビューアダイアログコンポーネント
 * ストアで管理された画像データを表示する共通ダイアログ
 */
export default function ImageViewerDialog() {
  const { isOpen, images, closeDialog } = useImageViewerDialogStore();

  return (
    <Dialog open={isOpen} onOpenChange={closeDialog}>
      {/* ダイアログコンテンツ */}
      <DialogContent
        className={cn(
          'max-h-[80vh] min-h-[70vh] w-[calc(100%-2rem)] max-w-2xl sm:max-h-[85vh] md:max-h-[80vh] md:max-w-4xl',
          'flex flex-col overflow-hidden p-0'
        )}
        style={{ overscrollBehavior: 'contain' }}
      >
        {/* Title・Descriptionが未設置だとエラー表示されるため、画面上見えないけど設置している */}
        <DialogTitle className="sr-only">VISUALLY_HIDDEN</DialogTitle>
        <DialogDescription className="sr-only">VISUALLY_HIDDEN</DialogDescription>

        {/* トリムしていない本来の画像サイズで表示 */}
        <div className="flex-1 overflow-y-auto" style={{ overscrollBehavior: 'contain' }}>
          <div className="px-4 py-4 sm:px-6">
            <OriginalAspectImageViewer images={images} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
