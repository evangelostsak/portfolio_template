export type LinkItem = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  lookingFor: string;
  avatar: string;
  resumeUrl: string;
  skills: string[];
  links: LinkItem[];
};

export const profile: Profile = {
  name: "Evangelos Tsakoudis",
  role: "DevOps & Cloud Engineer",
  summary:
    "DevOps & Cloud Engineer with AWS certification and hands-on experience automating infrastructure, secure delivery pipelines, and resilient backend workloads. I bridge infrastructure-as-code (Terraform), cloud architecture, and test automation (Terratest / CI) to ship reliable, observable systems—while continuously levelling up in scalability, security, and cost-aware design.",
  location: "City, Country",
  email: "you@example.com",
  lookingFor: "Full time position",
  avatar: "/images/avatar.svg",
  resumeUrl: "/resume",
  skills: [
    "TypeScript",
    "React (SSR)",
    "Next.js",
    "Node.js",
    "Fastify",
    "Python",
    "FastAPI",
    "Zod",
    "Zustand",
    "PostgreSQL",
    "SQLAlchemy",
    "MapLibre",
    "RAG / LLM",
    "Backend-for-Frontend (BFF)",
    "TDD",
    "Trunk-based development",
    "CI/CD",
    "Playwright",
    "Jest",
    "Pytest",
    "Selenium",
    "Great Expectations",
    "Git",
    "Tailwind CSS",
    "JavaScript",
    "SQL",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/evangelostsak" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/evangelos-tsakoudis" },
    { label: "Email", href: "mailto:baggtsak55@gmail.com" },
  ],
};
