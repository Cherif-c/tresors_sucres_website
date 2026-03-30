# Trésors Sucrés — MVP + reprise de travail

**Dernière mise à jour :** 2026-03-30 (push GitHub MVP v1)  
**Repo :** `https://github.com/Cherif-c/tresors_sucres_website`  
**Dév local :** dossier parent possible `new_ts/` avec `package.json` qui préfixe `tresors_sucres_website` (`npm run dev`, `sync:photos`).

## Déjà en place (MVP)

- Next.js 15 App Router, Tailwind, thème bordeaux / crème (`globals.css`, `tailwind.config.ts`).
- Pages : accueil `/`, menu `/menu`, nous-visiter `/nous-visiter`, avis `/avis`.
- Config centralisée `src/config/site.ts` (adresse, téléphone, horaires, Google Maps embed, avis Google, Uber Eats, réseaux avec `platform`).
- Produits : `src/data/products.ts` + `ProductCard` + images sous `public/images/products/` (jpg/webp). Script `npm run sync:photos` + `scripts/product-photo-map.mjs` (studio) ; certaines images depuis `../photos/product/internet` (temporaire) — voir commentaires dans le map + `products.ts`.
- SEO : `src/lib/metadata.ts`, `robots.ts`, `sitemap.ts`, `JsonLdLocalBusiness.tsx`.
- UI : header/footer, nav, `SocialLinks` (icônes FB / IG / TikTok), `UberEatsCta` (bouton rond type appli), `ReviewCta`, `GoogleMap`.
- Assets : `public/images/hero-banner.jpg`, `public/images/logo/`.

## Prochaine session (idées)

- Améliorer **disposition / hiérarchie visuelle** des pages (grilles, espacements, hero avec `hero-banner` + logo).
- **Menu** : catégories, filtres, fiches détail produit (`/[id]`).
- Remplacer images **internet** par photos définitives ; réactiver entrées `null` dans `product-photo-map.mjs` si besoin.
- Logo header / favicon / **Open Graph** (`NEXT_PUBLIC_SITE_URL` en prod).
- Vérifier droits si logo **Uber Eats** / marques officielles en SVG.

## Commandes utiles

```bash
cd tresors_sucres_website   # ou depuis new_ts : npm run dev
npm run dev
npm run sync:photos         # copie depuis ../photos/…
npm run build
```

Pour reprendre dans un **nouveau chat** : ouvrir ce fichier (`MVP-HANDOFF.md`) ou coller le lien du repo + dire « continuer depuis MVP-HANDOFF ».
