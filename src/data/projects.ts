export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Layered AI (Webeet.io)",
    description:
      "Implemented LLM orchestration to generate neighborhood scores and visualized them as a choropleth on a map-centric interface. Built BFF endpoints to orchestrate data for SSR React views.",
    tags: ["RAG", "LLM", "MapLibre", "Fastify", "React (SSR)", "TypeScript"],
    image: "/images/project-placeholder.svg",
    link: undefined,
    repo: undefined,
  },
  {
    title: "AWS Grocery App Infrastructure",
    description:
      "Provisioned a production-style multi‑AZ AWS environment with Terraform: custom VPC (3 AZs), EC2 Auto Scaling Group behind an ALB, PostgreSQL RDS + read replica in private subnets, S3 for asset storage, IAM roles for least‑privilege access, and CloudWatch alarms wired to SNS for proactive alerting.",
    tags: [
      "AWS",
      "Terraform",
      "VPC",
      "Auto Scaling",
      "ALB",
      "RDS",
      "S3",
      "CloudWatch",
      "SNS",
      "Docker",
      "Infrastructure as Code",
    ],
    image: "/images/project-placeholder.svg",
    link: "https://github.com/evangelostsak/AWS_grocery_mvp/blob/main/infrastructure/grocery.png",
    repo: "https://github.com/evangelostsak/AWS_grocery_mvp",
  },
  {
    title: "Movieland – Movie Collection Platform",
    description:
      "Authored comprehensive Jest unit/integration tests and Playwright E2E suites with fixtures. Set up Pytest for Python services and smoke checks to stabilize CI pipelines.",
    tags: ["Playwright", "Jest", "Pytest", "Selenium"],
    image: "/images/project-placeholder.svg",
    link: "#",
    repo: "#",
  },
];
