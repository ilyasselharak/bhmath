import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiFillHome, AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
export default function NavHeader() {
  return (
    <div className="bg-green-500 flex justify-between items-center">
      <div className="flex  items-center text-white ">
        <div className="p-4 cursor-pointer border-r text-4xl border-white">
          <AiFillHome />
        </div>

        <div className="p-4 hover:bg-green-700  dropdown-trigger relative flex items-center cursor-pointer border-r border-white">
          <Link href={"/college"}>التعليم الثانوي الاعدادي</Link>
          <AiFillCaretDown />
          <ul className="list1 top-[100%]  bg-green-500 left-0  w-full absolute ">
            <Link href={"/college/class1"}>
              {" "}
              <li className="border-b hover:bg-green-700 border-t border-gray-200 py-3 pr-2">
                الاولى اعدادي
              </li>
            </Link>
            <Link href={"/college/class2"}>
              <li className="border-b hover:bg-green-700 border-gray-200 py-3 pr-2">
                الثانية اعدادي
              </li>
            </Link>
            <Link href={"/college/class3"}>
              {" "}
              <li className="border-b hover:bg-green-700 border-gray-200 py-3 pr-2">
                الثالثة اعدادي
              </li>
            </Link>
          </ul>
        </div>
        <div className="p-4 hover:bg-green-700   dropdown-trigger relative flex items-center cursor-pointer border-r border-white">
          <Link href={"/secondary"}>التعليم الثانوي التأهيلي</Link>
          <AiFillCaretDown />
          <ul className="list1 top-[100%]  bg-green-500 left-0  w-full absolute ">
            <li className="border-b hover:bg-green-700 border-t border-gray-200 py-3 pr-2">
              <Link href={"/secondary/class1"}>الجذع مشترك</Link>
            </li>
            <li className="border-b hover:bg-green-700 border-gray-200 py-3 pr-2">
              <Link href={"/secondary/class2"}>الأولى باكالوريا</Link>
            </li>
            <li className="border-b hover:bg-green-700 border-gray-200 py-3 pr-2">
              <Link href={"/secondary/class3"}>الثالثة باكالوريا</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-4xl text-white pl-4 cursor-pointer">
        <AiOutlineSearch />
      </div>
    </div>
  );
}
