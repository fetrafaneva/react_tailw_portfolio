import Section from "../components/section";

export default function DesignsSection() {
  const projects = [
    {
      title: "Full Stack AIResume app",
      description: "React/NodeJS/MongoDB",
      image: "/assets/project-1.png",
    },
    {
      title: "PapillonGuide app",
      description: "React/TailwindCSS/JavaScript",
      image: "/assets/project-2.png",
    },
  ];

  return (
    <Section title="Designs">
      <div
        id="designs"
        className="flex flex-wrap justify-center items-center gap-4 mr-auto"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="hover:-translate-y-0.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl"
          >
            <img
              className="rounded-t-xl h-42 object-cover"
              src={project.image}
              alt={project.title}
              width={300}
              height={170}
            />
            <div className="p-4">
              <h3 className="text-base font-medium">{project.title}</h3>
              <p className="text-gray-500 mt-1">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
