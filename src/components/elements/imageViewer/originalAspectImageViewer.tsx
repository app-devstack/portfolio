import dedent from 'dedent';
import Image from 'next/image';

import { IMAGE_BG_COLOR } from '@/components/elements/imageViewer/_constants';
import { ContentImageProps } from '@/components/elements/imageViewer/_types';
import { useIsMobile } from '@/hooks/useIsMobile';

type OriginalAspectImageViewProps = {
  images: ContentImageProps[];
};

/**
 * 画像のオリジナルアスペクト比表示コンポーネント
 */
export default function OriginalAspectImageViewer({ images }: OriginalAspectImageViewProps) {
  const isMobile = useIsMobile();

  const isSingleImage = images.length === 1;

  if (isSingleImage) {
    const image = images[0];
    return (
      <div className="flex w-full items-center justify-center p-4 sm:p-6">
        <div className="relative max-h-[calc(45vh-1rem)] max-w-full sm:max-h-[calc(40vh-1.5rem)] md:max-h-[calc(40vh-1.5rem)]">
          <Image
            src={image.url}
            alt={image.alt}
            width={1200}
            height={1200}
            className="h-auto w-auto max-w-full object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  // 複数画像時のレイアウト（スクロール対応）
  const imageHeight = isMobile ? 300 : 450;
  const imageWidth = isMobile ? 300 : 450;

  return (
    <div className="w-full p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-center gap-8 space-y-8">
        {images.map((image, index) => (
          <div key={index} className={'mb-4 flex flex-col items-center justify-center'}>
            <div
              className="flex items-center justify-center overflow-hidden rounded-lg border"
              style={{
                height: `${imageHeight}px`,
                width: `${imageWidth}px`,
                backgroundColor: IMAGE_BG_COLOR,
              }}
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-contain"
              />
            </div>
            {image.description && (
              <p className="text-muted-foreground py-2" style={{ width: `${imageWidth}px` }}>
                {dedent(image.description)}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
