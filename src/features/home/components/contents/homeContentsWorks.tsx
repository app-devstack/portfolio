import { ArrowRightIcon } from 'lucide-react';

import { AnimatedShinyText } from '@/components/ui/animated-shiny-text';
import { cn } from '@/lib/utils';

export default function HomeContentsWorks() {
  return (
    <div className="grid gap-8">
      <ul className="grid grid-cols-1 content-center gap-10 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i}>
            <div
              className={cn(
                'aspect-square min-w-[100px] rounded-3xl md:min-w-[240px]',
                'bg-muted border-foreground border-8',
                'grid items-center justify-center'
              )}
            >
              <span className="text-muted-foreground/40 text-2xl">NO IMAGE</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="ml-auto">
        <AnimatedShinyButton />
      </div>
    </div>
  );
}

function AnimatedShinyButton() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <button
        className={cn(
          'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-500 hover:duration-300 hover:dark:text-neutral-400">
          <span className="inline-flex h-20 max-w-xs items-center justify-center px-10 text-xl font-bold hover:cursor-pointer">
            もっと見る
            <ArrowRightIcon
              size={32}
              strokeWidth={2.5}
              className="ml-1 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </span>
          {/* <span>✨ Introducing Magic UI</span> */}
        </AnimatedShinyText>
      </button>
    </div>
  );
}
