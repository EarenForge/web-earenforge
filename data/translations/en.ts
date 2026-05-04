export const en = {
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
  },
  hero: {
    headline_1: "Build",
    highlight: "solid software",
    headline_2: "that scales.",
    subtitle: "FullStack DevOps Engineer designing and building scalable systems, cloud infrastructure, and modern web applications that perform under pressure.",
    cta_primary: "View Projects",
    cta_secondary: "Get in Touch",
  },
  services: {
    title: "Services",
    subtitle: "End-to-end solutions for building, deploying, and scaling modern applications.",
    items: [
      {
        title: "Web Applications",
        description: "Full-stack applications built with Next.js, React, and modern frameworks. Responsive, accessible, and optimized for performance from day one.",
      },
      {
        title: "Backend Systems",
        description: "Robust APIs and microservices with Node.js, Python, and Go. Designed for high availability, low latency, and seamless integration with any frontend.",
      },
      {
        title: "Cloud & DevOps",
        description: "Infrastructure on AWS and GCP with Docker, Kubernetes, and Terraform. Automated, reproducible environments that scale with your business.",
      },
      {
        title: "API Design",
        description: "RESTful and GraphQL APIs built with best practices. Clear documentation, versioning, and authentication patterns that developers love to work with.",
      },
      {
        title: "Database Architecture",
        description: "Schema design, query optimization, and data migration strategies for PostgreSQL, MongoDB, and Redis. Performance-tuned for your workload.",
      },
      {
        title: "CI/CD Automation",
        description: "Fully automated pipelines with GitHub Actions, Docker builds, and zero-downtime deployments. Ship faster with confidence and roll back when needed.",
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "A selection of projects I have built and contributed to.",
    view: "View Project",
  },
  about: {
    title: "About",
    subtitle: "A bit more about who I am and what I do.",
    badge: "5+ years of experience",
    role: "FullStack DevOps Engineer",
    bio_1: "I specialize in building end-to-end solutions that go from concept to production. With a strong foundation in both development and operations, I bridge the gap between writing clean code and running reliable infrastructure.",
    bio_2: "My approach is simple: build systems that are scalable from the start, automate everything that can be automated, and always design for failure. I believe the best software is not just functional but maintainable, testable, and easy to reason about.",
    skills: {
      frontend: "Frontend",
      backend: "Backend",
      cloud: "Cloud",
      database: "Database",
    },
  },
  contact: {
    title: "Get in Touch",
    subtitle: "Have a project, idea, or just want to say hello? I am always open to discussing new opportunities and collaborations.",
    cta: "Send an Email",
    response: "I typically respond within 24 hours.",
  },
  footer: {
    description: "Building scalable systems and cloud infrastructure for modern applications.",
    quickLinks: "Quick Links",
    connect: "Connect",
    copyright: "All rights reserved.",
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
  },
};

export type Translation = typeof en;
