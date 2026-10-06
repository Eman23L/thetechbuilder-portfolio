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
    { value: 8, suffix: "+", label: "Major Projects" },
    { value: 10, suffix: "+", label: "Core Technologies" },
    { value: 2, suffix: "", label: "Live Production Platforms" },
  ],
  focusAreas: [
    { title: "Web Platforms", description: "Responsive production interfaces built with React, Next.js, TypeScript, and structured backend data.", icon: "layout" },
    { title: "Data Automation", description: "Python automation, scraping, transformation, and repeatable data workflows.", icon: "bot" },
    { title: "Dashboard Reporting", description: "Clear operational dashboards, reporting views, filters, summaries, and business intelligence outputs.", icon: "chart" },
    { title: "Workflow Systems", description: "Approval flows, admin dashboards, contribution systems, and low-friction internal tools.", icon: "workflow" },
    { title: "Cloud & Remote Development", description: "Remote coding environments, Linux workflows, Cloudflare tunnels, and reproducible dev setups.", icon: "cloud" },
  ],
  projects: [
    { title: "GetFlow - Contributions Management Platform", summary: "Production platform for organisations to manage contributions, payments, and reporting.", description: "Designed and built a full production platform to manage contributions, payments, and reporting for organisations. The system includes secure admin dashboards, structured data handling, and reporting tools that allow users to track activity, monitor performance, and generate summaries. The focus of this project was building a reliable backend structure, clean data flows, and an intuitive interface that simplifies complex financial and operational processes.", stack: ["React", "Next.js", "TypeScript", "SQL", "Supabase"], github: "https://github.com/Eman23L/contrib-platform", live: "https://getflow.thetechbuilder.co.uk" },
    { title: "Signal Radar - Market Demand Intelligence", summary: "Daily AI-assisted scanner that finds people describing problems they would pay to solve.", description: "Built an automated daily scanner that finds people publicly describing problems they would pay to solve. It collects signals from Hacker News, GitHub, Stack Exchange, App Store reviews, and UK public-sector tenders (Find a Tender OCDS API), scores each one for pain and willingness to pay, uses Claude AI to separate real demand from casual chat, groups repeated problems across sources, and sends a ranked morning digest to Telegram. Runs entirely on GitHub Actions with zero runtime dependencies, offline fixture-based tests, and UK GDPR-minded data handling (usernames are hashed before storage).", stack: ["TypeScript", "Node.js", "GitHub Actions", "Claude API", "REST APIs", "Telegram Bot API"] },
    { title: "UK Job Search Intelligence Platform", summary: "Job data platform that normalises salaries, analyses skills, and scores role matches.", description: "Built a backend-first job intelligence platform that collects permitted job listings, normalises salaries across annual, day-rate, and hourly formats, analyses in-demand skills, and scores how well each role matches a candidate. Includes background scrape runs with live status, PostgreSQL persistence with migrations, and a Next.js dashboard for jobs, sources, salary analytics, and saved roles.", stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Next.js", "Docker"], github: "https://github.com/Eman23L/job-intelligence-platform" },
    { title: "FutureMe - Monthly Planner PWA", summary: "Live offline-first planner for neurodivergent users and shift workers, with push reminders.", description: "Designed and built an installable, offline-first monthly planner for neurodivergent users and shift workers. An auto-planner blocks sleep first, places fixed commitments, applies recovery rules, then fits routines around conflicts, with capacity modes (high, normal, tired, survival) that adapt the plan to the user's energy. Real push reminders are delivered through Web Push, Supabase, and a scheduled Vercel sender.", stack: ["React", "TypeScript", "Vite", "PWA", "Supabase", "Web Push"], github: "https://github.com/Eman23L/Future_Me", live: "https://futureme.thetechbuilder.co.uk" },
    { title: "UK Homelessness Support Data Pipeline", summary: "Pipeline turning inconsistent homelessness data into clean datasets for decisions.", description: "Built a data pipeline to collect, clean, and structure homelessness-related data for analysis and reporting. Focused on transforming inconsistent source data into usable datasets for decision-making.", stack: ["Python", "BeautifulSoup", "Requests", "JSON"], github: "https://github.com/Eman23L/UK-homelessness-system-MVP" },
    { title: "Self Hosted Remote Development Environment", summary: "Self-hosted environment for remote coding, testing, and deployment.", description: "Designed and deployed a self-hosted development environment to enable remote coding, testing, and deployment. Focused on improving development flexibility and system reliability.", stack: ["Linux", "WSL", "Bash", "Cloudflare"] },
    { title: "Opportunity DecisionAI", summary: "AI-assisted tool for evaluating opportunities from structured inputs.", description: "Developed an AI-assisted decision support tool to help evaluate opportunities based on structured inputs and data-driven insights.", stack: ["React", "Next.js", "TypeScript", "SQL"], github: "https://github.com/Eman23L/opportunity-ai" },
    { title: "Power Platform Automation", summary: "Power Platform workflows that cut manual processes and connect data across systems.", description: "Built workflow automations using Power Platform to reduce manual processes, improve efficiency, and integrate data across systems.", stack: ["Power Apps", "Power Automate", "Power BI"] },
    { title: "The Tech Builder Portfolio", summary: "This site: projects, focus areas, and experience in one interactive interface.", description: "Designed and built a personal portfolio site to present projects, technical focus areas, experience, and contact routes in a clean interactive interface.", stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"], github: "https://github.com/Eman23L/thetechbuilder-portfolio" },
  ],
  skills: ["Python", "React", "Next.js", "JavaScript", "TypeScript", "SQL", "Power BI", "Power Apps", "Power Automate", "Git", "Linux", "Cloudflare", "Automation", "Dashboards", "APIs", "FastAPI", "PostgreSQL", "Node.js", "GitHub Actions", "AI Integration (Claude API)", "Problem Solving"],
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
