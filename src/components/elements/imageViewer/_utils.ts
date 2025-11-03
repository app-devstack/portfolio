import { ContentImageProps } from './_types';

/**
 * 画像スタイルをアスペクト比に基づいて取得
 */
export const getImageStyles = (aspectRatio: ContentImageProps['aspectRatio']) => {
  const baseHeight = 300;
  const goldenRatio = 1.618;

  switch (aspectRatio) {
    case 'portrait':
      return {
        height: `${Math.round(baseHeight * goldenRatio)}px`,
        width: 'w-full md:w-[300px]',
      };
    case 'landscape':
      return {
        height: `${Math.round(baseHeight / goldenRatio)}px`,
        width: 'w-full md:w-[300px]',
      };
    case 'square':
      return {
        height: `${baseHeight}px`,
        width: 'w-full md:w-[300px]',
      };
  }
};
