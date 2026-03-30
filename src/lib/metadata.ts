import type { Metadata } from 'next';
import { site } from '@/config/site';

const keywords = [
  'pâtisserie algérienne artisanale',
  'Montréal',
  'Jean-Talon',
  'baklawa',
  'makrout',
  'charek',
  'corne de gazelle',
  'dziriettes',
  'ktayef',
  'pâtisseries orientales',
  'Trésors Sucrés',
];

export function rootMetadata(): Metadata {
  const base = site.siteUrl ? new URL(site.siteUrl) : undefined;

  return {
    ...(base ? { metadataBase: base } : {}),
    title: {
      default: `${site.brandName} — Pâtisserie algérienne à Montréal`,
      template: `%s | ${site.brandName}`,
    },
    description: site.seoDescription,
    keywords,
    authors: [{ name: site.brandName }],
    creator: site.brandName,
    robots: { index: true, follow: true },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'fr_CA',
      siteName: site.brandName,
      title: `${site.brandName} — Pâtisserie algérienne à Montréal`,
      description: site.seoDescription,
      ...(base ? { url: base.toString() } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${site.brandName} — Pâtisserie algérienne à Montréal`,
      description: site.seoDescription,
    },
  };
}

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const canonical = path === '/' ? '/' : path;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${site.brandName}`,
      description,
    },
  };
}
