/**
 * 画像のアスペクト比
 * 'square': 正方形
 * 'landscape': 横長
 * 'portrait': 縦長
 */
export type ImageAspect = 'square' | 'landscape' | 'portrait';

/**
 * 画像コンテンツのプロパティ
 */
export type ContentImageProps = {
  url: string;
  alt: string;
  description?: string;
  aspectRatio: ImageAspect;
};
