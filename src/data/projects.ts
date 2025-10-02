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
    image: "/images/grocery.png",
    link: "https://github.com/evangelostsak/AWS_grocery_mvp/blob/main/infrastructure/grocery.png",
    repo: "https://github.com/evangelostsak/AWS_grocery_mvp",
  },
  {
    title: "Movieland – Movie Collection Platform",
    description:
      "Flask + SQLAlchemy web app for managing personal movie collections with user authentication, OMDb API integration (dynamic fetch), likes, profile images, and intelligent cleanup of orphaned data. Includes Terraform IaC modules and deployment scripts plus a live instance for demonstration.",
    tags: [
      "Python",
      "Flask",
      "SQLAlchemy",
      "OMDb API",
      "Auth",
      "AWS",
      "Terraform",
      "Infrastructure as Code",
      "Docker",
    ],
    image: "/images/movieland.png",
    link: "https://evangelostsak.pythonanywhere.com/",
    repo: "https://github.com/evangelostsak/Movieland",
  },
];
