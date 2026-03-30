import { site } from '@/config/site';

export default function SocialLinks() {
  if (site.socialLinks.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {site.socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-tsCream/30 bg-white/5 px-4 py-2 text-sm font-semibold text-tsCream transition hover:bg-white/10"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
