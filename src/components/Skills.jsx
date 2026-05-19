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
} from "react-icons/si";
import { skills } from "../data";

const getSkillIcon = (skillName) => {
  const lowerSkill = skillName.toLowerCase();
  if (lowerSkill.includes("react"))
    return (
      <FaReact className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("express"))
    return (
      <span className="w-5 h-5 flex items-center justify-center font-bold text-[10px] border-2 border-gray-500 rounded-full group-hover:border-brand group-hover:text-brand text-gray-500 transition-colors">
        ex
      </span>
    );
  if (lowerSkill.includes("node"))
    return (
      <FaNodeJs className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("postgres"))
    return (
      <SiPostgresql className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("mysql"))
    return (
      <SiMysql className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("sql server"))
    return (
      <FaDatabase className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("api"))
    return (
      <Braces className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("mongo"))
    return (
      <SiMongodb className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("tailwind"))
    return (
      <SiTailwindcss className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("vite"))
    return (
      <SiVite className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("typescript"))
    return (
      <SiTypescript className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("javascript"))
    return (
      <FaJsSquare className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("html"))
    return (
      <FaHtml5 className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("css"))
    return (
      <FaCss3Alt className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("github"))
    return (
      <FaGithub className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("git"))
    return (
      <FaGitAlt className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
    );
  if (lowerSkill.includes("docker"))
    return (
      <FaDocker className="w-5 h-5 text-gray-500 group-hover:text-brand transition-colors" />
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
      className="min-h-screen w-full max-w-7xl mx-auto px-6 md:px-12 py-20 bg-gray-50 flex flex-col justify-center"
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
          className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
        >
          Tech Stack & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
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
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand/10 rounded-lg">
                {getIcon(category)}
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 capitalize">
                {getCategoryName(category)}
              </h3>
            </div>

            <ul className="space-y-4">
              {items.map((skill, index) => (
                <li key={index} className="flex items-center gap-3">
                  {getSkillIcon(skill)}
                  <span className="text-gray-600 font-medium">{skill}</span>
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
