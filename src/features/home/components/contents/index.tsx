/**
 * ホームに表示するセクションコンテンツ
 */
export default function HomeMainContents() {
  return (
    <>
      {DEMO_SECTIONS.map((section) => (
        <SectionWrapper
          key={section.id}
          title={section.title}
          contents={<p className="p-8">{section.content}</p>}
        />
      ))}
    </>
  );
}

// デモデータ
const DEMO_SECTIONS = [
  {
    id: 'demo-1',
    title: 'Demo Content1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores esse, minus numquam porro officia, ullam deserunt, obcaecati necessitatibus nostrum explicabo iste vitae blanditiis modi ducimus dolor totam. Odit, nostrum.',
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
    <section className="mx-auto min-h-screen max-w-7xl rounded-2xl border bg-white/50 p-10 backdrop-blur-xs">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <div className="p-8">{contents}</div>
    </section>
  );
}
