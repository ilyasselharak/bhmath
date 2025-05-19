import Link from 'next/link';

export const metadata = {
  title: 'Exercices | BHMaths',
  description: 'Exercices et problèmes de mathématiques pour tous les niveaux',
};

const levels = [
  {
    title: 'Collège',
    href: '/college',
    description: 'Exercices pour les niveaux du collège',
    subLevels: [
      { title: '1ère Année', href: '/college/class1/exercices' },
      { title: '2ème Année', href: '/college/class2/exercices' },
      { title: '3ème Année', href: '/course/thirdCollege' }
    ]
  },
  {
    title: 'Lycée',
    href: '/secondary',
    description: 'Exercices pour les niveaux du lycée',
    subLevels: [
      { title: 'Tronc Commun', href: '/secondary/class1/exercices' },
      { title: '1ère Bac', href: '/secondary/class2/exercices' },
      { title: '2ème Bac', href: '/secondary/class3/exercices' }
    ]
  }
];

export default function ExercicePage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Exercices de Mathématiques
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Sélectionnez votre niveau pour accéder aux exercices
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {level.title}
                </h2>
                <p className="text-gray-600">
                  {level.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {level.subLevels.map((subLevel, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subLevel.href}
                    className="block bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">
                        {subLevel.title}
                      </span>
                      <div className="text-orange-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 