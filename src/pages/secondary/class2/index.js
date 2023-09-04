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
          دروس وتمارين تفاعلية الأولى باكالوريا.
        </h4>
        <p className="mt-3">
          دروس وتمارين تفاعلية في مختلف المواد لتلاميذ الأولى باكالوريا.
        </p>
        <div className="mt-4 bg-green-400 py-2 text-white pr-2">
          المرجو اختيار قسم فرعي:
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
        <Link href={"/secondary/class2/SVT-PC"}><div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
           SVT/PC
          </div></Link>
          <Link href={"/secondary/class2/MATH"}><div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Math
          </div></Link>
          <Link href={"/secondary/class2/Lettre"}><div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Lettre
          </div></Link>
          <Link href={"/secondary/class2/TCT"}><div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Technologie
          </div></Link>
          <Link href={"/secondary/class2/Eco"}><div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
          Economie
          </div></Link>
        </div>
      </main>
    </>
  );
}
