import { notoSansJp } from '@/assets/font';
import Heading from '@/components/ui/heading';
import { cn } from '@/lib/utils';

import HomeContentsProfile from './homeContentsProfile';
import HomeContentsWorks from './homeContentsWorks';

/**
 * セクションコンテンツ
 */
const SECTIONS = [
  {
    id: 'works',
    title: 'Works',
    contents: <HomeContentsWorks />,
  },
  {
    id: 'profile',
    title: 'Profile',
    contents: <HomeContentsProfile />,
  },
] as const satisfies SectionWrapperProps[];

type SectionWrapperProps = {
  id: string;
  title: string;
  contents: React.ReactNode;
};

/**
 * ホームに表示するセクションコンテンツ
 */
export default function HomeMainContents() {
  return (
    <div className="grid justify-center gap-16 px-0 py-32 md:px-12">
      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={cn(
            'mx-auto min-h-screen w-full max-w-7xl rounded-2xl border bg-white/50 p-6 backdrop-blur-xs md:p-10',
            'flex flex-col gap-6 md:gap-10'
          )}
        >
          <Heading level="h2">{section.title}</Heading>

          <div className={cn('leading-relaxed tracking-wide', notoSansJp.className)}>
            {section.contents}
          </div>
        </section>
      ))}
    </div>
  );
}
