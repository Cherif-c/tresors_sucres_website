export type SocialPlatform = 'instagram' | 'facebook' | 'tiktok';

export type SocialLink = {
  label: string;
  url: string;
  platform: SocialPlatform;
};

function envString(name: string, fallback: string): string {
  const value = process.env[name];
  if (!value) return fallback;
  return value;
}

function envBool(name: string, fallback: boolean): boolean {
  const raw = process.env[name];
  if (raw == null) return fallback;
  return raw.toLowerCase() === 'true';
}

const addressLine1 = envString(
  'NEXT_PUBLIC_ADDRESS_LINE1',
  '3636 Rue Jean-Talon Est',
);
const addressCityRegion = envString(
  'NEXT_PUBLIC_ADDRESS_CITY_REGION',
  'Montreal, Quebec',
);
const addressFull = envString(
  'NEXT_PUBLIC_ADDRESS_FULL',
  `${addressLine1}, ${addressCityRegion}`,
);

const phone = envString('NEXT_PUBLIC_PHONE', '(514) 223-2174');
const hoursText = envString('NEXT_PUBLIC_HOURS_TEXT', 'Tous les jours • 9 h à 21 h');

/** URL publique du site (SEO, canonical, sitemap). Ex: https://tresorssucres.com */
const siteUrl = envString('NEXT_PUBLIC_SITE_URL', '').replace(/\/$/, '');

/** Iframe « Partager → Intégrer une carte » (src=... uniquement) — marche sans clé API, avec itinéraire */
const googleMapsEmbedDefault =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.3963722333797!2d-73.59744648726152!3d45.56246717095514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91eb5da8353db%3A0xf9c3cdb9ee6ee489!2zVHLDqXNvcnMgU3VjcsOpcw!5e0!3m2!1sfr!2sca!4v1774904563782!5m2!1sfr!2sca';
const googleMapsPlaceEmbedSrc = envString(
  'NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC',
  googleMapsEmbedDefault,
).trim();

const postalCode = envString('NEXT_PUBLIC_ADDRESS_POSTAL_CODE', 'H2A 1X6').trim();

const geoLat = envString('NEXT_PUBLIC_GEO_LAT', '45.56246717095514').trim();
const geoLng = envString('NEXT_PUBLIC_GEO_LNG', '-73.59744648726152').trim();

const googleReviewsUrl = envString(
  'NEXT_PUBLIC_GOOGLE_REVIEWS_URL',
  'https://share.google/SAkUQTBb6Ri4Rhztl',
);

/** Iframe « Locator Plus » (URL fournie par Google dans Maps / Business) */
const googleMapLocatorUrl = envString(
  'NEXT_PUBLIC_GOOGLE_LOCATOR_PLUS_URL',
  'https://storage.googleapis.com/maps-solutions-2j1vq9ojfs/locator-plus/xrww/locator-plus.html',
).trim();

const uberEatsUrlDefault =
  'https://www.ubereats.com/ca-fr/store/tresors-sucres-3636-rue-jean-talon-e/IZdwGbgFR1Gh3qNYgbboBA';
const uberEatsUrl = envString('NEXT_PUBLIC_UBEREATS_URL', uberEatsUrlDefault).trim();
const showUberEatsRequested = envBool('NEXT_PUBLIC_SHOW_UBEREATS', true);
const showUberEats = showUberEatsRequested && uberEatsUrl.length > 0;

const socialLinksRaw: SocialLink[] = [
  {
    label: 'Instagram',
    platform: 'instagram',
    url: envString(
      'NEXT_PUBLIC_INSTAGRAM_URL',
      'https://www.instagram.com/les.tresors.sucres',
    ).trim(),
  },
  {
    label: 'Facebook',
    platform: 'facebook',
    url: envString(
      'NEXT_PUBLIC_FACEBOOK_URL',
      'https://www.facebook.com/p/Les-tr%C3%A9sors-sucr%C3%A9s-patisserie-Algerienne-100054435281823/?locale=fr_CA',
    ).trim(),
  },
  {
    label: 'TikTok',
    platform: 'tiktok',
    url: envString('NEXT_PUBLIC_TIKTOK_URL', 'https://www.tiktok.com/@tresors.sucres.mtl').trim(),
  },
];
const socialLinks = socialLinksRaw.filter((l) => l.url.length > 0);

const seoDescription =
  'Pâtisserie algérienne artisanale à Montréal, sur Jean-Talon : baklawa, makrout, cornes de gazelle, pâtisseries traditionnelles et boîtes gourmandes. Plus de 20 ans de savoir-faire.';

export const site = {
  brandName: 'Trésors Sucrés',
  seoDescription,
  siteUrl,
  address: {
    line1: addressLine1,
    cityRegion: addressCityRegion,
    full: addressFull,
    postalCode,
    locality: 'Montréal',
    region: 'QC',
    country: 'CA',
  },
  phone,
  phoneE164: (() => {
    const d = phone.replace(/\D/g, '');
    if (d.length === 10) return `+1${d}`;
    if (d.length === 11 && d.startsWith('1')) return `+${d}`;
    return d ? `+${d}` : '';
  })(),
  hoursText,
  geo: { lat: geoLat, lng: geoLng },
  googleReviewsUrl,
  googleMapLocatorUrl,
  googleMapsPlaceEmbedSrc,
  uberEats: {
    url: uberEatsUrl,
    show: showUberEats,
  },
  socialLinks,
} as const;

