import type { Metadata } from 'next';
import ReviewCta from '@/components/ReviewCta';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  '/avis',
  'Avis Google',
  'Laisser un avis sur Google pour Trésors Sucrés — pâtisserie algérienne à Montréal.',
);

export default function AvisPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.24em] text-tsCream/65">Avis</div>
          <h1 className="text-3xl font-semibold text-tsCream md:text-5xl">Merci pour votre avis</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-tsCream/80 md:text-base">
            Un avis Google aide les nouveaux clients à découvrir Trésors Sucrés.
          </p>
        </div>

        <div className="max-w-2xl">
          <ReviewCta />
        </div>
      </section>
    </div>
  );
}
