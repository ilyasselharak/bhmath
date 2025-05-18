import React from "react";

export default function TopHeader() {
  return (
    <div className="flex text-center justify-center items-center gap-x-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg shadow-lg mt-3">
      <div className="text-orange-50 hover:text-white transition-colors duration-200 font-medium cursor-pointer hover:scale-105 transform">
        A propos du site Web
      </div>
      <div className="text-orange-50 hover:text-white transition-colors duration-200 font-medium cursor-pointer hover:scale-105 transform">
        Plan du Site
      </div>
      <div className="text-orange-50 hover:text-white transition-colors duration-200 font-medium cursor-pointer hover:scale-105 transform">
        Contactez nous
      </div>
    </div>
  );
}
