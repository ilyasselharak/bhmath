import React from "react";

export default function TopHeader() {
  return (
    <div className="flex gap-x-4 pl-2 rounded-lg bg-orange-400 mt-3 text-white py-2">
      <div className="cursor-pointer hover:underline">à propos du site Web</div>
      <div className="cursor-pointer hover:underline">plan du site</div>
      <div className="cursor-pointer hover:underline">contactez nous</div>
    </div>
  );
}
