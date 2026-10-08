import doodlequestImage from "./assets/images/doodlequest.png";

export const profile = {
  name: "Prabhleen Kaur",
  role: "Information Technology student · Full-stack & AI systems",
  summary:
    "Information Technology student at NIT Jalandhar (CGPA 8.39), building full-stack and AI-powered software systems. Grounded in data structures, algorithms, and backend engineering, with open-source contributions and national-level hackathon achievements.",
  email: "prabhleenkaur.work.02@gmail.com",
  phone: "+91 8556005152",
  github: "https://github.com/11Pk",
};

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skillGroups = [
  {
    name: "AI / ML",
    color: "#bb4b2f",
    skills: [
      { name: "Machine Learning" },
      { name: "Deep Learning" },
      { name: "Generative AI" },
      { name: "NLP" },
      { name: "Computer Vision" },
    ],
  },
  {
    name: "Full Stack",
    color: "#286c68",
    skills: [
      { name: "React.js", logo: devicon("react") },
      { name: "Next.js", logo: devicon("nextjs") },
      { name: "TypeScript", logo: devicon("typescript") },
      { name: "JavaScript", logo: devicon("javascript") },
      { name: "HTML", logo: devicon("html5") },
      { name: "CSS", logo: devicon("css3") },
      { name: "Tailwind CSS", logo: devicon("tailwindcss") },
    ],
  },
  {
    name: "Backend",
    color: "#aa6b17",
    skills: [
      { name: "REST APIs" },
      { name: "FastAPI", logo: devicon("fastapi") },
      { name: "Node.js", logo: devicon("nodejs") },
      { name: "Express.js", logo: devicon("express") },
      { name: "MongoDB", logo: devicon("mongodb") },
      { name: "PostgreSQL", logo: devicon("postgresql") },
      { name: "Docker", logo: devicon("docker") },
    ],
  },
  {
    name: "Systems",
    color: "#4f5c98",
    skills: [
      { name: "Python", logo: devicon("python") },
      { name: "C / C++", logo: devicon("cplusplus") },
      { name: "Data Structures & Algorithms" },
    ],
  },
  {
    name: "Tools",
    color: "#286c68",
    skills: [
      { name: "Git", logo: devicon("git") },
      { name: "GitHub", logo: devicon("github") },
      { name: "Postman" },
      { name: "Jupyter Notebook", logo: devicon("jupyter") },
      { name: "Vercel" },
    ],
  },
];

export const resumeProjects = [
  {
    id: "oneai",
    title: "OneAI",
    subtitle: "All AI, One Prompt · Individual project",
    description:
      "An AI orchestration pipeline that decomposes complex queries into dependent subtasks, plans their execution, and routes them to relevant models.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "Docker",
      "Asyncio",
      "Generative AI",
    ],
    architecture: [
      "3-stage orchestration pipeline",
      "ML-based query decomposition",
      "LLM-powered DAG planning",
      "Semantic routing across 10+ models",
    ],
    outcomes: [
      "Breaks complex queries into dependent subtasks",
      "Parallel execution improves latency and response relevance",
    ],
  },
  {
    id: "dataseed",
    title: "DataSeed",
    subtitle: "Dataset Generation Platform · Individual project",
    description:
      "A human-validated dataset generation platform for the developer community, with workflows for AI-assisted creation, human generation, classification, and ML-ready data validation.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "LLM",
    ],
    architecture: [
      "4 dataset-generation workflows",
      "AI-assisted creation and classification",
      "Human validation",
      "PostgreSQL + MongoDB architecture",
    ],
    outcomes: [
      "Manages 5+ relational entities",
      "Flexible schema-driven dataset records",
    ],
  },
  {
    id: "humanitycheck",
    title: "HumanityCheck",
    subtitle: "AI content & deepfake detector · HackMol 7.0 winner",
    description:
      "A Chrome extension for real-time AI detection across text, audio, and video, combining specialist models in a three-layer detection architecture.",
    technologies: [
      "React",
      "Python",
      "FastAPI",
      "Chrome Extension",
      "MediaPipe FaceMesh",
      "SBERT",
      "MesoNet",
      "Wav2Vec",
    ],
    architecture: [
      "Text · SBERT",
      "Video · FaceMesh + MesoNet",
      "Audio · Wav2Vec",
      "3+ platform support",
    ],
    outcomes: [
      "30% detection efficiency improvement",
      "10+ inputs per session",
    ],
  },
  {
    id: "doodlequest",
    title: "DoodleQuest",
    subtitle: "Gamified learning platform · SIH 2025 Grand Finalist",
    description:
      "A learning platform for children with AI-generated doodle hints, stories, and quizzes. Built primary modules across the frontend and backend.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Speech-to-Text",
      "Text-to-Speech",
    ],
    architecture: [
      "Screen Mode",
      "Paper Mode",
      "Story Section",
      "4+ backend API integrations",
    ],
    outcomes: [
      "3+ core frontend components",
      "Grand Finalist · Smart India Hackathon 2025",
    ],
    image: doodlequestImage,
  },
];

export const achievements = [
  {
    title: "Grand Finalist · Smart India Hackathon 2025",
    detail: "Top 5 nationally out of 2.3 lakh+ teams · Problem Statement 25141",
    metric: "TOP 5",
  },
  {
    title: "1st Place · Women’s Track, HackMol 7.0",
    detail:
      "Among 300+ teams; advanced to the top 20% overall with a multimodal AI deepfake detector.",
    metric: "1ST",
  },
  {
    title: "Super100 · WISE Program, TalentSprint (Accenture)",
    detail:
      "Selected in the top 1% of 5,000+ applicants for technology and innovation.",
    metric: "TOP 1%",
  },
  {
    title: "Open source · NITJ Placement Cell Portal",
    detail: "6+ merged pull requests to a campus-wide production platform.",
    metric: "6+ PRs",
  },
  {
    title: "Contributor · GirlScript Summer of Code 2025",
    detail:
      "Merged 2 bug-fix and feature pull requests for a community of 6,000+ developers.",
    metric: "2 PRs",
  },
  {
    title: "Top 70 · HackMol 6.0",
    detail: "Placed in the top 70 among 750+ teams in a 36-hour hackathon.",
    metric: "TOP 70",
  },
];

export const experience = [
  {
    role: "Full Stack Web Developer",
    organization: "NITJ Placement Cell Portal",
    date: "Dec 2025 – Present",
    detail:
      "Contributed 6+ merged pull requests to the production portal, adapting placement workflows to updated policies and shipping student suggestions, placement dashboards, and recruiter hiring flows.",
  },
  {
    role: "Core Member",
    organization: "Google Developer Groups on Campus · NIT Jalandhar",
    date: "Dec 2025 – Present",
    detail:
      "Contributed 7+ commits to the HackMol 6.0 registration website and owned one section end-to-end.",
  },
  {
    role: "Society Member",
    organization: "Cybernauts Society · NIT Jalandhar",
    date: "Feb 2025 – Present",
    detail:
      "Hosted two coding competitions and mentored juniors on modern development practices.",
  },
  {
    role: "Core Member",
    organization: "Literary & Debating Club · NIT Jalandhar",
    date: "Nov 2024 – Present",
    detail:
      "Represented NITJ at 2+ debate tournaments and organized three club events.",
  },
];

export const education = {
  school: "Dr. B. R. Ambedkar National Institute of Technology, Jalandhar",
  degree: "B.Tech · Information Technology",
  dates: "Aug 2024 – Jun 2028",
  cgpa: "8.39",
  coursework:
    "Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Database Systems, Computer Networks, Software Engineering",
};
