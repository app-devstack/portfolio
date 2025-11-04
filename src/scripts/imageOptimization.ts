import fs from 'fs';
import path from 'path';
import { exit } from 'process';
import sharp from 'sharp';

// ================================
// bun run script/imageOptimization.ts
// ================================

const MAX_WIDTH = 1920;

async function optimizeImage(inputPath: string, maxWidth: number = MAX_WIDTH) {
  try {
    const outputDir = path.join(path.dirname(inputPath), 'optimized');

    // 出力ディレクトリの作成
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // ファイル名の取得と拡張子の変更
    const fileName = path.basename(inputPath, path.extname(inputPath));
    const outputPath = path.join(outputDir, `${fileName}.webp`);

    // 画像情報の取得
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // リサイズ判定
    const needsResize = metadata.width && metadata.width > maxWidth;

    // 画像の最適化とWebP変換
    let pipeline = sharp(inputPath);

    if (needsResize) {
      pipeline = pipeline.resize(maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true,
      });
      console.log(`リサイズ: ${metadata.width}px → ${maxWidth}px`);
    }

    await pipeline.webp({ quality: 80 }).toFile(outputPath);

    return `✓ 最適化完了: ${outputPath}`;
  } catch (error) {
    throw new Error(`画像最適化エラー: ${error}`);
  }
}

async function main() {
  try {
    const imagePathArray = [
      './public/images/noise.png',
      // './public/images/works/recipe/recipe_app_title.png',
      // './public/images/works/recipe/recipe_app.png',
      // './public/images/works/design/nomad.png',
      // './public/images/works/design/nomad2.png',
      // './public/images/works/design/procreate.png',
      // './public/images/works/design/sakuji.png',
    ];

    for (const imagePath of imagePathArray) {
      const result = await optimizeImage(imagePath);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log('main finally');
  }
}

main()
  .catch((e) => {
    console.log('Error:', e);
    throw e;
  })
  .finally(async () => {
    console.log('finally');
    exit();
  });
