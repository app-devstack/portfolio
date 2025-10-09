# @dnd-kit 使用ガイド

このドキュメントでは、`@dnd-kit` ライブラリを使用したドラッグ&ドロップ機能の実装方法を詳細に解説します。

## 目次

1. [インストール](#インストール)
2. [基本概念](#基本概念)
3. [パッケージ構成](#パッケージ構成)
4. [実装手順](#実装手順)
5. [コンポーネント解説](#コンポーネント解説)
6. [カスタマイズ](#カスタマイズ)
7. [トラブルシューティング](#トラブルシューティング)

---

## インストール

### 必要なパッケージ

```bash
npm install @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities
```

### インストールされているバージョン

このプロジェクトでは以下のバージョンを使用しています：

```json
{
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/sortable": "^10.0.0",
  "@dnd-kit/utilities": "^3.2.2"
}
```

---

## 基本概念

### @dnd-kit とは？

`@dnd-kit` は、React アプリケーションでドラッグ&ドロップ機能を実装するための高性能でモジュラーなライブラリです。

### 主な特徴

- **軽量**: 最小限の依存関係
- **アクセシブル**: キーボード操作に対応
- **拡張可能**: カスタマイズ可能なAPI
- **TypeScript対応**: 完全な型サポート

---

## パッケージ構成

### @dnd-kit/core

ドラッグ&ドロップの基本機能を提供します。

#### 主要なコンポーネント・フック

- `DndContext`: ドラッグ&ドロップ機能を提供するコンテキストプロバイダー
- `useSensor`, `useSensors`: 入力デバイス（マウス、タッチ、キーボード）の処理
- `PointerSensor`: マウス・タッチ操作の検出
- `KeyboardSensor`: キーボード操作の検出

#### 衝突検出アルゴリズム

- `closestCenter`: 中心点が最も近い要素を検出
- `closestCorners`: 角が最も近い要素を検出
- `pointerWithin`: ポインターが要素内にある場合に検出
- `rectIntersection`: 矩形の交差を検出

### @dnd-kit/sortable

ソート可能なリストやグリッドの実装を簡単にするユーティリティ。

#### 主要なコンポーネント・フック

- `SortableContext`: ソート可能なアイテムのコンテナ
- `useSortable`: ソート可能なアイテムのフック
- `arrayMove`: 配列内の要素を移動するヘルパー関数

#### ソート戦略

- `verticalListSortingStrategy`: 縦方向リスト用
- `horizontalListSortingStrategy`: 横方向リスト用
- `rectSortingStrategy`: グリッドレイアウト用（今回使用）
- `sortableKeyboardCoordinates`: キーボード操作用の座標計算

### @dnd-kit/utilities

変換やスタイリングのためのユーティリティ関数。

- `CSS.Transform.toString()`: transform値を文字列に変換

---

## 実装手順

### Step 1: 型定義の作成

まず、ドラッグ可能なアイテムの型を定義します。

```typescript
// types.ts
export type FolderData = {
  id: string;
  name: string;
  position: { x: number; y: number; z: number };
};

export type GridItem = FolderData | { id: string; type: 'hero' };
```

**ポイント:**

- 各アイテムには一意の `id` が必須
- Union型を使用して複数のアイテムタイプに対応可能

### Step 2: 初期データの準備

```typescript
// constants.ts
import { FolderData } from './types';

export const INITIAL_FOLDERS: FolderData[] = [
  { id: 'folder-1', name: 'public', position: { x: -40, y: 40, z: 20 } },
  { id: 'folder-2', name: 'src', position: { x: 0, y: 0, z: 10 } },
  { id: 'folder-3', name: 'zip', position: { x: 40, y: -40, z: 0 } },
  // ...
];
```

### Step 3: DraggableItem コンポーネントの作成

視覚的なフィードバックを提供するラッパーコンポーネント：

```typescript
// components/DraggableItem.tsx
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
```

**ポイント:**

- `framer-motion` でドラッグ中のアニメーションを追加
- `isDragging` プロップでアニメーション状態を制御
- カーソルスタイルを動的に変更（`grab` → `grabbing`）

### Step 4: SortableItem コンポーネントの作成

実際にソート可能なアイテムコンポーネント：

```typescript
// components/SortableItem.tsx
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
  // useSortable フックでソート機能を有効化
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id
  });

  // transform と transition を CSS スタイルに変換
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // 特殊なアイテムタイプの処理（hero）
  if ('type' in item && item.type === 'hero') {
    return (
      <div
        ref={setNodeRef}
        style={{
          ...style,
          gridColumn: 'span 2',  // 2カラム分のスペースを占有
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

  // 通常のフォルダーアイテムの処理
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
```

**useSortable フックの返り値:**

| プロパティ | 説明 |
|-----------|------|
| `attributes` | アクセシビリティ属性（ARIA属性など） |
| `listeners` | ドラッグイベントリスナー |
| `setNodeRef` | ドラッグ可能な要素のref |
| `transform` | 移動の変換情報 |
| `transition` | トランジション設定 |

**重要な実装ポイント:**

1. `ref={setNodeRef}` でドラッグ対象の要素を指定
2. `{...attributes}` でアクセシビリティを確保
3. `{...listeners}` でドラッグイベントを有効化
4. `style` で transform と transition を適用

### Step 5: メインページコンポーネントの作成

すべてを統合するメインコンポーネント：

```typescript
// DemoPage.tsx
'use client';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useState } from 'react';

import { SortableItem } from './components/SortableItem';
import { INITIAL_FOLDERS } from './constants';
import { GridItem } from './types';

export default function DemoPage() {
  // アイテムの状態管理
  const [items, setItems] = useState<GridItem[]>([
    ...INITIAL_FOLDERS,
    { id: 'hero-title', type: 'hero' },
  ]);

  // 現在ドラッグ中のアイテムID
  const [activeId, setActiveId] = useState<string | null>(null);

  // センサーの設定
  const sensors = useSensors(
    // ポインター（マウス・タッチ）センサー
    useSensor(PointerSensor, {
      activationConstraint: {
        delay: 250,        // 250ms後にドラッグ開始（誤操作防止）
        tolerance: 5,      // 5px移動でドラッグ開始
      },
    }),
    // キーボードセンサー
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // ドラッグ開始時の処理
  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  // ドラッグ終了時の処理
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    // ドロップ先が存在し、元の位置と異なる場合
    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        // arrayMove で配列の順序を変更
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  }

  return (
    <div className="relative flex h-screen items-center justify-center">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={rectSortingStrategy}>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {items.map((item) => (
              <SortableItem
                key={item.id}
                item={item}
                isDragging={activeId === item.id}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}
```

---

## コンポーネント解説

### DndContext

ドラッグ&ドロップ機能を提供するコンテキストプロバイダー。

**主要プロパティ:**

```typescript
<DndContext
  sensors={sensors}                    // 入力デバイスの設定
  collisionDetection={closestCenter}   // 衝突検出アルゴリズム
  onDragStart={handleDragStart}        // ドラッグ開始イベント
  onDragEnd={handleDragEnd}            // ドラッグ終了イベント
  onDragMove={handleDragMove}          // ドラッグ移動イベント（オプション）
  onDragCancel={handleDragCancel}      // ドラッグキャンセルイベント（オプション）
>
  {children}
</DndContext>
```

### SortableContext

ソート可能なアイテムのコンテナ。

**主要プロパティ:**

```typescript
<SortableContext
  items={items}                        // アイテムの配列またはID配列
  strategy={rectSortingStrategy}       // ソート戦略
>
  {children}
</SortableContext>
```

**ソート戦略の選択:**

| 戦略 | 用途 |
|------|------|
| `verticalListSortingStrategy` | 縦方向の一次元リスト |
| `horizontalListSortingStrategy` | 横方向の一次元リスト |
| `rectSortingStrategy` | グリッドレイアウト（二次元） |

### useSensors & useSensor

入力デバイスの検出と設定。

**例: PointerSensor の詳細設定**

```typescript
const sensors = useSensors(
  useSensor(PointerSensor, {
    activationConstraint: {
      delay: 250,           // ドラッグ開始までの遅延時間（ミリ秒）
      tolerance: 5,         // ドラッグ開始とみなす移動距離（ピクセル）
      distance: 10,         // 代替: 絶対的な移動距離
    },
  }),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
);
```

**activationConstraint のオプション:**

- `delay`: クリック/タップとドラッグを区別するための遅延
- `tolerance`: 微小な動きを無視（誤操作防止）
- `distance`: 一定距離移動後にドラッグ開始

### arrayMove ヘルパー関数

配列内の要素を効率的に移動します。

```typescript
import { arrayMove } from '@dnd-kit/sortable';

const items = ['A', 'B', 'C', 'D'];
const result = arrayMove(items, 0, 2);
// 結果: ['B', 'C', 'A', 'D']
```

---

## カスタマイズ

### 1. 衝突検出アルゴリズムの変更

```typescript
import {
  closestCenter,      // 中心点ベース
  closestCorners,     // 角ベース
  pointerWithin,      // ポインター内
  rectIntersection,   // 矩形交差
} from '@dnd-kit/core';

<DndContext collisionDetection={rectIntersection}>
  {/* ... */}
</DndContext>
```

### 2. カスタムセンサー設定

#### タッチデバイス専用の設定

```typescript
import { TouchSensor } from '@dnd-kit/core';

const sensors = useSensors(
  useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 8,
    },
  })
);
```

#### マウス専用の設定

```typescript
import { MouseSensor } from '@dnd-kit/core';

const sensors = useSensors(
  useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,  // 10px移動でドラッグ開始
    },
  })
);
```

### 3. ドラッグオーバーレイの追加

ドラッグ中の要素のプレビューをカスタマイズ：

```typescript
import { DragOverlay } from '@dnd-kit/core';

export default function DemoPage() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = items.find(item => item.id === activeId);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {/* ソート可能なアイテム */}
      </SortableContext>

      <DragOverlay>
        {activeItem ? (
          <div style={{ opacity: 0.5 }}>
            {/* ドラッグ中の要素のカスタムプレビュー */}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
```

### 4. アニメーションのカスタマイズ

```typescript
const style = {
  transform: CSS.Transform.toString(transform),
  transition: transition || 'transform 200ms ease',  // カスタムトランジション
};
```

### 5. ドラッグ制約の追加

特定の条件でドラッグを無効化：

```typescript
export function SortableItem({ item, isDragging, isDisabled }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.id,
    disabled: isDisabled,  // ドラッグを無効化
  });

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...(isDisabled ? {} : listeners)}  // 条件付きでリスナーを適用
    >
      {/* ... */}
    </div>
  );
}
```

---

## トラブルシューティング

### 問題 1: ドラッグが反応しない

**原因:**

- `{...listeners}` が適用されていない
- `ref={setNodeRef}` が設定されていない

**解決策:**

```typescript
<div ref={setNodeRef} {...listeners} {...attributes}>
  {/* コンテンツ */}
</div>
```

### 問題 2: アイテムがスムーズに移動しない

**原因:**

- `transform` と `transition` が適用されていない

**解決策:**

```typescript
const style = {
  transform: CSS.Transform.toString(transform),
  transition,
};

<div style={style}>
  {/* コンテンツ */}
</div>
```

### 問題 3: キーボード操作が動作しない

**原因:**

- `KeyboardSensor` が設定されていない

**解決策:**

```typescript
const sensors = useSensors(
  useSensor(PointerSensor),
  useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  })
);
```

### 問題 4: クリックイベントが発火しない

**原因:**

- `activationConstraint` が設定されていない
- ドラッグとクリックが区別されていない

**解決策:**

```typescript
useSensor(PointerSensor, {
  activationConstraint: {
    delay: 250,      // 遅延を追加
    tolerance: 5,    // 微小な動きを許容
  },
})
```

### 問題 5: グリッドレイアウトでソートが正しく動作しない

**原因:**

- 誤ったソート戦略を使用している

**解決策:**

```typescript
<SortableContext items={items} strategy={rectSortingStrategy}>
  {/* グリッドレイアウト用の戦略を使用 */}
</SortableContext>
```

### 問題 6: TypeScript エラー: 型が一致しない

**原因:**

- `items` プロパティに渡す値の型が不正

**解決策:**

```typescript
// ✅ 正しい: オブジェクトの配列
<SortableContext items={items}>

// ✅ 正しい: IDの配列
<SortableContext items={items.map(item => item.id)}>
```

---

## ベストプラクティス

### 1. 一意のIDを必ず使用する

```typescript
// ✅ 良い例
const items = [
  { id: 'unique-1', name: 'Item 1' },
  { id: 'unique-2', name: 'Item 2' },
];

// ❌ 悪い例
const items = [
  { id: 1, name: 'Item 1' },  // 数値IDは避ける
  { id: 1, name: 'Item 2' },  // 重複ID
];
```

### 2. activationConstraint を設定する

ドラッグとクリックを区別するため、必ず設定を追加：

```typescript
useSensor(PointerSensor, {
  activationConstraint: {
    delay: 250,
    tolerance: 5,
  },
})
```

### 3. アクセシビリティを確保する

```typescript
<div
  ref={setNodeRef}
  {...attributes}    // ARIA属性を含む
  {...listeners}
  role="button"      // 追加のアクセシビリティ属性
  tabIndex={0}       // キーボードフォーカス可能に
>
```

### 4. パフォーマンスの最適化

大量のアイテムを扱う場合：

```typescript
import { useMemo } from 'react';

const itemIds = useMemo(() => items.map(item => item.id), [items]);

<SortableContext items={itemIds}>
  {/* ... */}
</SortableContext>
```

### 5. エラーハンドリング

```typescript
function handleDragEnd(event: DragEndEvent) {
  const { active, over } = event;

  if (!over) {
    // ドロップ先がない場合の処理
    return;
  }

  if (active.id === over.id) {
    // 同じ場所にドロップした場合
    return;
  }

  // 正常なドロップ処理
  setItems((items) => {
    const oldIndex = items.findIndex((item) => item.id === active.id);
    const newIndex = items.findIndex((item) => item.id === over.id);
    return arrayMove(items, oldIndex, newIndex);
  });
}
```

---

## 参考リンク

- [公式ドキュメント](https://docs.dndkit.com/)
- [GitHub リポジトリ](https://github.com/clauderic/dnd-kit)
- [サンプル集](https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/)

---

## まとめ

`@dnd-kit` を使用したドラッグ&ドロップ機能の実装手順：

1. **パッケージのインストール**: `@dnd-kit/core`, `@dnd-kit/sortable`, `@dnd-kit/utilities`
2. **型定義**: 各アイテムに一意の `id` を持たせる
3. **SortableItem**: `useSortable` フックを使用してソート可能なアイテムを作成
4. **DndContext**: センサーと衝突検出を設定
5. **SortableContext**: ソート戦略を選択
6. **イベントハンドラー**: `onDragStart`, `onDragEnd` で状態を更新

このガイドを参考に、プロジェクトのニーズに合わせてカスタマイズしてください。
