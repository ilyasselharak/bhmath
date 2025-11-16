import Link from 'next/link';

export const metadata = {
  title: 'Tronc Commun | BHMath',
  description: 'Ressources mathématiques pour le tronc commun du Baccalauréat',
};

const stats = [
  { value: '12+', label: 'Chapitres' },
  { value: '250+', label: 'Exercices' },
  { value: '60+', label: 'Devoirs' },
  { value: '3', label: 'Filières' }
];

const specializations = [
  {
    title: 'Tronc Commun Sciences',
    href: '/secondary/class1/sciences',
    description: 'Programme commun pour les filières scientifiques (Sciences Mathématiques, Sciences Physiques, SVT)',
    icon: '🔬',
    features: ['Algèbre avancée', 'Géométrie analytique', 'Fonctions', 'Statistiques']
  },
  {
    title: 'Tronc Commun Lettres',
    href: '/secondary/class1/lettres',
    description: 'Programme adapté aux filières littéraires avec mathématiques appliquées',
    icon: '📚',
    features: ['Mathématiques appliquées', 'Statistiques descriptives', 'Probabilités', 'Analyse de données']
  },
  {
    title: 'Sciences Techniques',
    href: '/secondary/class1/technique',
    description: 'Programme spécialisé pour les filières techniques et professionnelles',
    icon: '⚙️',
    features: ['Mathématiques techniques', 'Applications pratiques', 'Résolution de problèmes', 'Calculs techniques']
  }
];

export default function FirstBacPage() {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-blue-200 to-blue-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Tronc Commun
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-4">
            Première année du Baccalauréat
          </p>
          <p className="text-base md:text-lg opacity-80 max-w-2xl mx-auto">
            Choisissez votre filière pour accéder aux ressources mathématiques adaptées à votre parcours. 
            Des cours complets pour bien démarrer votre baccalauréat.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-md text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Specializations Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Choisissez votre filière
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <Link 
                key={index}
                href={spec.href}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-blue-500"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{spec.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-3">
                    {spec.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    {spec.description}
                  </p>
                </div>
                {spec.features && (
                  <ul className="text-left mb-4 space-y-2">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="text-blue-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="text-center">
                  <div className="inline-block bg-blue-500 text-white text-sm px-4 py-2 rounded-full">
                    Accéder au programme
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 