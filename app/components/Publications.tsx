"use client";

const Publications = () => {
  const publications = [
    {
      title:
        "Synthesizing 3D Faces and Bodies from Text: A Stable Diffusion-based Fusion of DECA and PIFuHD",
      conference: "IEEE 9th International Conference for Convergence in Technology (I2CT)",
      year: "2024",
      link: "https://ieeexplore.ieee.org/document/10543846",
    },
    {
      title: "Optimal IPL Playing 11 Team Selection",
      conference: "IEEE 8th International Conference for Convergence in Technology (I2CT)",
      year: "2023",
      link: "https://ieeexplore.ieee.org/document/10126227",
    },
  ];

  return (
    <section id="publications" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// RESEARCH & PUBLICATIONS`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 text-center w-full">
            <span className="text-white">Publications</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 hover:neon-border transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-cyber-primary/10 rounded-lg">
                    <i className="fas fa-file-alt text-4xl text-cyber-primary"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {pub.conference}, {pub.year}
                  </p>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyber-primary hover:text-cyber-secondary transition-colors font-mono text-sm"
                  >
                    <span>READ_PAPER</span>
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
