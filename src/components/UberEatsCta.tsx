import { site } from '@/config/site';

export default function UberEatsCta() {
  if (!site.uberEats.show) return null;

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-tsGreen/90 p-6 text-tsCream shadow-soft">
      <div className="text-xs uppercase tracking-[0.22em] text-tsCream/70">UberEats</div>
      <div className="mt-3 text-sm leading-7 text-tsCream/95">
        Commander en ligne quand vous voulez (si vous le souhaitez).
      </div>
      <div className="mt-5">
        <a
          href={site.uberEats.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-tsCream px-5 py-3 text-sm font-semibold text-tsBurgundy transition hover:opacity-90"
        >
          Commander sur UberEats
        </a>
      </div>
    </div>
  );
}
