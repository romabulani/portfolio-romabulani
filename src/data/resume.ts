export const profile = {
  name: "Roma Bulani",
  title: "Senior Frontend Engineer",
  summary:
    "Senior Software Engineer specializing in Frontend Architecture with 5+ years of experience building scalable, high-performance web applications. Expertise in React, TypeScript, Micro Frontends, GraphQL, and modern UI systems.",
  email: "romabulani@gmail.com",
  phone: "+91 9881962879",
  links: {
    linkedin: "https://www.linkedin.com/in/romabulani/",
    github: "https://github.com/romabulani",
    twitter: "https://twitter.com/romabulani",
  },
  resumeUrl: "/Roma_Bulani.pdf",
};

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "GraphQL",
      "Apollo Client",
      "Module Federation",
      "Micro Frontends",
      "Zustand",
      "Redux Toolkit",
      "Tailwind CSS",
      "i18n / RTL",
    ],
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "Java", "Python"],
  },
  {
    label: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
  {
    label: "CMS & Tooling",
    skills: ["Contentful", "Cloudinary", "Webpack", "Vite", "Rollup", "Rspack", "Git"],
  },
];

export const experience = [
  {
    role: "Frontend Engineer L3",
    company: "Alef Education",
    location: "UAE (Remote)",
    period: "March 2025 - Present",
    highlights: [
      "Led migration of the learning player from a package-based architecture to a Micro Frontend (MFE), improving scalability and deployment flexibility.",
      "Built the content authoring/editor platform on a TipTap-based editor, contributing to a 50% improvement in authoring efficiency.",
      "Built a slide-based learning player with multiple interactive widgets, progress tracking, localization (Lokalise), and full Arabic RTL support.",
      "Integrated GraphQL APIs with Apollo Client and Zustand, building reusable abstractions and shared UI components used across multiple projects.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cimpress (Vista)",
    location: "Mumbai (Remote), India",
    period: "July 2023 - March 2025",
    highlights: [
      "Designed reusable Smart Component libraries as npm packages, reducing frontend implementation effort by 90%.",
      "Developed 3 Contentful Apps, streamlining content authoring and reducing errors by 50%.",
      "Built end-to-end Social Feed Generation pipeline with daily automation, reducing stale-data errors.",
      "Built Data Resolver Gatsby Plugins as npm packages consumed by multiple micro-frontends.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Graphy By Unacademy",
    location: "Bangalore (Remote), India",
    period: "May 2022 - June 2023",
    highlights: [
      "Improved Lighthouse score for NextLevel, boosting SEO by 10% and performance by 15%.",
      "Shipped 25+ features for Graphy, a Product Hunt top-10 product, lifting daily viewers from 75 to 755.",
      "Built analytics and revenue dashboards with Recharts for creator business metrics.",
      "Delivered 10+ features for Graphy Link, including Zoom integration and scheduling flows.",
    ],
  },
  {
    role: "Application Development Analyst",
    company: "Accenture",
    location: "Mumbai (Remote), India",
    period: "January 2021 - February 2022",
    highlights: [
      "Trained professionally in Java, Spring MVC, and Spring Boot.",
      "Built Spring Boot services to fetch, validate, and persist API data in SQL.",
      "Single-handedly migrated 30+ Unix jobs from Oracle 12c to 19c during a database upgrade.",
    ],
  },
];

export const projects = [
  {
    name: "Bakin Lane",
    description:
      "Full-stack e-commerce platform for cakes and muffins with JWT auth, search, pagination, and Razorpay payments.",
    tech: ["React", "Razorpay", "Cloudinary", "React Router"],
    link: "https://github.com/romabulani/bakinLane-react",
    demo: "https://bakin-lane.netlify.app/",
  },
  {
    name: "Bakin Gram",
    description:
      "Social media app to share posts and learnings, with JWT auth and real-time user discovery.",
    tech: ["React", "Redux Toolkit", "Chakra UI", "JWT"],
    link: "https://github.com/romabulani/BakinGram",
    demo: "https://bakingram.netlify.app/",
  },
  {
    name: "Live Collaboration",
    description: "Real-time collaborative whiteboard built with canvas and WebSockets.",
    tech: ["React", "TypeScript", "Canvas", "WebSocket"],
    link: "https://github.com/romabulani/live-collaboration",
    demo: "https://draw-on-whiteboard.netlify.app/",
  },
  {
    name: "Calendar Events",
    description: "Calendar events app integrating Google Calendar API with a Material UI interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Google Calendar API"],
    link: "https://github.com/romabulani/calendar-events",
    demo: "https://calendarevents.vercel.app/",
  },
  {
    name: "Bakin Mania",
    description:
      "A quiz app to test your knowledge of cakes, muffins, baking, and Indian sweets, with Firebase auth.",
    tech: ["React", "TypeScript", "Firebase"],
    link: "https://github.com/romabulani/bakinMania-react",
    demo: "https://bakin-mania.netlify.app/",
  },
  {
    name: "Bakin Zone",
    description: "A video library for learning to bake desserts.",
    tech: ["React", "React Router", "React Player"],
    link: "https://github.com/romabulani/BakinZone",
    demo: "https://bakinzone.netlify.app/",
  },
  {
    name: "Muffin UI",
    description: "A one-stop component and layout library for building websites quickly.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/romabulani/MuffinUI",
    demo: "https://muffinui.netlify.app/",
  },
];

export const blogs = [
  {
    title: "Importance of Key Prop In React",
    excerpt:
      "Hello fellow readers, hope you are doing well. In this blog, we will learn what keys are in React and why they are important. We'll cover how React uses keys to identify which items have changed, been added, or removed during reconciliation when rendering lists...",
    link: "https://romabulani.hashnode.dev/importance-of-key-prop-in-react",
  },
  {
    title: "Different Promise Methods",
    excerpt:
      "There are various methods in Promises. These methods may seem trivial at first, but I hope you'll understand each one of them in this blog. We'll explore Promise.all(), Promise.allSettled(), Promise.race(), and Promise.any() with examples showing how each behaves differently...",
    link: "https://romabulani.hashnode.dev/different-promise-methods",
  },
  {
    title: "Shallow Copy Vs Deep Copy",
    excerpt:
      "Hello fellow readers, hope you all are doing good. We're often asked this in interviews, especially in output-based questions. This post covers the distinction between shallow and deep copying of objects in JavaScript with practical code examples...",
    link: "https://romabulani.hashnode.dev/shallow-copy-vs-deep-copy",
  },
  {
    title: "Work Life Balance",
    excerpt:
      "Today I want to talk about a topic that's very important in everyone's lives: work-life balance. Do you also feel tired in the corporate world's 9-5 job? I discuss the impact of technology on work-life balance and share personal and workplace tips for maintaining equilibrium...",
    link: "https://romabulani.hashnode.dev/work-life-balance",
  },
  {
    title: "All About Domains",
    excerpt:
      "Hello fellow readers! Have you ever wondered what a domain in a URL is, how it works, and its significance? This guide explains domain names, the DNS system, and various domain types including TLDs and ccTLDs...",
    link: "https://romabulani.hashnode.dev/all-about-domains",
  },
  {
    title: "Git Terminologies and Commands",
    excerpt:
      "Are you a beginner in Git? If so, this guide covers the high-level flow of Git and the commands that are widely used. It introduces Git as a version control system and explains key terminology and commonly used commands...",
    link: "https://romabulani.hashnode.dev/git-terminologies-and-commands",
  },
];

export const blogProfileUrl = "https://romabulani.hashnode.dev/";

export const education = {
  degree: "Bachelor of Engineering (BE) in Computer Engineering",
  school: "University of Mumbai, India",
  period: "2016 - 2020",
  gpa: "9.4 / 10",
};
