import type { Metadata } from 'next';
import { Clock3, MapPin, Phone } from 'lucide-react';
import GoogleMap from '@/components/GoogleMap';
import ReviewCta from '@/components/ReviewCta';
import SocialLinks from '@/components/SocialLinks';
import UberEatsCta from '@/components/UberEatsCta';
import { site } from '@/config/site';
import { pageMetadata } from '@/lib/metadata';

export const metadata: Metadata = pageMetadata(
  '/nous-visiter',
  'Adresse & horaires',
  'Trésors Sucrés, pâtisserie algérienne : 3636 rue Jean-Talon Est, Montréal. Horaires, téléphone, carte et itinéraire.',
);

export default function NousVisiterPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-14">
        <div className="mb-8 flex flex-col gap-3">
          <div className="text-xs uppercase tracking-[0.24em] text-tsCream/65">Nous visiter</div>
          <h1 className="text-3xl font-semibold text-tsCream md:text-5xl">Adresse & informations</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid gap-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-tsCream/65">Informations</div>
              <div className="space-y-4 text-tsCream/90">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-tsCream" />
                  <div>
                    <div className="font-medium text-tsCream">{site.address.line1}</div>
                    <div className="text-sm text-tsCream/70">{site.address.cityRegion}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 text-tsCream" />
                  <div>
                    <div className="font-medium text-tsCream">Tous les jours</div>
                    <div className="text-sm text-tsCream/70">
                      {site.hoursText.replace('Tous les jours • ', '')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-tsCream" />
                  <div>
                    <div className="font-medium text-tsCream">{site.phone}</div>
                    <div className="text-sm text-tsCream/70">
                      Commandes, renseignements et informations en boutique
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-tsGreen/90 p-6 text-tsCream shadow-soft">
              <div className="text-xs uppercase tracking-[0.22em] text-tsCream/70">Maison signature</div>
              <p className="mt-4 text-lg leading-8 text-tsCream/95">
                Baklawa, makrout, charek, dziriettes et autres douceurs préparées dans un esprit de
                tradition, de finesse et de générosité.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ReviewCta />
              <UberEatsCta />
            </div>
          </div>

          <div className="grid gap-6">
            <GoogleMap />
            <SocialLinks />
          </div>
        </div>
      </section>
    </div>
  );
}
