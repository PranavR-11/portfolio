/**
 * Single source of truth for everything the site renders.
 *
 * Copy rule enforced here: no em-dashes or en-dashes anywhere in visible
 * strings. Use a period, a comma, parentheses, or a colon instead.
 */

/** Matches `basePath` in next.config.ts. Plain <a>/<video> URLs need it applied manually. */
export const BASE_PATH = "/portfolio";

/** Prefix a file in /public so it resolves under the GitHub Pages base path. */
export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

export const profile = {
  name: "Pranav Rebala",
  role: "AI / ML Engineer",
  location: "Jersey City, NJ",
  availability: "Software Engineer, AI at General Aeronautics",
  email: "navrebala@gmail.com",
  github: "https://github.com/PranavR-11",
  linkedin: "https://www.linkedin.com/in/pranavrebala/",
  resume: asset("/Pranav_Resume.pdf"),
};

/**
 * One label per CTA intent, used everywhere on the page.
 * Two different labels for the same action reads as sloppy.
 */
export const cta = {
  contact: "Get in touch",
  work: "See my work",
  resume: "Résumé",
};

/** Hero: headline stays at 2 lines desktop, subtext under 20 words. */
export const headline = {
  lead: "I put machine learning",
  emphasis: "into production.",
  sub: "Drone flight diagnostics, agentic tooling and recommendation systems that real users hit every day.",
};

/** Real numbers, pulled from the experience and project sections below. */
export const stats = [
  { value: "88.1%", label: "critical-event accuracy on flight fault classification" },
  { value: "58,479", label: "MAVLink telemetry events classified across 3,718 flights" },
  { value: "200+", label: "verified repair procedures routed by DART" },
  { value: "2", label: "peer-reviewed IEEE publications" },
];

export const about = {
  paragraphs: [
    "I studied computer science at PES University in Bangalore, specialising in machine intelligence and data science, then took a Master's in Business Analytics at Babson to get sharper about the business end of the work.",
    "Since then I have worked on recommendation and RAG systems for auto dealerships, and now on drone flight diagnostics and internal agentic AI at General Aeronautics. The through-line is the messy middle: the part where a model has to leave a notebook, survive real traffic, and actually change what somebody does on a Tuesday.",
    "Outside of that I draw, follow far too much football, and speak English, Hindi, Telugu and Kannada.",
  ],
};

export const education = [
  {
    period: "Aug 2024 to May 2025",
    school: "Babson College",
    degree: "MS, Business Analytics",
    location: "Wellesley, MA",
  },
  {
    period: "Aug 2020 to May 2024",
    school: "PES University",
    degree: "BS, Computer Science (Machine Intelligence and Data Science)",
    location: "Bangalore, India",
  },
];

