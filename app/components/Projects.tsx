const projects = [
  {
    title: "Capstone Project | CharGen",
    description: `
      CharGen, short for Character Generation, involved creating a 3D character from textual descriptions. 
      - Contributed to the creation of dual stable diffusion pipelines that generate 2D images corresponding to textual attributes for faces and bodies.
      - Worked on the DECA model, which processed facial images for detailed mesh and texture, ensuring realistic and diverse character synthesis.
      - Deployed the 3D character generation app using the FReMP framework.
      - Published a paper titled “Synthesizing 3D Faces and Bodies from Text: A Stable Diffusion-based Fusion of DECA and PIFuHD”.
    `,
    tech: ["Python", "FReMP"],
    github: "https://github.com/YourRepo/CharGen",
  },
  {
    title: "IPL.com",
    description: `
      A webpage for the Indian Premier League (IPL) Cricket tournament. 
      - Developed a multi-page website that included statistics, FAQs, ticket booking, and personalized team selection.
      - Focused on creating an engaging user experience for cricket enthusiasts.
    `,
    tech: ["React", "JavaScript"],
    github: "https://github.com/PranavR-11/IPL.com",
  },
  {
    title: "Optimal IPL 11 Team Selection",
    description: `
      Built a predictive model for selecting the best playing 11 from an auction pool for an IPL team. 
      - Utilized supervised learning techniques to analyze player statistics, match performance, and other features.
      - Designed a model that leverages data-driven decisions for optimal team selection.
    `,
    tech: ["Python"],
    github: "https://github.com/PranavR-11/Optimal-IPL-team_Data_Analysis/tree/master",
  },
  {
    title: "Hadoop-MapReduce",
    description: `
      Implemented the core components of Hadoop's MapReduce Framework. 
      - Created a multi-node configuration for parallel execution of map and reduce jobs.
      - Used Python and socket programming for handling multi-node communication efficiently.
    `,
    tech: ["Python", "Socket Programming"],
    github: "https://github.com/PranavR-11/Hadoop-MapReduce",
  },
  {
    title: "Noise Removal Using Different Filters",
    description: `
      Explored digital image processing using various noise filters in Matlab. 
      - Demonstrated the application of noise reduction techniques such as salt and pepper, average, median, and Gaussian filters.
      - Allowed users to observe filter behavior with adjustable noise levels, enhancing understanding of image processing.
    `,
    tech: ["Matlab"],
    github: "https://github.com/PranavR-11/Noise-Removal-using-different-filters/tree/main",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-800 text-blue-300">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-white text-center mb-8">
          My Projects
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 whitespace-pre-line mb-4">{project.description}</p>
              <div className="flex items-center gap-4">
                <p className="text-blue-400 font-semibold">{project.tech.join(", ")}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="text-blue-400 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}