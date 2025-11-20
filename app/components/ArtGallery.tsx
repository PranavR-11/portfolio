"use client";
import Image from 'next/image';

const ArtGallery = () => {
  const artworks = [
    { src: "/portfolio/art/bp.jpeg", alt: "Black Panther Art" },
    { src: "/portfolio/art/dws.jpeg", alt: "Die With A Smile Art" },
    { src: "/portfolio/art/chandler.jpeg", alt: "Chandler Art" },
    { src: "/portfolio/art/dv.jpeg", alt: "Darth Vader Art" },
    { src: "/portfolio/art/strange.jpeg", alt: "Doctor Strange Art" },
    { src: "/portfolio/art/mk.jpeg", alt: "Moon Knight Art" },
    { src: "/portfolio/art/spidergewn.jpeg", alt: "Spider Gwen" },
    { src: "/portfolio/art/messi.jpeg", alt: "Messi Art" },
    { src: "/portfolio/art/3spiderman.jpeg", alt: "3 Spidermen" },
    { src: "/portfolio/art/alvarez.jpeg", alt: "Alvarez Art" },
    { src: "/portfolio/art/lucifer.jpeg", alt: "Lucifer Silhouette" },
    { src: "/portfolio/art/painting1.jpeg", alt: "Painting 1" },
    { src: "/portfolio/art/painting2.jpeg", alt: "Painting 2" },
  ];

  return (
    <section id="artgallery" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// CREATIVE WORK`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 w-full flex justify-center">
            <span className="text-white">Art</span>{" "}
            <span className="bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of digital artwork and illustrations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artworks.map((art, index) => (
            <div
              key={index}
              className="group glass-card p-2 hover:neon-border transition-all duration-300 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={art.src}
                  alt={art.alt}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-sm font-mono">{art.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
