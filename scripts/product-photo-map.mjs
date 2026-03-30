/**
 * Correspondance nom de fichier studio → id produit (products.ts).
 * Clé = partie entre le préfixe « PatisserieTresorsSucrés_ » et « _2880x2304.jpg ».
 * Vérifie visuellement les lignes marquées (commentaire) si un plat ne correspond pas.
 */
export const PHOTO_SUFFIX_TO_PRODUCT_ID = {
  /** Arayeches / amande — Kalb el Louz */
  Aryaeche: 'kalb-el-louz',
  Baklava: 'baklawa-algerienne',
  Cornet: 'cornets-amandes-pistaches',
  Dziriette: 'dziriettes',
  Fruit: 'fruits-pate-amande',
  /** Bouchon pistache : photos/product/internet/bouchons de pistache.webp */
  'Grenade Fraise': null,
  /** Roulé : image depuis photos/product/internet (sync studio ne doit pas l’écraser) */
  Kefta: null,
  'Macaron Amande': 'macarons-amandes-algeriens',
  /** Bon visuel pour la fiche « Makrout » (pas la variante « Makrout Dates ») */
  Makrout: 'makrout',
  'Makrout Dates': null,
  Mchekla: null,
  Mchewek: null,
  'Macaron Noix': null,
  'Mekrout El Louze': 'makrout-el-louz',
  /** Gâteau du sultan : image depuis photos/product/internet (Mkhabez ≠ bon visuel) */
  Mkhabez: null,
  Ribbi: 'ribbi',
  Samsa: 'samsa-miel-amande',
  Tcharek: 'charek-corne-de-gazelle',
  /** Tcharek glacé / sucré */
  'Tcharek Sucré': 'charek-glace',
};

/** Fichiers source : dossier « resized » (Uber / photographe). */
export const PHOTO_PREFIX = 'PatisserieTresorsSucrés_';
export const PHOTO_SUFFIX_RES = '_2880x2304.jpg';
