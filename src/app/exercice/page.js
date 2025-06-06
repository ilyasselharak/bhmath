import Link from 'next/link';

export const metadata = {
  title: 'BHMaths - Exercices',
  description: 'Exercices de mathématiques pour le collège et le lycée au Maroc',
};

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

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* College Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Collège</h2>
            <div className="space-y-4">
              <Link 
                href="/exercice/firstCollege"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">1ère année</h3>
              </Link>
              <Link 
                href="/exercice/secondCollege"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">2ème année</h3>
              </Link>
              <Link 
                href="/exercice/thirdCollege"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">3ème année</h3>
              </Link>
            </div>
          </div>

          {/* Secondary Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Lycée</h2>
            <div className="space-y-4">
              <Link 
                href="/secondary/class1"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">Tronc Commun</h3>
              </Link>
              <Link 
                href="/secondary/class2"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">1ère année Bac</h3>
              </Link>
              <Link 
                href="/secondary/class3"
                className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">2ème année Bac</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 