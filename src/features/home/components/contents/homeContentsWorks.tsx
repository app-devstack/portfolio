import dedent from 'dedent';
import { useCallback } from 'react';

import CustomMarkdown from '@/components/CustomMarkdown';
import ImageViewerDialog from '@/components/elements/imageViewer/imageViewerDialog';
import Heading from '@/components/ui/heading';
import { useIsMobile } from '@/hooks/useIsMobile';

import { designWorks, developWorks, WorkType } from './_works_document';
import HomeContentsImageViewer from './homeContentsImageViewer';

export default function HomeContentsWorks() {
  const isMobile = useIsMobile();

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

  const imageViewer = useCallback((work: WorkType) => {
    return <HomeContentsImageViewer images={work.images} />;
  }, []);

  return (
    <div className="grid gap-28">
      {works.map((category) => (
        <div key={category.id} className="grid gap-6">
          <Heading level="h3">{category.title}</Heading>
          <ul className="grid content-center gap-20">
            {category.items.map((work) => (
              <li key={work.id} className="grid gap-4">
                <Heading level="h4">{work.title}</Heading>

                <div className="flex flex-col gap-4 md:flex-row">
                  {/* 画像セクション(SP) */}
                  {isMobile && imageViewer(work)}

                  {/* 詳細セクション（Markdown） */}
                  <CustomMarkdown className="ml-0 flex-1 md:ml-2">
                    {dedent(work.description)}
                  </CustomMarkdown>

                  {/* 画像セクション(PC) */}
                  {!isMobile && imageViewer(work)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* 画像用共通ダイアログ */}
      <ImageViewerDialog />
    </div>
  );
}
