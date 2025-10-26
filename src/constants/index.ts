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
  portfolio: IS_PRODUCTION
    ? `${ASSETS_DOMAIN}/assets/models/portfolio.glb`
    : '/models/portfolio.glb',
  iceCreamGhost: IS_PRODUCTION
    ? `${ASSETS_DOMAIN}/assets/models/ice_cream_ghost.glb`
    : `/models/ice_cream_ghost.glb`,
};
