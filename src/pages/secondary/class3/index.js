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
          دروس وتمارين تفاعلية للثانية باكالوريا
        </h4>
        <p className="mt-3">
          دروس وتمارين تفاعلية في مختلف المواد لتلاميذ الثانية باكالوريا.
        </p>
        <div className="mt-4 bg-green-400 py-2 text-white pr-2">
          المرجو اختيار قسم فرعي:
        </div>
        <div className="grid grid-cols-1 mt-4 md:grid-cols-3 gap-8">
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/SVT-PC"}>SVT/PC</Link>
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/MATHA"}>Math A</Link>
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/MATHB"}>Math B</Link>
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/Lettre"}>
              ثانية باك باك اداب و علوم انسانية
            </Link>
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/TCT"}> ثانية باك تكنولوجي</Link>
          </div>
          <div className="bg-green-300 text-center py-3 rounded-md hover:bg-green-600 cursor-pointer">
            <Link href={"/secondary/class3/ECO"}>ثانية باك اقتصاد</Link>
          </div>
        </div>
      </main>
    </>
  );
}
