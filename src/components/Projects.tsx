import Image from "next/image";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  youtubeVideoId?: string;
  link: string;
  github?: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Nexus Auto",
      description:
        "A mobile app for car owners to keep track of their car's maintenance and repairs.",
      tech: ["React Native", "TypeScript", "Convex", "Expo", "Tailwind"],
      image: "/Nexus-Auto-Cover.png",
      link: "https://apps.apple.com/us/app/nexus-auto/id6760922713",
      youtubeVideoId: "FgW4kt58pc4",
      github: "https://github.com/danusontarangkul/nexus-auto",
    },
    {
      title: "Hostly",
      description:
        "A full-stack SaaS platform for managing events, ticket sales, guest lists, and SMS campaigns.",
      tech: ["Next.js", "TypeScript", "Stripe", "Convex", "Tailwind"],
      youtubeVideoId: "LFVCzE1FEKQ",
      link: "https://www.hostlyapp.com/",
    },
  ];

  return (
    <section className="px-6 md:px-10 py-16 md:py-24 bg-custom-bg">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-12 md:mb-20">
        Full Stack Projects
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            {/* Media: YouTube embed or cover image */}
            <div
              className={
                project.youtubeVideoId
                  ? "relative w-full aspect-video bg-black"
                  : "relative w-full h-64"
              }
            >
              {project.youtubeVideoId ? (
                <iframe
                  title={`${project.title} demo video`}
                  src={`https://www.youtube.com/embed/${project.youtubeVideoId}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              ) : null}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-gray-100 text-2xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full bg-gray-800 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-2 px-4"
                >
                  View Project
                </a>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg border border-indigo-500/70 text-indigo-300 hover:bg-indigo-500/10 transition font-medium py-2 px-4"
                  >
                    View Code
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
