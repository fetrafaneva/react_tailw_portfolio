import Section from "../components/section";

export default function ExperienceSection() {
  const experience = [
    {
      image: "/assets/men.png",
      title: "Développeur stagiaire",
      company: "Ministère de l'Éducation Nationale (MEN)",
      location: "Madagascar",
      start: "Sep 2024",
      end: "Déc 2024",
      description: [
        "Conception d'une application pour la gestion de suivi pédagogique.",
        "Outils utilisés : Flutter, Sqflite.",
      ],
    },
    {
      image: "/assets/mef.png",
      title: "Développeur stagiaire",
      company: "Ministère de l'Économie et des Finances (MEF)",
      location: "Madagascar",
      start: "Aoû 2023",
      end: "Nov 2023",
      description: [
        "Conception et développement d'une application de gestion de projet selon la méthodologie Agile Scrum.",
        "Outils utilisés : PHP, Java, JavaScript, Gherkin.",
      ],
    },
  ];

  return (
    <Section title="Experience">
      <div id="experience" className="space-y-6">
        {experience.map((experience) => (
          <div
            key={experience.title}
            className="w-full border border-gray-200 p-6 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800">
                    {experience.title}
                  </h3>
                  <div>{experience.company}</div>
                </div>
              </div>
              <div>
                {experience.start} - {experience.end}
              </div>
            </div>
            <ul className="list-disc px-5 mt-6 text-gray-500 space-y-2">
              {experience.description.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
