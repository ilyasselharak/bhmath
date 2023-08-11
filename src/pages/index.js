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
  console.log(course)
  return (
    <>

{/*     
       <TopHeader />
      <MainHeader />
      <NavHeader />
      <main className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        <div className="flex flex-col gap-3 w-full">
          <div className="bg-violet-600 hover:text-black cursor-pointer py-3 px-8 text-center text-white font-bold">
            <Link href={"/college"}> التعليم الثانوي الاعدادي</Link>
          </div>
          <div className="bg-violet-400 hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class1"}> السنة الاولى إعدادي</Link>
          </div>
          <div className="bg-violet-400 hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class2"}> السنة الثانية اعدادي</Link>
          </div>
          <div className="bg-violet-400 hover:text-white hover:bg-green-700 cursor-pointer py-3 px-8 text-center text-black font-bold">
            <Link href={"/college/class3"}>السنةالثالثة اعدادي</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <Link
            href={"/secondary"}
            className="bg-orange-600 hover:text-black py-3 cursor-pointer px-8 text-center text-white font-bold"
          >
            التعليم الثانوي التأهيلي
          </Link>

          <Link
            href={"/secondary/class1"}
            className="bg-orange-300 hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold"
          >
            الجذع مشترك
          </Link>
          <div className="bg-orange-300 hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold">
            <Link href={"secondary/class2"}>أولى باكالوريا</Link>
          </div>
          <div className="bg-orange-300 hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold">
            <Link href={"/secondary/class3"}>الثانية باكالوريا</Link>
          </div>
        </div>
      </main>  */}
   <div className="flex justify-center">
 {/* <iframe src={course[0].courseLink} width="640" height="580" allow="autoplay" ></iframe><br/>
 <iframe src={course[0].exerciseLink} width="640" height="580" allow="autoplay" ></iframe><br/> 

  <iframe width={"700px"} height={"600px"} src="https://docs.google.com/document/d/e/2PACX-1vTMsDGcDTnnxBoqSyW30M7V9A9reaF6UeFFwzrD2KfGQqZWgFlWg-4xT0k2Q34Qig/pub?embedded=true"></iframe>  */}
</div>
      <form  action="/api/addCourse" method="POST" className="flex md:flex-row gap-x-4 flex-col  mt-8">
      <div className="flex gap-x-4 items-center">اسم الدرس <input id="name"
              name="name" className="border border-gray-400" placeholder="اسم الدرس"/></div>
      <div className="flex gap-x-4 items-center">رابط الدرس <input id="courseLink"
              name="courseLink"  className="border border-gray-400" placeholder="رابط الدرس"/></div>
      <div className="flex gap-x-4 items-center">رابط التمرين<input id="exersiceLink"
              name="exersiceLink" className="border border-gray-400" placeholder="رابط التمرين"/></div>
      <input className="border border-gray-400 bg-green-600 p-3" type={"submit"} value={"اضافة"} />
      </form>  
    </>
  );
}
