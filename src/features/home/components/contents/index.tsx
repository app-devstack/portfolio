import { notoSansJp } from '@/assets/font';
import { cn } from '@/lib/utils';

import HomeContentsProfile from './homeContentsProfile';
import HomeContentsWorks from './homeContentsWorks';

// デモデータ
const DEMO_SECTIONS = [
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

  {
    id: 'demo-3',
    title: 'Demo Content1',
    contents:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, minus numquam porro officia, ullam deserunt, obcaecati necessitatibus nostrum explicabo iste vitae blanditiis modi ducimus dolor totam. Odit, nostrum.',
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
    <div className="grid justify-center gap-16 px-4 py-32 md:px-12">
      {DEMO_SECTIONS.map((section) => (
        <section
          key={section.id}
          className={cn(
            'mx-auto min-h-screen w-full max-w-7xl rounded-2xl border bg-white/50 p-6 backdrop-blur-xs md:p-10',
            'flex flex-col gap-6 md:gap-10'
          )}
        >
          <h2 className="text-2xl font-bold md:text-6xl">{section.title}</h2>
          <div className={cn('leading-relaxed tracking-wide', notoSansJp.className)}>
            {section.contents}
          </div>
        </section>
      ))}
    </div>
  );
}
