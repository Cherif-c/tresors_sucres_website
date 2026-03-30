import type { Metadata } from 'next';
import JsonLdLocalBusiness from '@/components/JsonLdLocalBusiness';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { rootMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = rootMetadata();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA">
      <body className="flex min-h-screen flex-col">
        <JsonLdLocalBusiness />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
