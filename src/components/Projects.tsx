export default function Projects() {
  const projects = [
    {
      title: "Event Management SaaS",
      description:
        "A full-stack SaaS platform for managing events, ticket sales, guest lists, and SMS campaigns. Built with scalability and real-world business workflows in mind.",
      tech: ["Next.js", "TypeScript", "Stripe", "Convex", "Tailwind"],
      image: "https://via.placeholder.com/800x500",
      link: "#",
    },
    {
      title: "Move Booking Platform",
      description:
        "A logistics-focused application that handles move bookings, pricing rules, customer management, and internal dashboards for operations teams.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "https://via.placeholder.com/800x500",
      link: "#",
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
            {/* Image */}
            <div className="w-full h-56 md:h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
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
              <a
                href={project.link}
                className="mt-auto inline-block text-center rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-2 px-4"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
