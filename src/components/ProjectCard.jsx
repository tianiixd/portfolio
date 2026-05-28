import { useState } from "react";
import { ZoomIn, ArrowRight, X, AppWindow, Braces } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaCode,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiTailwindcss,
  SiPostgresql,
  SiVite,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

const getToolIcon = (toolName) => {
  const lowerTool = toolName.toLowerCase();
  if (lowerTool.includes("react"))
    return <FaReact className="mr-2 w-5 h-5 text-[#61DAFB]" />;
  if (lowerTool.includes("c#"))
    return <TbBrandCSharp className="mr-2 w-5 h-5 text-[#512BD4]" />;
  if (lowerTool === "express.js" || lowerTool === "express")
    return (
      <span className="mr-2 flex shrink-0 items-center justify-center font-bold text-[10px] border border-black dark:border-white rounded-full w-5 h-5 leading-none text-black dark:text-white">
        ex
      </span>
    );
  if (lowerTool.includes("node"))
    return <FaNodeJs className="mr-2 w-5 h-5 text-[#339933]" />;
  if (lowerTool.includes("sql server express"))
    return <FaDatabase className="mr-2 w-5 h-5 text-[#CC292B]" />;
  if (lowerTool.includes("postgres"))
    return <SiPostgresql className="mr-2 w-5 h-5 text-[#336791]" />;
  if (lowerTool.includes("tailwind"))
    return <SiTailwindcss className="mr-2 w-5 h-5 text-[#06B6D4]" />;
  if (lowerTool.includes("vite"))
    return <SiVite className="mr-2 w-5 h-5 text-[#646CFF]" />;
  if (lowerTool.includes("mongo"))
    return <SiMongodb className="mr-2 w-5 h-5 text-[#47A248]" />;
  if (lowerTool.includes("typescript"))
    return <SiTypescript className="mr-2 w-5 h-5 text-[#3178C6]" />;
  if (lowerTool.includes("javascript"))
    return <FaJsSquare className="mr-2 w-5 h-5 text-[#F7DF1E]" />;
  if (lowerTool.includes("ejs"))
    return <FaCode className="mr-2 w-5 h-5 text-[#B4CA65]" />;
  if (lowerTool.includes("html"))
    return <FaHtml5 className="mr-2 w-5 h-5 text-[#E34F26]" />;
  if (lowerTool.includes("css"))
    return <FaCss3Alt className="mr-2 w-5 h-5 text-[#1572B6]" />;
  if (lowerTool.includes("sql"))
    return <FaDatabase className="mr-2 w-5 h-5 text-[#CC292B]" />;
  if (lowerTool.includes("windows"))
    return <AppWindow className="mr-2 w-5 h-5 text-[#0078D6]" />;
  if (lowerTool.includes("api"))
    return <Braces className="mr-2 w-5 h-5 text-gray-600 dark:text-gray-400" />;
  return null;
};

const ProjectCard = ({ project }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="h-full bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md dark:shadow-none transition-all duration-300 flex flex-col">
        <div
          className="aspect-video w-full overflow-hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 cursor-pointer relative group transition-colors"
          onClick={() => setIsPreviewOpen(true)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-14 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-6 line-clamp-3 transition-colors">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-3 rounded-xl text-sm font-semibold bg-brand/10 dark:bg-brand/20 text-brand-hover dark:text-brand flex items-center transition-colors"
              >
                {getToolIcon(tool)}
                {tool}
              </span>
            ))}
          </div>

          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-brand hover:text-brand-hover transition-colors mt-auto"
          >
            View Repository
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-2 sm:p-4 md:p-8 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 sm:px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm z-10 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 truncate transition-colors">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-brand shrink-0" />
                  <span className="shrink-0">Preview:</span>
                  <span className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 font-medium font-sans truncate transition-colors">
                    {project.title}
                  </span>
                </h3>
              </div>
              <button
                className="text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full p-2 cursor-pointer shadow-sm border border-gray-200 dark:border-gray-700 ease-out duration-200 shrink-0 transition-colors"
                onClick={() => setIsPreviewOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 sm:p-4 md:p-6 bg-gray-50/50 dark:bg-gray-900/50 flex-1 overflow-hidden flex items-center justify-center relative transition-colors">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 object-contain max-h-[60vh] sm:max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
