import Link from 'next/link';
import Image from 'next/image';

export default function MainHeader() {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            
            <div>
              <h1 className="text-3xl font-bold text-gray-800"><span className='text-orange-500'>BH</span>math</h1>
              <p className="text-sm text-gray-600">Mathématiques pour tous</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/about"
              className="text-gray-600 hover:text-orange-500 transition-colors"
            >
              À propos
            </Link>
            <Link 
              href="/contact"
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
