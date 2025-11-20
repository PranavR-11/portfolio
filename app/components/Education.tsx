"use client";

const education = [
  {
    year: "2024 - 2025",
    institution: "Babson College",
    degree: "Master of Science in Business Analytics",
    location: "Wellesley, MA",
  },
  {
    year: "2020 - 2024",
    institution: "PES University",
    degree: "Bachelor of Science in Computer Science",
    location: "Bangalore, India",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// ACADEMIC BACKGROUND`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 text-center w-full">
            <span className="text-white">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:neon-border transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <i className="fas fa-graduation-cap text-4xl text-cyber-primary group-hover:scale-110 transition-transform"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">
                {edu.institution}
              </h3>
              <p className="text-gray-300 mb-3">{edu.degree}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 font-mono">{edu.year}</span>
                <span className="text-gray-500">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
