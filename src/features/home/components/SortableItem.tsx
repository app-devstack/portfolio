import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FolderIcon } from 'lucide-react';

import HeroTitle from '@/assets/hero-title';
import { cn } from '@/lib/utils';

import { FolderData, GridItem } from '../types';
import { DraggableItem } from './DraggableItem';

type SortableItemProps = {
  item: GridItem;
  isDragging: boolean;
};

export function SortableItem({ item, isDragging }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  if ('type' in item && item.type === 'hero') {
    return (
      <div
        ref={setNodeRef}
        style={{
          ...style,
          gridColumn: 'span 2',
        }}
        {...attributes}
        {...listeners}
        className={cn('col-span-2 grid h-full')}
      >
        <DraggableItem isDragging={isDragging} className="h-full w-full">
          <HeroTitle className="my-auto aspect-[4/1]" />
        </DraggableItem>
      </div>
    );
  }

  const folder = item as FolderData;

  const handleClick = () => {
    alert(`${folder.name}フォルダがクリックされました`);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} onClick={handleClick}>
      <DraggableItem
        isDragging={isDragging}
        className={cn(
          'text-primary hover:bg-accent aspect-square rounded-2xl border-2 border-amber-600 bg-white/40 p-4 text-center'
        )}
      >
        <FolderIcon className="h-full w-full stroke-1 text-amber-600" />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold md:text-base lg:text-xl">
          {folder.name}
        </span>
      </DraggableItem>
    </div>
  );
}
