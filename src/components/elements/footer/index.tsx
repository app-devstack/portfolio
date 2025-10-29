import { FileTextIcon, GithubIcon, TwitterIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Footer() {
  const socialLinks = [
    {
      name: 'X (Twitter)',
      href: '/',
      Icon: TwitterIcon,
      label: 'X (Twitter)',
    },
    {
      name: 'Note',
      href: '/',
      Icon: FileTextIcon,
      label: 'Note',
    },
    {
      name: 'GitHub',
      href: '/',
      Icon: GithubIcon,
      label: 'GitHub',
    },
  ];
  return (
    <div
      className={cn(
        'relative min-h-[300px] overflow-hidden'
        // 'bg-background/10',
        // 'border-forgrand border-t-[3px]'
      )}
    >
      <div className="relative z-10 flex flex-col items-center justify-between gap-8 p-8 md:p-12">
        <div className="flex w-full max-w-6xl items-start justify-between">
          {/* ロゴ */}
          <div className="flex flex-col gap-2">
            <div className="h-12 w-12 rounded bg-gray-400" />
            <p className="text-muted-foreground text-sm">maru-maruuu</p>
          </div>

          {/* SNSアイコン */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ name, href, label, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/70 transition-opacity hover:opacity-70"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
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
