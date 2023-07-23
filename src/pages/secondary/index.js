import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import TopHeader from "@/components/TopHeader";
import React from "react";

export default function index() {
  return (
    <>
      <TopHeader />
      <MainHeader />
      <NavHeader />
      <main className="border-2 border-green-800 p-3 mt-8">
        <h4 className="font-bold text-xl">
          دروس وتمارين وفروض، امتحانات لتلاميذ الثانوي الإعدادي
        </h4>
        <p className="mt-3">
          دروس وتمارين وفروض، امتحانات لتلاميذ التعليم الثانوي الإعدادي.
        </p>
        <div className="mt-4 bg-green-400 py-2 text-white pr-2">
          المرجو اختيار قسم فرعي:
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            الجذع المشترك
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            اولى باكالوريا
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            ثانية باكالوريا
          </div>
        </div>
      </main>
    </>
  );
}
