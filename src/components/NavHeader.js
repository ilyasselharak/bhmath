'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavHeader() {
  const pathname = usePathname();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="bg-orange-500 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-8">
            <Link
              href="/course"
              className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/course') ? 'bg-orange-600' : ''
              }`}
            >
              Cours
            </Link>
            <Link
              href="/exercises"
              className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/exercises') ? 'bg-orange-600' : ''
              }`}
            >
              Exercices
            </Link>
            <Link
              href="/resources"
              className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/resources') ? 'bg-orange-600' : ''
              }`}
            >
              Ressources
            </Link>
            <Link
              href="/blog"
              className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/blog') ? 'bg-orange-600' : ''
              }`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
