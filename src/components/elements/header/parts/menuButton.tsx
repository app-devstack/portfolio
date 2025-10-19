'use client';

import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, MotionNodeOptions } from 'motion/react';

type MenuButtonProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function MenuButton({ isOpen, toggleMenu }: MenuButtonProps) {
  return (
    <motion.button
      onClick={toggleMenu}
      className="border-primary-text/20 relative z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 backdrop-blur-md"
      {...buttonAnimation}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div key="close" {...closeAnimation}>
            <X className="text-primary-text" size={24} />
          </motion.div>
        ) : (
          <motion.div key="menu" {...menuAnimation}>
            <Menu className="text-primary-text" size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const buttonAnimation: MotionNodeOptions = {
  initial: { y: -800, opacity: 0, scale: 0.1 },
  animate: { y: 0, opacity: 1, scale: 1 },
  transition: { type: 'spring' },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};

const menuAnimation: MotionNodeOptions = {
  initial: { rotate: 90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: -90, opacity: 0 },
  transition: { duration: 0.2 },
};

const closeAnimation: MotionNodeOptions = {
  initial: { rotate: -90, opacity: 0 },
  animate: { rotate: 0, opacity: 1 },
  exit: { rotate: 90, opacity: 0 },
  transition: { duration: 0.2 },
};
