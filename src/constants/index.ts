/**
 * 本番環境かどうか
 */
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * アセット関連ドメイン
 */
export const ASSETS_DOMAIN = process.env.ASSETS_DOMAIN_NAME
  ? `https://${process.env.ASSETS_DOMAIN_NAME}`
  : `https://assets.maru-maruuu.com`;

/**
 * 3Dモデルのパス
 */
export const MODEL_PATHS = {
  portfolio: '/models/portfolio.glb',
  iceCreamGhost: '/models/ice_ghost.glb',
};
