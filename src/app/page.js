import Link from 'next/link';

export const metadata = {
  title: 'BHMaths - Accueil',
  description: 'Ressources mathématiques pour le collège et le lycée au Maroc',
};

const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0 DH',
    features: [
      'Accès aux cours de base',
      'Exercices limités',
      'Ressources gratuites',
      'Support communautaire'
    ],
    buttonText: 'Commencer',
    buttonLink: '/course',
    highlighted: false
  },
  {
    name: 'Premium',
    price: '199 DH',
    period: '/mois',
    features: [
      'Tous les cours premium',
      'Exercices illimités',
      'Devoirs corrigés',
      'Support WhatsApp prioritaire',
      'Accès aux concours',
      'Résumés exclusifs'
    ],
    buttonText: 'S\'abonner',
    buttonLink: '/premium',
    highlighted: true
  },
  {
    name: 'Annuel',
    price: '1990 DH',
    period: '/an',
    features: [
      'Tous les avantages Premium',
      '2 mois gratuits',
      'Accès aux archives',
      'Support WhatsApp 24/7',
      'Cours particuliers (2h/mois)',
      'Résumés personnalisés'
    ],
    buttonText: 'S\'abonner',
    buttonLink: '/premium/annual',
    highlighted: false
  }
];

export default function HomePage() {
  return (
    <>
      <main className="py-12">
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Bienvenue sur BHMaths
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Ressources mathématiques pour tous les niveaux
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
                  href="/college/class1"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">1ère année</h3>
                </Link>
                <Link 
                  href="/college/class2"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">2ème année</h3>
                </Link>
                <Link 
                  href="/college/class3"
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
                  <h3 className="text-lg font-semibold text-gray-800">Tronc commun</h3>
                </Link>
                <Link 
                  href="/secondary/class2"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">1ère Bac</h3>
                </Link>
                <Link 
                  href="/secondary/class3"
                  className="block p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-800">2ème Bac</h3>
                </Link>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Choisissez votre forfait
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accédez à des ressources exclusives et bénéficiez d'un support personnalisé pour exceller en mathématiques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 ${
                  plan.highlighted ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.buttonLink}
                  className={`block w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>

          {/* WhatsApp Contact Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-8 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'aide ? Contactez-nous sur WhatsApp
              </h2>
              <p className="mb-6">
                Notre équipe d'experts est disponible pour répondre à vos questions et vous accompagner dans votre apprentissage
              </p>
              <a
                href="https://wa.me/2126295041077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contacter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 