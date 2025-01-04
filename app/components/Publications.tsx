const Publications = () => {
    const publications = [
      {
        title:
          "Synthesizing 3D Faces and Bodies from Text: A Stable Diffusion-based Fusion of DECA and PIFuHD",
        description:
          "Published in IEEE 9th International Conference for Convergence in Technology (I2CT), 2024.",
        link: "https://ieeexplore.ieee.org/document/10543846",
      },
      {
        title:
          "Optimal IPL Playing 11 Team Selection",
        description:
          "Presented at IEEE 8th International Conference for Convergence in Technology (I2CT), 2023.",
        link: "https://ieeexplore.ieee.org/document/10126227",
      },
    ];
  
    return (
      <section id="publications" className="py-20 bg-gray-900 text-white">
        <h2 className="text-5xl font-bold text-center mb-10">Publications</h2>
        <div className="container mx-auto space-y-6">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex justify-between items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div>
                <h3 className="text-2xl font-bold mb-2">{publication.title}</h3>
                <p className="text-gray-400 mb-4">{publication.description}</p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
              <i className="fas fa-book text-6xl text-blue-600"></i> {/* Updated Icon Size */}
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Publications;