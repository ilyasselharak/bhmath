import Link from 'next/link';

export const metadata = {
  title: '2ème Bac | BHMath',
  description: 'Ressources mathématiques pour la 2ème année du Baccalauréat',
};

const specializations = [
  {
    title: 'Sciences Mathématiques',
    href: '/secondary/class2/sciences-math',
    description: 'Spécialisation en mathématiques avancées'
  },
  {
    title: 'Sciences PC-SVT',
    href: '/secondary/class2/pc-svt',
    description: 'Sciences Physiques et Sciences de la Vie et de la Terre'
  },
  {
    title: 'Sciences Économiques',
    href: '/secondary/class2/economie',
    description: 'Mathématiques appliquées à l\'économie'
  },
  {
    title: 'Lettres',
    href: '/secondary/class2/lettres',
    description: 'Programme adapté aux filières littéraires'
  }
];

export default function SecondBacPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            2ème année Baccalauréat
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Choisissez votre spécialisation
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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