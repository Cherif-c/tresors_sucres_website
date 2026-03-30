'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/config/site';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/nous-visiter', label: 'Nous visiter' },
  { href: '/avis', label: 'Avis' },
] as const;

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-wrap items-center gap-1 md:justify-end md:gap-2"
      aria-label="Navigation principale"
    >
      {links.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            className={`rounded-full px-3 py-2 text-sm font-semibold transition md:px-4 ${
              active
                ? 'bg-tsCream text-tsBurgundy shadow-soft'
                : 'text-tsCream/90 hover:bg-white/10'
            }`}
          >
            {label}
          </Link>
        );
      })}
      {site.uberEats.show ? (
        <a
          href={site.uberEats.url}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-tsCream/35 px-3 py-2 text-sm font-semibold text-tsCream transition hover:bg-white/10 md:px-4"
        >
          Uber Eats
        </a>
      ) : null}
    </nav>
  );
}
