import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <Link href="/contact">
      <div className="p-[3px] relative h-14 w-full max-w-[250px]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-6 py-3 bg-black rounded-[6px] relative group transition duration-200  hover:bg-transparent h-full flex items-center justify-center">
          <span className="text-xl text-gray-50">Get Started</span>
        </div>
      </div>
    </Link>
  );
};

export default Button;
