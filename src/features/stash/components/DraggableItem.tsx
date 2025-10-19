import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

type DraggableItemProps = PropsWithChildren<{
  className?: string;
  isDragging: boolean;
}>;

export function DraggableItem({ children, isDragging, className }: DraggableItemProps) {
  return (
    <motion.div
      animate={
        isDragging
          ? {
              rotate: [0, -3, 3, -3, 3, 0],
              transition: {
                duration: 0.3,
                repeat: Infinity,
                repeatType: 'loop',
              },
            }
          : { rotate: 0 }
      }
      className={cn(
        'cursor-grab active:cursor-grabbing',
        'grid place-items-center',
        'relative',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
