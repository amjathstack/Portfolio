import Header from "../Header";

export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Tailwind", "JavaScript", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Next.js", "MongoDB", "PostgreSQL", "REST APIs"] },
    { category: "Authentication", items: ["Firebase", "JWT Token"] },
    { category: "Tools", items: ["Figma", "VSCode", "Postman", "Git", "Github"] },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-30 px-6">
      <Header title={'Skills'}/>

      <div className="mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-top-left from-red-600 border shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-4">{skill.category}</h2>

            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-700 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
