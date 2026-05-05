export const portfolio = {
  name: "Emmanuel Bamgbala",
  brand: "The Tech Builder",
  domain: "thetechbuilder.co.uk",
  role: "Software Engineer",
  email: "bamgbalae74@gmail.com",
  github: "https://github.com/Eman23L",
  linkedin: "https://www.linkedin.com/in/emmanuel-bamgbala-b118b33b8/",
  cvPath: "/cv/Emmanuel_Bamgbala_CV.pdf",
  summary:
    "I am a software engineer with an engineering background, focused on building practical digital systems that solve real operational problems.",
  hero:
    "Building modern digital systems, automation tools, and scalable platforms.",
  typingRoles: [
    "Software Engineer",
    "React Developer",
    "Python Automation Developer",
    "Digital Solutions Builder",
    "The Tech Builder",
  ],
  about: [
    "My work sits between software delivery, automation, dashboards, reporting systems, and civil engineering workflows. I enjoy taking complex, manual, or unclear processes and turning them into structured tools that are easier to use, easier to manage, and easier to scale.",
    "What makes my approach different is that I do not only think about code. I think about the people using the system, the data behind it, the business process around it, and how the final product can make decisions clearer and work more efficient.",
  ],
  stats: [
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: "+", label: "Major Projects" },
    { value: 10, suffix: "+", label: "Core Technologies" },
    { value: 1, suffix: "", label: "Live Production Platform" },
  ],
  focusAreas: [
    { title: "Web Platforms", description: "Responsive production interfaces built with React, Next.js, TypeScript, and structured backend data.", icon: "layout" },
    { title: "Data Automation", description: "Python automation, scraping, transformation, and repeatable data workflows.", icon: "bot" },
    { title: "Dashboard Reporting", description: "Clear operational dashboards, reporting views, filters, summaries, and business intelligence outputs.", icon: "chart" },
    { title: "Workflow Systems", description: "Approval flows, admin dashboards, contribution systems, and low-friction internal tools.", icon: "workflow" },
    { title: "Cloud & Remote Development", description: "Remote coding environments, Linux workflows, Cloudflare tunnels, and reproducible dev setups.", icon: "cloud" },
  ],
  projects: [
    { title: "GetFlow - Contributions Management Platform", description: "Built a production platform for organisations to manage contributions, payments, reports, secure admin dashboards, filtering and summaries.", stack: ["React", "Next.js", "TypeScript", "SQL", "Supabase"], github: "Coming soon" },
    { title: "UK Homelessness Support Data Pipeline", description: "Built scalable Python pipeline aggregating homelessness support services with scraping and structured data outputs.", stack: ["Python", "BeautifulSoup", "Requests", "JSON"], github: "Coming soon" },
    { title: "Self Hosted Remote Development Environment", description: "Built remote browser coding environment using code-server, WSL Ubuntu, Cloudflare Tunnel and automation.", stack: ["Linux", "WSL", "Bash", "Cloudflare"], github: "Coming soon" },
    { title: "Opportunity DecisionAI", description: "Built MVP recommendation platform helping users discover career and income opportunities.", stack: ["React", "Next.js", "TypeScript", "SQL"], github: "Coming soon" },
    { title: "Power Platform Automation", description: "Built dashboards, approvals, automated flows and reporting systems.", stack: ["Power Apps", "Power Automate", "Power BI"], github: "Coming soon" },
  ],
  skills: ["Python", "React", "Next.js", "JavaScript", "TypeScript", "SQL", "Power BI", "Power Apps", "Power Automate", "Git", "Linux", "Cloudflare", "Automation", "Dashboards", "APIs", "Problem Solving"],
  timeline: [
    {
      title: "Software Engineer",
      organisation: "AtkinsRealis",
      period: "April 2021 - Present",
      detail: [
        "Working within an engineering environment, I deliver digital tools that support real project and operational workflows. My role combines software engineering, automation, reporting, dashboard development, and business systems thinking.",
        "I work across the gap between technical delivery and engineering teams: understanding how people currently manage data, identifying repeatable manual processes, and building practical systems that make information easier to access, track, and act on.",
      ],
      highlights: [
        "Built and improved dashboards and reporting tools for clearer operational visibility",
        "Supported workflow automation across engineering and business processes",
        "Worked with data from Excel, SharePoint, Power BI, and internal systems",
        "Applied software delivery skills in a civil engineering and infrastructure context",
      ],
    },
    {
      title: "BSc Digital and Technological Solutions",
      organisation: "University of Roehampton",
      period: "2:1",
      detail: [
        "My degree focused on applied technology, software delivery, business systems, digital transformation, and practical solution design.",
        "It strengthened my ability to connect technical implementation with organisational needs, including how software, data, automation, and user experience can be used to improve real workflows.",
      ],
      highlights: [
        "Applied software development and digital solution delivery",
        "Business systems and technology implementation",
        "Product thinking, usability, and problem-solving",
        "Connecting technical decisions to real user and business needs",
      ],
    },
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
