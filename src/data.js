import proj1 from "./assets/Project 1 Computerized Sales & Inventory csharp Windows Form.png";
import proj2 from "./assets/Project 2 Blog Post using EJS, REST API, expressjs.png";
import proj3 from "./assets/Project 3 Book Notes using REST API, Expressjs and EJS.png";
import proj4 from "./assets/Project 4 Family Travel Tracker.png";
import proj5 from "./assets/Project 5 FlexPOS.png";
import proj6 from "./assets/Project 6 pokesearch.png";
import proj7 from "./assets/Project 7 MhY Ecommerce practice using React, expressjs, postgresql, REST API.png";
import proj8 from "./assets/Project 8 Chatbot.png";

import cert1 from "./assets/Certificate 1 The Complete Full-Stack Web Development Bootcamp.jpg";
import cert2 from "./assets/Certificate 2 React 19.png";
import cert3 from "./assets/Certificate 3 Github Foundations.png";
import cert4 from "./assets/Certificate 4 Docker and Kubernetes.png";
import cert5 from "./assets/Certificate 5 Introduction to AI Agents.png";
import cert6 from "./assets/Certificate 6 Python Essentials 1.png";

export const projects = [
  {
    id: 1,
    title: "Computerized Sales & Inventory",
    description: "A Sales & Inventory Desktop app for Wooof Gang pet shop. ",
    tools: ["C#", "Windows Form", "SQL Server Express"],
    image: proj1,
    repoLink: "https://github.com/tianiixd/Wooof-Gang-Sales-Inventory.git",
  },
  {
    id: 2,
    title: "Bloggerist",
    description: "A simple crud webapp to write blog posts.",
    tools: ["EJS", "TypeScript", "Express.js", "MongoDB"],
    image: proj2,
    repoLink: "https://github.com/tianiixd/Blog-WebApp.git",
  },
  {
    id: 3,
    title: "Book Notes",
    description:
      "A simple crud webapp to input the book that you have finished reading.",
    tools: ["EJS", "TypeScript", "Express.js", "PostgreSQL"],
    image: proj3,
    repoLink: "https://github.com/tianiixd/Book-Notes.git",
  },
  {
    id: 4,
    title: "Family Travel Tracker",
    description:
      "World Map Project to track places that me and my family have visited",
    tools: ["EJS", "JavaScript", "Express.js", "PostgreSQL"],
    image: proj4,
    repoLink: "https://github.com/tianiixd/Family-Travel-Tracker.git",
  },
  {
    id: 5,
    title: "FlexPOS",
    description: "A POS system for small retail shops",
    tools: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Vite",
      "REST API",
    ],
    image: proj5,
    repoLink: "https://github.com/tianiixd/FlexPOS.git",
  },
  {
    id: 6,
    title: "PokeSearch",
    description: "Simple project that you can search for pokemons.",
    tools: ["React", "TypeScript", "Express.js", "Tailwind CSS", "Vite"],
    image: proj6,
    repoLink: "https://github.com/tianiixd/pokesearch.git",
  },
  {
    id: 7,
    title: "Mhy Ecommerce",
    description: "An ecommerce project to buy and checkout a product",
    tools: [
      "React",
      "JavaScript",
      "Express.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Vite",
      "REST API",
    ],
    image: proj7,
    repoLink: "https://github.com/tianiixd/MhY-ecommerce.git",
  },
  {
    id: 8,
    title: "Chatbot",
    description: "A small data chatbot for practice and learning only.",
    tools: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    image: proj8,
    repoLink: "https://github.com/tianiixd/ChatBot.git",
  },
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript ",
    "TypeScript",
    "React",
    "Tailwind CSS",
  ],
  backend: ["Node.js", "Express.js", "RESTful APIs", "Prisma"],
  database: ["PostgreSQL", "MySQL", "SQL Server Express", "MongoDB"],
  devOpsAndTools: ["Git", "Github", "Vite", "Docker", "Kubernetes", "Postman"],
};

export const certificates = [
  {
    id: 1,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy (Dr. Angela Yu)",
    date: "17 Dec 2026",
    description: "Comprehensive bootcamp covering full-stack web development.",

    image: cert1,
  },
  {
    id: 2,
    title: "React 19",
    issuer: "Educative, Inc.",
    date: "19 Mar 2026",
    description: "Completed coursework focusing on React 19.",

    image: cert2,
  },
  {
    id: 3,
    title: "Github Foundations",
    issuer: "DataCamp",
    date: "01 Apr 2026",
    description:
      "Statement of accomplishment regarding github from introduction to advance level.",

    image: cert3,
  },
  {
    id: 4,
    title: "Containerization, Docker & Kubernetes",
    issuer: "DataCamp",
    date: "23 Mar 2026",
    description:
      "Statement of accomplishment regarding Containerization and Virtualization, Docker and Kubernetes in DataCamp.",

    image: cert4,
  },
  {
    id: 5,
    title: "Introduction to AI Agents",
    issuer: "DataCamp",
    date: "23 Feb 2026",
    description: "Completed coursework exploring AI agents.",

    image: cert5,
  },
  {
    id: 6,
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy & Python Institute",
    date: "13 Feb 2026",
    description: "Completed foundational coursework in Python programming.",

    image: cert6,
  },
];
