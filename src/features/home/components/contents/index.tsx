import { notoSansJp } from '@/assets/font';
import { cn } from '@/lib/utils';

/**
 * ホームに表示するセクションコンテンツ
 */
export default function HomeMainContents() {
  return (
    <div className="grid justify-center gap-16 px-4 py-32 md:px-12">
      {DEMO_SECTIONS.map((section) => (
        <SectionWrapper
          key={section.id}
          title={section.title}
          contents={<p className="">{section.content}</p>}
        />
      ))}
    </div>
  );
}

// デモデータ
const DEMO_SECTIONS = [
  {
    id: 'profile',
    title: 'Profile',
    content: (
      <div>
        <p>
          ものづくりが好きなエンジニアです！デザインも大好き！
          <br />
          ちっちゃい頃から想像を形にできることが好きで、今はWEBを中心にクリエイティブに励んでいます！
        </p>
      </div>
    ),
  },
  {
    id: 'demo-2',
    title: 'Demo Content1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, minus numquam porro officia, ullam deserunt, obcaecati necessitatibus nostrum explicabo iste vitae blanditiis modi ducimus dolor totam. Odit, nostrum.',
  },
  {
    id: 'demo-3',
    title: 'Demo Content1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, minus numquam porro officia, ullam deserunt, obcaecati necessitatibus nostrum explicabo iste vitae blanditiis modi ducimus dolor totam. Odit, nostrum.',
  },
] as const;

type SectionWrapperProps = {
  title: string;
  contents: React.ReactNode;
};

function SectionWrapper({ title, contents }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'mx-auto min-h-screen w-full max-w-7xl rounded-2xl border bg-white/50 p-6 backdrop-blur-xs md:p-10',
        'flex flex-col gap-6 md:gap-10'
      )}
    >
      <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
      <div className={cn('leading-relaxed tracking-wide', notoSansJp.className)}>{contents}</div>
    </section>
  );
}
