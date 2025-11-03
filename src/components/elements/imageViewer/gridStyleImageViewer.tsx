import Image from 'next/image';

import { IMAGE_BG_COLOR } from '@/components/elements/imageViewer/_constants';
import { ContentImageProps } from '@/components/elements/imageViewer/_types';
import { getImageStyles } from '@/components/elements/imageViewer/_utils';
import { cn } from '@/lib/utils';

type ImageViewerProps = {
  images: ContentImageProps[];
};

/**
 * グリッドスタイル画像ビューアコンポーネント
 */
export default function GridStyleImageViewer({ images }: ImageViewerProps) {
  const isSingleImage = images.length === 1;

  return (
    <>
      {isSingleImage ? <SingleImageView image={images[0]} /> : <MultiImageView images={images} />}
    </>
  );
}

type SingleImageViewProps = {
  image: ContentImageProps;
};

/**
 * 1枚画像用コンポーネント
 */
function SingleImageView({ image }: SingleImageViewProps) {
  const imageStyles = getImageStyles(image.aspectRatio);

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700',
        imageStyles.width
      )}
      style={{ height: imageStyles.height, backgroundColor: IMAGE_BG_COLOR }}
    >
      <div className="relative h-full w-full">
        <Image
          src={image.url}
          alt={image.alt}
          width={500}
          height={500}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

type MultiImageViewProps = {
  images: ContentImageProps[];
};

/**
 * 複数枚画像用コンポーネント
 */
function MultiImageView({ images }: MultiImageViewProps) {
  const count = images.length;

  return (
    <div className="w-full md:w-[300px]">
      <div
        className={cn(
          'grid gap-1 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700',
          count === 2 && 'grid-cols-2',
          count === 3 && 'grid-cols-2',
          count >= 4 && 'grid-cols-2 grid-rows-2'
        )}
        style={{ height: '300px' }}
      >
        {images.slice(0, 4).map((image, index) => (
          <div
            key={index}
            className={cn('relative overflow-hidden', count === 3 && index === 0 && 'row-span-2')}
          >
            <Image src={image.url} alt={image.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
