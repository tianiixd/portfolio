import { useState } from "react";
import { ZoomIn, ArrowRight, X, AppWindow } from "lucide-react";
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
    return <FaReact className="mr-1.5 text-sm text-[#61DAFB]" />;
  if (lowerTool.includes("c#"))
    return <TbBrandCSharp className="mr-1.5 text-sm text-[#512BD4]" />;
  if (lowerTool === "express.js" || lowerTool === "express")
    return (
      <span className="mr-1.5 flex items-center justify-center font-bold text-[9px] border border-black rounded-full w-[14px] h-[14px] leading-none text-black">
        ex
      </span>
    );
  if (lowerTool.includes("node"))
    return <FaNodeJs className="mr-1.5 text-sm text-[#339933]" />;
  if (lowerTool.includes("sql server express"))
    return <FaDatabase className="mr-1.5 w-4 h-4 text-[#CC292B]" />;
  if (lowerTool.includes("postgres"))
    return <SiPostgresql className="mr-1.5 text-sm text-[#336791]" />;
  if (lowerTool.includes("tailwind"))
    return <SiTailwindcss className="mr-1.5 text-sm text-[#06B6D4]" />;
  if (lowerTool.includes("vite"))
    return <SiVite className="mr-1.5 text-sm text-[#646CFF]" />;
  if (lowerTool.includes("mongo"))
    return <SiMongodb className="mr-1.5 text-sm text-[#47A248]" />;
  if (lowerTool.includes("typescript"))
    return <SiTypescript className="mr-1.5 text-sm text-[#3178C6]" />;
  if (lowerTool.includes("javascript"))
    return <FaJsSquare className="mr-1.5 text-sm text-[#F7DF1E]" />;
  if (lowerTool.includes("ejs"))
    return <FaCode className="mr-1.5 text-sm text-[#B4CA65]" />;
  if (lowerTool.includes("html"))
    return <FaHtml5 className="mr-1.5 text-sm text-[#E34F26]" />;
  if (lowerTool.includes("css"))
    return <FaCss3Alt className="mr-1.5 text-sm text-[#1572B6]" />;
  if (lowerTool.includes("sql"))
    return <FaDatabase className="mr-1.5 text-sm text-[#CC292B]" />;
  if (lowerTool.includes("windows"))
    return <AppWindow className="mr-1.5 w-[14px] h-[14px] text-[#0078D6]" />;
  return null;
};

const ProjectCard = ({ project }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
        <div
          className="aspect-video w-full overflow-hidden bg-gray-50 border-b border-gray-200 cursor-pointer relative group"
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
          <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-6 grow line-clamp-3">
            {project.description}
          </p>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-xs font-semibold bg-brand/10 text-brand-hover flex items-center"
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
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-8 backdrop-blur-md"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-white/80 backdrop-blur-sm z-10">
              <div>
                <h3 className="font-heading text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <ZoomIn className="w-6 h-6 text-brand" />
                  Preview:{" "}
                  <span className="text-xl text-gray-600 font-medium font-sans">
                    {project.title}
                  </span>
                </h3>
              </div>
              <button
                className="text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full p-2 cursor-pointer shadow-sm border border-gray-200 ease-out duration-200"
                onClick={() => setIsPreviewOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 bg-gray-50/50 flex-1 overflow-hidden flex items-center justify-center relative">
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full rounded-xl shadow-lg border border-gray-200/50 object-contain max-h-[75vh]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
