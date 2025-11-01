import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const variants = cva('', {
  variants: {
    level: {
      h1: 'text-6xl font-black md:text-7xl',
      h2: 'text-4xl font-bold md:text-6xl mb-4',
      h3: 'text-2xl pb-1 font-semibold md:text-4xl border-b tracking-tight mb-2',
      h4: 'text-xl font-semibold md:text-2xl',
    },
  },
});

type HeadingProps = React.ComponentProps<'h1' | 'h2' | 'h3' | 'h4'> & VariantProps<typeof variants>;

export default function Heading({ level, className, ...props }: HeadingProps) {
  const Comp = level || 'h1';

  return <Comp className={cn(variants({ level }), className)} {...props} />;
}
