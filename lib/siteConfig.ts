export const site = {
  name: "Jaykumar Kevadiya",
  role: "Software Engineer — Full-Stack & Backend (React, Node.js, Python)",
  summary: "I build scalable backend systems, full-stack applications, and real-time platforms. Skilled in designing APIs, handling concurrency, optimizing performance, and delivering software used by hundreds of users. Experienced in distributed systems, networking, real-time communication, and security-focused applications. Actively seeking Software Engineer roles focused on backend, systems, and full-stack development.",
  badge: "🏅 LeetCode yearly badge for solving daily DSA problems",
  location: "Toronto, ON",
  email: "jay.kevadiya.dev@gmail.com",
  phone: "+1 (519)-990-3981",
  resume: null, // Resume download - add file path when available
  socials: {
    github: "https://github.com/JAYKEv",
    linkedin: "https://www.linkedin.com/in/jay-kevadiya-a43432190/",
    x: ""
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ],
  
  // Primary Skills (used in featured projects)
  primarySkills: [
    "C", "C++", "Java", "TypeScript", "JavaScript", "Python",
    "Node.js", "Express.js", "REST APIs", "WebSockets", "Authentication & Authorization", "RBAC",
    "React", "MongoDB"
  ],
  
  // Secondary Skills (additional knowledge)
  secondarySkills: [
    "HTML", "CSS", "SQL", "MySQL", "Docker", "Linux", "PySpark", "AWS", "DAX", "PowerBI",
    "Ruby", "Go", "Bash", "Swift"
  ],
  
  // Featured Projects (6-7 max, with bullets)
  featuredProjects: [
    {
      title: "Clade – Real-Time Collaborative Platform",
      description: "Real-time collaborative coding platform enabling multiple users to edit shared documents simultaneously.",
      bullets: [
        "Built a real-time collaborative coding platform enabling multiple users to edit shared documents simultaneously.",
        "Reduced update latency by 25% and supported 100+ concurrent sessions with sub-100ms response times.",
        "Optimized MongoDB queries and backend state handling for conflict-free concurrent edits."
      ],
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/JAYKEv/Clade",
      link: "https://github.com/JAYKEv/Clade"
    },
    {
      title: "Distributed File System",
      description: "Distributed file system with replication, fault tolerance, and concurrent file access.",
      bullets: [
        "Implemented a distributed file system with replication, fault tolerance, and concurrent file access.",
        "Designed socket-based protocols ensuring reliable network communication.",
        "Developed locking mechanisms for safe multi-node concurrent access."
      ],
      tags: ["C", "Networking", "Distributed Systems", "Socket Programming"],
      github: "https://github.com/JAYKEv/Distributed-File-System",
      link: "https://github.com/JAYKEv/Distributed-File-System"
    },
    {
      title: "Web Clinic – High-Concurrency Backend",
      description: "Backend system for patient data, appointments, and medical records with high concurrency support.",
      bullets: [
        "Built backend system for patient data, appointments, and medical records.",
        "Supported 1000+ simultaneous requests with sub-200ms response time.",
        "Optimized complex MongoDB queries, improving execution speed by 45%."
      ],
      tags: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/JAYKEv/Web-Clinic-JK",
      link: "https://github.com/JAYKEv/Web-Clinic-JK"
    },
    {
      title: "Pizza Ordering System – Full-Stack Product",
      description: "Full-stack food ordering platform with cart, checkout, payment, and admin dashboard.",
      bullets: [
        "Developed full-stack food ordering platform with cart, checkout, payment, and admin dashboard.",
        "Implemented microfrontend architecture, reducing deployment time by 40% and supporting 500+ concurrent users.",
        "Optimized APIs and database queries, improving performance by 30%."
      ],
      tags: ["React", "Node.js", "MongoDB", "Microfrontend", "TypeScript"],
      github: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts",
      link: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts"
    },
    {
      title: "IdentityGuard-Service",
      description: "Production-grade authentication and session management service with JWT, refresh token rotation, reuse detection, and RBAC.",
      bullets: [
        "Built production-grade authentication and session management service with JWT, refresh token rotation, reuse detection, and RBAC.",
        "Integrated security-focused audit logging and robust session handling for multi-tenant applications.",
        "Containerized using Docker for scalable deployment."
      ],
      tags: ["Node.js", "TypeScript", "JWT", "Express", "Docker", "RBAC"],
      github: "https://github.com/JAYKEv/IdentityGuard-Service",
      link: "https://github.com/JAYKEv/IdentityGuard-Service"
    },
    {
      title: "SecureAuth-Portal",
      description: "Full-stack authentication portal with JWT refresh tokens, RBAC, audit logging, and rate limiting.",
      bullets: [
        "Developed full-stack authentication portal with JWT refresh tokens, RBAC, audit logging, and rate limiting.",
        "Built modern, responsive UI/UX while maintaining production-level security.",
        "Dockerized for seamless integration with IdentityGuard-Service."
      ],
      tags: ["React", "Node.js", "TypeScript", "Express", "JWT", "Docker"],
      github: "https://github.com/JAYKEv/SecureAuth-Portal",
      link: "https://github.com/JAYKEv/SecureAuth-Portal"
    },
    {
      title: "AuthCore-Service (GitHub only)",
      description: "Backend authentication and authorization with JWT, refresh token rotation, RBAC, and rate limiting.",
      bullets: [
        "Built backend authentication and authorization with JWT, refresh token rotation, RBAC, and rate limiting.",
        "Integrated audit logging and token reuse detection.",
        "Dockerized for production-ready deployment."
      ],
      tags: ["Node.js", "TypeScript", "Express", "JWT", "Docker"],
      github: "https://github.com/JAYKEv/AuthCore-Service",
      link: "https://github.com/JAYKEv/AuthCore-Service"
    }
  ],
  
  // Other Projects (GitHub links only)
  otherProjects: [
    {
      title: "Netflix Clone",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/JAYKEv/React1"
    },
    {
      title: "InstaEats",
      tags: ["Node.js", "React", "E-commerce"],
      github: "https://github.com/JAYKEv/InstaEats"
    },
    {
      title: "Code4Share",
      tags: ["JavaScript", "Developer Tools"],
      github: "https://github.com/JAYKEv/Code4Share-6851cdfa7cad57c47c7ad7afb63befb16659b2cf"
    },
    {
      title: "Cryptomaster",
      tags: ["React", "Node.js", "Crypto APIs"],
      github: "https://github.com/JAYKEv/Cryptomaster"
    },
    {
      title: "Library Management System",
      tags: ["Java", "MySQL"],
      github: "https://github.com/JAYKEv/Library-Management-System-JK"
    },
    {
      title: "ClinicPulse",
      tags: ["JavaScript", "Healthcare App"],
      github: "https://github.com/JAYKEv/ClinicPulse-main"
    },
    {
      title: "Sales Report Dashboard",
      tags: ["PowerBI", "DAX"],
      github: "https://github.com/JAYKEv/Sales_Report-PowerBI-JK"
    },
    {
      title: "Cricket App",
      tags: ["React", "TypeScript", "REST APIs"],
      github: "https://github.com/JAYKEv/Cricket_App"
    }
  ],
  
  // Legacy projects array (for backward compatibility)
  projects: []
};
