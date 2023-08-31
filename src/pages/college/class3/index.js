import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import TopHeader from "@/components/TopHeader";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <NavHeader />
      <main className="border-2 border-green-800 p-3 mt-8">
        <h4 className="font-bold text-xl">
          دروس وتمارين وفروض، امتحانات للسنة الثالثة إعدادي
        </h4>
        <p className="mt-3">
          دروس وتمارين وفروض، امتحانات محلية وجهوية وفق المواد المقررة بالسنة
          الثالثة من التعليم الثانوي الإعدادي.
        </p>
        <div className="mt-4 bg-green-400 py-2 text-white pr-2">
          المرجو اختيار قسم فرعي:
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
          <Link href={'/course/thirdCollege'}>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Lessons
          </div></Link>
          <Link href={'/course/thirdCollege'}>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Exercices
          </div></Link>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Devoires
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Examens
          </div>
        </div>
      </main>
    </>
  );
}
