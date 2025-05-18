import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import Link from "next/link";

export default function index() {
  const classes = [
    { href: "/secondary/class1", name: "Tronc Commun" },
    { href: "/secondary/class2", name: "1ère Bac" },
    { href: "/secondary/class3", name: "2ème Bac" },
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
              Lycée - Ressources Mathématiques
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Cours, exercices, devoirs et examens pour les élèves du lycée
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sélectionnez votre niveau
            </h2>
            <p className="text-gray-600">
              Choisissez votre niveau pour accéder aux ressources adaptées à votre année scolaire.
            </p>
          </div>

          {/* Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.map((classItem) => (
              <Link href={classItem.href} key={classItem.href}>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {classItem.name}
                    </h3>
                    <div className="mt-4 inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
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
