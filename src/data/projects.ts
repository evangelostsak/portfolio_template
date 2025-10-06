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
    title: "AWS Grocery App Infrastructure v2",
    description:
      "Implemented a modular, production‐style multi-AZ AWS environment using Terraform: custom VPC (multiple AZs), EC2 Auto Scaling Group behind an Application Load Balancer, PostgreSQL RDS primary + optional read replica in private subnets, S3 for application assets and DB dumps, IAM roles with least privilege, and CloudWatch alarms + metrics wired to SNS for alerting. Also includes CI/CD integration via GitHub Actions, Frontend & Backend Docker Images build at pipeline, EventBridge + Step Functions + Lambda for DB Population & Backup and Restore, and Docker container orchestration on EC2 via user data Template.",
    tags: [
      "AWS",
      "Terraform",
      "VPC",
      "Auto Scaling",
      "EC2",
      "ALB",
      "RDS",
      "Read Replica",
      "S3",
      "IAM",
      "CloudWatch",
      "SNS",
      "CI/CD",
      "GitHub Actions",
      "EventBridge",
      "Step Functions",
      "Lambda",
      "Docker",
      "Infrastructure as Code",
    ],
    image: "",
    link: "https://github.com/evangelostsak/AWS_Grocery_v2",
    repo: "https://github.com/evangelostsak/AWS_Grocery_v2",
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
  {
    title: "AWS Grocery App Infrastructure MVP",
    description:
      "Provisioned a multi‑AZ AWS environment with Terraform: custom VPC (3 AZs), EC2 Auto Scaling Group behind an ALB, PostgreSQL RDS + read replica in private subnets, S3 for asset storage, IAM roles for least‑privilege access, and CloudWatch alarms wired to SNS for proactive alerting.",
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
      "Infrastructure as Code",
    ],
    image: "/images/grocery.png",
    link: "https://github.com/evangelostsak/AWS_grocery_mvp/blob/main/infrastructure/grocery.png",
    repo: "https://github.com/evangelostsak/AWS_grocery_mvp",
  }
];
