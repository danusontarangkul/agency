const INTRO_VIDEO_ID = "MrMa-USGlNA";

export default function IntroVideo() {
  return (
    <section className="px-6 md:px-10 py-12 md:py-16 bg-custom-bg">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-50 text-center font-bold text-2xl md:text-3xl mb-6 md:mb-8">
          Introduction
        </h2>
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg">
          <iframe
            title="Introduction video"
            src={`https://www.youtube.com/embed/${INTRO_VIDEO_ID}?rel=0&modestbranding=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
