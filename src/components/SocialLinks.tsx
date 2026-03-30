import { Facebook, Instagram } from 'lucide-react';

import type { SocialLink } from '@/config/site';
import { site } from '@/config/site';

/** Icône TikTok (Lucide n’expose pas la marque) */
function TikTokGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64v-3.47a6.35 6.35 0 0 0-1-.09A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function SocialIcon({ link }: { link: SocialLink }) {
  const cls = 'h-5 w-5';
  switch (link.platform) {
    case 'facebook':
      return <Facebook className={cls} strokeWidth={1.75} aria-hidden />;
    case 'instagram':
      return <Instagram className={cls} strokeWidth={1.75} aria-hidden />;
    case 'tiktok':
      return <TikTokGlyph className={`${cls} scale-110`} />;
  }
}

const btnClass =
  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-tsCream/35 bg-white/10 text-tsCream shadow-sm transition hover:scale-105 hover:border-tsCream/50 hover:bg-white/18 focus-visible:outline focus-visible:ring-2 focus-visible:ring-tsCream/55 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent';

export default function SocialLinks() {
  if (site.socialLinks.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {site.socialLinks.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${link.label} (ouvre un nouvel onglet)`}
          className={btnClass}
        >
          <SocialIcon link={link} />
        </a>
      ))}
    </div>
  );
}
