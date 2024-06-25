"use client";
// components/Button.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import from next/navigation
import { logButtonClickEvent } from "../utils/googleAnalytics";

const Button: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    // Log button click event to Google Analytics
    logButtonClickEvent("Get Started Button Click");

    // Navigate to the /contact page using Next.js navigation methods
    router.push("/contact");
  };

  return (
    <div className="p-[3px] relative h-14 w-full max-w-[250px]">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div
        onClick={handleClick}
        className="px-6 py-3 bg-black rounded-[6px] relative group transition duration-200 hover:bg-transparent h-full flex items-center justify-center cursor-pointer"
      >
        <span className="text-xl text-gray-50">Get Started</span>
      </div>
    </div>
  );
};

export default Button;
