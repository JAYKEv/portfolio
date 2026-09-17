export const site = {
  name: "Jaykumar Kevadiya",
  initials: "JK",
  role: "Software Engineer",
  positioning: "Full-Stack / Backend Software Engineer",
  headline: "Jaykumar Kevadiya",
  subhead:
    "Building reliable, scalable software across full-stack applications, backend systems, APIs, and real-time platforms.",
  description:
    "Portfolio of Jaykumar Kevadiya, a Software Engineer specializing in full-stack development, backend systems, APIs, and real-time applications.",
  location: "Toronto, Ontario, Canada",
  locationShort: "Toronto, ON",
  email: "jay.kevadiya.dev@gmail.com",
  resume: "/resume.pdf",
  resumeFileName: "Jaykumar_Kevadiya_Resume.pdf",
  status: "Open to Software Engineering Opportunities",
  url: "https://jaykumarkevadiya.netlify.app",
  socials: {
    github: "https://github.com/JAYKEv",
    linkedin: "https://www.linkedin.com/in/jay-kevadiya-a43432190/",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  about: [
    "I'm Jaykumar Kevadiya, a Software Engineer based in Toronto, Canada. I hold a Master of Applied Computing from the University of Windsor and a Bachelor of Technology in Computer Science & Engineering from CHARUSAT.",
    "I enjoy building full-stack applications, backend services, APIs, and real-time systems. My work spans React and Node.js on the product side, and APIs, data stores, concurrency, and security-focused services on the backend.",
    "I am currently looking for Software Engineering roles where I can contribute to backend, systems, and full-stack work while building reliable products for real users."
  ],
  facts: [
    { label: "Location", value: "Toronto, Ontario, Canada" },
    { label: "Education", value: "Master of Applied Computing, University of Windsor" },
    { label: "Focus", value: "Full-stack, backend, APIs, real-time systems" }
  ],
  stats: [
    { label: "Location", value: "Toronto", hint: "Ontario, Canada" },
    { label: "Experience", value: "2+ years", hint: "Software engineering" },
    { label: "LeetCode", value: "350+", hint: "Problems solved" },
    { label: "Projects", value: "15+", hint: "Built and shipped" }
  ],
  glance: [
    { label: "Based in", value: "Toronto, Ontario, Canada" },
    { label: "Education", value: "M.A.C., University of Windsor" },
    { label: "Primary focus", value: "Full-stack development and backend systems" }
  ],
  experience: [
    {
      org: "Delta Tech-Up",
      title: "Software Engineer",
      dates: "January 2023 — June 2024",
      location: "Ahmedabad, India",
      summary:
        "Built and maintained backend services and full-stack applications focused on reliability, access control, and efficient data flow.",
      bullets: [
        "Engineered backend services with Node.js and Python, improving system performance by 35% through API workflow optimization and reduced redundant processing.",
        "Refactored GraphQL and REST APIs and optimized MongoDB queries, reducing latency by 45% for high-throughput transaction and analytics systems.",
        "Implemented structured logging, role-based access control, and automated testing to improve system reliability and security.",
        "Developed full-stack web applications with React, Node.js, and MongoDB while keeping frontend and backend integrations consistent.",
        "Collaborated in Agile sprints, planning, reviews, and deployment cycles to support reliable delivery."
      ],
      tags: ["React", "Node.js", "Python", "MongoDB", "REST APIs", "GraphQL", "RBAC"]
    },
    {
      org: "Kintu Designs",
      title: "Frontend Developer Intern",
      dates: "May 2022 — July 2022",
      location: "Surat, India",
      summary:
        "Built responsive interfaces and low-latency collaboration features using React and WebSockets.",
      bullets: [
        "Built interactive UIs with React and implemented low-latency WebSocket communication to improve real-time collaboration efficiency.",
        "Created reusable frontend components and unit-tested features to improve maintainability and release speed.",
        "Worked in Agile sprints and Git-based deployment workflows with a focus on consistent UI quality.",
        "Developed responsive interfaces using React, HTML5, CSS3, and JavaScript."
      ],
      tags: ["React", "WebSockets", "JavaScript", "HTML5", "CSS3", "Git"]
    }
  ],
  education: [
    {
      title: "Master of Applied Computing",
      org: "University of Windsor",
      dates: "September 2024 — December 2025",
      location: "Ontario, Canada"
    },
    {
      title: "Bachelor of Technology in Computer Science & Engineering",
      org: "CHARUSAT",
      dates: "June 2019 — April 2023",
      location: "Anand, India"
    }
  ],
  skillGroups: [
    { title: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"] },
    { title: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS"] },
    { title: "Backend", items: ["Node.js", "Express", "REST APIs", "WebSockets", "RBAC"] },
    { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    { title: "Tools / Cloud", items: ["Git", "Docker", "Linux", "AWS"] }
  ],
  featured: [
    {
      title: "SecureVault",
      subtitle: "Authentication and session platform",
      summary: "Built a secure authentication service with refresh-token rotation, RBAC, and audit-focused session handling.",
      description:
        "SecureVault focuses on the operational realities of auth and session management. I built a Node.js/TypeScript service that handles refresh-token rotation, reuse detection, access control, and security-focused logging to support safer web applications.",
      tags: ["Node.js", "TypeScript", "JWT", "Express", "Docker", "RBAC"],
      source: "https://github.com/JAYKEv/IdentityGuard-Service",
      accent: "from-emerald-700 via-teal-600 to-cyan-600",
      year: "2025"
    },
    {
      title: "Clade",
      subtitle: "Real-time collaboration",
      summary: "Created a collaborative editing experience with shared state, concurrent updates, and low-latency syncing.",
      description:
        "Clade is a real-time collaborative platform designed around low-latency updates and conflict-aware state handling. The backend uses Node.js, Socket.io, and MongoDB to support multi-user editing workflows and concurrent document interactions.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      source: "https://github.com/JAYKEv/Clade",
      accent: "from-violet-700 via-indigo-600 to-blue-600",
      year: "2024"
    },
    {
      title: "Web Clinic",
      subtitle: "Healthcare backend",
      summary: "Designed a patient and appointment backend with API-driven access patterns and higher throughput performance.",
      description:
        "Web Clinic is an Express and MongoDB-based backend for patient data, appointment workflows, and medical records. The project centers on responsiveness under load, query optimization, and dependable API behavior for clinic operations.",
      tags: ["Node.js", "Express", "MongoDB", "REST APIs"],
      source: "https://github.com/JAYKEv/Web-Clinic-JK",
      accent: "from-sky-700 via-cyan-600 to-teal-500",
      year: "2023"
    },
    {
      title: "Pizza Ordering System",
      subtitle: "Microfrontend ordering app",
      summary: "Built a full-stack ordering platform using a TypeScript microfrontend architecture and API-driven flows.",
      description:
        "This ordering product covers browsing, authentication, and order workflows with a modular TypeScript frontend and Node.js services on the backend. The architecture separates concerns while keeping data access and order processing reliable for concurrent usage.",
      tags: ["React", "Node.js", "MongoDB", "TypeScript", "Microfrontend"],
      source: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts",
      accent: "from-amber-600 via-orange-500 to-rose-500",
      year: "2024"
    },
    {
      title: "Distributed File System",
      subtitle: "Systems and networking",
      summary: "Implemented a distributed file system with replication, locking, and fault-tolerant access patterns.",
      description:
        "This C-based project models a distributed storage system with socket-based networking, replication, locking, and concurrency controls. It demonstrates the systems thinking behind distributed file access and data consistency across multiple nodes.",
      tags: ["C", "Networking", "Distributed Systems", "Sockets"],
      source: "https://github.com/JAYKEv/Distributed-File-System",
      accent: "from-slate-700 via-slate-600 to-zinc-600",
      year: "2023"
    }
  ],
  archive: [
    { title: "SecureAuth Portal", description: "Authentication flows, refresh-token rotation, and session safety checks for secure access control.", tags: ["React", "Node.js", "TypeScript", "Express", "JWT"], year: "2025", href: "https://github.com/JAYKEv/SecureAuth-Portal" },
    { title: "AuthCore Service", description: "A reusable API foundation for authentication, validation, and secure service-to-service access.", tags: ["Node.js", "TypeScript", "Express", "JWT", "Docker"], year: "2025", href: "https://github.com/JAYKEv/AuthCore-Service" },
    { title: "Cryptomaster", description: "A market-data interface for tracking prices, patterns, and user-facing crypto insights.", tags: ["React", "REST APIs"], year: "2023", href: "https://github.com/JAYKEv/Cryptomaster" },
    { title: "InstaEats", description: "An ordering interface designed around faster browsing and simpler user flows.", tags: ["Node.js", "React"], year: "2023", href: "https://github.com/JAYKEv/InstaEats" },
    { title: "ClinicPulse", description: "A lightweight clinic dashboard focused on patient management and clear operational visibility.", tags: ["JavaScript", "HTML", "CSS"], year: "2023", href: "https://github.com/JAYKEv/ClinicPulse-main" },
    { title: "Library Management System", description: "A catalog and lending system built around reliable record handling and library workflows.", tags: ["Java", "MySQL"], year: "2022", href: "https://github.com/JAYKEv/Library-Management-System-JK" },
    { title: "Sales Report Dashboard", description: "A reporting-focused dashboard built to cleanly summarize sales performance signals.", tags: ["Power BI", "DAX"], year: "2024", href: "https://github.com/JAYKEv/Sales_Report-PowerBI-JK" },
    { title: "Code4Share", description: "A code-sharing project centered around simplified collaborative workflows and front-end UI polish.", tags: ["JavaScript"], year: "2023", href: "https://github.com/JAYKEv/Code4Share-6851cdfa7cad57c47c7ad7afb63befb16659b2cf" },
    { title: "Netflix Clone", description: "A UI-focused streaming clone created to explore patterns, data flow, and app layout design.", tags: ["React", "Node.js"], year: "2023", href: "https://github.com/JAYKEv/React1" },
    { title: "Cricket App", description: "A sports tracker app exploring clean data presentation and interactive front-end patterns.", tags: ["React", "TypeScript"], year: "2024", href: "https://github.com/JAYKEv/Cricket_App" }
  ],
  engineering: {
    title: "Engineering",
    problemsSolved: "350+",
    badge: "Annual Badge",
    github: "GitHub Projects",
    summary: "I enjoy solving algorithmic problems, shipping systems, and iterating on product and backend design."
  }
} as const;
