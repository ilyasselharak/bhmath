import Image from "next/image";
import { Inter } from "next/font/google";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import Link from "next/link";
import { initMongoose } from "@/lib/mongoose";
import {  find_Second_Collegue_Course } from "./api/first_Collegue_course";

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
    <>
       <TopHeader />
      <MainHeader />
      <NavHeader />
      <main className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-violet-600 rounded-lg hover:text-black cursor-pointer py-3 px-8 text-center text-white font-bold">
            <Link href={"/college"}>College</Link>
          </div>
          <div className="bg-violet-400 rounded-lg hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class1"}>1ère année</Link>
          </div>
          <div className="bg-violet-400 rounded-lg hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class2"}> 2ème année</Link>
          </div>
          <div className="bg-violet-400 rounded-lg hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class3"}>3ème année</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Link
            href={"/secondary"}
            className="bg-orange-600 hover:text-black py-3 rounded-lg cursor-pointer px-8 text-center text-white font-bold"
          >
           Lycee
          </Link>

          <Link
            href={"/secondary/class1"}
            className="bg-orange-300 hover:text-white hover:bg-green-700 py-3 rounded-lg cursor-pointer px-8 text-center text-black font-bold"
          >
            Tronc commun
          </Link>
          <Link href={"secondary/class2"}><div className="bg-orange-300 rounded-lg hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold">
            1ère Bac
          </div></Link>
          <Link href={"/secondary/class3"}><div className="bg-orange-300 rounded-lg hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold">
            2ème Bac
          </div></Link>
        </div>
      </main>  
      <div className="mt-16 text-center"><Link className="text-4xl bg-green-400 p-4 text-white " href={"/addCourse"}>Ajouter  des courses</Link></div>
  {/* <div className="flex justify-center">
  <iframe src={course[0].courseLink} width="640" height="580" allow="autoplay" ></iframe><br/>
 <iframe src={course[0].exerciseLink} width="640" height="580" allow="autoplay" ></iframe><br/> 

  <iframe width={"700px"} height={"600px"} src="https://docs.google.com/document/d/e/2PACX-1vTMsDGcDTnnxBoqSyW30M7V9A9reaF6UeFFwzrD2KfGQqZWgFlWg-4xT0k2Q34Qig/pub?embedded=true"></iframe>
</div>  */}
{/* 
   */}
    </>
  );
}
