"use client";
import { useRouter } from "next/navigation";
import { logButtonClickEvent } from "../utils/googleAnalytics";

interface ButtonProps {
  label?: string;
}

const Button: React.FC<ButtonProps> = ({ label = "Dev Services" }) => {
  const router = useRouter();

  const handleClick = () => {
    logButtonClickEvent(`${label} Button Click`);
    router.push("/contact");
  };

  return (
    <div
      onClick={handleClick}
      className="p-[3px] relative h-14 w-full max-w-[250px] cursor-pointer hover:opacity-80 transition duration-200"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-6 py-3 rounded-[6px] relative h-full flex items-center justify-center">
        <span className="text-xl text-gray-50">{label}</span>
      </div>
    </div>
  );
};

export default Button;
