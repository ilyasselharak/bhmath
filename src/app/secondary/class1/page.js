import Link from 'next/link';

export const metadata = {
  title: '1ère Bac | BHMath',
  description: 'Ressources mathématiques pour la 1ère année du Baccalauréat',
};

const specializations = [
  {
    title: 'Tronc Commun Sciences',
    href: '/secondary/class1/sciences',
    description: 'Programme commun pour les filières scientifiques'
  },
  {
    title: 'Tronc Commun Lettres',
    href: '/secondary/class1/lettres',
    description: 'Programme adapté aux filières littéraires'
  },
  {
    title: 'Sciences Techniques',
    href: '/secondary/class1/technique',
    description: 'Programme pour les filières techniques'
  }
];

export default function FirstBacPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Tronc Commun
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Choisissez votre filière
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specializations.map((spec, index) => (
            <Link 
              key={index}
              href={spec.href}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {spec.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {spec.description}
                </p>
                <div className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                  Accéder au programme
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 