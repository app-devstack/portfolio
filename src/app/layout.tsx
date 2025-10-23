import './globals.css';

import type { Metadata } from 'next';

import { montserratAlternates, notoSansJp } from '@/assets/font';
import Lenis from '@/components/lenis';
import { cn } from '@/lib/utils';

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
          'h-screen max-h-dvh w-screen overflow-x-hidden overflow-y-auto overscroll-none antialiased'
        )}
      >
        <Lenis />
        {children}
      </body>
    </html>
  );
}
