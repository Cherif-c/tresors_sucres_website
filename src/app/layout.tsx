import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tresors Sucres',
  description: 'Algerian pastry shop in Montreal with over 20 years of savoir-faire.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
