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

const baseUrl = 'https://portfolio.maru-maruuu.com';
const ogImageUrl = `${baseUrl}/images/opengraph-image.png`;
const metaTitle = 'maru-maruuu_portfolio';
const metaDescription = 'A portfolio site. Created by maru-maruuu';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: baseUrl,
    siteName: 'maru-maruuu Portfolio',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: 'maru-maruuu Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: metaTitle,
    description: metaDescription,
    images: [ogImageUrl],
  },
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
