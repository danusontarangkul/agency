"use client";
import { logButtonClickEvent } from "../utils/googleAnalytics";

const ResumeButton: React.FC = () => {
  const handleClick = () => {
    logButtonClickEvent("Resume Button Click");

    window.open(
      "/Resume-David-Anusontarangkul.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="p-[3px] relative h-14 w-full max-w-[250px]">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-black rounded-[6px] relative transition duration-200 hover:bg-opacity-80 h-full w-full flex items-center justify-center"
      >
        <span className="text-xl text-gray-50">Resume</span>
      </button>
    </div>
  );
};

export default ResumeButton;
