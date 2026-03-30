/**
 * Source unique des pâtisseries affichées sur le site.
 *
 * Images : public/images/products/ (jpg ou webp ; sync studio : npm run sync:photos).
 * Quelques photos peuvent venir temporairement de photos/product/internet/.
 * Voir scripts/product-photo-map.mjs pour la correspondance noms studio → id.
 */
export type Product = {
  id: string;
  name: string;
  /** Chemin depuis la racine du site, ex. /images/products/makrout.jpg */
  image?: string;
};

export const products: readonly Product[] = [
  { id: 'kalb-el-louz', name: 'Kalb el Louz', image: '/images/products/kalb-el-louz.webp' },
  { id: 'ktayef', name: 'Ktayef', image: '/images/products/ktayef.jpg' },
  { id: 'gateau-du-sultan', name: 'Gâteau du Sultan (Khobz el Bey)', image: '/images/products/gateau-du-sultan.jpg' },
  { id: 'ribbi', name: 'Ribbi', image: '/images/products/ribbi.jpg' },
  { id: 'baklawa-algerienne', name: 'Baklawa algérienne', image: '/images/products/baklawa-algerienne.jpg' },
  { id: 'charek-corne-de-gazelle', name: 'Charek — Corne de gazelle', image: '/images/products/charek-corne-de-gazelle.jpg' },
  { id: 'makrout', name: 'Makrout', image: '/images/products/makrout.jpg' },
  { id: 'makrout-el-louz', name: 'Makrout el Louz', image: '/images/products/makrout-el-louz.jpg' },
  { id: 'macarons-amandes-algeriens', name: 'Macarons aux amandes algériens', image: '/images/products/macarons-amandes-algeriens.jpg' },
  { id: 'charek-glace', name: 'Charek glacé', image: '/images/products/charek-glace.jpg' },
  { id: 'dziriettes', name: 'Dziriettes', image: '/images/products/dziriettes.jpg' },
  { id: 'samsa-miel-amande', name: 'Samsa miel amande', image: '/images/products/samsa-miel-amande.jpg' },
  { id: 'fruits-pate-amande', name: 'Fruits en pâte d’amande', image: '/images/products/fruits-pate-amande.jpg' },
  { id: 'bouchon-pistache', name: 'Bouchon de pistache', image: '/images/products/bouchon-pistache.webp' },
  { id: 'cornets-amandes-pistaches', name: 'Cornets amandes et pistaches', image: '/images/products/cornets-amandes-pistaches.jpg' },
  { id: 'roule-amandes', name: 'Roulé aux amandes', image: '/images/products/roule-amandes.jpg' },
] as const;

/** Texte d’attente sous chaque fiche (remplaçable par une vraie description plus tard). */
export const productCardPlaceholder =
  'La fiche pourra être complétée avec la photo du produit, sa description et les précisions utiles à la clientèle.';
