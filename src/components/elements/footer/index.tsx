import { ExternalLinkIcon, FileTextIcon, GithubIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

export default function Footer() {
  const socialLinks = [
    {
      name: 'X(Twitter)',
      href: 'https://x.com/ice_maru_maruuu',
      Icon: TwitterIcon,
      label: 'X(Twitter)',
    },
    {
      name: 'Note',
      href: 'https://note.com/maru_maruuu',
      Icon: FileTextIcon,
      label: 'Note',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/maru-maruu',
      Icon: GithubIcon,
      label: 'GitHub',
    },
  ];
  return (
    <div className={cn('relative min-h-[280px] overflow-visible md:min-h-[320px]')}>
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:p-12">
        <div className="flex w-full max-w-6xl items-start justify-between">
          <div className="relative">
            {/* メッセージバブル */}
            <div className="pointer-events-none absolute -top-10 left-5 size-36 -translate-y-1/2 md:size-40">
              <Image src={'/images/message_bubble.svg'} fill alt={'message bubble'} />
            </div>

            {/* ロゴ */}
            <div className="relative flex flex-col gap-2">
              <div className="relative h-12 w-12">
                <Image src={'/maruuu_logo.svg'} fill alt={'site logo'} />
              </div>
              <p className="text-foreground text-sm font-semibold">maru-maruuu</p>
            </div>
          </div>

          {/* SNSアイコン */}
          <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-8">
            {socialLinks.map(({ name, href, label }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'text-muted-foreground grid min-w-16 place-items-center opacity-80 transition-opacity hover:opacity-70',
                  'inline-flex items-center gap-1'
                )}
                aria-label={label}
              >
                <span className="flex-1 text-xl font-black">{name}</span>
                <ExternalLinkIcon size={18} />
              </Link>
            ))}
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-border w-full max-w-6xl border-t pt-6">
          <p className="text-muted-foreground text-center text-sm">
            © 2025 maru-maruuu. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
