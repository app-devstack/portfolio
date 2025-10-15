'use client';

export default function Header() {
  const navItems = ['home', 'profile', 'works', 'contact'];

  return (
    <header className="fixed top-8 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-12 rounded-full bg-black/20 px-8 py-4 backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-lg font-medium text-white capitalize transition-colors hover:text-gray-300"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