export const experience = [
  {
    company: "General Aeronautics",
    role: "Software Engineer, AI",
    period: "Mar 2026 to Present",
    kind: "Full-time",
    summary:
      "Drone flight diagnostics and internal agentic AI systems.",
    points: [
      // NOTE: DART's resolution-time metric is deliberately omitted. The resume
      // (48h toward a 3h target) and the working notes (median 14.2h toward a
      // 10h target) disagree, and the two are not roundable to each other.
      // The claim that the LLM sits behind deterministic routing is also left
      // out, since the DART README describes a model call on every query.
      // Both go back in once the source of truth is settled.
      "Built DART, an internal diagnostic tool that routes support issues to the right one of 200+ verified repair procedures. Each source PDF is processed once into structured numbered steps with page and figure mapping, so whole documents never reach the model and steps are never invented.",
      "Hybrid semantic and keyword retrieval builds a candidate shortlist, an LLM classifier picks the single matching issue or flags a knowledge-base gap, and every answer ships with a citation. Escalations auto-route to four L3 teams.",
      "Trained a Transformer and XGBoost hybrid that classifies 58,479 MAVLink telemetry events across 3,718 flights into 40+ fault categories at 88.1% critical-event accuracy.",
      "Built a four-agent autonomous bug-fixing pipeline on LangGraph and Fargate: three human approval gates as durable interrupts, a CC0 to CC6 scoring rubric, 12 evaluator safety rules and mutation testing behind a 0.80 pass threshold.",
      "Ran false-negative analysis on the ArduPilot FAT model across 135 labeled flights, producing validated rule corrections and a field report for L2 and L3 engineers.",
    ],
    stack: ["Python", "FastAPI", "OpenAI API", "LangGraph", "AWS Fargate", "SQLite"],
  },
  {
    company: "Forfend Cybernatics",
    role: "ML Engineer",
    period: "Jun 2025 to Mar 2026",
    kind: "Remote",
    summary:
      "Recommendation and retrieval systems for a network of auto dealerships.",
    points: [
      "Deployed a collaborative-filtering recommendation engine to 15 external dealership locations serving 20,000+ monthly users, with A/B tested flows and ranking features.",
      "Built a RAG customer-service chatbot handling appointment booking, inventory lookups and FAQ resolution, with retrieval evaluation and monitored fallback handling.",
      "Shipped a LangGraph agentic workflow pairing Prophet and XGBoost demand forecasting with automated resource allocation, deployed to AWS on Docker with real-time monitoring.",
    ],
    stack: ["Python", "LangGraph", "Prophet", "XGBoost", "AWS", "Docker"],
  },
  {
    company: "Wipro Ltd",
    role: "Full Stack Development Intern",
    period: "Jul to Oct 2023",
    kind: "Internship",
    summary: "Financial reporting infrastructure for internal leadership.",
    points: [
      "Built a real-time financial reporting dashboard on Azure SQL with role-based access for 1,200+ users, cutting reporting lag from two days to two hours.",
    ],
    stack: ["Azure SQL", "React", "RBAC"],
  },
  {
    company: "Flutura Business Solutions",
    role: "Data Science Intern",
    period: "Jun to Aug 2022",
    kind: "Internship",
    summary: "Predictive maintenance on industrial IoT telemetry.",
    points: [
      "Built predictive-maintenance models on IoT sensor data from 500+ industrial devices, reaching 85% fault-detection accuracy.",
    ],
    stack: ["Python", "IoT", "Predictive Modelling"],
  },
];

export const featured = {
  title: "FootballBase",
  subtitle: "Real-time football analytics, answered in plain language",
  summary:
    "Natural-language question answering over 8,900+ football records, with semantic search, retrieval evaluation, and charts generated on demand.",
  why: "I wanted one workflow where an analyst asks a plain-language question and gets back a data-backed answer, a chart, and something they can drop straight into a deck. No notebook, no SQL, no waiting.",
  architecture: [
    {
      label: "Frontend",
      detail:
        "React frontend, built from scratch, with a streaming UI that renders charts as results arrive.",
    },
    {
      label: "Backend",
      detail:
        "FastAPI streams JSON and matplotlib charts. LangChain orchestrates tool calls with LLM-driven intent classification and slot filling.",
    },
    {
      label: "Retrieval",
      detail:
        "LangChain with FAISS semantic search over 8,900+ records, plus retrieval evaluation and MCP-coordinated chart generation.",
    },
    {
      label: "Data ops",
      detail:
        "Pandas for wrangling, a SQLite cache for repeat questions, containerised with Docker behind Caddy for TLS and WebSocket passthrough.",
    },
  ],
  capabilities: [
    "Natural-language Q&A over 8,900+ football records",
    "FAISS semantic search with retrieval evaluation",
    "Dynamic chart generation coordinated through MCP",
    "React frontend built from scratch",
  ],
  video: asset("/LinkedinClip.mp4"),
  poster: asset("/LinkedinClip-Cover.jpg"),
  demo: "https://footballbase.netlify.app",
  stack: ["React", "LangChain", "FAISS", "MCP", "Python"],
};

