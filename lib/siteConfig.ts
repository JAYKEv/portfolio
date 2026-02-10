export const site = {
  name: "Jaykumar Kevadiya",
  role: "Software Engineer",
  summary:
    "Software Engineer with experience building scalable backend systems, real-time applications, and full-stack products. Skilled in designing APIs, handling concurrency, optimizing performance, and delivering software used by hundreds of users. Experienced in distributed systems, real-time communication, and data-driven applications. Actively seeking Software Engineer roles focused on backend, systems, and product development.",
  about: "Software Engineer with experience building scalable backend systems, real-time applications, and full-stack products. Skilled in designing APIs, handling concurrency, optimizing performance, and delivering software used by hundreds of users. Experienced in distributed systems, real-time communication, and data-driven applications. Actively seeking Software Engineer roles focused on backend, systems, and product development.",
  leetcodeBadge: "LeetCode yearly badge for solving daily DSA problems.",
  location: "Ontario, Canada",
  email: "jay.kevadiya.dev@gmail.com",
  phone: "+1 (519)-990-3981",
  resume: "/resume.pdf", // Add your resume file path here
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
  
  projects: [
    {
      title: "Clade – Real-Time Collaborative Platform",
      description:
        "Built a real-time collaborative coding platform allowing multiple users to edit shared documents simultaneously using WebSockets and operational transformation. Reduced update latency by 25% and supported 100+ concurrent sessions with sub-100ms response times. Optimized MongoDB queries and backend state handling for conflict-free concurrent edits.",
      tags: ["WebSockets", "Node.js", "MongoDB", "Real-time", "Concurrency"],
      github: "https://github.com/JAYKEv/Clade",
      link: "https://github.com/JAYKEv/Clade",
      bullets: [
        "Designed and implemented real-time document synchronization system solving multi-user editing conflicts, achieving 25% latency reduction",
        "Optimized MongoDB queries and WebSocket message handling to support 100+ concurrent sessions with sub-100ms response times",
        "Implemented operational transformation algorithms for conflict-free concurrent edits, ensuring data consistency across distributed sessions"
      ]
    },
    {
      title: "Distributed File System",
      description:
        "Designed and implemented a distributed file system in C solving data storage and retrieval across multiple nodes, achieving fault tolerance and efficient data distribution. Features replication, networking protocols, and scalable storage algorithms for production-level distributed systems.",
      tags: ["C", "Networking", "Distributed Systems", "Systems Programming"],
      github: "https://github.com/JAYKEv/Distributed-File-System",
      link: "https://github.com/JAYKEv/Distributed-File-System",
      bullets: [
        "Designed and implemented distributed file storage system solving data consistency across nodes, achieving fault tolerance and replication",
        "Built networking protocols and message passing mechanisms for inter-node communication, handling concurrent read/write operations",
        "Implemented efficient data distribution algorithms supporting scalable storage solutions for production-level distributed systems"
      ]
    },
    {
      title: "Web Clinic – High-Concurrency Backend",
      description:
        "Built a high-concurrency backend system for healthcare management handling patient data, appointments, and medical records. Designed REST APIs with optimized database queries, supporting hundreds of concurrent users with efficient request handling and data consistency.",
      tags: ["Node.js", "REST APIs", "MongoDB", "Concurrency", "Backend"],
      github: "https://github.com/JAYKEv/Web-Clinic-JK",
      link: "https://github.com/JAYKEv/Web-Clinic-JK",
      bullets: [
        "Designed and implemented high-concurrency backend system solving healthcare data management, achieving support for hundreds of concurrent users",
        "Optimized REST API endpoints and MongoDB queries for patient data, appointments, and medical records with efficient request handling",
        "Implemented concurrency control mechanisms ensuring data consistency and performance under high load conditions"
      ]
    },
    {
      title: "Pizza Ordering System – Full-Stack Product",
      description:
        "Developed a full-stack ordering platform with secure REST APIs, authentication, and order workflows. Optimized MongoDB schemas and queries resulting in 30% faster database response times, supporting concurrent users and orders with end-to-end product delivery.",
      tags: ["React", "Node.js", "MongoDB", "Microfrontend", "Full-Stack"],
      github: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts",
      link: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts",
      bullets: [
        "Designed and implemented full-stack ordering platform solving order management workflows, achieving 30% faster database response times",
        "Built secure REST APIs with authentication and authorization, supporting concurrent users and orders with optimized MongoDB schemas",
        "Developed microfrontend architecture enabling scalable frontend deployment and independent feature development"
      ]
    },
    {
      title: "IdentityGuard-Service",
      description:
        "Built a production-ready authentication and authorization service using Node.js, TypeScript, and Express. Implemented JWT-based authentication, RBAC (Role-Based Access Control), and Docker containerization, delivering secure identity management for distributed applications.",
      tags: ["Node.js", "TypeScript", "JWT", "Express", "Docker", "Authentication", "RBAC"],
      github: "https://github.com/JAYKEv",
      link: "https://github.com/JAYKEv",
      bullets: [
        "Designed and implemented authentication service solving identity management for distributed applications, achieving secure JWT-based token handling",
        "Built RBAC system with Express.js middleware, enabling fine-grained access control and role-based permissions",
        "Containerized service with Docker for production deployment, ensuring scalability and consistent deployment across environments"
      ]
    },
    {
      title: "SecureAuth-Portal",
      description:
        "Developed a full-stack authentication portal with React frontend and Node.js backend. Implemented secure login flows, JWT token management, and Docker containerization, providing a complete authentication solution with modern UI/UX.",
      tags: ["React", "Node.js", "TypeScript", "Express", "JWT", "Docker", "Full-Stack", "Authentication"],
      github: "https://github.com/JAYKEv",
      link: "https://github.com/JAYKEv",
      bullets: [
        "Designed and implemented full-stack authentication portal solving secure user access management, achieving seamless login flows with JWT",
        "Built React frontend with TypeScript for type-safe authentication UI, integrated with Express.js backend for secure token handling",
        "Containerized application with Docker enabling production-ready deployment with consistent environment configuration"
      ]
    },
    {
      title: "AuthCore-Service",
      description:
        "Core authentication service built with Node.js, TypeScript, Express, JWT, and Docker. Provides reusable authentication infrastructure for microservices architecture with secure token generation and validation.",
      tags: ["Node.js", "TypeScript", "JWT", "Express", "Docker"],
      github: "https://github.com/JAYKEv",
      link: "https://github.com/JAYKEv",
      bullets: [
        "Designed and implemented core authentication service solving reusable identity infrastructure, achieving secure token generation and validation",
        "Built with TypeScript and Express.js for type-safe API development, supporting microservices architecture",
        "Containerized with Docker for scalable deployment, enabling consistent authentication across distributed systems"
      ]
    }
  ]
};

