"use client";

const latestProject = {
  title: "Football Analytics AI",
  nameplate: "FootballBase",
  summary:
    "A real-time, multilingual RAG + LLM analytics assistant that converts raw sports datasets into conversational insights, charts, and exportable assets.",
  why: "I wanted a single workflow that fuses data engineering, machine learning, and visual analytics so an analyst can ask a plain-language question and receive a data-backed answer, a chart, and an exportable slide in seconds.",
  how: [
    "Frontend: Next.js + React with a streaming UI that renders Chart.js visuals while receiving WebSocket updates from the backend.",
    "Backend: FastAPI streams JSON and matplotlib charts; LangChain orchestrates tool calls, and OpenAI models perform intent classification plus slot filling.",
    "Retrieval & Intelligence: FAISS with Sentence Transformer embeddings plus fuzzy matching for entity resolution; MCP coordinates tool invocations and data retrieval.",
    "Data Ops: Pandas wrangles source data while a lightweight SQLite cache accelerates repeat questions. Everything is containerized with Docker and secured with Caddy for TLS/WebSocket passthrough.",
  ],
  delivers:
    "Delivers concise, cited answers with inline sources, on-demand charts, PNG export, and automatic language detection across the top ten languages.",
  value: [
    "Research & finance teams get instant cited charts for investor decks.",
    "Support teams generate knowledge-base assisted replies with confidence scores.",
    "Retail/CPG teams receive promo lift estimates and SKU recommendations.",
    "IoT/manufacturing teams gain anomaly explanations with prioritized inspection checklists.",
    "Regulated industries turn policy documents into actionable product tasks and compliance steps.",
  ],
  video: "/LinkedinClip.mp4",
  demoUrl: "https://footballbase.netlify.app",
  videoCaption: "Short walkthrough demo",
  connectionNote:
    "If you work where ML, data engineering, and product intersect—or have thoughts about vertical use cases—I’d love your feedback and to connect.",
};

const projects = [
  {
    title: "CharGen | 3D Character Generation",
    description:
      "AI-powered 3D character synthesis from text descriptions using dual stable diffusion pipelines, DECA model for facial processing, and FReMP framework deployment. Published research paper on text-to-3D synthesis techniques.",
    highlights: [
      "Dual stable diffusion pipelines for face and body generation",
      "DECA model integration for realistic mesh and texture",
      "Published academic paper on synthesis methodology",
    ],
    tech: ["Python", "AI/ML", "FReMP", "DECA"],
    github: "https://github.com/YourRepo/CharGen",
    category: "AI/ML",
  },
  {
    title: "IPL.com | Cricket Platform",
    description:
      "Multi-page web application for Indian Premier League with comprehensive statistics, FAQ system, ticket booking functionality, and personalized team selection features.",
    highlights: [
      "Interactive statistics dashboard",
      "Ticket booking system integration",
      "Personalized team selection algorithm",
    ],
    tech: ["React", "JavaScript", "UI/UX"],
    github: "https://github.com/PranavR-11/IPL.com",
    category: "Web Dev",
  },
  {
    title: "Optimal IPL Team Selection",
    description:
      "Predictive ML model for optimal playing 11 selection using supervised learning techniques, analyzing player statistics, match performance, and historical data for data-driven team composition.",
    highlights: [
      "Supervised learning model implementation",
      "Player performance analysis engine",
      "Data-driven team optimization",
    ],
    tech: ["Python", "ML", "Data Analysis"],
    github: "https://github.com/PranavR-11/Optimal-IPL-team_Data_Analysis/tree/master",
    category: "Data Science",
  },
  {
    title: "Hadoop MapReduce Implementation",
    description:
      "Custom implementation of Hadoop's MapReduce framework with multi-node configuration for parallel job execution using Python and socket programming.",
    highlights: [
      "Multi-node parallel processing",
      "Custom MapReduce implementation",
      "Efficient socket-based communication",
    ],
    tech: ["Python", "Distributed Systems", "Socket Programming"],
    github: "https://github.com/PranavR-11/Hadoop-MapReduce",
    category: "Systems",
  },
  {
    title: "Image Noise Removal Filters",
    description:
      "Digital image processing application implementing various noise reduction filters with adjustable parameters for exploring filter behavior and performance.",
    highlights: [
      "Multiple filter implementations (median, Gaussian, etc.)",
      "Interactive noise level adjustment",
      "Real-time filter comparison",
    ],
    tech: ["Matlab", "Image Processing"],
    github: "https://github.com/PranavR-11/Noise-Removal-using-different-filters/tree/main",
    category: "Computer Vision",
  },
  {
    title: "Blue Bikes Analytics Dashboard",
    description:
      "Interactive Tableau dashboard analyzing bike-sharing patterns, seasonal trends, and station popularity with geospatial visualizations for operational optimization.",
    highlights: [
      "Seasonal trend analysis",
      "Geospatial hotspot mapping",
      "Trip duration pattern insights",
    ],
    tech: ["Tableau", "Data Visualization", "Analytics"],
    github: "https://github.com/PranavR-11/Blue-Bikes-Analysis",
    category: "Analytics",
  },
];

