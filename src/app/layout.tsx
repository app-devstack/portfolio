import './globals.css';

import type { Metadata, Viewport } from 'next';

import { montserratAlternates, notoSansJp } from '@/assets/font';
import Lenis from '@/components/lenis';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  userScalable: false,
  viewportFit: 'cover',
};

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
        <Toaster theme="light" richColors />
      </body>
    </html>
  );
}