export const projects = [
  {
    title: "The Dead Collector's Estate",
    category: "AI / ML",
    year: "2026",
    description:
      "A multi-agent mystery game: five characters held in a stateful LangGraph system, each with their own RAG store, who you interrogate to solve the case.",
    points: [
      "Character-specific retrieval stores and tool-calling flows",
      "Interrogation scoring with persistent session memory",
      "Stateful five-agent orchestration in LangGraph",
    ],
    stack: ["Python", "LangGraph", "OpenAI", "RAG", "FastAPI"],
    href: "https://github.com/PranavR-11",
    linkLabel: "Repository",
  },
  {
    title: "RCB Back-to-Back Title Analysis",
    category: "Analytics",
    year: "2026",
    description:
      "Ball-by-ball Python pipeline over Cricsheet data behind a 7,300-word deep dive on how RCB went back to back, with five publication-grade visualisations.",
    points: [
      "Full ball-by-ball ingestion and transformation pipeline",
      "Five publication-grade visualisations",
      "Published as a long-form article",
    ],
    stack: ["Python", "Pandas", "Cricsheet", "Matplotlib"],
    // TODO: swap for the Medium article URL once provided.
    href: "https://github.com/PranavR-11",
    linkLabel: "Repository",
  },
  {
    title: "LightweightMMM Attribution Pipeline",
    category: "Data Science",
    year: "2025",
    description:
      "Marketing mix model over Meta's Robyn dataset plus Google Ads and Analytics exports, estimating channel elasticities, adstock lags and seasonality to produce marginal ROI curves.",
    points: [
      "Posterior predictive estimates with parameterised scenario grids",
      "Interactive Tableau layer for reallocation decisions",
      "Pilot reallocation projected 9% incremental revenue",
    ],
    stack: ["LightweightMMM", "JAX", "Python", "Tableau"],
    href: "https://github.com/PranavR-11/LightweightMMM",
    linkLabel: "Repository",
  },
  {
    title: "TransferEconomics",
    category: "Data Science",
    year: "2025",
    description:
      "Log-linear OLS valuation model on a hand-compiled panel of 8,490 player-seasons from Europe's top five leagues, isolating transfer timing and origin effects.",
    points: [
      "Composite performance index controlling for wages, age and position",
      "Measured a significant mid-season valuation penalty and homegrown discount",
      "Ranked undervaluation lists surfaced in a scouting dashboard",
    ],
    stack: ["Python", "Statsmodels", "Pandas", "Tableau"],
    href: "https://github.com/PranavR-11/football_economic_analysis",
    linkLabel: "Repository",
  },
  {
    title: "CharGen, 3D Character Generation",
    category: "AI / ML",
    year: "2024",
    description:
      "Text-to-3D character synthesis using dual stable diffusion pipelines with DECA for facial reconstruction, published at IEEE I2CT.",
    points: [
      "Separate diffusion pipelines for face and body generation",
      "DECA integration for realistic mesh and texture",
      "Methodology published as a peer-reviewed paper",
    ],
    stack: ["Python", "Stable Diffusion", "DECA", "PIFuHD"],
    href: "https://ieeexplore.ieee.org/document/10543846",
    linkLabel: "Read the paper",
  },
  {
    title: "Optimal IPL Team Selection",
    category: "AI / ML",
    year: "2023",
    description:
      "Supervised model for picking an optimal playing eleven from player statistics, match performance and historical data, also published at IEEE I2CT.",
    points: [
      "Player performance analysis across seasons",
      "Data-driven team composition under constraints",
      "Peer-reviewed publication",
    ],
    stack: ["Python", "scikit-learn", "Pandas"],
    href: "https://github.com/PranavR-11/Optimal-IPL-team_Data_Analysis/tree/master",
    linkLabel: "Repository",
  },
  {
    title: "Hadoop MapReduce from Scratch",
    category: "Systems",
    year: "2023",
    description:
      "A from-scratch reimplementation of the MapReduce framework with multi-node configuration and parallel job execution over raw sockets.",
    points: [
      "Custom job scheduling across worker nodes",
      "Socket-based coordination and fault handling",
    ],
    stack: ["Python", "Distributed Systems", "Sockets"],
    href: "https://github.com/PranavR-11/Hadoop-MapReduce",
    linkLabel: "Repository",
  },
  {
    title: "Blue Bikes Analytics",
    category: "Analytics",
    year: "2024",
    description:
      "Interactive dashboard on Boston bike-share data covering seasonal demand, station popularity and trip duration patterns for operational planning.",
    points: [
      "Geospatial hotspot mapping across stations",
      "Seasonal and duration trend analysis",
    ],
    stack: ["Tableau", "SQL", "Analytics"],
    href: "https://github.com/PranavR-11/Blue-Bikes-Analysis",
    linkLabel: "Repository",
  },
  {
    title: "IPL.com",
    category: "Web",
    year: "2022",
    description:
      "Multi-page IPL web app with statistics, ticket booking and personalised team selection.",
    points: ["Interactive statistics dashboard", "Ticket booking flow"],
    stack: ["React", "JavaScript", "UI/UX"],
    href: "https://github.com/PranavR-11/IPL.com",
    linkLabel: "Repository",
  },
  {
    title: "Image Noise Removal Filters",
    category: "Computer Vision",
    year: "2022",
    description:
      "Image processing tool implementing median, Gaussian and other denoising filters with adjustable parameters for side-by-side comparison.",
    points: ["Multiple filter implementations", "Real-time parameter tuning"],
    stack: ["MATLAB", "Image Processing"],
    href: "https://github.com/PranavR-11/Noise-Removal-using-different-filters/tree/main",
    linkLabel: "Repository",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "SQL", "JavaScript / TypeScript", "R", "C / C++", "PHP"],
  },
  {
    group: "ML & Data",
    items: [
      "PyTorch",
      "scikit-learn",
      "LangChain / LangGraph",
      "FAISS",
      "Pandas / NumPy",
      "Prophet / XGBoost",
    ],
  },
  {
    group: "Platform",
    items: ["AWS", "Azure", "Docker", "FastAPI", "Node.js", "MongoDB"],
  },
  {
    group: "Product & Viz",
    items: ["React / Next.js", "Tailwind", "Tableau", "Chart.js", "Jupyter"],
  },
];

