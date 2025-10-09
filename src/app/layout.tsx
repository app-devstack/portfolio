import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
          geistSans.variable,
          geistMono.variable,
          'h-screen w-screen overflow-hidden antialiased'
        )}
      >
        {children}
      </body>
    </html>
  );
}
