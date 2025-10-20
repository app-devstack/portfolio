'use client';

import { useClickAway } from '@uidotdev/usehooks';
import { AnimatePresence, motion, MotionNodeOptions } from 'motion/react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import MenuButton from './parts/menuButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['home', 'profile', 'works', 'contact'];
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const ref = useClickAway<HTMLElement>(() => {
    setIsOpen(false);
  });

  return (
    <header ref={ref} className="fixed top-8 right-8 z-50">
      {/* ハンバーガーボタン */}
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />

      {/* メニュー */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={cn(
              'absolute top-16 right-0 flex flex-col gap-2',
              'rounded-2xl p-6',
              'border-primary-text/20 bg- border-2 backdrop-blur-md'
            )}
            {...navAnimation}
          >
            {navItems.map((item, idx) => (
              <motion.a
                key={item}
                href={`#${item}`}
                onClick={closeMenu}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.1,
                  x: 10,
                  transition: { duration: 0.2 },
                }}
                className="text-primary-text hover:text-primary-secondary px-4 py-3 text-lg font-medium tracking-widest capitalize transition-colors"
              >
                <span className="font-bold">{item}</span>
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

const navAnimation: MotionNodeOptions = {
  initial: { opacity: 0, scale: 0.8, y: -20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.8, y: -20 },
  transition: { type: 'spring', stiffness: 300, damping: 25 },
};