export const publications = [
  {
    title:
      "Synthesizing 3D Faces and Bodies from Text: A Stable Diffusion-based Fusion of DECA and PIFuHD",
    venue: "IEEE 9th International Conference for Convergence in Technology",
    year: "2024",
    href: "https://ieeexplore.ieee.org/document/10543846",
  },
  {
    title: "Optimal IPL Playing 11 Team Selection",
    venue: "IEEE 8th International Conference for Convergence in Technology",
    year: "2023",
    href: "https://ieeexplore.ieee.org/document/10126227",
  },
];

export const certifications = [
  {
    title: "AWS Certified Generative AI Developer (AIP-C01)",
    issuer: "Amazon Web Services",
    year: "In progress",
    href: "https://aws.amazon.com/certification/",
  },
  {
    title: "Linux Kernel Development",
    issuer: "The Linux Foundation",
    year: "2022",
    href: "https://www.credly.com/badges/7d49e0cb-c0dc-4574-a448-402160e604b7/public_url",
  },
  {
    title: "Certified Entry-Level Python Programmer (PCEP-30-02)",
    issuer: "Python Institute",
    year: "2023",
    href: "https://www.credly.com/badges/4f29106d-052b-4269-ac8b-ee3a0d6b50b6?source=linked_in_profile",
  },
  {
    title: "AWS Educate, Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    year: "2023",
    href: "https://www.credly.com/badges/3821164c-f6b7-461c-bf85-d51176279c27/public_url",
  },
];

/**
 * `thumb` is a pre-generated 640px webp (about a quarter the weight of the
 * original). Grid and marquee use it; the lightbox loads the full image.
 * Regenerate with scripts/thumbnails.mjs after adding artwork.
 */
const art = (file: string, title: string) => ({
  src: asset(`/art/${file}.jpeg`),
  thumb: asset(`/art/thumbs/${file}.webp`),
  title,
});

export const artwork = [
  art("bp", "Black Panther"),
  art("dws", "Die With A Smile"),
  art("chandler", "Chandler"),
  art("dv", "Darth Vader"),
  art("strange", "Doctor Strange"),
  art("mk", "Moon Knight"),
  art("spidergewn", "Spider-Gwen"),
  art("messi", "Messi"),
  art("3spiderman", "Three Spider-Men"),
  art("alvarez", "Álvarez"),
  art("lucifer", "Lucifer"),
  art("painting1", "Study I"),
  art("painting2", "Study II"),
];

export const navLinks = [
  { label: "FootballBase", id: "featured" },
  { label: "Work", id: "work" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Gallery", id: "gallery" },
];
