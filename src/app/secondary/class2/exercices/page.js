import Link from 'next/link';

export const metadata = {
  title: 'Exercices 2ème Bac | BHMath',
  description: 'Exercices et problèmes de mathématiques pour la 2ème année du Baccalauréat',
};

const categories = [
  {
    title: 'Analyse',
    topics: [
      { title: 'Fonctions polynômes', href: '/secondary/class2/exercices/fonctions-polynomes' },
      { title: 'Fonctions rationnelles', href: '/secondary/class2/exercices/fonctions-rationnelles' },
      { title: 'Limites et continuité', href: '/secondary/class2/exercices/limites-continuite' },
      { title: 'Dérivation', href: '/secondary/class2/exercices/derivation' }
    ]
  },
  {
    title: 'Géométrie',
    topics: [
      { title: 'Vecteurs du plan', href: '/secondary/class2/exercices/vecteurs-plan' },
      { title: 'Produit scalaire', href: '/secondary/class2/exercices/produit-scalaire' },
      { title: 'Configurations géométriques', href: '/secondary/class2/exercices/configurations' },
      { title: 'Transformations', href: '/secondary/class2/exercices/transformations' }
    ]
  },
  {
    title: 'Suites Numériques',
    topics: [
      { title: 'Suites arithmétiques', href: '/secondary/class2/exercices/suites-arithmetiques' },
      { title: 'Suites géométriques', href: '/secondary/class2/exercices/suites-geometriques' },
      { title: 'Suites récurrentes', href: '/secondary/class2/exercices/suites-recurrentes' },
      { title: 'Limites de suites', href: '/secondary/class2/exercices/limites-suites' }
    ]
  },
  {
    title: 'Statistiques et Probabilités',
    topics: [
      { title: 'Statistiques descriptives', href: '/secondary/class2/exercices/statistiques' },
      { title: 'Probabilités conditionnelles', href: '/secondary/class2/exercices/probabilites' },
      { title: 'Variables aléatoires', href: '/secondary/class2/exercices/variables-aleatoires' },
      { title: 'Loi binomiale', href: '/secondary/class2/exercices/loi-binomiale' }
    ]
  }
];

export default function SecondYearBacExercisesPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Exercices 2ème année Baccalauréat
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Sélectionnez une catégorie pour accéder aux exercices
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {category.title}
                </h2>
              </div>
              
              <div className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <Link
                    key={topicIndex}
                    href={topic.href}
                    className="block bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">
                        {topic.title}
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