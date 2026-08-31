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
  role: "Forward Deployed Engineer",
  location: "Jersey City, NJ",
  workAuth: "U.S. citizen, no sponsorship required",
  availability: "Open to forward deployed and applied AI roles",
  email: "navrebala@gmail.com",
  github: "https://github.com/PranavR-11",
  linkedin: "https://www.linkedin.com/in/pranavrebala/",
  resume: asset("/Pranav_Resume.pdf"),
  /**
   * Portrait for the hero. The component hides it if the file is missing, so
   * this path can be live before the image lands: drop a headshot at
   * public/headshot.jpg and it appears with no code change.
   */
  photo: asset("/headshot.jpg"),
  /** Square face crop, so the small mobile circle reads as a portrait. */
  photoAvatar: asset("/headshot-avatar.jpg"),
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
  sub: "I embed with the team that owns the problem, ship the system, and own the rollout and the outcome.",
};

/** Real numbers, pulled from the experience and project sections below. */
export const stats = [
  { value: "48h → 3h", label: "support resolution time, cut toward a 3 hour target" },
  { value: "88.1%", label: "critical-event accuracy on flight log diagnosis" },
  { value: "15", label: "dealership locations running the recommendation rollout" },
  { value: "2", label: "peer-reviewed IEEE publications" },
];

export const about = {
  paragraphs: [
    "I build AI systems that get from messy data to production, and I sit at the seam most teams struggle to staff: an engineer who can also read the business. That is the forward deployed job. I embed with whoever owns the problem, scope what they actually need, ship the production system, and own adoption and the outcome.",
    "Right now that means agentic AI and ML pipelines for drone flight diagnostics at General Aeronautics: fault classification, automated RCA generation, and autonomous code agents that write and validate their own pull requests. Before that, at Forfend Cybernatics, I put RAG chatbots, recommendation engines and LangGraph workflows into 15 US auto dealership locations and owned the rollout end to end.",
    "MS in Business Analytics from Babson, BS in Computer Science from PES University, and two IEEE publications. Outside of work I draw, follow far too much football, and speak English, Hindi, Telugu and Kannada.",
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
      "Agentic AI and ML pipelines for drone flight diagnostics.",
    points: [
      "Cut support resolution time from 48 hours toward a 3 hour target. I embedded with the drone support agents to scope how they actually work, then shipped an AI diagnostic tool, now in daily use, that classifies incoming issues and serves the right one of 400+ verified repair documents.",
      "Designed its retrieval and safety layer: semantic similarity, lexical scoring and domain-aware boosts fused into a single engine, with the LLM gated behind deterministic routing and schema-validated output that can never return a category outside the retrieved set, plus a knowledge-gap detector and an outcome feedback loop.",
      "Built a three-layer agentic diagnostic system (Planner, Generator, Evaluator) that ingests ML pipeline output, retrieves similar historical RCA documents through FAISS, and generates grounded failure narratives. The Evaluator applies hard gates and confidence scoring before anything reaches an engineer.",
      "Built an autonomous code agent with Bitbucket integration and RAG-based codebase retrieval that generates rule implementations with test coverage, opens pull requests with validated results, and routes complex changes to senior review through a structured escalation gate.",
      "Trained a Transformer and XGBoost hybrid for flight log diagnosis: 88.1% critical-event accuracy across 3,700+ flights and 58K+ telemetry events, with a deterministic rule layer for high-confidence cases and XGBoost resolving the ambiguous ones.",
      "Migrated the stack off Vertex AI onto the OpenAI API, and fixed rate limiting traced to a Promise.all pattern and an auto-firing endpoint using sequential queuing, a backend semaphore and 24 hour caching.",
    ],
    stack: ["Python", "FastAPI", "OpenAI API", "LangGraph", "FAISS", "AWS"],
    repo: {
      href: "https://github.com/PranavR-11/ga-cc_helper",
      label: "ga-cc_helper",
    },
  },
  {
    company: "Forfend Cybernatics",
    role: "Machine Learning Engineer",
    period: "Jun 2025 to Mar 2026",
    kind: "Remote",
    summary:
      "Owned the rollout of recommendation and retrieval systems into 15 US auto dealership locations.",
    points: [
      "Built a LightFM hybrid recommendation system inside a FastAPI microservice, personalising vehicle recommendations from historical sales and behavioural data across dealership kiosks and sales workflows, serving 20,000+ monthly users.",
      "Implemented a RAG conversational chatbot for appointment booking, inventory queries and customer assistance, combining intent classification, LangChain retrievers, monitored fallback handling and retrieval evaluation.",
      "Developed a LangGraph workflow pairing Prophet and XGBoost demand forecasting with resource-allocation recommendations for service-centre queue management, deployed on Docker and AWS behind a live analytics dashboard.",
      "Analysed dealership workflows to find automation opportunities across scheduling, inventory search and customer support.",
    ],
    stack: ["Python", "LightFM", "LangChain", "LangGraph", "AWS", "Docker"],
  },
  {
    company: "Babson Graduate Tech Club",
    role: "Vice President, Operations",
    period: "Sep 2024 to May 2025",
    kind: "Leadership",
    summary: "Ran operations for the graduate tech club alongside the MSBA.",
    points: [],
    stack: ["Wellesley, MA"],
  },
  {
    company: "Rezolve AI",
    role: "Full Stack Developer",
    period: "Jan to Feb 2024",
    kind: "Internship",
    summary: "Front-end work on internal application screens.",
    points: [
      "Developed React and Tailwind UI components and improved design consistency across internal application screens.",
      "Worked a branch-per-ticket flow with Bitbucket pull requests to reduce merge conflicts and streamline review.",
    ],
    stack: ["React", "Tailwind CSS", "PostgreSQL", "Bitbucket"],
  },
  {
    company: "Wipro",
    role: "Full Stack Developer",
    period: "Jul to Oct 2023",
    kind: "Internship",
    summary: "Financial reporting infrastructure for an internal enterprise vertical.",
    points: [
      "Delivered a real-time financial reporting dashboard on Azure SQL as part of a three-person team, cutting reporting lag from two days to two hours through automated ETL pipelines.",
      "Implemented role-based access across six security groups for 1,200+ users, cutting access-request tickets by 40% and provisioning time from three days to eight hours.",
    ],
    stack: ["Azure SQL", "Python", "ETL", "RBAC"],
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
    title: "When an Algorithm Knows Your Taste Better Than You Do",
    category: "Writing",
    year: "2026",
    description:
      "A deep dive arguing that the recommendation algorithm is the least interesting thing Spotify built. The real moat is seventeen years of listening behaviour, which any AI system still needs as a grounding layer underneath it.",
    points: [
      "Read of Spotify's 2025 research output",
      "Where personalisation stops being discovery and starts being a mirror",
    ],
    stack: ["Recommender Systems", "Analysis"],
    href: "https://medium.com/@pranav.rebala11/what-happens-when-an-algorithm-knows-your-taste-better-than-you-do-f317229713dc",
    linkLabel: "Read on Medium",
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
