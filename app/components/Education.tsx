const education = [
    {
      year: "2024 - 2025",
      title: "Babson College",
      platform: "Business Analytics",
    },
    {
      year: "2020 - 2024",
      title: "PES University",
      platform: "Computer Science",
    },
  ];
  
  export default function Education() {
    return (
      <section id="education" className="py-16 px-6 bg-gray-900 text-gray-300">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold text-white text-center mb-8">
            My Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-blue-400 text-xl font-semibold">
                  {edu.year}
                </h3>
                <h4 className="text-2xl font-bold text-white">{edu.title}</h4>
                <p className="text-gray-400 mt-2">{edu.platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }