"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import PrimaryShowCaseButton from "./PrimaryShowCaseButton";
import LinkButton from "./LinkButton";

interface ShowCaseItemProps {
  title: string;
  screenshot: string;
  youTubeId: string;
  link: string;
  poster: string;
}

const ShowCaseItem: React.FC<ShowCaseItemProps> = ({
  title,
  youTubeId,
  link,
  screenshot,
  poster,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  console.log("youtube");
  console.log(youTubeId);
  return (
    <div className="mb-6 perspective-1000">
      <div
        className={`relative w-[350px] h-[650px] transition-transform duration-700 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-white px-4 rounded-lg shadow-md overflow-hidden mt-8">
            <Image
              src={screenshot}
              alt={`website screenshot of ${title}`}
              width={500}
              height={600}
              className="rounded-md mt-4 mb-2"
            />
            <div className="flex justify-center gap-2 mb-2">
              <PrimaryShowCaseButton onFlip={handleFlip} />
              <LinkButton link={link} />
            </div>
          </div>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="flex flex-col justify-center bg-white px-[17px] rounded-lg shadow-md overflow-hidden mt-8">
            <div className="relative w-full h-[600px]">
              <iframe
                className="w-full h-[580px] pt-4 "
                src={`https://www.youtube.com/embed/${youTubeId}?rel=0&showinfo=0&modestbranding=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="text-center justify-center">
              <button onClick={handleFlip} className="mb-4 underline">
                Flip back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseItem;
