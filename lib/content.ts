export interface StatItem {
  label: string;
  value: string;
  hint: string;
}

export interface FeaturedProject {
  title: string;
  tagline: string;
  description: string;
  roleContext: string;
  stack: string[];
  github: string;
  live?: string;
  image?: string;
}

export interface ArchiveProject {
  title: string;
  description: string;
  stack: string[];
  github: string;
  category?: string;
}

export interface GlanceItem {
  id: string;
  title: string;
  description: string;
  iconName: "graduation-cap" | "map-pin" | "briefcase" | "compass" | "sparkles";
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    icon: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  type: "work" | "education";
  roleOrDegree: string;
  organization: string;
  period: string;
  location: string;
  bullets?: string[];
  tags?: string[];
}

export const content = {
  personal: {
    name: "Jaykumar Kevadiya",
    initials: "JK",
    role: "Software Engineer",
    eyebrow: "Jaykumar Kevadiya — Software Engineer",
    headlineLine1: "I build scalable backend systems",
    headlineLine2: "and full-stack platforms.",
    subtext:
      "Software Engineer focused on Full-Stack & Backend development (React, Node.js, Python). I design APIs, handle concurrency, optimize performance, and build real-time and security-focused systems used by hundreds of users.",
    location: "Toronto, ON",
    locationFull: "Toronto, Ontario, Canada",
    statusText: "Currently available for new opportunities",
    statusBadge: "🟢 Currently available for new opportunities",
    leetcodeNote: "🏅 LeetCode yearly badge for solving daily DSA problems",
    email: "jay.kevadiya.dev@gmail.com",
    github: "https://github.com/JAYKEv",
    linkedin: "https://www.linkedin.com/in/jay-kevadiya-a43432190/",
    resumeUrl: "/Jaykumar_Kevadiya_Resume.pdf",
  },

  stats: [
    { label: "Status", value: "Open to roles", hint: "Software Engineer / Backend" },
    { label: "Experience", value: "2+ yrs", hint: "Industry software engineering" },
    { label: "Shipped", value: "8+ projects", hint: "Full-stack, real-time & distributed" },
    { label: "Studying", value: "M.App.Comp", hint: "University of Windsor (2024 – Dec 2025)" },
  ] as StatItem[],

  featuredProjects: [
    {
      title: "Clade",
      tagline: "Real-time collaborative platform",
      description:
        "Real-time collaborative coding platform enabling multiple users to edit shared documents simultaneously. Reduced update latency by 25% and supported 100+ concurrent sessions with sub-100ms response times. Optimized MongoDB queries and backend state handling for conflict-free concurrent edits.",
      roleContext: "Architecture & Backend / Full-Stack",
      stack: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/JAYKEv/Clade",
      image: "/projects/clade.svg",
    },
    {
      title: "Distributed File System",
      tagline: "Replication & fault tolerance",
      description:
        "Distributed file system with replication, fault tolerance, and concurrent file access. Designed socket-based protocols for reliable network communication and locking mechanisms for safe multi-node concurrent access.",
      roleContext: "Systems Programming & Distributed Architecture",
      stack: ["C", "Networking", "Distributed Systems", "Socket Programming"],
      github: "https://github.com/JAYKEv/Distributed-File-System",
      image: "/projects/dfs.svg",
    },
    {
      title: "Web Clinic",
      tagline: "High-concurrency backend",
      description:
        "Backend system for patient data, appointments, and medical records. Supported 1000+ simultaneous requests with sub-200ms response time; optimized complex MongoDB queries, improving execution speed by 45%.",
      roleContext: "Backend API Engineering & Optimization",
      stack: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/JAYKEv/Web-Clinic-JK",
      image: "/projects/web-clinic.svg",
    },
  ] as FeaturedProject[],

  archiveProjects: [
    {
      title: "Pizza Ordering System",
      description: "Full-stack pizza ordering platform with secure REST APIs, microfrontend architecture, and optimized MongoDB schemas.",
      stack: ["React", "Node.js", "MongoDB", "Microfrontend", "TypeScript"],
      github: "https://github.com/JAYKEv/pizza-app-mern-microfrontend-ts",
      category: "Full-Stack",
    },
    {
      title: "IdentityGuard-Service",
      description: "Production-grade authentication service with refresh-token rotation, RBAC, and audit logging.",
      stack: ["Node.js", "TypeScript", "JWT", "Express", "Docker", "RBAC"],
      github: "https://github.com/JAYKEv/IdentityGuard-Service",
      category: "Security",
    },
    {
      title: "SecureAuth-Portal",
      description: "Authentication portal with secure session management, token handling, and robust access controls.",
      stack: ["React", "Node.js", "TypeScript", "Express", "JWT", "Docker"],
      github: "https://github.com/JAYKEv/SecureAuth-Portal",
      category: "Security",
    },
    {
      title: "AuthCore-Service",
      description: "Reusable API foundation for user authentication, security validation, and token verification.",
      stack: ["Node.js", "TypeScript", "Express", "JWT", "Docker"],
      github: "https://github.com/JAYKEv/AuthCore-Service",
      category: "Backend",
    },
    {
      title: "Netflix Clone",
      description: "Responsive video streaming platform frontend with dynamic catalog browsing and modern UI components.",
      stack: ["React", "Node.js"],
      github: "https://github.com/JAYKEv/React1",
      category: "Frontend",
    },
    {
      title: "InstaEats",
      description: "Food ordering application with cart management, order tracking, and clean API integration.",
      stack: ["Node.js", "React"],
      github: "https://github.com/JAYKEv/InstaEats",
      category: "Full-Stack",
    },
    {
      title: "Code4Share",
      description: "Lightweight code snippet sharing and collaboration platform designed for developers.",
      stack: ["JavaScript", "Developer Tools"],
      github: "https://github.com/JAYKEv/Code4Share-6851cdfa7cad57c47c7ad7afb63befb16659b2cf",
      category: "Tools",
    },
    {
      title: "Cryptomaster",
      description: "Real-time cryptocurrency tracking platform with live price charts, market stats, and responsive UI.",
      stack: ["React", "Node.js"],
      github: "https://github.com/JAYKEv/Cryptomaster",
      category: "Frontend",
    },
    {
      title: "Library Management System",
      description: "Comprehensive desktop library management application for cataloging, issue tracking, and inventory.",
      stack: ["Java", "MySQL"],
      github: "https://github.com/JAYKEv/Library-Management-System-JK",
      category: "Backend / Desktop",
    },
    {
      title: "ClinicPulse",
      description: "Healthcare interface for patient appointments, medical records management, and staff scheduling.",
      stack: ["JavaScript", "Healthcare App"],
      github: "https://github.com/JAYKEv/ClinicPulse-main",
      category: "Frontend",
    },
    {
      title: "Sales Report Dashboard",
      description: "Interactive business intelligence dashboard analyzing sales trends, KPIs, and revenue metrics.",
      stack: ["PowerBI", "DAX"],
      github: "https://github.com/JAYKEv/Sales_Report-PowerBI-JK",
      category: "Analytics",
    },
    {
      title: "Cricket App",
      description: "Live cricket score tracking application with interactive match statistics and player profiles.",
      stack: ["React", "TypeScript"],
      github: "https://github.com/JAYKEv/Cricket_App",
      category: "Frontend",
    },
  ] as ArchiveProject[],

  about: {
    bio: "I'm Jaykumar — a Software Engineer with a focus on full-stack and backend development. I build scalable backend systems, full-stack applications, and real-time platforms, with experience designing APIs, handling concurrency, optimizing performance, and delivering software used by hundreds of users. I've worked across distributed systems, networking, real-time communication, and security-focused applications, and I'm currently seeking Software Engineer roles focused on backend, systems, and full-stack development.",
    glanceItems: [
      {
        id: "education",
        title: "M.App.Comp — University of Windsor",
        description: "Master of Applied Computing (Sep 2024 – Dec 2025), Ontario, Canada",
        iconName: "graduation-cap",
        badge: "Education",
      },
      {
        id: "location",
        title: "Based in Toronto, Ontario",
        description: "Available for on-site & remote roles across Canada & North America",
        iconName: "map-pin",
        badge: "Location",
      },
      {
        id: "previous",
        title: "Ex-Software Engineer @ Delta Tech-Up Ltd",
        description: "1.5+ years building high-throughput backend services and APIs",
        iconName: "briefcase",
        badge: "Experience",
      },
      {
        id: "focus",
        title: "Exploring Distributed Systems & Cloud-Native",
        description: "Microservices, concurrency, distributed storage, and low-latency APIs",
        iconName: "compass",
        badge: "Focus",
      },
      {
        id: "status",
        title: "Open to Full-Time Roles",
        description: "Software Engineer / Backend / Full-Stack · jay.kevadiya.dev@gmail.com",
        iconName: "sparkles",
        badge: "Status",
      },
    ] as GlanceItem[],
  },

  skillGroups: [
    {
      title: "Languages I write in",
      description: "Core languages used across backend services, systems, and frontend interfaces.",
      skills: [
        { name: "Python", icon: "SiPython" },
        { name: "TypeScript", icon: "SiTypescript" },
        { name: "JavaScript", icon: "SiJavascript" },
        { name: "C++", icon: "SiCplusplus" },
        { name: "React", icon: "SiReact" },
      ],
    },
    {
      title: "Services & APIs",
      description: "Frameworks, protocols, and data layers powering reliable, concurrent architectures.",
      skills: [
        { name: "Node.js", icon: "SiNodedotjs" },
        { name: "Express", icon: "SiExpress" },
        { name: "Socket.io", icon: "SiSocketdotio" },
        { name: "JWT / Auth", icon: "SiJsonwebtokens" },
        { name: "MongoDB", icon: "SiMongodb" },
      ],
    },
    {
      title: "Ship & operate",
      description: "DevOps, cloud infra, database systems, and developer workflow tools.",
      skills: [
        { name: "Docker", icon: "SiDocker" },
        { name: "AWS", icon: "SiAmazonwebservices" },
        { name: "Git", icon: "SiGit" },
        { name: "Linux", icon: "SiLinux" },
        { name: "MySQL", icon: "SiMysql" },
      ],
    },
  ] as SkillCategory[],

  allLanguages: [
    "C",
    "C++",
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "Go",
    "Ruby",
    "Swift",
    "Bash",
  ],

  experience: [
    {
      type: "work",
      roleOrDegree: "Software Engineer",
      organization: "Delta Tech-Up Ltd",
      period: "Jan 2023 – Jun 2024",
      location: "Ahmedabad, India",
      bullets: [
        "Engineered scalable backend services using Node.js and Python, improving system performance by 35% through API workflow optimization and reduced redundant data processing in distributed environments.",
        "Refactored GraphQL and REST APIs and optimized MongoDB queries, reducing latency by 45% to support high-throughput transaction and analytics systems.",
        "Enhanced reliability and security by implementing structured logging, role-based access control, and automated testing aligned with modern DevOps practices.",
        "Developed and maintained full-stack web applications with React, Node.js, and MongoDB, ensuring seamless frontend-backend integration.",
        "Collaborated with cross-functional teams in Agile environments, participating in sprint planning, daily standups, and retrospectives.",
      ],
      tags: ["TypeScript", "React", "Node.js", "MongoDB", "GraphQL", "REST APIs", "RBAC"],
    },
    {
      type: "work",
      roleOrDegree: "Software Engineer Intern",
      organization: "Kintu Designs Pvt Ltd",
      period: "May 2022 – Jul 2022",
      location: "Surat, India",
      bullets: [
        "Built interactive UIs with React and implemented low-latency WebSocket communication, increasing real-time collaboration efficiency by 30%.",
        "Created reusable components and performed unit testing, improving code quality and accelerating feature delivery.",
        "Participated in Agile sprints, code reviews, and deployment cycles using Git.",
        "Developed responsive web interfaces using React, HTML5, CSS3, and JavaScript.",
        "Implemented UI/UX improvements based on user feedback and design specs.",
      ],
      tags: ["React", "WebSockets", "JavaScript", "HTML5", "CSS3", "Git"],
    },
    {
      type: "education",
      roleOrDegree: "Master of Applied Computing",
      organization: "University of Windsor",
      period: "Sep 2024 – Dec 2025",
      location: "Ontario, Canada",
      bullets: [
        "Specialized in Distributed Systems, Advanced Software Engineering, Cloud Architecture, and Data Management.",
      ],
      tags: ["Distributed Systems", "Cloud Computing", "Algorithms", "System Design"],
    },
    {
      type: "education",
      roleOrDegree: "B.Tech in Computer Science Engineering",
      organization: "Charotar University of Science and Technology",
      period: "Jun 2019 – Apr 2023",
      location: "Anand, India",
      bullets: [
        "Graduated with distinction; coursework focused on Data Structures & Algorithms, Operating Systems, Database Management Systems, and Computer Networks.",
      ],
      tags: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Networking"],
    },
  ] as ExperienceItem[],

  contact: {
    heading: "Let's build something.",
    email: "jay.kevadiya.dev@gmail.com",
    github: "https://github.com/JAYKEv",
    linkedin: "https://www.linkedin.com/in/jay-kevadiya-a43432190/",
    statusLine: "Open to full-time roles · Toronto, Ontario, Canada",
    location: "Toronto, Ontario, Canada",
  },

  nav: [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work", hasDropdown: true },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Connect", hasDropdown: true },
  ],
};
