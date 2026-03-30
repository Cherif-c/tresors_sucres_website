#!/usr/bin/env node
/**
 * Copie les JPEG redimensionnés depuis new_ts/photos vers public/images/products/
 * en les renommant en {id}.jpg (aligné sur src/data/products.ts).
 *
 * Usage (depuis la racine du site Next) :
 *   npm run sync:photos
 *
 * Par défaut, source = ../../photos (dossier « photos » à côté du repo dans new_ts).
 * Surcharge : PHOTOS_ROOT="C:\\chemin\\photos" npm run sync:photos
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  PHOTO_PREFIX,
  PHOTO_SUFFIX_RES,
  PHOTO_SUFFIX_TO_PRODUCT_ID,
} from './product-photo-map.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = path.resolve(__dirname, '..');

const DEFAULT_PHOTOS_ROOT = path.resolve(WEBSITE_ROOT, '..', 'photos');
const PHOTOS_ROOT = process.env.PHOTOS_ROOT
  ? path.resolve(process.env.PHOTOS_ROOT)
  : DEFAULT_PHOTOS_ROOT;

const RESIZED_DIR = path.join(PHOTOS_ROOT, 'product', 'resized');
const OUT_PRODUCTS = path.join(WEBSITE_ROOT, 'public', 'images', 'products');
const OUT_IMAGES = path.join(WEBSITE_ROOT, 'public', 'images');
const OUT_LOGO = path.join(OUT_IMAGES, 'logo');

function ensureDir(d) {
  fs.mkdirSync(d, { recursive: true });
}

function parseSuffix(filename) {
  if (!filename.startsWith(PHOTO_PREFIX) || !filename.endsWith(PHOTO_SUFFIX_RES)) {
    return null;
  }
  const mid = filename.slice(PHOTO_PREFIX.length, -PHOTO_SUFFIX_RES.length);
  return mid;
}

function main() {
  if (!fs.existsSync(RESIZED_DIR)) {
    console.error(`Dossier source introuvable : ${RESIZED_DIR}`);
    console.error('Indique PHOTOS_ROOT si tes photos sont ailleurs.');
    process.exit(1);
  }

  ensureDir(OUT_PRODUCTS);
  ensureDir(OUT_LOGO);

  const entries = fs.readdirSync(RESIZED_DIR).filter((f) => f.endsWith('.jpg'));
  /** @type {Map<string, string>} productId -> source path (first wins) */
  const idToSource = new Map();
  const skipped = [];
  const unmapped = [];

  for (const file of entries.sort()) {
    const suffix = parseSuffix(file);
    if (suffix == null) {
      unmapped.push(file);
      continue;
    }

    if (suffix === 'Hero') {
      continue;
    }

    const productId = PHOTO_SUFFIX_TO_PRODUCT_ID[suffix];
    if (productId === undefined) {
      unmapped.push(file);
      continue;
    }
    if (productId === null) {
      skipped.push({ file, reason: 'volontairement non mappé (doublon)' });
      continue;
    }

    if (idToSource.has(productId)) {
      skipped.push({
        file,
        reason: `id « ${productId} » déjà rempli par ${path.basename(idToSource.get(productId))}`,
      });
      continue;
    }

    const src = path.join(RESIZED_DIR, file);
    idToSource.set(productId, src);
  }

  for (const [id, src] of idToSource) {
    const dest = path.join(OUT_PRODUCTS, `${id}.jpg`);
    fs.copyFileSync(src, dest);
    console.log(`OK  ${path.basename(src)}  →  public/images/products/${id}.jpg`);
  }

  /** Hero : bannière accueil (optionnelle, pas un produit) */
  const heroName = `${PHOTO_PREFIX}Hero${PHOTO_SUFFIX_RES}`;
  const heroPath = path.join(RESIZED_DIR, heroName);
  if (fs.existsSync(heroPath)) {
    const heroDest = path.join(OUT_IMAGES, 'hero-banner.jpg');
    fs.copyFileSync(heroPath, heroDest);
    console.log(`OK  ${heroName}  →  public/images/hero-banner.jpg`);
  }

  /** Logos */
  const logoDir = path.join(PHOTOS_ROOT, 'logo');
  if (fs.existsSync(logoDir)) {
    for (const f of fs.readdirSync(logoDir)) {
      if (!/\.(jpg|jpeg|png|webp)$/i.test(f)) continue;
      const safeName = f
        .normalize('NFD')
        .replace(/\s+/g, '-')
        .replace(/[^a-zA-Z0-9._-]/g, '')
        .toLowerCase();
      const destName = safeName || `logo-${f.replace(/[^\w.]/g, '')}`;
      const dest = path.join(OUT_LOGO, destName);
      fs.copyFileSync(path.join(logoDir, f), dest);
      console.log(`OK  logo/${f}  →  public/images/logo/${destName}`);
    }
  }

  if (skipped.length) {
    console.log('\nIgnorés :');
    for (const s of skipped) console.log(`  - ${s.file} (${s.reason})`);
  }
  if (unmapped.length) {
    console.log('\nFichiers non reconnus (préfixe / suffixe) :');
    for (const u of unmapped) console.log(`  - ${u}`);
  }

  const productsPath = path.join(WEBSITE_ROOT, 'src', 'data', 'products.ts');
  const txt = fs.readFileSync(productsPath, 'utf8');
  const ids = [...txt.matchAll(/\{ id: '([^']+)'/g)].map((m) => m[1]);
  const withImage = ids.filter((id) =>
    fs.existsSync(path.join(OUT_PRODUCTS, `${id}.jpg`)),
  );
  const missing = ids.filter((id) => !withImage.includes(id));

  console.log('\n--- Récap ---');
  console.log(`Produits avec image : ${withImage.length}/${ids.length}`);
  if (missing.length) {
    console.log('Sans image après sync :', missing.join(', '));
  }
}

main();
