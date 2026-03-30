import { site } from '@/config/site';

export default function ReviewCta() {
  const url = site.googleReviewsUrl.trim();
  if (!url) return null;

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-soft">
      <div className="text-xs uppercase tracking-[0.22em] text-tsCream/65">Avis Google</div>
      <div className="mt-3 text-sm leading-7 text-tsCream/85">
        Vous aimez nos pâtisseries ? Laissez un avis Google, ça aide vraiment les nouveaux clients.
      </div>
      <div className="mt-5">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-tsCream px-5 py-3 text-sm font-semibold text-tsBurgundy transition hover:opacity-90"
        >
          Laisser un avis
        </a>
      </div>
    </div>
  );
}
