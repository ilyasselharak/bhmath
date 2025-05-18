import { initMongoose } from '@/lib/mongoose';
import { useRouter } from 'next/router'
import React from 'react'
import { find_First_Collegue_Course, find_Second_Collegue_Course, find_Third_Collegue_Course, find_Third_Secondary_Courses } from '../api/first_Collegue_course';
import Link from 'next/link';
import { find_First_Secondary_TCT_Course, find_Second_Secondary_Course, find_Second_Secondary_Math_Course } from '../api/first_Secondary_course';
import TopHeader from '@/components/TopHeader';
import MainHeader from '@/components/MainHeader';
import NavHeader from '@/components/NavHeader';
import Image from 'next/image';

const levelTitles = {
  firstCollege: "1ère année collège",
  secondCollege: "2ème année collège",
  thirdCollege: "3ème année collège",
  TroncCommum: "Tronc commun",
  firstBacMath: "1ère Bac - Mathématiques",
  firstBac: "1ère Bac",
  "2BacMath": "2ème Bac - Mathématiques",
  "2BacPCSVT": "2ème Bac - Sciences Physiques"
};

export async function getServerSideProps({params}) {
  await initMongoose();
  let courses;
  switch (params.id[0]){
    case 'firstCollege':
      courses = await find_First_Collegue_Course()
      break;
    case 'secondCollege':
       courses = await find_Second_Collegue_Course()
       break;
    case 'thirdCollege':
      courses = await find_Third_Collegue_Course()
      break
    case "TroncCommum":
      courses = await find_First_Secondary_TCT_Course()
      break
    case "firstBacMath":
        courses = await find_Second_Secondary_Math_Course()
        break
    case "firstBac":
        courses = await find_Second_Secondary_Course()
        break
    case "2BacMath":
        courses = await find_Second_Secondary_Math_Course()
        break
    case "2BacPCSVT":
        courses = await find_Third_Secondary_Courses()
        break
  }
  const filtred = params.id[1] ? courses.filter(item=>item.name.trim()==params.id[1]):{}

  return {
    props: {
      course: JSON.parse(JSON.stringify(courses)),
      filtred: JSON.parse(JSON.stringify(filtred)),
      level: params.id[0]
    },
  };
}

export default function index({course, filtred, level}) {
  const router = useRouter()
  
  return (
    <div className="min-h-screen bg-gray-50">
      <TopHeader/>
      <MainHeader />
      <NavHeader />
      
      <main className="py-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {levelTitles[level] || "Cours"}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Ressources et contenus pédagogiques
            </p>
          </div>
        </div>

        {filtred.length ? (
          // Course Content View
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {filtred[0].name}
              </h2>
              <div className="space-y-8">
                {filtred[0].courseLink.split(",,").map((item, index) => (
                  <div key={index} className="aspect-video w-full">
                    <iframe 
                      src={item.trim()} 
                      className="w-full h-full rounded-lg shadow-md"
                      allow="autoplay"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Course Listing View
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Liste des cours disponibles
              </h2>
              <p className="text-gray-600">
                Sélectionnez un cours pour accéder à son contenu
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {course.map((item, index) => (
                <Link key={index} href={`${router.asPath}/${item.name}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-orange-100">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {item.name}
                      </h3>
                      <div className="inline-block bg-orange-500 text-white text-sm px-4 py-2 rounded-full">
                        Accéder au cours
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Ads Section */}
            <div className="mt-12 flex justify-center gap-x-4">
              <div className="hidden lg:block">
                <Image src={'/ads600.jpg'} width={160} height={600} alt={"addsenceAds"} className="rounded-lg"/>
              </div>
              <div className="hidden lg:block">
                <Image src={'/ads600.jpg'} width={160} height={600} alt={"addsenceAds"} className="rounded-lg"/>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
