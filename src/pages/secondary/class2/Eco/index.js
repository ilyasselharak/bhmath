import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";
import React from "react";

export default function index() {
  const sections = [
    {
      href: "#",
      name: "Cours",
      description: "Leçons et contenus théoriques pour Sciences Économiques"
    },
    {
      href: "#",
      name: "Exercices",
      description: "Exercices pratiques et applications"
    },
    {
      href: "#",
      name: "Devoirs",
      description: "Devoirs surveillés et examens blancs"
    }
  ];

  return (
    <>
      <TopHeader />
      <MainHeader />
      <NavHeader />
      
      <main className="py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Sciences Économiques - 2ème année
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Ressources mathématiques pour la filière Économique
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ressources disponibles
            </h2>
            <p className="text-gray-600">
              Accédez aux ressources mathématiques adaptées aux Sciences Économiques
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link href={section.href} key={section.name}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {section.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                      Accéder
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
