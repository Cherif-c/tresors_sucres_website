import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  if (!base) {
    return [];
  }

  const paths = ['', '/menu', '/nous-visiter', '/avis'] as const;
  const now = new Date();

  return paths.map((path) => ({
    url: `${base}${path === '' ? '/' : path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.75,
  }));
}
