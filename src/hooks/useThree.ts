import { useFrame } from '@react-three/fiber';
import { MotionValue } from 'motion/react';
import { RefObject, useEffect } from 'react';
import * as THREE from 'three';

import { GLTFDataType, Position } from '@/types/three';

/**
 * オブジェクトを回転させるカスタムフック
 * @param threeRef - 回転させる3Dオブジェクトのリファレンス
 * @param speed - 基本回転速度
 * @param scrollY - (オプション) スクロール値に基づいて回転速度を変更する場合に使用
 * @param scrollSensitivity - (オプション) スクロール感度（デフォルト: 0）
 * @param maxSpeed - (オプション) 最大回転速度（デフォルト: 無制限）
 */
export function useThreeRotation<T extends THREE.Object3D>({
  threeRef,
  speed,
  scrollY,
  scrollSensitivity = 0,
  maxSpeed,
}: {
  threeRef: RefObject<T | null>;
  speed: number;
  scrollY?: MotionValue<number>;
  scrollSensitivity?: number;
  maxSpeed?: number;
}) {
  useFrame((_state, delta) => {
    if (!threeRef.current) return;

    let currentSpeed = speed;

    // scrollYが提供されている場合、スクロール値に基づいて速度を計算
    if (scrollY) {
      const scrollValue = scrollY.get();
      currentSpeed = speed + scrollValue * scrollSensitivity;

      // maxSpeedが指定されている場合、制限を適用
      if (maxSpeed !== undefined) {
        currentSpeed = Math.min(currentSpeed, Math.max(maxSpeed, speed));
      }
    }

    threeRef.current.rotation.y += delta * currentSpeed;
  });
}

/**
 * グループ内の全てのアニメーションを1回だけ再生するカスタムフック
 * @param actions - アニメーションアクション
 * @param names - アニメーション名の配列
 * @param onComplete - (オプション) すべてのアニメーション完了時のコールバック関数
 */
export function useThreeAnimationPlayer({
  actions,
  names,
  onComplete,
}: {
  actions: { [key: string]: THREE.AnimationAction | null };
  names: string[];
  onComplete?: () => void;
}) {
  useEffect(() => {
    // 全てのアニメーションを1回だけ再生
    if (names.length > 0) {
      const cleanupFunctions: (() => void)[] = [];
      let completedCount = 0;

      names.forEach((name) => {
        const action = actions[name];
        if (action) {
          action.reset();
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true; // アニメーション終了時の状態を保持
          action.timeScale = 1; // 再生速度を通常に設定
          action.play();

          // アニメーション終了時のイベントリスナー
          const mixer = action.getMixer();
          const onFinished = (e: THREE.Event) => {
            const event = e as unknown as { action: THREE.AnimationAction; type: string };
            if (event.action === action) {
              completedCount++;
              // すべてのアニメーションが完了したかチェック
              if (completedCount === names.length && onComplete) {
                onComplete();
              }
            }
          };
          mixer.addEventListener('finished', onFinished);

          cleanupFunctions.push(() => {
            mixer.removeEventListener('finished', onFinished);
          });
        }
      });

      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup());
      };
    }
  }, [actions, names, onComplete]);
}

/**
 * オブジェクトの位置（Position）をスクロール値に基づいて変更するカスタムフック
 * @param threeRef - 位置を変更する3Dオブジェクトのリファレンス
 * @param initialPosition - 初期位置 [x, y, z]
 * @param maxPosition - 最大位置 [x, y, z]（スクロール時の上限）
 * @param scrollY - スクロール値
 * @param scrollSensitivity - スクロール感度
 */
export function useThreePosition<T extends THREE.Object3D>({
  scrollY,
  threeRef,
  initialPosition,
  maxPosition,
  scrollSensitivity = 0.001,
}: {
  scrollY: MotionValue<number>;
  threeRef: RefObject<T | null>;
  initialPosition: Position;
  maxPosition: Position;
  scrollSensitivity?: number;
}) {
  useFrame((_state, _delta) => {
    if (!threeRef.current) return;

    const scrollValue = scrollY.get();

    const newX = Math.min(initialPosition[0] + scrollValue * scrollSensitivity, maxPosition[0]);
    const newY = Math.min(initialPosition[1] + scrollValue * scrollSensitivity, maxPosition[1]);
    const newZ = Math.min(initialPosition[2] + scrollValue * scrollSensitivity, maxPosition[2]);

    threeRef.current.position.set(newX, newY, newZ);
  });
}

/**
 * 3Dモデルにベースカラーを適用するカスタムフック
 */
export function useThreeUpdateBaseColor({
  baseColor,
  gltf,
}: {
  baseColor?: string;
  gltf: GLTFDataType;
}) {
  // ベースカラーの適用
  useEffect(() => {
    const isSceneReady = baseColor && gltf.scene;

    if (!isSceneReady) return;

    gltf.scene.traverse((child) => {
      const mesh = child as THREE.Mesh;

      if (mesh.isMesh && mesh.material) {
        // マテリアルを複数件処理
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => {
          if (material instanceof THREE.MeshStandardMaterial) {
            material.color.set(baseColor);
          }
        });
      }
    });
  }, [baseColor, gltf.scene]);
}

/**
 * スクロール値に応じてアニメーションの進行状況を制御するカスタムフック
 * スクロール開始時はアニメーション完了状態から、スクロールに応じて徐々にリバースされる
 * @param scrollY - スクロール値（MotionValue）
 * @param actions - アニメーションアクション
 * @param names - アニメーション名の配列
 * @param maxScroll - アニメーションが完全にリバースされるスクロール距離（デフォルト: 1000）
 * @param isInitialAnimationComplete - 初回アニメーション完了フラグ（このフラグがtrueになるまで待機）
 */
export function useThreeScrollReverseAnimation({
  scrollY,
  actions,
  names,
  maxScroll = 1000,
  isInitialAnimationComplete = false,
}: {
  scrollY?: MotionValue<number>;
  actions: { [key: string]: THREE.AnimationAction | null };
  names: string[];
  maxScroll?: number;
  isInitialAnimationComplete?: boolean;
}) {
  useEffect(() => {
    if (!scrollY || names.length === 0) return;

    // 初回アニメーション完了までは待機
    if (!isInitialAnimationComplete) return;

    // アニメーションの初期化
    names.forEach((name) => {
      const action = actions[name];
      if (!action) return;

      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      // 最初は完了状態（duration分進める）
      const duration = action.getClip().duration;
      action.time = duration;
      action.play();
    });

    const unsubscribe = scrollY.onChange((scrollValue) => {
      // スクロール値に基づいてアニメーションの進行状況を計算
      // scrollValue = 0 のとき、アニメーション完了状態（time = duration）
      // scrollValue = maxScroll のとき、アニメーション開始状態（time = 0）
      const scrollProgress = Math.min(scrollValue / maxScroll, 1);

      names.forEach((name) => {
        const action = actions[name];
        if (!action) return;

        const duration = action.getClip().duration;
        // スクロールに応じてアニメーション時間を逆方向に設定
        action.time = duration * (1 - scrollProgress);
      });
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY, actions, names, maxScroll, isInitialAnimationComplete]);
}
