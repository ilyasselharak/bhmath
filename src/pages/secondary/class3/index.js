import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";

export default function index() {
  const sections = [
    { 
      href: "/secondary/class3/SVT-PC",
      name: "Sciences de la Vie et PC",
      description: "Sciences de la Vie et de la Terre / Physique-Chimie"
    },
    { 
      href: "/secondary/class3/MATHA",
      name: "Sciences Math A",
      description: "Mathématiques Approfondies - Option A"
    },
    { 
      href: "/secondary/class3/MATHB",
      name: "Sciences Math B",
      description: "Mathématiques Approfondies - Option B"
    },
    { 
      href: "/secondary/class3/Lettre",
      name: "Lettres",
      description: "Lettres et Sciences Humaines"
    },
    { 
      href: "/secondary/class3/TCT",
      name: "Sciences Technologies",
      description: "Technologies et Sciences Industrielles"
    },
    { 
      href: "/secondary/class3/ECO",
      name: "Sciences Économiques",
      description: "Économie et Gestion"
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
              2ème Année Baccalauréat
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Cours interactifs, exercices et ressources mathématiques pour les élèves de la deuxième année du baccalauréat
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Choisissez votre filière
            </h2>
            <p className="text-gray-600">
              Sélectionnez votre filière pour accéder aux ressources spécifiques à votre spécialisation
            </p>
          </div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link href={section.href} key={section.href}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {section.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {section.description}
                    </p>
                    <div className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                      Accéder aux cours
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
