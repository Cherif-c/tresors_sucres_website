import { site } from '@/config/site';

function stripUndefined<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined),
  ) as T;
}

export default function JsonLdLocalBusiness() {
  const sameAs = [
    site.googleReviewsUrl,
    ...site.socialLinks.map((l) => l.url),
  ].filter((u) => u.length > 0);

  const lat = Number.parseFloat(site.geo.lat);
  const lng = Number.parseFloat(site.geo.lng);
  const hasGeo = Number.isFinite(lat) && Number.isFinite(lng);

  const localBusiness = stripUndefined({
    '@type': ['Bakery', 'LocalBusiness'],
    '@id': site.siteUrl ? `${site.siteUrl}/#business` : undefined,
    name: site.brandName,
    description: site.seoDescription,
    url: site.siteUrl || undefined,
    telephone: site.phoneE164 || site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.line1,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: hasGeo
      ? {
          '@type': 'GeoCoordinates',
          latitude: lat,
          longitude: lng,
        }
      : undefined,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    servesCuisine: 'Cuisine algérienne',
    priceRange: '$$',
    sameAs: sameAs.length ? sameAs : undefined,
  });

  const website = stripUndefined({
    '@type': 'WebSite',
    '@id': site.siteUrl ? `${site.siteUrl}/#website` : undefined,
    url: site.siteUrl || undefined,
    name: site.brandName,
    inLanguage: 'fr-CA',
    description: site.seoDescription,
  });

  const payload =
    site.siteUrl.length > 0
      ? { '@context': 'https://schema.org', '@graph': [website, localBusiness] }
      : { '@context': 'https://schema.org', ...localBusiness };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
