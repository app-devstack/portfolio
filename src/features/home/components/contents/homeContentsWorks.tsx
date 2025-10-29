import { FastForwardIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
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
        <Button className="h-20 max-w-xs px-10 text-xl font-bold">
          もっと見る
          <FastForwardIcon size={32} strokeWidth={2.5} className="fill-white" />
        </Button>
      </div>
    </div>
  );
}
