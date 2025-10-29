import { cn } from '@/lib/utils';

export default function Footer() {
  return (
    <div
      className={cn(
        // レイアウト
        'relative h-[39.6vw] overflow-hidden',

        // 背景
        // 'bg-[#5c5c5c]',
        'bg-center bg-repeat',

        // ボーダー
        'border-forgrand border-t-[3px]'
      )}
      style={{
        backgroundImage: 'url(/images/noise.webp)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
      }}
    >
      <div className="flex">
        <div className="h-full w-full p-4">
          <h4 className="text-2xl">Footer</h4>
        </div>

        <div className="h-full w-full p-4">
          <h4>link</h4>
          <ul>
            <li>X</li>
            <li>Note</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
