import { Clock3, MapPin, Phone } from 'lucide-react';

const pastries = [
  'Baklawa',
  'Makrout',
  'Tcharek',
  'Dziriette',
  'Mchewek',
  'Cornets amande et pistache',
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 md:py-10">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-black/10 p-6 shadow-soft backdrop-blur md:p-8">
          <div className="flex flex-col gap-5 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-tsCream/80">
                Patisserie algerienne artisanale
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-tsCream md:text-6xl">
                Tresors Sucres
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-tsCream/85 md:text-lg">
                Plus de 20 ans de savoir-faire, de patience et de gourmandise pour faire rayonner
                les patisseries algeriennes a Montreal.
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
                Tradi0tion.
                <br />
                Elegance.
                <br />
                Generosite.
              </div>
              <p className="mt-6 max-w-2xl text-base leading-8 text-tsCream/80">
                Une maison de patisseries algeriennes fines pour offrir, partager et celebrer.
                Une signature visuelle sobre, chaleureuse et haut de gamme, a l'image de la marque.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#patisseries"
                  className="rounded-full bg-tsCream px-5 py-3 text-sm font-semibold text-tsBurgundy transition hover:opacity-90"
                >
                  Voir les patisseries
                </a>
                <a
                  href="#visite"
                  className="rounded-full border border-tsCream/30 px-5 py-3 text-sm font-semibold text-tsCream transition hover:bg-white/5"
                >
                  Nous visiter
                </a>
              </div>
            </div>

            <div id="visite" className="grid gap-4">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 text-xs uppercase tracking-[0.22em] text-tsCream/65">Informations</div>
                <div className="space-y-4 text-tsCream/90">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-tsCream" />
                    <div>
                      <div className="font-medium text-tsCream">3636 Rue Jean-Talon Est</div>
                      <div className="text-sm text-tsCream/70">Montreal, Quebec</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-0.5 h-5 w-5 text-tsCream" />
                    <div>
                      <div className="font-medium text-tsCream">Tous les jours</div>
                      <div className="text-sm text-tsCream/70">9 h a 21 h</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-tsCream" />
                    <div>
                      <div className="font-medium text-tsCream">(514) 223-2174</div>
                      <div className="text-sm text-tsCream/70">Commandes et renseignements</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-tsGreen/90 p-6 text-tsCream shadow-soft">
                <div className="text-xs uppercase tracking-[0.22em] text-tsCream/70">Maison signature</div>
                <p className="mt-4 text-lg leading-8 text-tsCream/95">
                  Baklawa, makrout, tcharek, dziriette et autres douceurs preparees dans un esprit
                  de tradition, de finesse et de generosite.
                </p>
              </div>
            </div>
          </div>
        </header>
      </section>

      <section id="patisseries" className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-tsCream/65">Selection</div>
            <h2 className="text-3xl font-semibold text-tsCream md:text-5xl">Nos patisseries</h2>
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

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-10">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-tsCream/65">A propos</div>
          <h2 className="text-3xl font-semibold text-tsCream md:text-5xl">Un heritage algerois a Montreal</h2>
          <p className="mt-6 max-w-4xl text-base leading-8 text-tsCream/85">
            Tresors Sucres met de l'avant une patisserie algerienne artisanale, chaleureuse et
            raffinee. Le site est pense pour offrir une image premium de la maison, mettre les
            produits en valeur et simplifier l'acces aux informations essentielles pour la clientele.
          </p>
        </div>
      </section>
    </main>
  );
}
