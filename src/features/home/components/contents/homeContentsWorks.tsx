import dedent from 'dedent';
import Image from 'next/image';

import CustomMarkdown from '@/components/CustomMarkdown';
import Heading from '@/components/ui/heading';
import { cn } from '@/lib/utils';

import { designWorks, developWorks, ImageAspect } from './_works_document';

export default function HomeContentsWorks() {
  const works = [
    {
      id: 'development',
      title: 'アプリ開発',
      items: developWorks,
    },
    {
      id: 'design',
      title: 'デザイン作成',
      items: designWorks,
    },
  ];

  return (
    <div className="grid gap-28">
      {works.map((category) => (
        <div key={category.id} className="grid gap-6">
          <Heading level="h3">{category.title}</Heading>
          <ul className="grid content-center gap-20">
            {category.items.map((work) => {
              const imageStyles = getImageStyles(work.aspectRatio);

              return (
                <li key={work.id} className="grid gap-4">
                  <Heading level="h4">{work.title}</Heading>

                  <div className="flex flex-col gap-4 md:flex-row">
                    {/* 詳細セクション（Markdown） */}
                    <CustomMarkdown className="ml-0 flex-1 md:ml-2">
                      {dedent(work.description)}
                    </CustomMarkdown>

                    {/* 画像セクション（黄金比に基づいた高さ固定・スクロール可能） */}
                    <div
                      className={cn(
                        'relative overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700',
                        imageStyles.width
                      )}
                      style={{ height: imageStyles.height }} // 動的に生成した高さはスタイルで指定
                    >
                      <div className="relative min-h-full w-full">
                        <Image
                          src={work.image}
                          alt={work.title}
                          width={500}
                          height={500}
                          className="h-auto w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

/**
 * 画像スタイルをアスペクト比に基づいて取得
 */
const getImageStyles = (aspectRatio: ImageAspect) => {
  const baseHeight = 300;
  const goldenRatio = 1.618;

  switch (aspectRatio) {
    case 'portrait': // 縦長
      return {
        height: `${Math.round(baseHeight * goldenRatio)}px`,
        width: 'w-full md:w-[300px]',
      };
    case 'landscape': // 横長
      return {
        height: `${Math.round(baseHeight / goldenRatio)}px`,
        width: 'w-full md:w-[300px]',
      };
    case 'square': // 正方形
      return {
        height: `${baseHeight}px`,
        width: 'w-full md:w-[300px]',
      };
  }
};

// function AnimatedShinyButton() {
//   return (
//     <div className="z-10 flex min-h-64 items-center justify-center">
//       <button
//         className={cn(
//           'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
//         )}
//       >
//         <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-500 hover:duration-300 hover:dark:text-neutral-400">
//           <span className="inline-flex h-20 max-w-xs items-center justify-center px-10 text-xl font-bold hover:cursor-pointer">
//             もっと見る
//             <ArrowRightIcon
//               size={32}
//               strokeWidth={2.5}
//               className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
//             />
//           </span>
//           {/* <span>✨ Introducing Magic UI</span> */}
//         </AnimatedShinyText>
//       </button>
//     </div>
//   );
// }
