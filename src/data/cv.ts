export type CvArticle = {
  title: string;
  org?: string;
  location?: string;
  period?: string;
  bullets: string[];
  tags?: string[];
  // 'certification' added so we can position certifications separately on the resume
  type: 'work' | 'education' | 'certification';
};

export const cvArticles: CvArticle[] = [
      {
    title: 'DevSecOps Team Lead',
    org: 'Webeet',
    location: 'Berlin, Germany (Remote)',
    period: 'Jan 2026 – Present',
    bullets: [
      'Responsible for the design, automation, and reliability of Webeet’s AWS cloud platform, supporting fast and stable software delivery while keeping infrastructure costs under control.',
      'Design and operate cloud infrastructure using Terraform and CloudFormation, applying infrastructure-as-code practices to ensure consistency and traceability across environments.',
      'Develop and maintain CI/CD pipelines (GitHub Actions, GitLab CI, Jenkins) that automate build, test, and deployment workflows and reduce release friction.',
      'Drive the adoption of Docker and Kubernetes (EKS) to support scalable services, rolling deployments, and efficient resource usage.',
      'Monitor and optimize cloud spending through continuous cost analysis, right-sizing, and capacity planning using AWS-native tooling.',
      'Integrate security into delivery processes with automated vulnerability scanning, secrets management, and access controls to reduce operational risk.',
      'Lead and mentor DevSecOps engineers while working closely with development, QA, data, and security teams to improve platform stability and delivery speed.',
    ],
    tags: ['Mentorship', 'Leadership', 'AWS', 'Terraform', 'CI/CD', 'GitHub Actions', 'Security', 'DevOps', 'Kubernetes', 'Docker', 'Security', 'Cost Optimization'],
    type: 'work',
  },
    {
    title: 'DevSecOps Engineer - Project Coordinator',
    org: 'Webeet',
    location: 'Berlin, Germany (Remote)',
    period: 'Sep 2025 – Dec 2025',
    bullets: [
      'Led & mentored multiple DevSecOps intern squads (12-15 People) providing architectural direction & prioritization without hands‑on coding.',
      'Ran structured office hours (2×/week) + ad‑hoc coaching to unblock Terraform / AWS / CI/CD and build autonomous problem solving.',
      'Built onboarding playbooks, review rubric & runbooks: cut first‑PR turnaround from ~3 days to <1.5 and reduced revision cycles via structured PR reviews.',
      'Standardized secure patterns (network segmentation, least‑privilege IAM, pipeline security) & enforced quality gates (plan, lint, security scan) in GitHub Actions.',
      'Introduced decision & escalation logs + lightweight retros → fewer repeat questions & stronger knowledge retention.',
      'Fostered psychological safety & continuous improvement through weekly knowledge shares and daily Stand-ups.',
    ],
    tags: ['Mentorship', 'Leadership', 'AWS', 'Terraform', 'CI/CD', 'GitHub Actions', 'Security', 'DevOps'],
    type: 'work',
  },
  {
    title: 'DevSecOps Engineer',
    org: 'Webeet',
    location: 'Berlin, Germany (Remote)',
    period: 'Aug 2025 – Sep 2025',
    bullets: [
      'Led and mentored two teams of interns, guiding Terraform, AWS, and DevSecOps practices',
      'Collaborated on secure AWS infrastructure design across networking, compute, storage, and monitoring layers',
      'Authored Terraform modules with accompanying Terratest (Go) cases to enforce infrastructure correctness',
      'Implemented secure private connectivity (WireGuard VPN) with Caddy reverse proxy and iptables NAT (MASQUERADE)',
      'Managed internal Docker registry to streamline container distribution and versioned deployments',
      'Automated infrastructure + validation workflows via GitHub Actions, reducing manual steps and drift risk',
    ],
    tags: ['AWS', 'Terraform', 'Terratest', 'WireGuard', 'Caddy', 'GitHub Actions', 'Docker', 'Security'],
    type: 'work',
  },
  {
    title: 'Operations & Team Leadership (Multiple Roles)',
    org: 'Various (White Backshop, Lieferando, Tsakoudis Lebensmittel GmbH, Kita Sonnenbogen)',
    location: 'Berlin, Germany',
    period: 'Feb 2019 – Nov 2023',
    bullets: [
      'Led and coordinated daily operations under high-pressure, deadline-driven environments',
      'Optimized workflows and shift handovers to maintain reliability and service quality',
      'Developed transferable soft skills in communication, ownership, and structured problem solving',
    ],
    tags: ['Leadership', 'Operations', 'Communication', 'Process Improvement'],
    type: 'work',
  },
  {
    title: 'Software Engineering / Cloud Engineering Program',
    org: 'Masterschool GmbH',
    location: 'Berlin, Germany (Remote)',
    period: 'Jul 2024 – Sep 2025',
    bullets: [
      'Completed project-based program focused on Python, OOP, REST APIs, cloud architecture, and deployment practices',
      'Built production-style AWS environment (multi-AZ VPC, ASG, ALB, RDS replica, S3, CloudWatch alerts)',
      'Developed MovieLand (Flask + SQLAlchemy + OMDb API) with authentication, role-based access, and data integrity logic',
      'Practiced infrastructure as code (Terraform) and iterative environment validation to reduce configuration drift',
    ],
    tags: ['Python', 'Flask', 'Terraform', 'AWS', 'SQLAlchemy', 'Cloud Architecture'],
    type: 'education',
  },
  {
    title: 'Automations & Programming Studies',
    org: 'OSZ TIEM',
    location: 'Berlin, Germany',
    period: 'Sep 2017 – Dec 2018',
    bullets: [
      'Studied foundational programming (C++ / Java), embedded development (Arduino), and deployment fundamentals',
      'Built early problem-solving discipline and understanding of structured software design',
    ],
    tags: ['C++', 'Java', 'Embedded', 'Foundations'],
    type: 'education',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'Amazon Web Services',
    location: 'Certification',
    period: 'Aug 2025',
    bullets: [
      'Validated skill in designing resilient, secure, and cost-conscious AWS architectures',
    ],
    tags: ['AWS', 'Architecture', 'Security'],
    type: 'certification',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    location: 'Certification',
    period: 'Apr 2025',
    bullets: [
      'Established foundational cloud knowledge across core services, security, and billing models',
    ],
    tags: ['AWS', 'Foundations'],
    type: 'certification',
  },
];


