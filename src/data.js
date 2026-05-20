import proj1 from "./assets/Project 1 Computerized Sales & Inventory csharp Windows Form.png";
import proj2 from "./assets/Project 2 Blog Post using EJS, REST API, expressjs.png";
import proj3 from "./assets/Project 3 Book Notes using REST API, Expressjs and EJS.png";
import proj4 from "./assets/Project 4 Family Travel Tracker.png";
import proj5 from "./assets/Project 5 FlexPOS.png";
import proj6 from "./assets/Project 6 pokesearch.png";
import proj7 from "./assets/Project 7 MhY Ecommerce practice using React, expressjs, postgresql, REST API.png";

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
    ],
    image: proj7,
    repoLink: "https://github.com/tianiixd/MhY-ecommerce.git",
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
  backend: ["Node.js", "Express.js", "RESTful APIs"],
  database: ["PostgreSQL", "MySQL", "SQL Server Express", "MongoDB"],
  devOpsAndTools: ["Git", "Github", "Vite", "Docker"],
};
