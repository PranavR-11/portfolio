const Certifications = () => {
    const certifications = [
      {
        title: "Linux Kernel Development by The Linux Foundation",
        date: "2022",
        description: "Comprehensive knowledge in Linux Kernel Development.",
        link: "https://www.credly.com/badges/7d49e0cb-c0dc-4574-a448-402160e604b7/public_url",
      },
      {
        title: "AWS Educate Introduction to Cloud 101",
        date: "2023",
        description: "Foundational understanding of AWS Cloud services.",
        link: "https://www.credly.com/badges/3821164c-f6b7-461c-bf85-d51176279c27/public_url",
      },
      {
        title: "[PCEP-30-02] Certified Entry-Level Python Programmer",
        date: "2023",
        description: "Entry-level certification validating Python programming skills.",
        link: "https://www.credly.com/badges/4f29106d-052b-4269-ac8b-ee3a0d6b50b6?source=linked_in_profile",
      },
    ];
  
    return (
      <section id="certifications" className="py-20 bg-gray-900 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">Certifications</h2>
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-2">{cert.date}</p>
              <p className="text-gray-400 mb-4">{cert.description}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:underline"
              >
                View Certification →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Certifications;