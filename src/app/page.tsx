import ProductCard from '@/components/ProductCard';
import ReviewCta from '@/components/ReviewCta';
import SocialLinks from '@/components/SocialLinks';
import UberEatsCta from '@/components/UberEatsCta';
import { products } from '@/data/products';

export default function HomePage() {
  const preview = products.slice(0, 3);

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-black/10 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-tsCream/80">
                Pâtisserie algérienne artisanale
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-tsCream md:text-6xl">
                Trésors Sucrés
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-tsCream/85 md:text-lg">
                Plus de 20 ans de savoir-faire, de patience et de gourmandise pour faire rayonner
                les pâtisseries algériennes à Montréal.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-tsCream/20 bg-tsCream/10 px-5 py-4 text-tsCream">
              <div className="text-xs uppercase tracking-[0.2em] text-tsCream/70">Depuis plus de 20 ans</div>
              <div className="mt-2 text-2xl font-semibold">Savoir-faire maison</div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-[2rem] bg-gradient-to-br from-black/15 to-black/5 p-8 md:p-10">
              <div className="mb-5 h-3 w-full max-w-md overflow-hidden rounded-full bg-tsCream/90">
                <div className="h-full w-1/2 bg-tsGreen" />
              </div>
              <div className="text-5xl font-semibold leading-none text-tsCream md:text-7xl">
                Tradition.
                <br />
                Élégance.
                <br />
                Générosité.
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-tsCream/80">
                Une maison de pâtisseries algériennes fines, pensée pour offrir, partager et célébrer.
                Une signature visuelle sobre, chaleureuse et haut de gamme, à l’image de la marque.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/menu"
                  className="rounded-full bg-tsCream px-5 py-3 text-sm font-semibold text-tsBurgundy transition hover:opacity-90"
                >
                  Voir le menu
                </a>
                <a
                  href="/nous-visiter"
                  className="rounded-full border border-tsCream/30 px-5 py-3 text-sm font-semibold text-tsCream transition hover:bg-white/5"
                >
                  Nous visiter
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-tsCream/65">Sélection</div>
            <h2 className="text-3xl font-semibold text-tsCream md:text-5xl">Aperçu du menu</h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-tsCream/80 md:text-base">
            Une sélection de classiques algériens et de spécialités maison, présentée dans un univers
            clair, raffiné et fidèle à l’identité de Trésors Sucrés.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {preview.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/menu"
            className="inline-flex rounded-full border border-tsCream/30 px-5 py-3 text-sm font-semibold text-tsCream transition hover:bg-white/5"
          >
            Voir tout le menu
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10 md:px-10">
        <div className="mb-8">
          <div className="text-xs uppercase tracking-[0.24em] text-tsCream/65">On aime vos retours</div>
          <h2 className="mt-2 text-3xl font-semibold text-tsCream md:text-5xl">Partagez votre expérience</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <ReviewCta />
          <UberEatsCta />
        </div>

        <div className="mt-6">
          <SocialLinks />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-10">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-tsCream/65">À propos</div>
          <h2 className="text-3xl font-semibold text-tsCream md:text-5xl">
            Un héritage algérois à Montréal
          </h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-tsCream/85">
            Trésors Sucrés met à l’honneur une pâtisserie algérienne artisanale, chaleureuse et raffinée.
            Chaque création s’inscrit dans une tradition de goût, de soin et de générosité, avec une
            volonté constante d’offrir une expérience à la fois authentique et élégante.
          </p>
        </div>
      </section>
    </div>
  );
}
