import './globals.css';

import type { Metadata } from 'next';
import { Montserrat_Alternates, Noto_Sans_JP } from 'next/font/google';

import { cn } from '@/lib/utils';

// Noto Sans JP
const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

// Montserrat Alternates
const montserratAlternates = Montserrat_Alternates({
  variable: '--font-montserrat-alternates',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'maru-maruuu_portfolio',
  description: 'A portfolio site. Created by maru-maruuu',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          notoSansJp.className,
          montserratAlternates.className,
          // notoSansJp.variable,
          // montserratAlternates.variable,
          'h-screen w-screen overflow-hidden antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
