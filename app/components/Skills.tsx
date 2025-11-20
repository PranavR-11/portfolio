"use client";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "fab fa-python", color: "text-cyber-primary" },
      { name: "JavaScript", icon: "fab fa-js", color: "text-cyber-green" },
      { name: "C/C++", icon: "fas fa-code", color: "text-cyber-secondary" },
      { name: "SQL", icon: "fas fa-database", color: "text-cyber-accent" },
      { name: "R", icon: "fas fa-chart-line", color: "text-cyber-primary" },
      { name: "PHP", icon: "fab fa-php", color: "text-cyber-pink" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", icon: "fab fa-react", color: "text-cyber-primary" },
      { name: "Node.js", icon: "fab fa-node-js", color: "text-cyber-green" },
      { name: "Tailwind", icon: "fas fa-wind", color: "text-cyber-primary" },
      { name: "Pandas", icon: "fas fa-table", color: "text-cyber-secondary" },
      { name: "Numpy", icon: "fas fa-cube", color: "text-cyber-accent" },
    ],
  },
  {
    category: "Cloud & Tools",
    skills: [
      { name: "AWS", icon: "fab fa-aws", color: "text-cyber-green" },
      { name: "Azure", icon: "fab fa-microsoft", color: "text-cyber-primary" },
      { name: "Docker", icon: "fab fa-docker", color: "text-cyber-primary" },
      { name: "MongoDB", icon: "fas fa-leaf", color: "text-cyber-green" },
      { name: "Tableau", icon: "fas fa-chart-bar", color: "text-cyber-secondary" },
      { name: "Jupyter", icon: "fas fa-book", color: "text-cyber-pink" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative py-20 px-6 cyber-grid-bg" id="skills">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// TECHNICAL PROFICIENCY`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 text-center w-full">
            <span className="text-white">Tech</span>{" "}
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable applications and deriving insights from data
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="animate-fade-in" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-cyber-primary mb-6 font-mono">
                <span className="text-cyber-secondary">[</span>
                {category.category}
                <span className="text-cyber-secondary">]</span>
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group relative glass-card p-6 text-center hover:neon-border transition-all duration-300 cursor-pointer transform hover:scale-105"
                    style={{ animationDelay: `${(catIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/0 to-cyber-secondary/0 group-hover:from-cyber-primary/10 group-hover:to-cyber-secondary/10 rounded-lg transition-all duration-300"></div>

                    <div className="relative z-10">
                      <i className={`${skill.icon} text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 mb-3 block`}></i>
                      <p className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </p>
                    </div>

                    {/* Scan line effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-primary/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tech mentions */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-mono text-sm">
            <span className="text-cyber-primary">&gt;</span> Also experienced with: HTML5, CSS3, Matlab, Deluge, and more...
          </p>
        </div>
      </div>
    </section>
  );
}