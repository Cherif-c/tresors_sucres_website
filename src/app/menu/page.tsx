import type { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';
import { pageMetadata } from '@/lib/metadata';
import { products } from '@/data/products';

export const metadata: Metadata = pageMetadata(
  '/menu',
  'Menu — pâtisseries algériennes',
  'Baklawa, makrout, charek, dziriettes, cornets et spécialités algériennes artisanales à Montréal, sur Jean-Talon.',
);

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
            Découvrez une sélection de pâtisseries algériennes artisanales, préparées avec soin et
            présentées dans un esprit raffiné, fidèle à l’univers de Trésors Sucrés.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
