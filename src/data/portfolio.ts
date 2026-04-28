export const portfolio = {
  name: "Emmanuel Bamgbala",
  brand: "The Tech Builder",
  domain: "thetechbuilder.co.uk",
  role: "Software Engineer",
  email: "bamgbalae74@gmail.com",
  github: "https://github.com/Eman23L",
  linkedin: "https://www.linkedin.com/in/emmanuel-bamgbala-b118b33b8/",
  cvPath: "/cv/emmanuel-bamgbala-cv.pdf",
  summary:
    "Analytical software engineer with 4+ years of experience delivering digital solutions across engineering, automation, dashboards, data systems, workflow platforms, reporting systems, and modern web applications.",
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
    "I build practical, reliable digital products that turn complex workflows into clean software systems. My work spans modern web platforms, automation tooling, data pipelines, dashboards, reporting systems, and low-code business applications.",
    "I bring an analytical engineering mindset to product delivery: understand the operational problem, structure the data, automate the repeatable work, and design interfaces that make decisions faster.",
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
    { title: "GetFlow - Contributions Management Platform", description: "Built a production platform for organisations to manage contributions, payments, reports, secure admin dashboards, filtering and summaries.", stack: ["React", "Next.js", "TypeScript", "SQL", "Supabase"] },
    { title: "UK Homelessness Support Data Pipeline", description: "Built scalable Python pipeline aggregating homelessness support services with scraping and structured data outputs.", stack: ["Python", "BeautifulSoup", "Requests", "JSON"] },
    { title: "Self Hosted Remote Development Environment", description: "Built remote browser coding environment using code-server, WSL Ubuntu, Cloudflare Tunnel and automation.", stack: ["Linux", "WSL", "Bash", "Cloudflare"] },
    { title: "Opportunity DecisionAI", description: "Built MVP recommendation platform helping users discover career and income opportunities.", stack: ["React", "Next.js", "TypeScript", "SQL"] },
    { title: "Power Platform Automation", description: "Built dashboards, approvals, automated flows and reporting systems.", stack: ["Power Apps", "Power Automate", "Power BI"] },
  ],
  skills: ["Python", "React", "Next.js", "JavaScript", "TypeScript", "SQL", "Power BI", "Power Apps", "Power Automate", "Git", "Linux", "Cloudflare", "Automation", "Dashboards", "APIs", "Problem Solving"],
  timeline: [
    { title: "Software Engineer", organisation: "AtkinsRealis", period: "April 2021 - Present", detail: "Delivering digital engineering, workflow automation, reporting systems, dashboards, and modern software solutions." },
    { title: "BSc Digital and Technological Solutions", organisation: "University of Roehampton", period: "2:1", detail: "Degree focused on applied technology, software delivery, business systems, and digital solution design." },
  ],
} as const;

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;
