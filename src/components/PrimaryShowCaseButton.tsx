"use client";

interface PrimaryShowCaseButtonProps {
  onFlip: () => void;
}

const PrimaryShowCaseButton: React.FC<PrimaryShowCaseButtonProps> = ({
  onFlip,
}) => {
  return (
    <div className="p-[3px] relative ">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div
        onClick={onFlip}
        className="px-4 py-3 bg-black rounded-[6px] relative group transition duration-200 hover:bg-transparent h-full flex items-center justify-center cursor-pointer"
      >
        <span className="text-xl text-gray-50">Testimonial</span>
      </div>
    </div>
  );
};

export default PrimaryShowCaseButton;
