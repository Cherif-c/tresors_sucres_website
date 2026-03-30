import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  '/menu',
  'Menu — pâtisseries algériennes',
  'Baklawa, makrout, tcharek, dziriettes, cornets et spécialités algériennes artisanales à Montréal (Jean-Talon).',
);

const pastries = [
  'Baklawa',
  'Makrout',
  'Tcharek',
  'Dziriette',
  'Mchewek',
  'Cornets amande et pistache',
];

export default function MenuPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-tsCream/65">Menu</div>
            <h1 className="text-3xl font-semibold text-tsCream md:text-5xl">Nos pâtisseries</h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-tsCream/80 md:text-base">
            Un assortiment de classiques algeriens et de specialites maison presente dans une
            interface premium, claire et facile a faire evoluer.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pastries.map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 h-24 rounded-[1.25rem] bg-gradient-to-br from-tsCream/20 to-transparent" />
              <div className="text-2xl font-semibold text-tsCream">{item}</div>
              <p className="mt-3 text-sm leading-7 text-tsCream/75">
                Visuel et fiche produit a enrichir avec photos, descriptions et categories.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