export default function Projects() {
  // Updated: Headers now use flex justify-center for proper centering
  return (
    <section id="projects" className="relative py-20 px-6 cyber-grid-bg">
      <div className="container mx-auto">
        <div className="text-center mb-16 flex flex-col items-center w-full">
          <span className="text-cyber-primary font-mono text-sm tracking-wider">
            {`// PORTFOLIO`}
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mt-4 mb-4 w-full flex justify-center">
            <span className="text-white">Featured</span>
            <span className="text-white ml-2">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-center">
            Innovative solutions combining data science, machine learning, and full-stack development
          </p>
        </div>

        <div className="mb-12">
          <div className="uppercase tracking-[0.3em] text-xs text-gray-400 text-center mb-4 font-mono">
            {`// LATEST PROJECT`}
          </div>
          <div className="bg-stone-100 text-stone-900 border-4 border-stone-900 rounded-xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-8 md:p-10 font-serif relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-6 bg-stone-900/5 pointer-events-none"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-stone-500">Late Edition</p>
                  <h3 className="text-3xl md:text-4xl font-black mt-2 leading-tight">
                    {latestProject.title}
                    <span className="block text-sm font-semibold tracking-[0.3em] text-stone-600 mt-2">
                      {latestProject.nameplate}
                    </span>
                  </h3>
                  <p className="text-lg mt-4 leading-relaxed">{latestProject.summary}</p>
                </div>

                <div className="space-y-4 text-base leading-relaxed">
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-700">Why I built it</h4>
                    <p>{latestProject.why}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-700">How it works</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {latestProject.how.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-700">What it delivers</h4>
                    <p>{latestProject.delivers}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase tracking-[0.2em] text-stone-700">Real-world value</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {latestProject.value.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={latestProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-stone-900 rounded-md font-mono text-sm tracking-[0.2em] hover:bg-stone-900 hover:text-stone-100 transition-colors"
                  >
                    VISIT SITE
                    <span className="text-cyber-secondary">↗</span>
                  </a>
                  <a
                    href={latestProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-dashed border-stone-500 rounded-md font-mono text-sm tracking-[0.2em] hover:bg-stone-200 transition-colors"
                  >
                    WATCH DEMO
                    <span className="text-cyber-primary">▶</span>
                  </a>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
                  {latestProject.connectionNote}
                </p>
              </div>
              <div className="space-y-4">
                <div className="aspect-video bg-black rounded-lg overflow-hidden border-4 border-stone-900 shadow-inner">
                  <video
                    src={latestProject.video}
                    controls
                    className="w-full h-full object-cover"
                    poster="/art/bp.jpeg"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-xs uppercase tracking-[0.3em] text-stone-500">
                  {latestProject.videoCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card p-6 hover:neon-border transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono px-3 py-1 bg-cyber-primary/10 text-cyber-primary rounded-full border border-cyber-primary/30">
                  {project.category}
                </span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${project.title}`}
                  className="text-cyber-primary hover:text-cyber-secondary transition-colors duration-300 transform hover:scale-110"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>

              {/* Project title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-xs text-gray-500 flex items-start">
                    <span className="text-cyber-secondary mr-2 mt-0.5">&gt;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-cyber-primary/20">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono px-2 py-1 bg-cyber-accent/10 text-cyber-accent rounded border border-cyber-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/0 to-cyber-secondary/0 group-hover:from-cyber-primary/5 group-hover:to-cyber-secondary/5 rounded-lg transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View more section */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/PranavR-11"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent neon-border rounded-lg text-cyber-primary font-mono font-semibold hover:bg-cyber-primary/10 transition-all duration-300"
          >
            <i className="fab fa-github"></i>
            <span>VIEW_ALL_PROJECTS</span>
            <span className="text-cyber-secondary">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
