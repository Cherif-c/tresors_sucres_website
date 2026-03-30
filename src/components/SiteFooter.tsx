import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import { site } from '@/config/site';

const footerLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/nous-visiter', label: 'Nous visiter' },
  { href: '/avis', label: 'Avis Google' },
] as const;

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black/15">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="text-lg font-semibold text-tsCream">{site.brandName}</div>
            <p className="mt-3 text-sm leading-7 text-tsCream/75">
              {site.address.line1}
              <br />
              {site.address.cityRegion}
            </p>
            <p className="mt-2 text-sm text-tsCream/80">{site.phone}</p>
            <p className="mt-1 text-sm text-tsCream/65">{site.hoursText}</p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Liens du pied de page">
            <div className="mb-1 text-xs uppercase tracking-[0.2em] text-tsCream/55">Menu du site</div>
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-tsCream/85 transition hover:text-tsCream"
              >
                {label}
              </Link>
            ))}
            {site.uberEats.show ? (
              <a
                href={site.uberEats.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-tsCream/85 transition hover:text-tsCream"
              >
                Uber Eats
              </a>
            ) : null}
          </nav>

          <div>
            <div className="mb-3 text-xs uppercase tracking-[0.2em] text-tsCream/55">Suivez-nous</div>
            <SocialLinks />
            <div className="mt-5">
              <a
                href={site.googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-tsCream/85 underline-offset-4 transition hover:text-tsCream hover:underline"
              >
                Laisser un avis Google
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-tsCream/50">
          © {new Date().getFullYear()} {site.brandName}. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
