'use client';

import { motion } from 'motion/react';

export default function Header() {
  const navItems = ['home', 'profile', 'works', 'contact'];

  return (
    <header className="fixed top-8 left-1/2 z-50 -translate-x-1/2">
      <nav className="border-primary-text/20 flex items-center gap-12 rounded-full border-2 px-6 py-2 backdrop-blur-md">
        {navItems.map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            initial={{ y: -800, opacity: 0, scale: 0.1 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.05, type: 'spring', stiffness: 600 },
            }}
            transition={{
              type: 'spring',
              // bounce: 0.4,
              // duration: 0.8,

              // ホバー解除時の戻りアニメーション
              // scale: { duration: 0.2, ease: 'easeInOut' },
              // rotate: { duration: 0.2, ease: 'easeInOut' },
            }}
            className="text-primary-text hover:text-primary-secondary px-4 py-2 text-lg font-medium tracking-widest capitalize underline underline-offset-4 transition-colors hover:no-underline"
          >
            <span className="font-bold">{item}</span>
          </motion.a>
        ))}
      </nav>
    </header>
  );
}
