import { initMongoose } from '@/lib/mongoose';
import Link from 'next/link';
import Image from 'next/image';
import First_Collegue_Course from '@/models/FirstCollegueCourse';
import Second_Collegue_Course from '@/models/SecondCollegueCourse';
import Third_Collegue_Course from '@/models/ThirdCollegueCourse';
import Tct_Course from '@/models/TctCourse';
import Secondary_Science_Lycee_Courses from '@/models/SecondaryScienceLyceeCourses';
import Secondary_2Bac_Lycee_Tct_Courses from '@/models/Secondary2BacLyceeTctCourses';
import Secondary_2Bac_Lycee_Pc_Courses from '@/models/Secondary2BacLyceePcCourses';
import Secondary_Math_Lycee_Courses from '@/models/SecondaryMathLyceeCourses';
import Secondary_2Bac_Lycee_Eco_Courses from '@/models/Secondary2BacLyceeEcoCourses';
import Secondary_2Bac_Lycee_Math_Courses from '@/models/Secondary2BacLyceeMathCourses';


const levelTitles = {
  firstCollege: "1ère année collège",
  secondCollege: "2ème année collège",
  thirdCollege: "3ème année collège",
  TroncCommum: "Tronc commun",
  firstBacMath: "1ère Bac - Mathématiques",
  firstBac: "1ère Bac",
  "2BacMath": "2ème Bac - Mathématiques",
  "2BacPCSVT": "2ème Bac - Sciences Physiques",
  "2BacEco": "2ème Bac - Sciences Économiques"
};

async function getCourses(level) {
  await initMongoose();
  
  switch (level) {
    case 'firstCollege':
      return await First_Collegue_Course.find({}).sort({ createdAt: -1 });
    case 'secondCollege':
      return await Second_Collegue_Course.find({}).sort({ createdAt: -1 });
    case 'thirdCollege':
      return await Third_Collegue_Course.find({}).sort({ createdAt: -1 });
    case "TroncCommum":
      return await Tct_Course.find({}).sort({ createdAt: -1 });
    case "firstBacMath":
      return await Secondary_Math_Lycee_Courses.find({}).sort({ createdAt: -1 });
    case "firstBac":
      return await Secondary_Science_Lycee_Courses.find({}).sort({ createdAt: -1 });
    case "2BacMath":
      return await Secondary_2Bac_Lycee_Math_Courses.find({}).sort({ createdAt: -1 });
    case "2BacPCSVT":
      return await Secondary_2Bac_Lycee_Pc_Courses.find({}).sort({ createdAt: -1 });
    case "2BacTCT":
      return await Secondary_2Bac_Lycee_Tct_Courses.find({}).sort({ createdAt: -1 });
    case "2BacEco":
      return await Secondary_2Bac_Lycee_Eco_Courses.find({}).sort({ createdAt: -1 });
    
    default:
      return [];
  }
}

export async function generateMetadata({ params }) {
  const level = params.id?.[0];
  return {
    title: `${levelTitles[level] || 'Cours'} | BHMath`,
    description: `Ressources et contenus pédagogiques pour ${levelTitles[level] || 'les mathématiques'}`,
  };
}

export default async function CoursePage({ params }) {
  const level = params.id?.[0] || '';
  const courseName = params.id?.[1];
  
  const courses = await getCourses(level);
  console.log('hello',courses,level)
  const filteredCourse = courseName 
    ? courses.filter(item => item.name.trim() === courseName)
    : [];
  return (
    <>
      <main className="py-12">
        <div className="bg-gradient-to-r from-orange-200 to-orange-400 text-black rounded-2xl py-16 mb-12 mx-4">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Cours {level === 'firstCollege' ? '1ère Année Collège' : ''}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Tous les cours de mathématiques
            </p>
          </div>
        </div>

        {filteredCourse.length > 0 ? (
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                {filteredCourse[0].name}
              </h2>
              <div className="space-y-8">
                {filteredCourse[0].courseLink.split(",,").map((item, index) => (
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
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-orange-100 rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Liste des cours disponibles
              </h2>
              <p className="text-gray-600">
                Sélectionnez un cours pour accéder à son contenu
              </p>
            </div>

            {courses.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Aucun cours disponible pour le moment.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course._id} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {course.name}
                      </h2>
                      <div className="flex flex-col space-y-3">
                        <a
                          href={course.courseLink}
                          className="flex items-center justify-between bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                        >
                          <span className="text-gray-800 font-medium">
                            Cours
                          </span>
                          <div className="text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </a>
                        <a
                          href={course.exerciseLink}
                          className="flex items-center justify-between bg-gray-50 hover:bg-orange-50 rounded-lg p-4 transition-all duration-300"
                        >
                          <span className="text-gray-800 font-medium">
                            Exercices
                          </span>
                          <div className="text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 flex justify-center gap-x-4">
              <div className="hidden lg:block">
                <Image 
                  src="/ads600.jpg" 
                  width={160} 
                  height={600} 
                  alt="Publicité"
                  className="rounded-lg"
                />
              </div>
              <div className="hidden lg:block">
                <Image 
                  src="/ads600.jpg" 
                  width={160} 
                  height={600} 
                  alt="Publicité"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
} 