import { motion } from "framer-motion";
import { Monitor, Server, Database, Wrench, Braces } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiVite,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiPrisma,
  SiPostman,
  SiKubernetes,
} from "react-icons/si";
import { skills } from "../data";

const getSkillIcon = (skillName) => {
  const lowerSkill = skillName.toLowerCase();
  if (lowerSkill.includes("react"))
    return (
      <FaReact className="w-5 h-5 text-[#61DAFB]" />
    );
  if (lowerSkill === "express.js" || lowerSkill === "express")
    return (
      <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] border-2 border-black dark:border-white rounded-full text-black dark:text-white transition-colors">
        ex
      </span>
    );
  if (lowerSkill.includes("node"))
    return (
      <FaNodeJs className="w-5 h-5 text-[#339933]" />
    );
  if (lowerSkill.includes("postgres"))
    return (
      <SiPostgresql className="w-5 h-5 text-[#336791]" />
    );
  if (lowerSkill.includes("mysql"))
    return (
      <SiMysql className="w-5 h-5 text-[#4479A1]" />
    );
  if (lowerSkill.includes("sql server"))
    return (
      <FaDatabase className="w-5 h-5 text-[#CC292B]" />
    );
  if (lowerSkill.includes("api"))
    return (
      <Braces className="w-5 h-5 text-gray-500" />
    );
  if (lowerSkill.includes("mongo"))
    return (
      <SiMongodb className="w-5 h-5 text-[#47A248]" />
    );
  if (lowerSkill.includes("tailwind"))
    return (
      <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />
    );
  if (lowerSkill.includes("vite"))
    return (
      <SiVite className="w-5 h-5 text-[#646CFF]" />
    );
  if (lowerSkill.includes("typescript"))
    return (
      <SiTypescript className="w-5 h-5 text-[#3178C6]" />
    );
  if (lowerSkill.includes("javascript"))
    return (
      <FaJsSquare className="w-5 h-5 text-[#F7DF1E]" />
    );
  if (lowerSkill.includes("html"))
    return (
      <FaHtml5 className="w-5 h-5 text-[#E34F26]" />
    );
  if (lowerSkill.includes("css"))
    return (
      <FaCss3Alt className="w-5 h-5 text-[#1572B6]" />
    );
  if (lowerSkill.includes("github"))
    return (
      <FaGithub className="w-5 h-5 text-[#181717]" />
    );
  if (lowerSkill.includes("git"))
    return (
      <FaGitAlt className="w-5 h-5 text-[#F05032]" />
    );
  if (lowerSkill.includes("docker"))
    return (
      <FaDocker className="w-5 h-5 text-[#2496ED]" />
    );
  if (lowerSkill.includes("kubernetes"))
    return (
      <SiKubernetes className="w-5 h-5 text-[#326CE5]" />
    );
  if (lowerSkill.includes("prisma"))
    return (
      <SiPrisma className="w-5 h-5 text-[#2D3748] dark:text-white" />
    );
  if (lowerSkill.includes("postman"))
    return (
      <SiPostman className="w-5 h-5 text-[#FF6C37]" />
    );

  return <div className="w-1.5 h-1.5 rounded-full bg-brand/50"></div>;
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getIcon = (category) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return <Monitor className="w-5 h-5 text-brand" />;
      case "backend":
        return <Server className="w-5 h-5 text-brand" />;
      case "database":
        return <Database className="w-5 h-5 text-brand" />;
      case "devopsandtools":
        return <Wrench className="w-5 h-5 text-brand" />;
      default:
        return null;
    }
  };

  const getCategoryName = (category) => {
    if (category.toLowerCase() === "devopsandtools") return "DevOps & Tools";
    return category;
  };

  return (
    <section
      id="skills"
      className="min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center transition-colors"
    >
      <div className="mb-16 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-brand font-mono font-bold tracking-widest text-sm mb-4 uppercase"
        >
          02. Skills
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight transition-colors"
        >
          Tech Stack & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors"
        >
          Technologies I work with daily to build fast, scalable, and
          maintainable applications.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {Object.entries(skills).map(([category, items]) => (
          <motion.div
            key={category}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 rounded-lg">
                {getIcon(category)}
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white capitalize transition-colors">
                {getCategoryName(category)}
              </h3>
            </div>

            <ul className="space-y-4">
              {items.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  {getSkillIcon(skill)}
                  <span className="text-gray-600 dark:text-gray-300 font-medium transition-colors">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
