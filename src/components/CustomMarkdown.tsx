import Markdown from 'marked-react';

import { cn } from '@/lib/utils';

type CustomMarkdownProps = Parameters<typeof Markdown>[0] & {
  className?: string;
};

export default function CustomMarkdown({
  children,
  gfm = true,
  breaks = true,
  className,
  ...props
}: CustomMarkdownProps) {
  return (
    <div className={cn('text-base leading-7 md:text-lg [&_p]:mb-4', className)}>
      <Markdown gfm={gfm} breaks={breaks} {...props}>
        {children}
      </Markdown>
    </div>
  );
}
