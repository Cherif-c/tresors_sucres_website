import Link from 'next/link';
import MainNav from '@/components/MainNav';
import { site } from '@/config/site';

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#6b1830]/90 shadow-soft backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10">
        <Link
          href="/"
          className="shrink-0 text-xl font-semibold tracking-tight text-tsCream transition hover:opacity-90 md:text-2xl"
        >
          {site.brandName}
        </Link>
        <MainNav />
      </div>
    </header>
  );
}
