"use client";

const Certifications = () => {
  const certifications = [
    {
      title: "Linux Kernel Development",
      issuer: "The Linux Foundation",
      date: "2022",
      description: "Comprehensive knowledge in Linux Kernel Development",
      link: "https://www.credly.com/badges/7d49e0cb-c0dc-4574-a448-402160e604b7/public_url",
      icon: "fab fa-linux",
    },
    {
      title: "AWS Educate Introduction to Cloud 101",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Foundational understanding of AWS Cloud services",
      link: "https://www.credly.com/badges/3821164c-f6b7-461c-bf85-d51176279c27/public_url",
      icon: "fab fa-aws",
    },
    {
      title: "Certified Entry-Level Python Programmer",
      issuer: "Python Institute [PCEP-30-02]",
      date: "2023",
      description: "Entry-level certification validating Python programming skills",
      link: "https://www.credly.com/badges/4f29106d-052b-4269-ac8b-ee3a0d6b50b6?source=linked_in_profile",
      icon: "fab fa-python",
    },
  ];

  return (
    <section id="certifications" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// CREDENTIALS`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 w-full flex justify-center">
            <span className="text-white">Certifications</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:neon-border transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <i className={`${cert.icon} text-4xl text-cyber-primary group-hover:scale-110 transition-transform`}></i>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-cyber-primary text-sm font-semibold mb-2">
                {cert.issuer}
              </p>
              <p className="text-gray-400 text-sm mb-4">
                {cert.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">{cert.date}</span>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyber-primary hover:text-cyber-secondary transition-colors"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
