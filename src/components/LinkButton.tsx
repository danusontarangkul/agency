"use client";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface LinkButtonProps {
  link: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  return (
    <div className="p-[3px] relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <a
        href={link}
        target="_blank"
        className="px-4 py-3 bg-white rounded-[6px] relative group transition duration-200 hover:bg-transparent h-full flex items-center justify-center cursor-pointer"
      >
        <span className="text-xl">
          {" "}
          <FontAwesomeIcon icon={faLink} className="text-2xl " />
        </span>
      </a>
    </div>
  );
};

export default LinkButton;
