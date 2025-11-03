import dedent from 'dedent';
import Image from 'next/image';

import { notoSansJp } from '@/assets/font';
import CustomMarkdown from '@/components/CustomMarkdown';
import { IMAGE_BG_COLOR } from '@/components/elements/imageViewer/_constants';
import { ContentImageProps } from '@/components/elements/imageViewer/_types';
import { useIsMobile } from '@/hooks/useIsMobile';
import { cn } from '@/lib/utils';

type OriginalAspectImageViewProps = {
  images: ContentImageProps[];
};

/**
 * 画像のオリジナルアスペクト比表示コンポーネント
 */
export default function OriginalAspectImageViewer({ images }: OriginalAspectImageViewProps) {
  const isMobile = useIsMobile();

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
              <div
                className={cn('text-muted-foreground py-2', notoSansJp.className)}
                style={{ width: `${imageWidth}px` }}
              >
                <CustomMarkdown>{dedent(image.description)}</CustomMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
