import Link from 'next/link';

export default function ClassTemplate({ title, description, sections }) {
  return (
    <main className="py-12">
      <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            {description}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Link 
              key={index}
              href={section.href}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">
                  {section.title}
                </h2>
                <div className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                  {section.action || 'Accéder'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 