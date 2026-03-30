import { site } from '@/config/site';

/** Pictogramme type « U · E » (évocation marque ; pas le logo officiel). */
function UberEatsGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 6v6.25a3.25 3.25 0 1 0 6.5 0V6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.25 8.5h4.75M16.25 12h3.5M16.25 15.5h4.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Pastille claire + pictogramme vert, dans l’esprit des icônes d’appli Uber Eats */
const iconBtnClass =
  'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/25 bg-tsCream/95 text-tsGreen shadow-sm transition hover:scale-105 hover:bg-tsCream focus-visible:outline focus-visible:ring-2 focus-visible:ring-tsCream/70 focus-visible:ring-offset-2 focus-visible:ring-offset-tsGreen/80';

export default function UberEatsCta() {
  if (!site.uberEats.show) return null;

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-tsGreen/90 p-6 text-tsCream shadow-soft">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.22em] text-tsCream/70">UberEats</div>
          <div className="mt-3 text-sm leading-7 text-tsCream/95">
            Commander en ligne quand vous voulez (si vous le souhaitez).
          </div>
        </div>
        <a
          href={site.uberEats.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Commander sur Uber Eats (ouvre un nouvel onglet)"
          className={iconBtnClass}
        >
          <UberEatsGlyph className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}
