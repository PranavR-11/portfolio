"use client";

export default function AboutMe() {
  const infoCards = [
    {
      icon: "fas fa-user",
      label: "Name",
      value: "Pranav Rao Rebala",
    },
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: (
        <div className="space-y-1">
          <a
            href="mailto:prebala1@babson.edu"
            className="text-cyber-primary hover:text-cyber-secondary transition-colors block"
          >
            prebala1@babson.edu
          </a>
          <a
            href="mailto:pranav.rebala11@gmail.com"
            className="text-cyber-primary hover:text-cyber-secondary transition-colors block"
          >
            pranav.rebala11@gmail.com
          </a>
        </div>
      ),
    },
    {
      icon: "fas fa-phone",
      label: "Phone",
      value: (
        <a
          href="tel:+16179871268"
          className="text-cyber-primary hover:text-cyber-secondary transition-colors"
        >
          +1 (617) 987-1268
        </a>
      ),
    },
    {
      icon: "fas fa-flag",
      label: "Nationality",
      value: "American",
    },
    {
      icon: "fas fa-language",
      label: "Languages",
      value: "English, Hindi, Telugu, Kannada",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// INTRODUCTION`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4">
            <span className="text-white">About</span>{" "}
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main bio */}
          <div className="glass-card p-8 mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-cyber-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                With a strong foundation in computer science from{" "}
                <span className="font-bold text-cyber-primary">PES University</span>, I&apos;ve
                honed my expertise in Python, full-stack development, and data-driven
                decision-making. Currently pursuing a Master&apos;s in Business Analytics
                at{" "}
                <span className="font-bold text-cyber-primary">Babson College</span>, I
                bring a unique blend of{" "}
                <span className="font-bold text-cyber-secondary">technical expertise</span>{" "}
                and <span className="font-bold text-cyber-accent">business acumen</span>.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My hands-on experience includes developing scalable applications, designing innovative analytics
                solutions, and collaborating on projects that leverage data to drive
                impactful outcomes. Passionate about creating meaningful change, I
                aim to contribute to projects and teams by harnessing the power of
                technology and analytics to solve real-world problems and unlock new
                opportunities.
              </p>
            </div>
          </div>

          {/* Info cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:neon-border transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyber-primary/10 rounded-lg group-hover:bg-cyber-primary/20 transition-colors">
                    <i className={`${card.icon} text-2xl text-cyber-primary`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm text-gray-500 mb-2">
                      {card.label}
                    </h3>
                    <div className="text-gray-300 text-sm">
                      {card.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education highlight */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-6 hover:neon-border transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-graduation-cap text-3xl text-cyber-primary group-hover:scale-110 transition-transform"></i>
                <div>
                  <h3 className="font-bold text-white">Babson College</h3>
                  <p className="text-sm text-gray-400">MS in Business Analytics</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-mono">Current</p>
            </div>

            <div className="glass-card p-6 hover:neon-border transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-3">
                <i className="fas fa-university text-3xl text-cyber-secondary group-hover:scale-110 transition-transform"></i>
                <div>
                  <h3 className="font-bold text-white">PES University</h3>
                  <p className="text-sm text-gray-400">BS in Computer Science</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 font-mono">Graduated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}