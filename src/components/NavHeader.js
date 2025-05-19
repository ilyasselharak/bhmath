import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

const navItems = [
  { title: 'Accueil', href: '/' },
  { title: 'Collège', href: '/college' },
  { title: 'Lycée', href: '/secondary' },
  { title: 'Exercices', href: '/exercice' },
  { title: 'Devoirs', href: '/devoire' },
  { title: 'Concours', href: '/concours' },
];

export default function NavHeader() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="py-4 px-3 text-gray-600 hover:text-orange-500 hover:border-b-2 hover:border-orange-500 transition-all"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
