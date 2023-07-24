import Image from "next/image";
import { Inter } from "next/font/google";
import TopHeader from "@/components/TopHeader";
import MainHeader from "@/components/MainHeader";
import NavHeader from "@/components/NavHeader";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
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
            <Link href={"/secondary/class2"}>أولى باكالوريا</Link>
          </div>
          <div className="bg-orange-300 hover:text-white hover:bg-green-700 py-3 cursor-pointer px-8 text-center text-black font-bold">
            <Link href={"/secondary/class3"}>الثانية باكالوريا</Link>
          </div>
        </div>
      </main>
    </>
  );
}
