'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/app/context/AuthContext';

export default function MainHeader() {
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-orange-500">BHMaths</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des cours, exercices..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="text-gray-600 hover:text-orange-500 font-medium"
            >
              Contact
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="text-gray-700 font-medium">{user.username}</span>
                </div>
                <button
                  onClick={logout}
                  className="text-gray-600 hover:text-orange-500 font-medium"
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-orange-500 font-medium"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
