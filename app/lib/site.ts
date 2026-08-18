/**
 * Single source of truth for everything the site renders.
 * Keeping copy here (rather than inline in components) makes it editable
 * without touching layout.
 */

/** Matches `basePath` in next.config.ts. Plain <a>/<video> URLs need it applied manually. */
export const BASE_PATH = "/portfolio";

/** Prefix a file in /public so it resolves under the GitHub Pages base path. */
export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

export const profile = {
  name: "Pranav Rebala",
  role: "ML Engineer & Data Analyst",
  location: "Boston, MA",
  availability: "Open to ML / data roles",
  email: "pranav.rebala11@gmail.com",
  github: "https://github.com/PranavR-11",
  linkedin: "https://www.linkedin.com/in/pranavrebala/",
  resume: asset("/Pranav_Resume.pdf"),
};

/** Hero headline, split so one phrase can take the serif accent treatment. */
export const headline = {
  lead: "I build systems that turn",
  accent: "messy data",
  trail: "into decisions people act on.",
  sub: "Three years shipping recommendation engines, RAG assistants and agentic tooling into production — plus two IEEE papers and a Master's in Business Analytics along the way.",
};

/** Pulled from real numbers in the experience and project sections below. */
export const stats = [
  { value: "20K", label: "monthly requests served in production" },
  { value: "50%", label: "cut in support cost from the AI assistant" },
  { value: "8,490", label: "player-seasons modelled for valuation" },
  { value: "2", label: "peer-reviewed IEEE publications" },
];

export const about = {
  paragraphs: [
    "I started in computer science at PES University in Bangalore, spent three years building production systems for an automotive tech company, then took a Master's in Business Analytics at Babson to get sharper about the business end of the work.",
    "The through-line is the same either way: I like the messy middle — the part where a model has to leave a notebook, survive real traffic, and actually change what somebody does on a Tuesday. Most of my work sits where machine learning, data engineering and product meet.",
    "Outside of that I draw, follow far too much football, and speak English, Hindi, Telugu and Kannada.",
  ],
  facts: [
    { label: "Based in", value: "Boston, MA" },
    { label: "Focus", value: "ML engineering, applied analytics" },
    { label: "Currently", value: "Open to new roles" },
  ],
};

export const education = [
  {
    period: "2024 — 2025",
    school: "Babson College",
    degree: "MS, Business Analytics",
    location: "Wellesley, MA",
  },
  {
    period: "2020 — 2024",
    school: "PES University",
    degree: "BS, Computer Science",
    location: "Bangalore, India",
  },
];

export const experience = [
  {
    company: "Forfend Cybernatics",
    role: "Software Developer",
    period: "Sep 2022 — Jul 2025",
    kind: "Full-time",
    summary:
      "Owned three production ML systems for automobile dealerships, from model design through deployment.",
    points: [
      "Built a LightFM hybrid recommender behind a Dockerized FastAPI service on AWS, predicting vehicle preferences from sales and behavioural history — 20K monthly kiosk and sales requests, 60% higher engagement and 22% higher conversion.",
      "Shipped a generative-AI assistant using intent classification and LangChain RAG retrievers for bookings, inventory queries and expert help, cutting support operating costs by half.",
      "Designed an agentic shop-floor system pairing Prophet/XGBoost forecasting with RL-based bay allocation, orchestrated through LangGraph and surfaced in a live dashboard — 60% better operational efficiency.",
    ],
    stack: ["Python", "FastAPI", "LangChain", "LangGraph", "AWS", "Docker"],
  },
  {
    company: "Rezolve AI",
    role: "Full Stack Intern",
    period: "Jan — Feb 2024",
    kind: "Internship",
    summary:
      "Led a small team building leadership dashboards over Azure-hosted financial data.",
    points: [
      "Delivered real-time dashboards for Wipro's BFS delivery vertical, giving leadership visibility into metrics across a 230,000-person global workforce.",
      "Added role-based access controls for compliant data visibility, and streamlined ingestion to cut manual reporting time by 40%.",
    ],
    stack: ["Azure", "React", "SQL", "RBAC"],
  },
  {
    company: "Wipro Ltd",
    role: "Full Stack Intern",
    period: "Jul — Oct 2023",
    kind: "Internship",
    summary:
      "Built and deployed an internal resource-tracking portal end to end.",
    points: [
      "Developed the React/Vite dashboard frontend and Node/Express API over MS SQL, improving how teams tracked project utilisation.",
      "Handled Azure deployment with Functions for dynamic scaling, and integrated Azure AD for granular role-based access.",
    ],
    stack: ["React", "Node.js", "Express", "MS SQL", "Azure"],
  },
  {
    company: "Flutura Business Solutions",
    role: "Data Science Intern",
    period: "Jun — Aug 2022",
    kind: "Internship",
    summary: "Drone telemetry analysis and digital-twin prototyping.",
    points: [
      "Analysed drone flight and sensor data in Engineering Workbench, clustering failure cases to surface the patterns behind them.",
      "Prototyped a drone AR environment in Unity with Vuforia, simulating swarm scenarios with radar-zone detection and per-drone inspection.",
    ],
    stack: ["Python", "Clustering", "Unity", "Vuforia"],
  },
];

