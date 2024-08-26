import ShowCaseItem from "./ShowCaseItem";
import showCaseData from "@/app/data";

export default function Showcase() {
  return (
    <div className="px-10 py-10 md:py-20  bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        Showcase
      </h2>
      <div className="flex flex-col  md:flex-row md:flex-wrap md:justify-evenly items-center md:items-start space-2">
        {showCaseData.map((data) => (
          <ShowCaseItem
            key={data.title}
            title={data.title}
            screenshot={data.screenshot}
            videoSource={data.videoSource}
            link={data.link}
            poster={data.poster}
          />
        ))}
      </div>
    </div>
  );
}
