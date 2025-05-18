import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

export default function NavHeader() {
  return (
    <nav className="bg-orange-500 rounded-xl shadow-lg">
      <div className="flex justify-between items-center">
        <div className="flex items-center text-white">
          <Link href={'/'}>
            <div className="p-4 hover:bg-orange-600 rounded-l-xl transition-colors duration-200 text-3xl">
              <AiFillHome />
            </div>
          </Link>

          <div className="group relative px-8 py-4 hover:bg-orange-600 transition-colors duration-200">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href={"/college"}>
                <span className="text-lg font-medium">Collège</span>
              </Link>
              <AiFillCaretDown className="text-sm" />
            </div>
            <ul className="hidden group-hover:block absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden">
              <Link href={"/college/class1"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  1ère Année
                </li>
              </Link>
              <Link href={"/college/class2"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  2ème Année
                </li>
              </Link>
              <Link href={"/college/class3"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  3ème Année
                </li>
              </Link>
            </ul>
          </div>

          <div className="group relative px-8 py-4 hover:bg-orange-600 transition-colors duration-200">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Link href={"/secondary"}>
                <span className="text-lg font-medium">Lycée</span>
              </Link>
              <AiFillCaretDown className="text-sm" />
            </div>
            <ul className="hidden group-hover:block absolute top-full left-0 w-48 bg-white shadow-lg rounded-b-lg overflow-hidden">
              <Link href={"/secondary/class1"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  Tronc Commun
                </li>
              </Link>
              <Link href={"/secondary/class2"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  1ère Bac
                </li>
              </Link>
              <Link href={"/secondary/class3"}>
                <li className="px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                  2ème Bac
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="px-6">
          <button className="text-2xl text-white hover:text-orange-200 transition-colors duration-200">
            <AiOutlineSearch />
          </button>
        </div>
      </div>
    </nav>
  );
}
