export type FolderData = {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
};

export type GridItem = FolderData | { id: string; type: 'hero' };