export const featured = {
  eyebrow: "Latest build",
  title: "FootballBase",
  subtitle: "Real-time football analytics, answered in plain language",
  summary:
    "A multilingual RAG assistant that turns raw match datasets into conversational insight — cited answers, generated charts, and exportable assets, streamed as they're produced.",
  why: "I wanted one workflow where an analyst asks a plain-language question and gets back a data-backed answer, a chart, and something they can drop straight into a deck — no notebook, no SQL, no waiting.",
  architecture: [
    {
      label: "Frontend",
      detail:
        "Next.js and React with a streaming UI that renders Chart.js visuals as WebSocket updates arrive.",
    },
    {
      label: "Backend",
      detail:
        "FastAPI streams JSON and matplotlib charts; LangChain orchestrates tool calls with LLM-driven intent classification and slot filling.",
    },
    {
      label: "Retrieval",
      detail:
        "FAISS over Sentence Transformer embeddings, with fuzzy matching for entity resolution and MCP coordinating tool invocation.",
    },
    {
      label: "Data ops",
      detail:
        "Pandas for wrangling, a SQLite cache for repeat questions, containerised with Docker behind Caddy for TLS and WebSocket passthrough.",
    },
  ],
  capabilities: [
    "Cited answers with inline sources",
    "Charts generated on demand, exportable as PNG",
    "Automatic language detection across ten languages",
    "Sub-second repeat queries via cache",
  ],
  video: asset("/LinkedinClip.mp4"),
  poster: asset("/LinkedinClip-Cover.jpg"),
  demo: "https://footballbase.netlify.app",
  stack: ["Next.js", "FastAPI", "LangChain", "FAISS", "MCP", "Docker"],
};

export const projects = [
  {
    title: "LightweightMMM Attribution Pipeline",
    category: "Data Science",
    year: "2025",
    description:
      "Marketing mix model over Meta's Robyn dataset plus Google Ads and Analytics exports, estimating channel elasticities, adstock lags and seasonality to produce marginal ROI curves.",
    points: [
      "Posterior predictive estimates with parameterised scenario grids",
      "Interactive Tableau layer for reallocation decisions",
      "Pilot reallocation projected ~9% incremental revenue",
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
    title: "CharGen — 3D Character Generation",
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
      "Supervised model for picking an optimal playing eleven from player statistics, match performance and historical data — also published at IEEE I2CT.",
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
    title: "AWS Educate — Introduction to Cloud 101",
    issuer: "Amazon Web Services",
    year: "2023",
    href: "https://www.credly.com/badges/3821164c-f6b7-461c-bf85-d51176279c27/public_url",
  },
];

export const artwork = [
  { src: asset("/art/bp.jpeg"), title: "Black Panther" },
  { src: asset("/art/dws.jpeg"), title: "Die With A Smile" },
  { src: asset("/art/chandler.jpeg"), title: "Chandler" },
  { src: asset("/art/dv.jpeg"), title: "Darth Vader" },
  { src: asset("/art/strange.jpeg"), title: "Doctor Strange" },
  { src: asset("/art/mk.jpeg"), title: "Moon Knight" },
  { src: asset("/art/spidergewn.jpeg"), title: "Spider-Gwen" },
  { src: asset("/art/messi.jpeg"), title: "Messi" },
  { src: asset("/art/3spiderman.jpeg"), title: "Three Spider-Men" },
  { src: asset("/art/alvarez.jpeg"), title: "Álvarez" },
  { src: asset("/art/lucifer.jpeg"), title: "Lucifer" },
  { src: asset("/art/painting1.jpeg"), title: "Study I" },
  { src: asset("/art/painting2.jpeg"), title: "Study II" },
];

export const navLinks = [
  { label: "Work", id: "work" },
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Research", id: "research" },
  { label: "Gallery", id: "gallery" },
];
