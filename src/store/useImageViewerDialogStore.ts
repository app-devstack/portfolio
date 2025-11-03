import { create } from 'zustand';

import { ContentImageProps } from '@/components/elements/imageViewer/_types';

interface DialogState {
  isOpen: boolean;
  images: ContentImageProps[];
  openDialog: (images: ContentImageProps[]) => void;
  closeDialog: () => void;
}

export const useImageViewerDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  images: [],
  openDialog: (images) => set({ isOpen: true, images }),
  closeDialog: () => set({ isOpen: false, images: [] }),
}));
