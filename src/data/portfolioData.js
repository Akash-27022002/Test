export const portfolio = {
  name: "Akash Sachan",
  initials: "AS",
  title: "Backend Developer",
  status: "Open to opportunities",
  email: "akahsachanboss@gmail.com",
  phone: "+91 7007796127",
  location: "India (IST)",
  linkedin: "https://linkedin.com/in/akash-sachan-646515214/",
  github: "https://github.com/devwithakash",
  resumeUrl: "https://drive.google.com/file/d/1z_wLJriKnfUoZ-EwifpxqWmDwd9xc8lB/view?usp=sharing",

  about:
    "I design and build scalable backend systems with clean architecture, strong security, and operational excellence. My experience spans microservices, real-time communication with WebSockets, and data-driven APIs. I care about reliability, testing, and performance from day one.",

  experience: [
    {
      role: "System Engineer",
      company: "Krishworks Technology & Research Labs Pvt. Ltd",
      period: "Feb 2023 – Present",
      bullets: [
        "Developed robust, scalable REST APIs using Spring Boot, Node.js, and Django following best practices.",
        "Collaborated with frontend and QA to deliver high-quality features on time.",
        "Implemented unit testing (Jest) to ensure reliability and maintainability.",
        "Utilized CI/CD for automated testing, integration, and deployment.",
        "Containerized applications with Docker across environments.",
        "Built Authentication & Authorization system, ensuring data integrity.",
        "Designed Role-Based Access Control (RBAC) APIs for granular permissions."
      ]
    },
    {
      role: "Intern Backend Engineer",
      company: "Krishworks",
      period: "Jun 2022 – Oct 2022",
      bullets: [
        "Built backend for content uploader tool in Slato mobile app.",
        "Developed APIs, models, and serializers in Django REST Framework for a CRM application."
      ]
    }
  ],

  skills: {
    languages: ["Java", "Kotlin", "Python", "JavaScript (Node.js)"],
    frameworks: ["Spring", "Spring Boot", "Django", "Node.js", "Express.js"],
    tools: ["Eureka Server", "API Gateway", "Docker", "IntelliJ IDEA", "VS Code", "Postman"],
    databases: ["PostgreSQL", "SQL", "MongoDB"],
    advanced: ["Microservices", "REST API", "Async Programming", "Dependency Injection", "AuthN/AuthZ", "ORM", "WebSockets"],
    devops: ["CI/CD", "Containerization", "Testing (Jest/JUnit)"]
  },

  strengths: [
    { label: "API Design & Scalability", level: 92, tag: "Expert", gradient: "from-cyan-400 to-indigo-500" },
    { label: "Security (Auth, RBAC)", level: 88, tag: "Advanced", gradient: "from-emerald-400 to-teal-500" },
    { label: "DevOps & Testing", level: 84, tag: "Advanced", gradient: "from-amber-400 to-pink-500" }
  ],

  projects: [
    {
      title: "Microservices Quiz Platform",
      description:
        "Quiz and Question services with Spring Boot, discovery via Eureka, routing through API Gateway, and load-balanced scaling with isolated databases.",
      tech: ["Spring Boot", "Eureka", "API Gateway", "PostgreSQL"],
      links: { repo: "#", caseStudy: "#" },
      icon: "Layers"
    },
    {
      title: "Real-time Chat Application",
      description:
        "WebSocket-powered real-time messaging with authentication, persistence, and horizontal scaling for high concurrency.",
      tech: ["Spring Boot", "WebSockets", "Security"],
      links: { repo: "#", caseStudy: "#" },
      icon: "MessagesSquare"
    },
    {
      title: "WhatsApp Clone (Kotlin + Firebase)",
      description:
        "Messaging app with Firebase Auth (SMS), Cloud Functions, and push notifications for reliable delivery.",
      tech: ["Kotlin", "Firebase", "Notifications"],
      links: { repo: "#", demo: "#" },
      icon: "Smartphone"
    },
    {
      title: "Weather API App",
      description:
        "Kotlin app leveraging Retrofit to fetch weather data and present real-time city temperatures.",
      tech: ["Kotlin", "Retrofit", "REST"],
      links: { repo: "#" },
      icon: "CloudSun"
    },
    {
      title: "Plant Disease Detection (ML)",
      description:
        "CNN + DenseNet model for leaf disease classification using curated datasets and transfer learning.",
      tech: ["CNN", "DenseNet", "Python"],
      links: { repo: "#" },
      icon: "Leaf"
    },
    {
      title: "My Awesome Cart (Django)",
      description:
        "E-commerce backend with Django Admin for product management and category-based storefront rendering.",
      tech: ["Django", "DRF", "PostgreSQL"],
      links: { repo: "#" },
      icon: "ShoppingBag"
    }
  ],

  education: [
    {
      degree: "M.Tech, Computer Science & Information Security",
      place: "National Institute of Technology, Karnataka, Surathkal",
      period: "2025 – present",
      // meta: "CGPA: 8.3",
      icon: "Appearing"
    },
    {
      degree: "B.Tech, Information Technology",
      place: "Rajkiya Engineering College, Banda, Uttar Pradesh",
      period: "2019 – 2023",
      meta: "CGPA: 8.3",
      icon: "Award"
    },
    {
      degree: "Intermediate (12th)",
      place: "Morning Star Children’s Academy, Orai, Uttar Pradesh",
      period: "2016 – 2018",
      meta: "Percentage: 72%",
      icon: "Percent"
    }
  ],

  profiles: [
    { site: "GeeksforGeeks", subtitle: "Score: 250+ · Strong DSA practice.", href: "#", icon: "CodeXml", color: "text-emerald-400" },
    { site: "LeetCode", subtitle: "150+ problems solved.", href: "#", icon: "Braces", color: "text-indigo-400" },
    { site: "HackerRank", subtitle: "5★ achievements.", href: "#", icon: "Terminal", color: "text-pink-400" }
  ]
};
