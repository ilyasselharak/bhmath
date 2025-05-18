import Image from "next/image";
import { Inter } from "next/font/google";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import Link from "next/link";
import { initMongoose } from "@/lib/mongoose";
import { find_Second_Collegue_Course } from "./api/first_Collegue_course";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  await initMongoose();
  const courses = await find_Second_Collegue_Course();

  return {
    props: {
      course: JSON.parse(JSON.stringify(courses)),
    },
  };
}

export default function Home({course}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopHeader />
      <MainHeader />
      <NavHeader />
      
      {/* Welcome Section */}
      <section className="text-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bienvenue sur BHmaths
          </h1>
          <p className="text-xl md:text-2xl opacity-90">
            Votre plateforme d'apprentissage des mathématiques
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* College Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Niveau Collège
            </h2>
            <Link href="/college">
              <div className="bg-orange-500 rounded-lg p-4 text-white font-semibold text-center transform transition hover:scale-105 hover:bg-orange-600 shadow-md">
                Collège
              </div>
            </Link>
            {[
              { href: "/college/class1", text: "1ère année" },
              { href: "/college/class2", text: "2ème année" },
              { href: "/college/class3", text: "3ème année" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="bg-orange-100 rounded-lg p-4 text-orange-800 font-semibold text-center transform transition hover:scale-105 hover:bg-orange-200 shadow-sm">
                  {item.text}
                </div>
              </Link>
            ))}
          </section>

          {/* Lycee Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Niveau Lycée
            </h2>
            <Link href="/secondary">
              <div className="bg-orange-500 rounded-lg p-4 text-white font-semibold text-center transform transition hover:scale-105 hover:bg-orange-600 shadow-md">
                Lycée
              </div>
            </Link>
            {[
              { href: "/secondary/class1", text: "Tronc commun" },
              { href: "/secondary/class2", text: "1ère Bac" },
              { href: "/secondary/class3", text: "2ème Bac" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="bg-orange-100 rounded-lg p-4 text-orange-800 font-semibold text-center transform transition hover:scale-105 hover:bg-orange-200 shadow-sm">
                  {item.text}
                </div>
              </Link>
            ))}
          </section>
        </div>

        {/* Add Course Button */}
        <div className="mt-16 text-center">
          <Link href="/addCourse">
            <div className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg transform transition hover:scale-105 shadow-lg">
              Ajouter des cours
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
