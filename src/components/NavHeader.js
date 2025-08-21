'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavHeader() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);

  const isActive = (path) => {
    return pathname === path;
  };

  const navigationItems = [
    {
      name: 'Collège',
      href: '/college',
      sections: [
        { name: '1ère année collège', href: '/college/class1' },
        { name: '2ème année collège', href: '/college/class2' },
        { name: '3ème année collège', href: '/college/class3' }
      ]
    },
    {
      name: 'Tronc Commun',
      href: '/secondary/class1',
      sections: [
        { name: 'Tronc Commun Sciences', href: '/secondary/class1/sciences' },
        { name: 'Tronc Commun Lettres', href: '/secondary/class1/lettres' },
        { name: 'Sciences Techniques', href: '/secondary/class1/technique' }
      ]
    },
    {
      name: '1ère Bac',
      href: '/secondary/class2',
      sections: [
        { name: 'Sciences Mathématiques', href: '/secondary/class2/sciences-math' },
        { name: 'Sciences Physiques et SVT', href: '/secondary/class2/pc-svt' },
        { name: 'Lettres', href: '/secondary/class2/lettres' },
        { name: 'Économie', href: '/secondary/class2/economie' }
      ]
    },
    {
      name: '2ème Bac',
      href: '/secondary/class3',
      sections: [
        { name: 'Mathématiques A', href: '/secondary/class3/math-a' },
        { name: 'Mathématiques B', href: '/secondary/class3/math-b' },
        { name: 'Sciences Physiques et SVT', href: '/secondary/class3/pc-svt' },
        { name: 'Lettres', href: '/secondary/class3/lettres' },
        { name: 'Économie', href: '/secondary/class3/ECO' }
      ]
    }
  ];

  return (
    <nav className="bg-orange-500 rounded-b-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  href={item.href}
                  className={`text-white hover:text-orange-100 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href) ? 'bg-orange-600' : ''
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown Menu */}
                {hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                        {item.name}
                      </h3>
                      <div className="space-y-1">
                        {item.sections.map((section) => (
                          <Link
                            key={section.href}
                            href={section.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-md transition-colors"
                          >
                            {section.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
